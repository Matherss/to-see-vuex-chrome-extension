
if(window.$nuxt && window.$nuxt.$store && window.$nuxt.$store.state) {
  injectPopup();
  
  Object.keys(window.$nuxt.$store.state).forEach(key => {
    injectButton(key)
  })
} else {
  removePopup();
}

function injectPopup() {
  var body = document.body;
  var popup = document.createElement('div');
  var popupContent = document.createElement('div');
  var closeBtn = document.createElement('button');
  closeBtn.classList.add('tsvce-close');
  closeBtn.onclick = (e) => {
    removePopup();
  }
  closeBtn.innerText = 'close';

  popup.setAttribute('id', 'tsvce-popup')
  popupContent.setAttribute('id', 'tsvce-popup__content')
  popup.classList.add('tsvce-popup')
  popupContent.classList.add('tsvce-popup__content')
  popupContent.appendChild(closeBtn);
  popup.appendChild(popupContent);
  body.appendChild(popup);
}

function removePopup() {
  var script = document.getElementById('tsvce');
  var popup = document.getElementById('tsvce-popup')
  if(script) {
    script.remove();
  }
  if(popup) {
    popup.remove();
  }
}

function injectButton(key) {
  var body = document.getElementById('tsvce-popup__content');
  var button = document.createElement('button');
  button.innerText = 'Copy ' + key;
  button.classList.add('tsvce-button')
  button.onclick = (e) => { 
    e.preventDefault();
    window.navigator.clipboard.writeText(JSON.stringify(window.$nuxt.$store.state[key]))
    removePopup();
  }
  body.appendChild(button);
}