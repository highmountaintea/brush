"use strict";

function generateId() {
  return ('b' + Math.random()).replace('.', '');
}

function injectSheetToHeader(content, id) {
  var style = document.createElement('style');
  if (id != null) style.id = id;
  style.type = 'text/css';
  style.innerHTML = content;
  document.getElementsByTagName('head')[0].appendChild(style);
}

function removeSheet(id) {
  var node = document.getElementById(id);
  node.remove();
}

function selectorsToString(selectors) {
  if (selectors == null) return '';
  if (typeof selectors === 'string') return selectors;
  if (selectors instanceof Array) {
    var arrayResult = [];
    for (var i = 0; i < selectors.length; i++) {
      arrayResult.push(selectorsToString(selectors[i]));
    }
    return arrayResult.join(',');
  }
  // assume an object
  var objResult = [];
  var spacer = selectors.spacer == null ? ' ' : selectors.spacer;
  var prefix = selectors.prefix == null ? '' : '' + selectors.prefix + spacer;
  var postfix = selectors.postfix == null ? '' : '' + spacer + selectors.postfix;
  for (var j = 0; j < selectors.selectors.length; j++) {
    var val = selectorsToString(selectors.selectors[j]);
    objResult.push(prefix + val + postfix);
  }
  return objResult.join(',');
}

function composeRule(selectors, css) {
  var selectorStr = selectorsToString(selectors);
  // console.log(selectorStr);
  return '' + selectorStr + ' {\n' + css + '\n}\n';
}

exports.generateId = generateId;
exports.injectSheetToHeader = injectSheetToHeader;
exports.removeSheet = removeSheet;
exports.selectorsToString = selectorsToString;
exports.composeRule = composeRule;
