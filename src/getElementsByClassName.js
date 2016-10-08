//

var getElementsByClassName = function(className) {
  var foundClasses = [];
  //Recursive case needs to pass a node and not classname, so nesting a function allows me to make a recursive call with a different input
  var searchNodes = function(node){
    var classNames =
    if( node.classLists === className){
      foundClasses.push(node);
    }
    for(var i = 0; i < node.childNodes.length; i++){
      searchNodes(node.childNodes[i]);
    }
  }
  searchNodes(document.body);
  return foundClasses;
};


var getElementsByClassName = function(className){
  //var passedNodes
  //className = className.split(' ') OR new var
  //var new function, takes in a node
    //Runs through
      //if node matches class name
        //save to passedNodes
    //for loop to iterate through all childNodes
      //call function on childNodes[i]
  //function on document.body
  //return passedNodes
}


/*
var searchNodes  = function(node){
    //Needs to match
    var nodeList   = node.classLists;
    var checkTicks = 0;
    //Compare this branch class to className
    //Parse class names
    for( var k = 0; k < args.length; k++ ){
      //Parse through node classLists to match
      for( var j = 0; j < nodeList.length; j++){
        if(args[k] === nodeList[j]){
          foundClasses.push(nodeList[j]);
          checkTicks++;
        }
      }
      //If matches, saves node / checkTick ++
    }
    if(checkTicks === args.length){
      return
    }
    //if checkTick === args.length
      //
    //Iterate childNodes
    for( var i = 0; i < node.childNodes.length; i++ ){
      //searchNodes on each childNode
      searchNodes(node.childNodes[i]);
    }
  }
*/