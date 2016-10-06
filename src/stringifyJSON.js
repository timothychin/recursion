
var stringifyJSON = function(obj) {
  var keyValuePairs = [];
//EXCEPTION CASE
  if(obj === null || typeof obj === "symbol"){
    return 'null';
  }
// !! ------ !! Possible area to fix prop issue
//RECURSIVE CASE - only needed if obj is an object or array

  if(Array.isArray(obj) === true){
    for(var i = 0; i < obj.length; i++){
      keyValuePairs.push(stringifyJSON(obj[i]));
    }
    return '[' + keyValuePairs.join(',') + ']';
  }

  if(typeof obj === 'object' && Array.isArray(obj) === false){
    for(var prop in obj){
      if(stringify(obj[prop]))
      if(stringifyJSON(prop) !== 'null'){
        keyValuePairs.push(stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]));
      }
    }
    return '{' + keyValuePairs.join(',') + '}';
  }

//BASE CASE
  return typeof obj === 'string' ? '"' + obj + '"' : obj.toString();
};


/* NOTES

- JSON does not allow you to stringify functions or undefined values, so you should skip those key/value pairs.
-

*/