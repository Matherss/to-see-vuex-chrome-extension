function injectScript(file_path, tag) {
  var popupEL = document.querySelector('#tsvce-popup');
  var scriptEL = document.querySelector('#tsvce');
  if(!popupEL && !scriptEL) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    script.setAttribute('id', 'tsvce');
    node.appendChild(script);
  } else {
    if(popupEL) {
      popupEL.remove();
    }
    if(scriptEL) {
      scriptEL.remove();
    }
    return;
  }
}
injectScript(chrome.runtime.getURL('main.js'), 'body');