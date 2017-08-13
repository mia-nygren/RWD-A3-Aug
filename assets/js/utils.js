
// Här har jag fixat så att vissa polyfills bara hämtas i IE. Så det inte blockerar renderingen för HTML i andra webbläsare. 
var addIEPollyfills = function () {
  console.log('adding promise');
  createScriptTag('https://cdn.polyfill.io/v2/polyfill.js?features=String.prototype.includes,Array.prototype.find,Promise')
}
// Detecting IE  - ispirerad av:  https://codepen.io/gapcode/pen/vEJNZN
// Get IE or Edge browser version
var version = detectIE()

if (version === true) { // It is internet explorer
  // Add polyfill if IE
  addIEPollyfills()

} else {
  console.log('not IE' + window.navigator.userAgent);
}
/**
 * detect IE
 * returns true for IE, and false if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ') // IE 10 or older 
  var trident = ua.indexOf('Trident/') // IE 11
  var edge = ua.indexOf('Edge/') // Edge

  if (msie > 0 || trident > 0 || edge > 0) {
    return true;
  }
  // other browser
  return false;
}

function pictureElementisSupported() { // https://stackoverflow.com/a/34743997/4178864
  let pic = !!window.HTMLPictureElement
  return pic
}

// ONLY GET polyfill for picture element if it is not supported
if (!pictureElementisSupported()) {
  document.createElement("picture")
  createScriptTag('~/plugins/picturefill.min.js')
}

function createScriptTag(src) {
  let scriptTag = document.createElement("script")
  scriptTag.setAttribute("type", "text/javascript")
  scriptTag.setAttribute('src', src)
  document.getElementsByTagName("head")[0].appendChild(scriptTag)
}