"use strict";

function generateId() {
  return ('b' + Math.random()).replace('.', '');
}

function injectCss(selectors, css) {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '' + selectors + ' {\n' + css + '\n}\n';
  document.getElementsByTagName('head')[0].appendChild(style);
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
  var spacer = selectors.spacer ? ' ' : '';
  var prefix = selectors.prefix == null ? '' : '' + selectors.prefix + spacer;
  var postfix = selectors.postfix == null ? '' : '' + spacer + selectors.postfix;
  for (var j = 0; j < selectors.selectors.length; j++) {
    var val = selectorsToString(selectors.selectors[i]);
    objResult.push(prefix + val + postfix);
  }
  return objResult.join(',');
}

function brush(selectors, css) {
  if (arguments.length == 0) return generateId();
  injectCss(selectorsToString(selectors), css);
}

module.exports = brush;
