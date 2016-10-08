var stringifyJSON = function(obj) {
  var pairs = [];
  if( Array.isArray(obj) ){
    for(  var i = 0; i < obj.length; i++  ){
      pairs.push( stringifyJSON(obj[i]) );
    }
    return '[' + pairs.join(',') + ']';
  }
  if( typeof obj === 'object'  &&  obj ){
    for(  var prop in obj  ){
      if( obj[prop] !== undefined && typeof obj[prop] !== 'function' ){
        pairs.push( stringifyJSON(prop) + ':' + stringifyJSON(obj[prop])   );
      }
    }
    return '{' + pairs.join(',') + '}';
  }
  return typeof obj === 'string' ? '"' + obj + '"' : ''+obj;
};