/*
 * Test for compoments
 */

(function () {
  'use strict';

  var HelloWorld = function () {};

  /**
   * just say hello
   * @param {String} name
   */
  HelloWorld.prototype.sayHello = function (name) {
    console.log('Hello %s!', name);
  };


  /**
   * just say hello world and show that it' works fine
   */
  HelloWorld.prototype.sayHelloWorld = function () {
    console.log('Hello World!');
  };

  module.exports = new HelloWorld();

})();

