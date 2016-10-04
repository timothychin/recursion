
var stringifyJSON = function(obj) {
  //new var StringArray to store object/array cases
//EXCEPTION CASE
  //Check for undefined, null, symbol
    //Return 'null'
// !! ------ !! Possible area to fix prop issue
//RECURSIVE CASE - only needed if obj is an object or array
  //Check for Array
    //For loop through array
      //Push stringify(array[i]) to StringArray
    //return StringArray joined with commas and opened/closed with square brackets

  //Check for object + !null
    //for in loop on obj
      //if stringify(prop) !null
        //push stringify(prop) + ":" + stringify(value) to StringArray
    //return StringArray with commas and opened/closed with curly fries

//BASE CASE
  //Return primitive values as string or string with extra quotations
};
