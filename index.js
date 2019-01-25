"use strict";

var utils = require('./utils');
var StyleSheet = require('./sheet');

function publish(selectors, css) {
  var sheet = utils.composeRule(selectors, css);
  utils.injectSheetToHeader(sheet);
}

function newSheet() {
  return new StyleSheet();
}

function brush(selectors, css) {
  if (arguments.length == 0) return utils.generateId();
  publish(selectors, css);
}

brush.new = utils.generateId;
brush.gen = utils.generateId;
brush.publish = publish;
brush.newSheet = newSheet;

module.exports = brush;
