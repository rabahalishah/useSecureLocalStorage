import{useState as e,useEffect as t}from"react";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var i={},o={},a={exports:{}};var s,c={exports:{}};function u(){return s||(s=1,c.exports=(e=e||function(e,t){var n;if("undefined"!=typeof window&&window.crypto&&(n=window.crypto),"undefined"!=typeof self&&self.crypto&&(n=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(n=globalThis.crypto),!n&&"undefined"!=typeof window&&window.msCrypto&&(n=window.msCrypto),!n&&void 0!==r&&r.crypto&&(n=r.crypto),!n)try{n=require("crypto")}catch(e){}var i=function(){if(n){if("function"==typeof n.getRandomValues)try{return n.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof n.randomBytes)try{return n.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")},o=Object.create||function(){function e(){}return function(t){var r;return e.prototype=t,r=new e,e.prototype=null,r}}(),a={},s=a.lib={},c=s.Base={extend:function(e){var t=o(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},u=s.WordArray=c.extend({init:function(e,r){e=this.words=e||[],this.sigBytes=r!=t?r:4*e.length},toString:function(e){return(e||f).stringify(this)},concat:function(e){var t=this.words,r=e.words,n=this.sigBytes,i=e.sigBytes;if(this.clamp(),n%4)for(var o=0;o<i;o++){var a=r[o>>>2]>>>24-o%4*8&255;t[n+o>>>2]|=a<<24-(n+o)%4*8}else for(var s=0;s<i;s+=4)t[n+s>>>2]=r[s>>>2];return this.sigBytes+=i,this},clamp:function(){var t=this.words,r=this.sigBytes;t[r>>>2]&=4294967295<<32-r%4*8,t.length=e.ceil(r/4)},clone:function(){var e=c.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var t=[],r=0;r<e;r+=4)t.push(i());return new u.init(t,e)}}),l=a.enc={},f=l.Hex={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=[],i=0;i<r;i++){var o=t[i>>>2]>>>24-i%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n+=2)r[n>>>3]|=parseInt(e.substr(n,2),16)<<24-n%8*4;return new u.init(r,t/2)}},h=l.Latin1={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=[],i=0;i<r;i++){var o=t[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n++)r[n>>>2]|=(255&e.charCodeAt(n))<<24-n%4*8;return new u.init(r,t)}},d=l.Utf8={stringify:function(e){try{return decodeURIComponent(escape(h.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return h.parse(unescape(encodeURIComponent(e)))}},p=s.BufferedBlockAlgorithm=c.extend({reset:function(){this._data=new u.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=d.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var r,n=this._data,i=n.words,o=n.sigBytes,a=this.blockSize,s=o/(4*a),c=(s=t?e.ceil(s):e.max((0|s)-this._minBufferSize,0))*a,l=e.min(4*c,o);if(c){for(var f=0;f<c;f+=a)this._doProcessBlock(i,f);r=i.splice(0,c),n.sigBytes-=l}return new u.init(r,l)},clone:function(){var e=c.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});s.Hasher=p.extend({cfg:c.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){p.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,r){return new e.init(r).finalize(t)}},_createHmacHelper:function(e){return function(t,r){return new _.HMAC.init(e,r).finalize(t)}}});var _=a.algo={};return a}(Math),e)),c.exports;var e}var l;var f,h={exports:{}},d={exports:{}};function p(){return f?d.exports:(f=1,d.exports=(e=u(),function(){var t=e,r=t.lib.WordArray;function n(e,t,n){for(var i=[],o=0,a=0;a<t;a++)if(a%4){var s=n[e.charCodeAt(a-1)]<<a%4*2|n[e.charCodeAt(a)]>>>6-a%4*2;i[o>>>2]|=s<<24-o%4*8,o++}return r.create(i,o)}t.enc.Base64={stringify:function(e){var t=e.words,r=e.sigBytes,n=this._map;e.clamp();for(var i=[],o=0;o<r;o+=3)for(var a=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,s=0;s<4&&o+.75*s<r;s++)i.push(n.charAt(a>>>6*(3-s)&63));var c=n.charAt(64);if(c)for(;i.length%4;)i.push(c);return i.join("")},parse:function(e){var t=e.length,r=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var o=0;o<r.length;o++)i[r.charCodeAt(o)]=o}var a=r.charAt(64);if(a){var s=e.indexOf(a);-1!==s&&(t=s)}return n(e,t,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),e.enc.Base64));var e}var _,v={exports:{}};function y(){return _?v.exports:(_=1,v.exports=(e=u(),function(t){var r=e,n=r.lib,i=n.WordArray,o=n.Hasher,a=r.algo,s=[];!function(){for(var e=0;e<64;e++)s[e]=4294967296*t.abs(t.sin(e+1))|0}();var c=a.MD5=o.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var r=0;r<16;r++){var n=t+r,i=e[n];e[n]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var o=this._hash.words,a=e[t+0],c=e[t+1],d=e[t+2],p=e[t+3],_=e[t+4],v=e[t+5],y=e[t+6],g=e[t+7],E=e[t+8],S=e[t+9],A=e[t+10],C=e[t+11],R=e[t+12],m=e[t+13],O=e[t+14],w=e[t+15],b=o[0],I=o[1],T=o[2],x=o[3];b=u(b,I,T,x,a,7,s[0]),x=u(x,b,I,T,c,12,s[1]),T=u(T,x,b,I,d,17,s[2]),I=u(I,T,x,b,p,22,s[3]),b=u(b,I,T,x,_,7,s[4]),x=u(x,b,I,T,v,12,s[5]),T=u(T,x,b,I,y,17,s[6]),I=u(I,T,x,b,g,22,s[7]),b=u(b,I,T,x,E,7,s[8]),x=u(x,b,I,T,S,12,s[9]),T=u(T,x,b,I,A,17,s[10]),I=u(I,T,x,b,C,22,s[11]),b=u(b,I,T,x,R,7,s[12]),x=u(x,b,I,T,m,12,s[13]),T=u(T,x,b,I,O,17,s[14]),b=l(b,I=u(I,T,x,b,w,22,s[15]),T,x,c,5,s[16]),x=l(x,b,I,T,y,9,s[17]),T=l(T,x,b,I,C,14,s[18]),I=l(I,T,x,b,a,20,s[19]),b=l(b,I,T,x,v,5,s[20]),x=l(x,b,I,T,A,9,s[21]),T=l(T,x,b,I,w,14,s[22]),I=l(I,T,x,b,_,20,s[23]),b=l(b,I,T,x,S,5,s[24]),x=l(x,b,I,T,O,9,s[25]),T=l(T,x,b,I,p,14,s[26]),I=l(I,T,x,b,E,20,s[27]),b=l(b,I,T,x,m,5,s[28]),x=l(x,b,I,T,d,9,s[29]),T=l(T,x,b,I,g,14,s[30]),b=f(b,I=l(I,T,x,b,R,20,s[31]),T,x,v,4,s[32]),x=f(x,b,I,T,E,11,s[33]),T=f(T,x,b,I,C,16,s[34]),I=f(I,T,x,b,O,23,s[35]),b=f(b,I,T,x,c,4,s[36]),x=f(x,b,I,T,_,11,s[37]),T=f(T,x,b,I,g,16,s[38]),I=f(I,T,x,b,A,23,s[39]),b=f(b,I,T,x,m,4,s[40]),x=f(x,b,I,T,a,11,s[41]),T=f(T,x,b,I,p,16,s[42]),I=f(I,T,x,b,y,23,s[43]),b=f(b,I,T,x,S,4,s[44]),x=f(x,b,I,T,R,11,s[45]),T=f(T,x,b,I,w,16,s[46]),b=h(b,I=f(I,T,x,b,d,23,s[47]),T,x,a,6,s[48]),x=h(x,b,I,T,g,10,s[49]),T=h(T,x,b,I,O,15,s[50]),I=h(I,T,x,b,v,21,s[51]),b=h(b,I,T,x,R,6,s[52]),x=h(x,b,I,T,p,10,s[53]),T=h(T,x,b,I,A,15,s[54]),I=h(I,T,x,b,c,21,s[55]),b=h(b,I,T,x,E,6,s[56]),x=h(x,b,I,T,w,10,s[57]),T=h(T,x,b,I,y,15,s[58]),I=h(I,T,x,b,m,21,s[59]),b=h(b,I,T,x,_,6,s[60]),x=h(x,b,I,T,C,10,s[61]),T=h(T,x,b,I,d,15,s[62]),I=h(I,T,x,b,S,21,s[63]),o[0]=o[0]+b|0,o[1]=o[1]+I|0,o[2]=o[2]+T|0,o[3]=o[3]+x|0},_doFinalize:function(){var e=this._data,r=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;r[i>>>5]|=128<<24-i%32;var o=t.floor(n/4294967296),a=n;r[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[14+(i+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),e.sigBytes=4*(r.length+1),this._process();for(var s=this._hash,c=s.words,u=0;u<4;u++){var l=c[u];c[u]=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8)}return s},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});function u(e,t,r,n,i,o,a){var s=e+(t&r|~t&n)+i+a;return(s<<o|s>>>32-o)+t}function l(e,t,r,n,i,o,a){var s=e+(t&n|r&~n)+i+a;return(s<<o|s>>>32-o)+t}function f(e,t,r,n,i,o,a){var s=e+(t^r^n)+i+a;return(s<<o|s>>>32-o)+t}function h(e,t,r,n,i,o,a){var s=e+(r^(t|~n))+i+a;return(s<<o|s>>>32-o)+t}r.MD5=o._createHelper(c),r.HmacMD5=o._createHmacHelper(c)}(Math),e.MD5));var e}var g,E={exports:{}},S={exports:{}};function A(){return g?S.exports:(g=1,S.exports=(s=u(),t=(e=s).lib,r=t.WordArray,n=t.Hasher,i=e.algo,o=[],a=i.SHA1=n.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var r=this._hash.words,n=r[0],i=r[1],a=r[2],s=r[3],c=r[4],u=0;u<80;u++){if(u<16)o[u]=0|e[t+u];else{var l=o[u-3]^o[u-8]^o[u-14]^o[u-16];o[u]=l<<1|l>>>31}var f=(n<<5|n>>>27)+c+o[u];f+=u<20?1518500249+(i&a|~i&s):u<40?1859775393+(i^a^s):u<60?(i&a|i&s|a&s)-1894007588:(i^a^s)-899497514,c=s,s=a,a=i<<30|i>>>2,i=n,n=f}r[0]=r[0]+n|0,r[1]=r[1]+i|0,r[2]=r[2]+a|0,r[3]=r[3]+s|0,r[4]=r[4]+c|0},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,n=8*e.sigBytes;return t[n>>>5]|=128<<24-n%32,t[14+(n+64>>>9<<4)]=Math.floor(r/4294967296),t[15+(n+64>>>9<<4)]=r,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=n.clone.call(this);return e._hash=this._hash.clone(),e}}),e.SHA1=n._createHelper(a),e.HmacSHA1=n._createHmacHelper(a),s.SHA1));var e,t,r,n,i,o,a,s}var C,R={exports:{}};var m;function O(){return m?E.exports:(m=1,E.exports=function(e){return function(){var t=e,r=t.lib,n=r.Base,i=r.WordArray,o=t.algo,a=o.MD5,s=o.EvpKDF=n.extend({cfg:n.extend({keySize:4,hasher:a,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var r,n=this.cfg,o=n.hasher.create(),a=i.create(),s=a.words,c=n.keySize,u=n.iterations;s.length<c;){r&&o.update(r),r=o.update(e).finalize(t),o.reset();for(var l=1;l<u;l++)r=o.finalize(r),o.reset();a.concat(r)}return a.sigBytes=4*c,a}});t.EvpKDF=function(e,t,r){return s.create(r).compute(e,t)}}(),e.EvpKDF}(u(),A(),C||(C=1,R.exports=(e=u(),r=(t=e).lib.Base,n=t.enc.Utf8,void(t.algo.HMAC=r.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=n.parse(t));var r=e.blockSize,i=4*r;t.sigBytes>i&&(t=e.finalize(t)),t.clamp();for(var o=this._oKey=t.clone(),a=this._iKey=t.clone(),s=o.words,c=a.words,u=0;u<r;u++)s[u]^=1549556828,c[u]^=909522486;o.sigBytes=a.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,r=t.finalize(e);return t.reset(),t.finalize(this._oKey.clone().concat(r))}}))))));var e,t,r,n}var w,b={exports:{}};var I;function T(){return I?h.exports:(I=1,h.exports=function(e){return function(){var t=e,r=t.lib.BlockCipher,n=t.algo,i=[],o=[],a=[],s=[],c=[],u=[],l=[],f=[],h=[],d=[];!function(){for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;var r=0,n=0;for(t=0;t<256;t++){var p=n^n<<1^n<<2^n<<3^n<<4;p=p>>>8^255&p^99,i[r]=p,o[p]=r;var _=e[r],v=e[_],y=e[v],g=257*e[p]^16843008*p;a[r]=g<<24|g>>>8,s[r]=g<<16|g>>>16,c[r]=g<<8|g>>>24,u[r]=g,g=16843009*y^65537*v^257*_^16843008*r,l[p]=g<<24|g>>>8,f[p]=g<<16|g>>>16,h[p]=g<<8|g>>>24,d[p]=g,r?(r=_^e[e[e[y^_]]],n^=e[e[n]]):r=n=1}}();var p=[0,1,2,4,8,16,32,64,128,27,54],_=n.AES=r.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,t=e.words,r=e.sigBytes/4,n=4*((this._nRounds=r+6)+1),o=this._keySchedule=[],a=0;a<n;a++)a<r?o[a]=t[a]:(u=o[a-1],a%r?r>6&&a%r==4&&(u=i[u>>>24]<<24|i[u>>>16&255]<<16|i[u>>>8&255]<<8|i[255&u]):(u=i[(u=u<<8|u>>>24)>>>24]<<24|i[u>>>16&255]<<16|i[u>>>8&255]<<8|i[255&u],u^=p[a/r|0]<<24),o[a]=o[a-r]^u);for(var s=this._invKeySchedule=[],c=0;c<n;c++){if(a=n-c,c%4)var u=o[a];else u=o[a-4];s[c]=c<4||a<=4?u:l[i[u>>>24]]^f[i[u>>>16&255]]^h[i[u>>>8&255]]^d[i[255&u]]}}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,a,s,c,u,i)},decryptBlock:function(e,t){var r=e[t+1];e[t+1]=e[t+3],e[t+3]=r,this._doCryptBlock(e,t,this._invKeySchedule,l,f,h,d,o),r=e[t+1],e[t+1]=e[t+3],e[t+3]=r},_doCryptBlock:function(e,t,r,n,i,o,a,s){for(var c=this._nRounds,u=e[t]^r[0],l=e[t+1]^r[1],f=e[t+2]^r[2],h=e[t+3]^r[3],d=4,p=1;p<c;p++){var _=n[u>>>24]^i[l>>>16&255]^o[f>>>8&255]^a[255&h]^r[d++],v=n[l>>>24]^i[f>>>16&255]^o[h>>>8&255]^a[255&u]^r[d++],y=n[f>>>24]^i[h>>>16&255]^o[u>>>8&255]^a[255&l]^r[d++],g=n[h>>>24]^i[u>>>16&255]^o[l>>>8&255]^a[255&f]^r[d++];u=_,l=v,f=y,h=g}_=(s[u>>>24]<<24|s[l>>>16&255]<<16|s[f>>>8&255]<<8|s[255&h])^r[d++],v=(s[l>>>24]<<24|s[f>>>16&255]<<16|s[h>>>8&255]<<8|s[255&u])^r[d++],y=(s[f>>>24]<<24|s[h>>>16&255]<<16|s[u>>>8&255]<<8|s[255&l])^r[d++],g=(s[h>>>24]<<24|s[u>>>16&255]<<16|s[l>>>8&255]<<8|s[255&f])^r[d++],e[t]=_,e[t+1]=v,e[t+2]=y,e[t+3]=g},keySize:8});t.AES=r._createHelper(_)}(),e.AES}(u(),p(),y(),O(),w||(w=1,b.exports=(e=u(),O(),void(e.lib.Cipher||function(t){var r=e,n=r.lib,i=n.Base,o=n.WordArray,a=n.BufferedBlockAlgorithm,s=r.enc;s.Utf8;var c=s.Base64,u=r.algo.EvpKDF,l=n.Cipher=a.extend({cfg:i.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,r){this.cfg=this.cfg.extend(r),this._xformMode=e,this._key=t,this.reset()},reset:function(){a.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?E:y}return function(t){return{encrypt:function(r,n,i){return e(n).encrypt(t,r,n,i)},decrypt:function(r,n,i){return e(n).decrypt(t,r,n,i)}}}}()});n.StreamCipher=l.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var f=r.mode={},h=n.BlockCipherMode=i.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),d=f.CBC=function(){var e=h.extend();function r(e,r,n){var i,o=this._iv;o?(i=o,this._iv=t):i=this._prevBlock;for(var a=0;a<n;a++)e[r+a]^=i[a]}return e.Encryptor=e.extend({processBlock:function(e,t){var n=this._cipher,i=n.blockSize;r.call(this,e,t,i),n.encryptBlock(e,t),this._prevBlock=e.slice(t,t+i)}}),e.Decryptor=e.extend({processBlock:function(e,t){var n=this._cipher,i=n.blockSize,o=e.slice(t,t+i);n.decryptBlock(e,t),r.call(this,e,t,i),this._prevBlock=o}}),e}(),p=(r.pad={}).Pkcs7={pad:function(e,t){for(var r=4*t,n=r-e.sigBytes%r,i=n<<24|n<<16|n<<8|n,a=[],s=0;s<n;s+=4)a.push(i);var c=o.create(a,n);e.concat(c)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}};n.BlockCipher=l.extend({cfg:l.cfg.extend({mode:d,padding:p}),reset:function(){var e;l.reset.call(this);var t=this.cfg,r=t.iv,n=t.mode;this._xformMode==this._ENC_XFORM_MODE?e=n.createEncryptor:(e=n.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==e?this._mode.init(this,r&&r.words):(this._mode=e.call(n,this,r&&r.words),this._mode.__creator=e)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e,t=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(t.pad(this._data,this.blockSize),e=this._process(!0)):(e=this._process(!0),t.unpad(e)),e},blockSize:4});var _=n.CipherParams=i.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),v=(r.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext,r=e.salt;return(r?o.create([1398893684,1701076831]).concat(r).concat(t):t).toString(c)},parse:function(e){var t,r=c.parse(e),n=r.words;return 1398893684==n[0]&&1701076831==n[1]&&(t=o.create(n.slice(2,4)),n.splice(0,4),r.sigBytes-=16),_.create({ciphertext:r,salt:t})}},y=n.SerializableCipher=i.extend({cfg:i.extend({format:v}),encrypt:function(e,t,r,n){n=this.cfg.extend(n);var i=e.createEncryptor(r,n),o=i.finalize(t),a=i.cfg;return _.create({ciphertext:o,key:r,iv:a.iv,algorithm:e,mode:a.mode,padding:a.padding,blockSize:e.blockSize,formatter:n.format})},decrypt:function(e,t,r,n){return n=this.cfg.extend(n),t=this._parse(t,n.format),e.createDecryptor(r,n).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),g=(r.kdf={}).OpenSSL={execute:function(e,t,r,n,i){if(n||(n=o.random(8)),i)a=u.create({keySize:t+r,hasher:i}).compute(e,n);else var a=u.create({keySize:t+r}).compute(e,n);var s=o.create(a.words.slice(t),4*r);return a.sigBytes=4*t,_.create({key:a,iv:s,salt:n})}},E=n.PasswordBasedCipher=y.extend({cfg:y.cfg.extend({kdf:g}),encrypt:function(e,t,r,n){var i=(n=this.cfg.extend(n)).kdf.execute(r,e.keySize,e.ivSize,n.salt,n.hasher);n.iv=i.iv;var o=y.encrypt.call(this,e,t,i.key,n);return o.mixIn(i),o},decrypt:function(e,t,r,n){n=this.cfg.extend(n),t=this._parse(t,n.format);var i=n.kdf.execute(r,e.keySize,e.ivSize,t.salt,n.hasher);return n.iv=i.iv,y.decrypt.call(this,e,t,i.key,n)}})}())))));var e}var x,P={},L={};function k(){if(x)return L;x=1,Object.defineProperty(L,"__esModule",{value:!0}),L.default=void 0;var e={getHashKey:function(){var e=null;try{"undefined"!=typeof Cypress?e=Cypress.env("SECURE_LOCAL_STORAGE_HASH_KEY")||Cypress.env("REACT_APP_SECURE_LOCAL_STORAGE_HASH_KEY")||Cypress.env("NEXT_PUBLIC_SECURE_LOCAL_STORAGE_HASH_KEY")||Cypress.env("VITE_SECURE_LOCAL_STORAGE_HASH_KEY"):void 0!==process.env?e=process.env.SECURE_LOCAL_STORAGE_HASH_KEY||process.env.REACT_APP_SECURE_LOCAL_STORAGE_HASH_KEY||process.env.NEXT_PUBLIC_SECURE_LOCAL_STORAGE_HASH_KEY||process.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY:console.warn("react-secure-storage : process is not defined! Just a warning!")}catch(e){return null}return e},getStoragePrefix:function(){var e=null;try{"undefined"!=typeof Cypress?e=Cypress.env("SECURE_LOCAL_STORAGE_PREFIX")||Cypress.env("REACT_APP_SECURE_LOCAL_STORAGE_PREFIX")||Cypress.env("NEXT_PUBLIC_SECURE_LOCAL_STORAGE_PREFIX")||Cypress.env("VITE_SECURE_LOCAL_STORAGE_PREFIX"):void 0!==process.env?e=process.env.SECURE_LOCAL_STORAGE_PREFIX||process.env.REACT_APP_SECURE_LOCAL_STORAGE_PREFIX||process.env.NEXT_PUBLIC_SECURE_LOCAL_STORAGE_PREFIX||process.env.VITE_SECURE_LOCAL_STORAGE_PREFIX:console.warn("react-secure-storage : process is not defined! Just a warning!")}catch(e){return null}return e},getDisabledKeys:function(){var e=null;try{"undefined"!=typeof Cypress?e=Cypress.env("SECURE_LOCAL_STORAGE_DISABLED_KEYS")||Cypress.env("REACT_APP_SECURE_LOCAL_STORAGE_DISABLED_KEYS")||Cypress.env("NEXT_PUBLIC_SECURE_LOCAL_STORAGE_DISABLED_KEYS")||Cypress.env("VITE_SECURE_LOCAL_STORAGE_DISABLED_KEYS"):void 0!==process.env?e=process.env.SECURE_LOCAL_STORAGE_DISABLED_KEYS||process.env.REACT_APP_SECURE_LOCAL_STORAGE_DISABLED_KEYS||process.env.NEXT_PUBLIC_SECURE_LOCAL_STORAGE_DISABLED_KEYS||process.env.VITE_SECURE_LOCAL_STORAGE_DISABLED_KEYS:console.warn("react-secure-storage : process is not defined! Just a warning!")}catch(e){return null}return e}};return L.default=e,L}var B,N={},D={exports:{}};var G,K,M,U,F={};function H(){if(G)return F;G=1,Object.defineProperty(F,"__esModule",{value:!0}),F.getSecurePrefix=F.getDisabledKeys=F.FINGERPRINT_KEYS=void 0;var e,t=(e=k())&&e.__esModule?e:{default:e};F.getSecurePrefix=function(){var e=t.default.getStoragePrefix()||"@secure.";return e.endsWith(".")?e:e+"."};var r={USERAGENT:"UserAgent",SCREEN_PRINT:"ScreenPrint",PLUGINS:"Plugins",FONTS:"Fonts",LOCAL_STORAGE:"LocalStorage",SESSION_STORAGE:"SessionStorage",TIMEZONE:"TimeZone",LANGUAGE:"Language",SYSTEM_LANGUAGE:"SystemLanguage",COOKIE:"Cookie",CANVAS:"Canvas",HOSTNAME:"Hostname"};F.FINGERPRINT_KEYS=r;return F.getDisabledKeys=function(){var e=t.default.getDisabledKeys()||"";if(""===e)return[];var n=[r.USERAGENT,r.SCREEN_PRINT,r.PLUGINS,r.FONTS,r.LOCAL_STORAGE,r.SESSION_STORAGE,r.TIMEZONE,r.LANGUAGE,r.SYSTEM_LANGUAGE,r.COOKIE,r.CANVAS,r.HOSTNAME],i=[];return e.split("|").forEach((function(e){""===e||(n.includes(e)?i.push(e):console.warn("react-secure-storage : ".concat(e," is not present in the available disabled keys options! Please go through the documentation")))})),i},F}function z(){if(K)return N;K=1,Object.defineProperty(N,"__esModule",{value:!0}),N.default=void 0;var e,t=(e=B?D.exports:(B=1,D.exports=function(e,t){var r,n,i,o,a,s,c,u;for(r=3&e.length,n=e.length-r,i=t,a=3432918353,s=461845907,u=0;u<n;)c=255&e.charCodeAt(u)|(255&e.charCodeAt(++u))<<8|(255&e.charCodeAt(++u))<<16|(255&e.charCodeAt(++u))<<24,++u,i=27492+(65535&(o=5*(65535&(i=(i^=c=(65535&(c=(c=(65535&c)*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*s+(((c>>>16)*s&65535)<<16)&4294967295)<<13|i>>>19))+((5*(i>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16);switch(c=0,r){case 3:c^=(255&e.charCodeAt(u+2))<<16;case 2:c^=(255&e.charCodeAt(u+1))<<8;case 1:i^=c=(65535&(c=(c=(65535&(c^=255&e.charCodeAt(u)))*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*s+(((c>>>16)*s&65535)<<16)&4294967295}return i^=e.length,i=2246822507*(65535&(i^=i>>>16))+((2246822507*(i>>>16)&65535)<<16)&4294967295,i=3266489909*(65535&(i^=i>>>13))+((3266489909*(i>>>16)&65535)<<16)&4294967295,(i^=i>>>16)>>>0}))&&e.__esModule?e:{default:e},r=H();function n(e,t,r){return t&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var i=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"getFingerprint",value:function(){var e="|",n=(0,r.getDisabledKeys)(),i="";n.includes(r.FINGERPRINT_KEYS.USERAGENT)||(i+=navigator.userAgent+e),n.includes(r.FINGERPRINT_KEYS.HOSTNAME)||(i+=window.location.hostname+e),n.includes(r.FINGERPRINT_KEYS.SCREEN_PRINT)||(i+=this.getScreenPrint()+e),n.includes(r.FINGERPRINT_KEYS.PLUGINS)||(i+=this.getPlugins()+e),n.includes(r.FINGERPRINT_KEYS.FONTS)||(i+=this.getFonts()+e),n.includes(r.FINGERPRINT_KEYS.LOCAL_STORAGE)||(i+=this.isLocalStorage()+e),n.includes(r.FINGERPRINT_KEYS.SESSION_STORAGE)||(i+=this.isSessionStorage()+e),n.includes(r.FINGERPRINT_KEYS.TIMEZONE)||(i+=this.getTimeZone()+e),n.includes(r.FINGERPRINT_KEYS.LANGUAGE)||(i+=this.getLanguage()+e),n.includes(r.FINGERPRINT_KEYS.SYSTEM_LANGUAGE)||(i+=this.getSystemLanguage()+e),n.includes(r.FINGERPRINT_KEYS.COOKIE)||(i+=this.isCookie()+e),n.includes(r.FINGERPRINT_KEYS.CANVAS)||(i+=this.getCanvasPrint()),i.endsWith(e)&&(i=i.substring(0,i.length-1));return(0,t.default)(i,256)}},{key:"getScreenPrint",value:function(){return"Color Depth: "+this.getColorDepth()+", Device XDPI: "+this.getDeviceXDPI()+", Device YDPI: "+this.getDeviceYDPI()}},{key:"getColorDepth",value:function(){return window.screen.colorDepth}},{key:"getCurrentResolution",value:function(){return window.screen.width+"x"+window.screen.height}},{key:"getAvailableResolution",value:function(){return window.screen.availWidth+"x"+window.screen.availHeight}},{key:"getDeviceXDPI",value:function(){return""}},{key:"getDeviceYDPI",value:function(){return""}},{key:"getPlugins",value:function(){for(var e="",t=0;t<navigator.plugins.length;t++)t===navigator.plugins.length-1?e+=navigator.plugins[t].name:e+=navigator.plugins[t].name+", ";return e}},{key:"getFonts",value:function(){return""}},{key:"isLocalStorage",value:function(){try{return!!localStorage}catch(e){return!0}}},{key:"isSessionStorage",value:function(){try{return!!sessionStorage}catch(e){return!0}}},{key:"isCookie",value:function(){return navigator.cookieEnabled}},{key:"getTimeZone",value:function(){var e,t;return e=new Date,(t=String(-e.getTimezoneOffset()/60))<0?"-"+("0"+(t*=-1)).slice(-2):"+"+("0"+t).slice(-2)}},{key:"getLanguage",value:function(){return navigator.language}},{key:"getSystemLanguage",value:function(){return navigator.language||window.navigator.language}},{key:"getCanvasPrint",value:function(){var e,t=document.createElement("canvas");try{e=t.getContext("2d")}catch(e){return""}var r="ClientJS,org <canvas> 1.0";return e.textBaseline="top",e.font="14px 'Arial'",e.textBaseline="alphabetic",e.fillStyle="#f60",e.fillRect(125,1,62,20),e.fillStyle="#069",e.fillText(r,2,15),e.fillStyle="rgba(102, 204, 0, 0.7)",e.fillText(r,4,17),t.toDataURL()}}]),e}());return N.default=i,N}function Y(){if(U)return o;U=1,Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=n(l?a.exports:(l=1,a.exports=u().enc.Utf8)),t=n(T()),r=n(function(){if(M)return P;M=1,Object.defineProperty(P,"__esModule",{value:!0}),P.default=void 0;var e=r(k()),t=r(z());function r(e){return e&&e.__esModule?e:{default:e}}var n=function(){var r=e.default.getHashKey()||"E86E2612010258B35137";return"undefined"==typeof window?r:t.default.getFingerprint()+r};return P.default=n,P}());function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r){return t&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var s=function(){function n(){var e,t,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),i="",(t="secureKey")in(e=this)?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,this.secureKey=(0,r.default)()}return i(n,[{key:"encrypt",value:function(e){return t.default.encrypt(e,this.secureKey).toString()}},{key:"decrypt",value:function(r){try{return t.default.decrypt(r,this.secureKey).toString(e.default)||null}catch(e){return null}}}]),n}();return o.default=s,o}var j,X,V={};function W(){if(j)return V;j=1,Object.defineProperty(V,"__esModule",{value:!0}),V.default=void 0;var e,t=(e=Y())&&e.__esModule?e:{default:e};function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=(0,H().getSecurePrefix)(),o=function(){var e={};if("undefined"!=typeof window)for(var n=new t.default,o=0,a=Object.entries(localStorage);o<a.length;o++){var s=r(a[o],2),c=s[0],u=s[1];if(c.startsWith(i)){var l=c.replace(i,"")[0],f=c.replace(/[.][bjns][.]/,"."),h=n.decrypt(u),d=null;if(null!=h)switch(l){case"b":d="true"===h;break;case"j":try{d=JSON.parse(h)}catch(e){d=null}break;case"n":try{d=Number(h)}catch(e){d=null}break;default:d=h}e[f]=d}}return e};return V.default=o,V}var J=n(function(){if(X)return i;X=1,Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=r(Y()),t=r(W());function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r){return t&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var a=(0,H().getSecurePrefix)(),s=function(e,t){var r=function(e){return"object"===o(e)?"j":"boolean"==typeof e?"b":"number"==typeof e?"n":"s"}(t);return a+"".concat(r,".")+e},c=new(function(){function r(){var e,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),i={},(n="_localStorageItems")in(e=this)?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,this._localStorageItems=(0,t.default)()}return n(r,[{key:"setItem",value:function(t,r){if(null==r)this.removeItem(t);else{var n="object"===o(r)?JSON.stringify(r):r+"",i=s(t,r),c=a+t;null!=t&&(this._localStorageItems[c]=r);var u=new e.default;localStorage.setItem(i,u.encrypt(n))}}},{key:"getItem",value:function(e){var t,r=a+e;return null!==(t=this._localStorageItems[r])&&void 0!==t?t:null}},{key:"removeItem",value:function(e){var t=a+e,r=this._localStorageItems[t],n=s(e,r);void 0!==this._localStorageItems[t]&&delete this._localStorageItems[t],localStorage.removeItem(n)}},{key:"clear",value:function(){this._localStorageItems={},localStorage.clear()}}]),r}());return i.default=c,i}());function Z(r,n){var i=e((function(){try{var e=J.getItem(r);return e||n}catch(e){return console.log(e),n}})),o=i[0],a=i[1];return t((function(){try{var e="function"==typeof o?o(o):o;J.setItem(r,e)}catch(e){console.log(e)}}),[r,o]),[o,a]}export{Z as default};
//# sourceMappingURL=index.mjs.map
