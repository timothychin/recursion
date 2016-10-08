var getElementsByClassName = function(className) {
  var foundClasses = [];
  var searchNodes = function(node){
    if(_.contains(node.classList,className)){
      foundClasses.push(node)
    }
    for(var i = 0; i < node.childNodes.length; i++){
      searchNodes(node.childNodes[i]);
    }
  }
  searchNodes(document.body);
  return foundClasses;
};


/*
Returns undefined, although code logic looks similar to contains

var classNames = node.classLists;
    for(var i = 0; i < classNames.length; i++){
      if( classNames[i] === className){
        foundClasses.push(node);
      }

    }
*/

//console.log( document.body.classList )

//  '<div class="otherClassName targetClassName"></div>',
