const YT_URL = "https://www.youtube.com/";

const BLOCK_URLS = [
  "*://*.doubleclick.net/*",
  "*://*.googlesyndication.com/*",
  "*://*.googleadservices.com/*",
  "*://*.googletagservices.com/*",
  "*://pagead2.googlesyndication.com/*"
];

const BLOCK_TYPES = [
  "script",
  "image",
  "sub_frame",
  "xmlhttprequest",
  "ping"
];

browser.browserAction.onClicked.addListener(() => {
  browser.windows.create({
    url: YT_URL,
    type: "popup",
    focused: true,
    width: 1200,
    height: 800
  });
});

browser.webRequest.onBeforeRequest.addListener(
  () => ({ cancel: true }),
  { urls: BLOCK_URLS, types: BLOCK_TYPES },
  ["blocking"]
);
