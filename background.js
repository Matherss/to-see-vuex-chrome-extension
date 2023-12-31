chrome.runtime.onInstalled.addListener( () => {
  chrome.contextMenus.create({
    id: 'Copy Vuex',
    title: "Copy Vuex"
  });
});

chrome.contextMenus.onClicked.addListener( ( info, tab ) => {
  if ( 'Copy Vuex' === info.menuItemId ) {
    seeVuex( info, tab );
  }
} );

const seeVuex = async (info,tab) => {
  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: [ "styles.css" ]
  })
  .then(() => console.log('styles injected'));
  chrome.scripting
  .executeScript({
    target : {tabId : tab.id, allFrames : true},
    files : [ "script.js" ],
  })
  .then(() => console.log("script injected"));
};