var stringifyJSON = function(obj) {
  var pairs = [];
  //RECURSIVE CASE - only needed if obj is an object or array
  if( Array.isArray(obj) ){
    for(  var i = 0; i < obj.length; i++  ){
      pairs.push( stringifyJSON(obj[i]) );
    }
    return '[' + pairs.join(',') + ']';
  }
  if( typeof obj === 'object'  &&  obj ){
    for(  var prop in obj  ){
      if( obj[prop] === undefined || typeof obj[prop] === 'function' ){
        continue;
      }
      pairs.push( stringifyJSON(prop) + ':' + stringifyJSON(obj[prop])   );
    }
    return '{' + pairs.join(',') + '}';
  }
  //BASE CASE
  return typeof obj === 'string' ? '"' + obj + '"' : ''+obj;
};