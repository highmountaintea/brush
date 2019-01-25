function generateId() {
  return ('b' + Math.random()).replace('.', '');
}

function injectCss(selectors, css) {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '' + selectors + ' {\n' + css + '\n}\n';
  document.getElementsByTagName('head')[0].appendChild(style);
}

function brush(selectors, css) {
  if (selectors == null) return generateId();
  injectCss(selectors, css);
}

module.exports = brush;
