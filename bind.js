/////////////////////////////////////////////////////////////////////////////////
  /*
  Include this js in your html file and see the results in browser console
  Ref - https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind
  */
/////////////////////////////////////////////////////////////////////////////////

var x = 200;

/***********************************************************/
console.log('-----FIRST-----'); // 30
var objectLiteralFirst = {
  x : 30,
  internal : function() {
    return this.x;
  }
}

console.log(objectLiteralFirst.internal()); // 30
var getXObjFirst = objectLiteralFirst.internal;
console.log(getXObjFirst()); // 200
var getXBoundObjFirst = getXObjFirst.bind(objectLiteralFirst);
console.log(getXBoundObjFirst()); // 30
/***********************************************************/


/***********************************************************/
console.log('-----SECOND-----'); // 30
var objectLiteralSecond = {
  x : 35,
  internal : function() {
    return x;
  }
}
console.log(objectLiteralSecond.internal()); // 200
var getXObjSecond = objectLiteralSecond.internal;
console.log(getXObjSecond());
var getXBoundObjSecond = getXObjSecond.bind(objectLiteralSecond);
console.log(getXBoundObjSecond()); // 35
/***********************************************************/


/***********************************************************/
console.log('-----THIRD-----'); // 30
var objectLiteralThird = {
  x : 40,
  internal : function() {
    return x + this.x;
  }
}
console.log(objectLiteralThird.internal()); // 240
var getXObjThird = objectLiteralThird.internal;
console.log(getXObjThird());
var getXBoundObjThird = getXObjThird.bind(objectLiteralThird);
console.log(getXBoundObjThird()); // 240
/***********************************************************/