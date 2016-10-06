
var stringifyJSON = function(obj) {
  var keyValuePairs = [];
//EXCEPTION CASE
  if(obj === undefined || obj === null || typeof obj === "symbol"){
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
      if(stringifyJSON(prop) !== 'null' && typeof stringifyJSON(obj[prop]) !== 'function' && stringifyJSON(obj[prop]) != undefined){
        keyValuePairs.push(stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]));
      }
    }
    return '{' + keyValuePairs.join(',') + '}';
  }

//BASE CASE
  return typeof obj === 'string' ? '"' + obj + '"' : obj.toString();
};


/*NOTES/STRAY THOUGHTS

-NEEDS to assess which when a key:value pair in an object should be omitted
-exception case returns nothing, for in loop checks  if stringify(prop) exists, ISSUE value needs to exist and return null,
-undefined, functions, and symbols are omitted in an object, censored to null in an array


*/