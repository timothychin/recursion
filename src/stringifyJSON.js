var stringifyJSON = function(obj) {
  var keyValuePairs = [];
  //EXCEPTION CASE
  if(typeof obj === "symbol"  ||  obj === undefined  ||  typeof obj === 'function'){
    return;
  }
  //RECURSIVE CASE - only needed if obj is an object or array
  if(Array.isArray(obj) === true){
    for(var i = 0; i < obj.length; i++){
      keyValuePairs.push(stringifyJSON(obj[i]));
    }
    return '[' + keyValuePairs.join(',') + ']';
  }
  if(typeof obj === 'object'  &&  Array.isArray(obj) === false  &&  obj !== null){
    for(var prop in obj){
      if(stringifyJSON(obj[prop]) !== undefined){
        keyValuePairs.push(stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]));
      }
    }
    return '{' + keyValuePairs.join(',') + '}';
  }
  //BASE CASE
  return typeof obj === 'string' ? '"' + obj + '"' : String(obj);
};