!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,v=c||s||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return v.Date.now()};function y(e,t,n){var r,o,a,u,f,l,c=0,s=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(O,t),s?y(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function O(){var e=p();if(S(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return v?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,d&&r?y(e):(r=o=void 0,u)}function w(){var e=p(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(v)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=T(t)||0,b(n)&&(s=!!n.leading,a=(v="maxWait"in n)?m(T(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=u.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j,S,O=document.querySelector("form"),h=O.querySelector("input"),w=O.querySelector("textarea"),x="feedback-form-state",N={email:"",message:""};j=localStorage.getItem(x),S=JSON.parse(j),j&&(h.value=S.email,w.value=S.message),O.addEventListener("input",n((function(e){if(e.currentTarget){var t=e.currentTarget.elements,n=t.email,r=t.message;N.email=n.value,N.message=r.value}localStorage.setItem(x,JSON.stringify(N))}),500)),O.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.message;""!==n.value&&""!==r.value?(N.email=n.value,N.message=r.value,console.log(N),e.currentTarget.reset(),localStorage.removeItem(x)):alert("Заповніть обидва поля, будь ласка)")}))}();
//# sourceMappingURL=03-feedback.356e6565.js.map