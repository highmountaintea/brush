"use strict";

var utils = require('./utils');

function StyleSheet() {
  this.id = utils.generateId();
  this.rules = [];
  this.published = false;
}

function addRule(selectors, css) {
  if (this.published == true) throw new Error('sheet is already published, so it cannot be modified'); 
  var rule = utils.composeRule(selectors, css);
  this.rules.push(rule);
}

function publish() {
  if (this.published == true) throw new Error('sheet is published, so it cannot be published again'); 
  this.published = true;
  var sheet = this.rules.join('\n');
  utils.injectSheetToHeader(sheet, this.id);
}

function unpublish() {
  utils.removeSheet(this.id);
  this.published = false;
}

StyleSheet.prototype.new = utils.generateId;
StyleSheet.prototype.gen = utils.generateId;
StyleSheet.prototype.add = addRule;
StyleSheet.prototype.publish = publish;
StyleSheet.prototype.unpublish = unpublish;

module.exports = StyleSheet;
