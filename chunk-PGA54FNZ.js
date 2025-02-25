function y(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function u(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function o(t,...e){if(!u(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function l(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function d(t,e){o(t);let n=e.outputLen;if(t.length<n)throw new Error("digestInto() expects output buffer of length at least "+n)}var b=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),h=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),m=(t,e)=>t<<32-e|t>>>e;var A=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,s=t=>t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255;function L(t){for(let e=0;e<t.length;e++)t[e]=s(t[e])}var p=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function E(t){o(t);let e="";for(let n=0;n<t.length;n++)e+=p[t[n]];return e}function a(t){if(typeof t!="string")throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array(new TextEncoder().encode(t))}function f(t){return typeof t=="string"&&(t=a(t)),o(t),t}var i=class{clone(){return this._cloneInto()}};function B(t){let e=r=>t().update(f(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function U(t){let e=(r,c)=>t(c).update(f(r)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=r=>t(r),e}export{y as a,o as b,l as c,d,b as e,h as f,m as g,A as h,L as i,E as j,f as k,i as l,B as m,U as n};
