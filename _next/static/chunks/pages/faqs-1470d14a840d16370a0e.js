_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"3HE9":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faqs",function(){return e("g6o5")}])},"82gj":function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return r}));var r=function(){},o=function(){}},"I+PZ":function(n,t){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC42OTkgNy41YzAgLjI2OS0uMTAzLjUzOC0uMzA4Ljc0M2wtNi40NSA2LjQ1YTEuMDUgMS4wNSAwIDExLTEuNDg1LTEuNDg2TDYuMTYzIDcuNS40NTYgMS43OTNBMS4wNSAxLjA1IDAgMDExLjk0Mi4zMDhsNi40NSA2LjQ1Yy4yMDQuMjA1LjMwNy40NzMuMzA3Ljc0MnoiIGZpbGw9IiMwMjA3M0UiLz48L3N2Zz4="},Ibe6:function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return k})),e.d(t,"c",(function(){return N})),e.d(t,"d",(function(){return p})),e.d(t,"e",(function(){return A})),e.d(t,"f",(function(){return I})),e.d(t,"g",(function(){return s})),e.d(t,"h",(function(){return v})),e.d(t,"i",(function(){return y})),e.d(t,"j",(function(){return h})),e.d(t,"k",(function(){return S})),e.d(t,"l",(function(){return f})),e.d(t,"m",(function(){return m})),e.d(t,"n",(function(){return g}));var r=e("mrSG"),o=function(n,t){return function(e){return Math.max(Math.min(e,t),n)}},a=function(n){return n%1?Number(n.toFixed(5)):n},i=/(-)?(\d[\d\.]*)/g,u=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,c=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i,s={test:function(n){return"number"===typeof n},parse:parseFloat,transform:function(n){return n}},l=Object(r.a)(Object(r.a)({},s),{transform:o(0,1)}),f=Object(r.a)(Object(r.a)({},s),{default:1}),d=function(n){return{test:function(t){return"string"===typeof t&&t.endsWith(n)&&1===t.split(" ").length},parse:parseFloat,transform:function(t){return""+t+n}}},p=d("deg"),v=d("%"),h=d("px"),m=d("vh"),g=d("vw"),y=Object(r.a)(Object(r.a)({},v),{parse:function(n){return v.parse(n)/100},transform:function(n){return v.transform(100*n)}}),b=o(0,255),x=function(n){return void 0!==n.red},w=function(n){return void 0!==n.hue};var O=function(n){return function(t){if("string"!==typeof t)return t;for(var e={},r=function(n){return n.substring(n.indexOf("(")+1,n.lastIndexOf(")"))}(t).replace(/(,|\/)/g," ").split(/ \s*/),o=0;o<4;o++)e[n[o]]=void 0!==r[o]?parseFloat(r[o]):1;return e}},j=Object(r.a)(Object(r.a)({},s),{transform:function(n){return Math.round(b(n))}});function M(n,t){return n.startsWith(t)&&c.test(n)}var S={test:function(n){return"string"===typeof n?M(n,"rgb"):x(n)},parse:O(["red","green","blue","alpha"]),transform:function(n){var t=n.red,e=n.green,r=n.blue,o=n.alpha,i=void 0===o?1:o;return function(n){var t=n.red,e=n.green,r=n.blue,o=n.alpha;return"rgba("+t+", "+e+", "+r+", "+(void 0===o?1:o)+")"}({red:j.transform(t),green:j.transform(e),blue:j.transform(r),alpha:a(l.transform(i))})}},I={test:function(n){return"string"===typeof n?M(n,"hsl"):w(n)},parse:O(["hue","saturation","lightness","alpha"]),transform:function(n){var t=n.hue,e=n.saturation,r=n.lightness,o=n.alpha,i=void 0===o?1:o;return function(n){var t=n.hue,e=n.saturation,r=n.lightness,o=n.alpha;return"hsla("+t+", "+e+", "+r+", "+(void 0===o?1:o)+")"}({hue:Math.round(t),saturation:v.transform(a(e)),lightness:v.transform(a(r)),alpha:a(l.transform(i))})}},A=Object(r.a)(Object(r.a)({},S),{test:function(n){return"string"===typeof n&&M(n,"#")},parse:function(n){var t="",e="",r="";return n.length>4?(t=n.substr(1,2),e=n.substr(3,2),r=n.substr(5,2)):(t=n.substr(1,1),e=n.substr(2,1),r=n.substr(3,1),t+=t,e+=e,r+=r),{red:parseInt(t,16),green:parseInt(e,16),blue:parseInt(r,16),alpha:1}}}),k={test:function(n){return"string"===typeof n&&c.test(n)||x(n)||w(n)},parse:function(n){return S.test(n)?S.parse(n):I.test(n)?I.parse(n):A.test(n)?A.parse(n):n},transform:function(n){return x(n)?S.transform(n):w(n)?I.transform(n):n}},D=function(n){return"number"===typeof n?0:n},N={test:function(n){if("string"!==typeof n||!isNaN(n))return!1;var t=0,e=n.match(i),r=n.match(u);return e&&(t+=e.length),r&&(t+=r.length),t>0},parse:function(n){var t=n,e=[],r=t.match(u);r&&(t=t.replace(u,"${c}"),e.push.apply(e,r.map(k.parse)));var o=t.match(i);return o&&e.push.apply(e,o.map(s.parse)),e},createTransformer:function(n){var t=n,e=0,r=n.match(u),o=r?r.length:0;if(r)for(var c=0;c<o;c++)t=t.replace(r[c],"${c}"),e++;var s=t.match(i),l=s?s.length:0;if(s)for(c=0;c<l;c++)t=t.replace(s[c],"${n}"),e++;return function(n){for(var r=t,i=0;i<e;i++)r=r.replace(i<o?"${c}":"${n}",i<o?k.transform(n[i]):a(n[i]));return r}},getAnimatableNone:function(n){var t=N.parse(n);return N.createTransformer(n)(t.map(D))}}},Neuu:function(n,t,e){"use strict";e.d(t,"a",(function(){return en})),e.d(t,"b",(function(){return Y})),e.d(t,"c",(function(){return Z})),e.d(t,"d",(function(){return W})),e.d(t,"e",(function(){return G})),e.d(t,"f",(function(){return $})),e.d(t,"g",(function(){return Q})),e.d(t,"h",(function(){return J})),e.d(t,"i",(function(){return _})),e.d(t,"j",(function(){return U})),e.d(t,"k",(function(){return H})),e.d(t,"l",(function(){return u})),e.d(t,"m",(function(){return yn})),e.d(t,"n",(function(){return fn})),e.d(t,"o",(function(){return B})),e.d(t,"p",(function(){return q})),e.d(t,"q",(function(){return F})),e.d(t,"r",(function(){return on})),e.d(t,"s",(function(){return T})),e.d(t,"t",(function(){return L})),e.d(t,"u",(function(){return m})),e.d(t,"v",(function(){return M})),e.d(t,"w",(function(){return h})),e.d(t,"x",(function(){return rn})),e.d(t,"y",(function(){return dn}));var r=e("mrSG"),o=e("82gj"),a=e("Ibe6"),i=e("eUsl"),u=function(n,t,e){return Math.min(Math.max(e,n),t)};function c(n){var t,e,r=n.duration,a=void 0===r?800:r,i=n.bounce,c=void 0===i?.25:i,l=n.velocity,f=void 0===l?0:l,d=n.mass,p=void 0===d?1:d;Object(o.b)(a<=1e4,"Spring duration must be 10 seconds or less");var v=1-c;v=u(.05,1,v),a=u(.01,10,a/1e3),v<1?(t=function(n){var t=n*v,e=t*a;return.001-(t-f)/s(n,v)*Math.exp(-e)},e=function(n){var e=n*v*a,r=e*f+f,o=Math.pow(v,2)*Math.pow(n,2)*a,i=Math.exp(-e),u=s(Math.pow(n,2),v);return(.001-t(n)>0?-1:1)*((r-o)*i)/u}):(t=function(n){return Math.exp(-n*a)*((n-f)*a+1)-.001},e=function(n){return Math.exp(-n*a)*(a*a*(f-n))});var h=function(n,t,e){for(var r=e,o=1;o<12;o++)r-=n(r)/t(r);return r}(t,e,5/a);if(isNaN(h))return{stiffness:100,damping:10};var m=Math.pow(h,2)*p;return{stiffness:m,damping:2*v*Math.sqrt(p*m)}}function s(n,t){return n*Math.sqrt(1-t*t)}var l=["duration","bounce"],f=["stiffness","damping","mass"];function d(n,t){return t.some((function(t){return void 0!==n[t]}))}function p(n){var t=n.from,e=void 0===t?0:t,o=n.to,a=void 0===o?1:o,i=n.restSpeed,u=void 0===i?2:i,p=n.restDelta,h=Object(r.d)(n,["from","to","restSpeed","restDelta"]),m={done:!1,value:e},g=function(n){var t=Object(r.a)({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!d(n,f)&&d(n,l)){var e=c(n);(t=Object(r.a)(Object(r.a)(Object(r.a)({},t),e),{velocity:0,mass:1})).isResolvedFromDuration=!0}return t}(h),y=g.stiffness,b=g.damping,x=g.mass,w=g.velocity,O=g.isResolvedFromDuration,j=v,M=v;function S(){var n=w?-w/1e3:0,t=a-e,r=b/(2*Math.sqrt(y*x)),o=Math.sqrt(y/x)/1e3;if(null!==p&&void 0!==p||(p=Math.abs(a-e)<=1?.01:.4),r<1){var i=s(o,r);j=function(e){var u=Math.exp(-r*o*e);return a-u*((n+r*o*t)/i*Math.sin(i*e)+t*Math.cos(i*e))},M=function(e){var a=Math.exp(-r*o*e);return r*o*a*(Math.sin(i*e)*(n+r*o*t)/i+t*Math.cos(i*e))-a*(Math.cos(i*e)*(n+r*o*t)-i*t*Math.sin(i*e))}}else if(1===r)j=function(e){return a-Math.exp(-o*e)*(t+(n+o*t)*e)};else{var u=o*Math.sqrt(r*r-1);j=function(e){var i=Math.exp(-r*o*e),c=Math.min(u*e,300);return a-i*((n+r*o*t)*Math.sinh(c)+u*t*Math.cosh(c))/u}}}return S(),{next:function(n){var t=j(n);if(O)m.done=n>=h.duration;else{var e=1e3*M(n),r=Math.abs(e)<=u,o=Math.abs(a-t)<=p;m.done=r&&o}return m.value=m.done?a:t,m},flipTarget:function(){var n;w=-w,e=(n=[a,e])[0],a=n[1],S()}}}p.needsInterpolation=function(n,t){return"string"===typeof n||"string"===typeof t};var v=function(n){return 0},h=function(n,t,e){var r=t-n;return 0===r?1:(e-n)/r},m=function(n,t,e){return-e*n+e*t+n},g=function(n,t,e){var r=n*n,o=t*t;return Math.sqrt(Math.max(0,e*(o-r)+r))},y=[a.e,a.k,a.f],b=function(n){return y.find((function(t){return t.test(n)}))},x=function(n){return"'"+n+"' is not an animatable color. Use the equivalent color code instead."},w=function(n,t){var e=b(n),i=b(t);Object(o.a)(!!e,x(n)),Object(o.a)(!!i,x(t)),Object(o.a)(e.transform===i.transform,"Both colors must be hex/RGBA, OR both must be HSLA.");var u=e.parse(n),c=i.parse(t),s=Object(r.a)({},u),l=e===a.f?m:g;return function(n){for(var t in s)"alpha"!==t&&(s[t]=l(u[t],c[t],n));return s.alpha=m(u.alpha,c.alpha,n),e.transform(s)}},O=function(n){return"number"===typeof n},j=function(n,t){return function(e){return t(n(e))}},M=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return n.reduce(j)};function S(n,t){return O(n)?function(e){return m(n,t,e)}:a.b.test(n)?w(n,t):D(n,t)}var I=function(n,t){var e=Object(r.f)(n),o=e.length,a=n.map((function(n,e){return S(n,t[e])}));return function(n){for(var t=0;t<o;t++)e[t]=a[t](n);return e}},A=function(n,t){var e=Object(r.a)(Object(r.a)({},n),t),o={};for(var a in e)void 0!==n[a]&&void 0!==t[a]&&(o[a]=S(n[a],t[a]));return function(n){for(var t in o)e[t]=o[t](n);return e}};function k(n){for(var t=a.c.parse(n),e=t.length,r=0,o=0,i=0,u=0;u<e;u++)r||"number"===typeof t[u]?r++:void 0!==t[u].hue?i++:o++;return{parsed:t,numNumbers:r,numRGB:o,numHSL:i}}var D=function(n,t){var e=a.c.createTransformer(t),r=k(n),i=k(t);return Object(o.a)(r.numHSL===i.numHSL&&r.numRGB===i.numRGB&&r.numNumbers>=i.numNumbers,"Complex values '"+n+"' and '"+t+"' too different to mix. Ensure all colors are of the same type."),M(I(r.parsed,i.parsed),e)},N=function(n,t){return function(e){return m(n,t,e)}};function P(n,t,e){for(var r,o=[],i=e||("number"===typeof(r=n[0])?N:"string"===typeof r?a.b.test(r)?w:D:Array.isArray(r)?I:"object"===typeof r?A:void 0),u=n.length-1,c=0;c<u;c++){var s=i(n[c],n[c+1]);if(t){var l=Array.isArray(t)?t[c]:t;s=M(l,s)}o.push(s)}return o}function T(n,t,e){var r=void 0===e?{}:e,a=r.clamp,i=void 0===a||a,c=r.ease,s=r.mixer,l=n.length;Object(o.a)(l===t.length,"Both input and output ranges must be the same length"),Object(o.a)(!c||!Array.isArray(c)||c.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),n[0]>n[l-1]&&(n=[].concat(n),t=[].concat(t),n.reverse(),t.reverse());var f=P(t,c,s),d=2===l?function(n,t){var e=n[0],r=n[1],o=t[0];return function(n){return o(h(e,r,n))}}(n,f):function(n,t){var e=n.length,r=e-1;return function(o){var a=0,i=!1;if(o<=n[0]?i=!0:o>=n[r]&&(a=r-1,i=!0),!i){for(var u=1;u<e&&!(n[u]>o||u===r);u++);a=u-1}var c=h(n[a],n[a+1],o);return t[a](c)}}(n,f);return i?function(t){return d(u(n[0],n[l-1],t))}:d}var C=function(n){return function(t){return 1-n(1-t)}},R=function(n){return function(t){return t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2}},E=function(n){return function(t){return t*t*((n+1)*t-n)}},z=function(n){var t=E(n);return function(n){return(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))}},L=function(n){return n},B=function(n){return function(t){return Math.pow(t,n)}}(2),F=C(B),q=R(B),_=function(n){return 1-Math.sin(Math.acos(n))},H=C(_),U=R(H),Z=E(1.525),G=C(Z),W=R(Z),Y=z(1.525),J=function(n){if(1===n||0===n)return n;var t=n*n;return n<.36363636363636365?7.5625*t:n<.7272727272727273?9.075*t-9.9*n+3.4:n<.9?12.066481994459833*t-19.63545706371191*n+8.898060941828255:10.8*n*n-20.52*n+10.72},$=C(J),Q=function(n){return n<.5?.5*(1-J(1-2*n)):.5*J(2*n-1)+.5};function X(n,t){return n.map((function(){return t||q})).splice(0,n.length-1)}function K(n){var t=n.from,e=void 0===t?0:t,r=n.to,o=void 0===r?1:r,a=n.ease,i=n.offset,u=n.duration,c=void 0===u?300:u,s={done:!1,value:e},l=Array.isArray(o)?o:[e,o],f=function(n,t){return n.map((function(n){return n*t}))}(null!==i&&void 0!==i?i:function(n){var t=n.length;return n.map((function(n,e){return 0!==e?e/(t-1):0}))}(l),c);function d(){return T(f,l,{ease:Array.isArray(a)?a:X(l,a)})}var p=d();return{next:function(n){return s.value=p(n),s.done=n>=c,s},flipTarget:function(){l.reverse(),p=d()}}}var V={keyframes:K,spring:p,decay:function(n){var t=n.velocity,e=void 0===t?0:t,r=n.from,o=void 0===r?0:r,a=n.power,i=void 0===a?.8:a,u=n.timeConstant,c=void 0===u?350:u,s=n.restDelta,l=void 0===s?.5:s,f=n.modifyTarget,d={done:!1,value:o},p=i*e,v=o+p,h=void 0===f?v:f(v);return h!==v&&(p=h-o),{next:function(n){var t=-p*Math.exp(-n/c);return d.done=!(t>l||t<-l),d.value=d.done?h:h+t,d},flipTarget:function(){}}}};function nn(n,t,e){return void 0===e&&(e=0),n-t-e}var tn=function(n){var t=function(t){var e=t.delta;return n(e)};return{start:function(){return i.b.update(t,!0,!0)},stop:function(){return i.a.update(t)}}};function en(n){var t,e,o,a,i,u=n.from,c=n.autoplay,s=void 0===c||c,l=n.driver,f=void 0===l?tn:l,d=n.elapsed,v=void 0===d?0:d,h=n.repeat,m=void 0===h?0:h,g=n.repeatType,y=void 0===g?"loop":g,b=n.repeatDelay,x=void 0===b?0:b,w=n.onPlay,O=n.onStop,j=n.onComplete,M=n.onRepeat,S=n.onUpdate,I=Object(r.d)(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]),A=I.to,k=0,D=I.duration,N=!1,P=!0,C=function(n){if(Array.isArray(n.to))return K;if(V[n.type])return V[n.type];var t=new Set(Object.keys(n));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?K:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?p:K}(I);(null===(e=(t=C).needsInterpolation)||void 0===e?void 0:e.call(t,u,A))&&(i=T([0,100],[u,A],{clamp:!1}),u=0,A=100);var R=C(Object(r.a)(Object(r.a)({},I),{from:u,to:A}));function E(){k++,"reverse"===y?v=function(n,t,e,r){return void 0===e&&(e=0),void 0===r&&(r=!0),r?nn(t+-n,t,e):t-(n-t)+e}(v,D,x,P=k%2===0):(v=nn(v,D,x),"mirror"===y&&R.flipTarget()),N=!1,M&&M()}function z(n){if(P||(n=-n),v+=n,!N){var t=R.next(Math.max(0,v));a=t.value,i&&(a=i(a)),N=P?t.done:v<=0}null===S||void 0===S||S(a),N&&(0===k&&(null!==D&&void 0!==D||(D=v)),k<m?function(n,t,e,r){return r?n>=t+e:n<=-e}(v,D,x,P)&&E():(o.stop(),j&&j()))}return s&&(null===w||void 0===w||w(),(o=f(z)).start()),{stop:function(){null===O||void 0===O||O(),o.stop()}}}function rn(n,t){return t?n*(1e3/t):0}function on(n){var t,e=n.from,o=void 0===e?0:e,a=n.velocity,u=void 0===a?0:a,c=n.min,s=n.max,l=n.power,f=void 0===l?.8:l,d=n.timeConstant,p=void 0===d?750:d,v=n.bounceStiffness,h=void 0===v?500:v,m=n.bounceDamping,g=void 0===m?10:m,y=n.restDelta,b=void 0===y?1:y,x=n.modifyTarget,w=n.driver,O=n.onUpdate,j=n.onComplete;function M(n){return void 0!==c&&n<c||void 0!==s&&n>s}function S(n){return void 0===c?s:void 0===s||Math.abs(c-n)<Math.abs(s-n)?c:s}function I(n){null===t||void 0===t||t.stop(),t=en(Object(r.a)(Object(r.a)({},n),{driver:w,onUpdate:function(t){var e;null===O||void 0===O||O(t),null===(e=n.onUpdate)||void 0===e||e.call(n,t)},onComplete:j}))}function A(n){I(Object(r.a)({type:"spring",stiffness:h,damping:g,restDelta:b},n))}if(M(o))A({from:o,velocity:u,to:S(o)});else{var k=f*u+o;"undefined"!==typeof x&&(k=x(k));var D,N,P=S(k),T=P===c?-1:1;I({type:"decay",from:o,velocity:u,timeConstant:p,power:f,restDelta:b,modifyTarget:x,onUpdate:M(k)?function(n){D=N,N=n,u=rn(n-D,Object(i.c)().delta),(1===T&&n>P||-1===T&&n<P)&&A({from:n,to:P,velocity:u})}:void 0})}return{stop:function(){return null===t||void 0===t?void 0:t.stop()}}}var an=function(n){return n},un=function(n){return void 0===n&&(n=an),function(t,e,r){var o=e-r,a=-(0-t+1)*(0-n(Math.abs(o)));return o<=0?e+a:e-a}},cn=(Math.sqrt,function(n){return n.hasOwnProperty("x")&&n.hasOwnProperty("y")}),sn=function(n){return cn(n)&&n.hasOwnProperty("z")},ln=function(n,t){return Math.abs(n-t)};function fn(n,t){if(O(n)&&O(t))return ln(n,t);if(cn(n)&&cn(t)){var e=ln(n.x,t.x),r=ln(n.y,t.y),o=sn(n)&&sn(t)?ln(n.z,t.z):0;return Math.sqrt(Math.pow(e,2)+Math.pow(r,2)+Math.pow(o,2))}}var dn=function(n,t,e){var r=t-n;return((e-n)%r+r)%r+n},pn=function(n,t){return 1-3*t+3*n},vn=function(n,t){return 3*t-6*n},hn=function(n){return 3*n},mn=function(n,t,e){return((pn(t,e)*n+vn(t,e))*n+hn(t))*n},gn=function(n,t,e){return 3*pn(t,e)*n*n+2*vn(t,e)*n+hn(t)};function yn(n,t,e,r){if(n===t&&e===r)return L;for(var o=new Float32Array(11),a=0;a<11;++a)o[a]=mn(.1*a,n,e);function i(t){for(var r=0,a=1;10!==a&&o[a]<=t;++a)r+=.1;--a;var i=r+.1*((t-o[a])/(o[a+1]-o[a])),u=gn(i,n,e);return u>=.001?function(n,t,e,r){for(var o=0;o<8;++o){var a=gn(t,e,r);if(0===a)return t;t-=(mn(t,e,r)-n)/a}return t}(t,i,n,e):0===u?i:function(n,t,e,r,o){var a,i,u=0;do{(a=mn(i=t+(e-t)/2,r,o)-n)>0?e=i:t=i}while(Math.abs(a)>1e-7&&++u<10);return i}(t,r,r+.1,n,e)}return function(n){return 0===n||1===n?n:mn(i(n),t,r)}}},eUsl:function(n,t,e){"use strict";e.d(t,"a",(function(){return h})),e.d(t,"c",(function(){return b}));var r=e("82gj"),o=0,a="undefined"!==typeof window&&void 0!==window.requestAnimationFrame?function(n){return window.requestAnimationFrame(n)}:function(n){var t=Date.now(),e=Math.max(0,16.7-(t-o));o=t+e,setTimeout((function(){return n(o)}),e)},i=1/60*1e3,u=!0,c=!1,s=!1,l={delta:0,timestamp:0},f=["read","update","preRender","render","postRender"],d=function(n){return c=n},p=f.reduce((function(n,t){return n[t]=function(n){var t=[],e=[],o=0,a=!1,i=0,u=new WeakSet,c=new WeakSet,s={cancel:function(n){var t=e.indexOf(n);u.add(n),-1!==t&&e.splice(t,1)},process:function(r){var l,f;if(a=!0,t=(l=[e,t])[0],(e=l[1]).length=0,o=t.length)for(i=0;i<o;i++)(f=t[i])(r),!0!==c.has(f)||u.has(f)||(s.schedule(f),n(!0));a=!1},schedule:function(n,i,s){void 0===i&&(i=!1),void 0===s&&(s=!1),Object(r.a)("function"===typeof n,"Argument must be a function");var l=s&&a,f=l?t:e;u.delete(n),i&&c.add(n),-1===f.indexOf(n)&&(f.push(n),l&&(o=t.length))}};return s}(d),n}),{}),v=f.reduce((function(n,t){var e=p[t];return n[t]=function(n,t,r){return void 0===t&&(t=!1),void 0===r&&(r=!1),c||y(),e.schedule(n,t,r),n},n}),{}),h=f.reduce((function(n,t){return n[t]=p[t].cancel,n}),{}),m=function(n){return p[n].process(l)},g=function(n){c=!1,l.delta=u?i:Math.max(Math.min(n-l.timestamp,40),1),u||(i=l.delta),l.timestamp=n,s=!0,f.forEach(m),s=!1,c&&(u=!1,a(g))},y=function(){c=!0,u=!0,s||a(g)},b=function(){return l};t.b=v},g6o5:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return W}));var r=e("q1tI"),o=e.n(r),a=e("dCk4"),i=e("izhR"),u=e("C+fU"),c=e("JCYj"),s=e("vrFN"),l=e("Bl7J"),f=e("wx14"),d=e("Ff2n");function p(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function v(n){return function(n){if(Array.isArray(n))return p(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return p(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?p(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=e("1OyB"),m=e("vuIU"),g=e("JX7q"),y=e("Ji7U"),b=e("md7G"),x=e("foSv"),w=e("rePB");function O(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(x.a)(n);if(t){var o=Object(x.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(b.a)(this,e)}}var j=function(n){Object(y.a)(e,n);var t=O(e);function e(){var n;Object(h.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=t.call.apply(t,[this].concat(o)),Object(w.a)(Object(g.a)(n),"state",{openIndexes:[0]}),Object(w.a)(Object(g.a)(n),"handleItemClick",(function(t){n.internalSetState((function(n){var e=n.openIndexes.includes(t);return{type:e?"closing":"opening",openIndexes:e?n.openIndexes.filter((function(n){return n!==t})):[].concat(v(n.openIndexes),[t])}})),console.log("clicked")})),n}return Object(m.a)(e,[{key:"getState",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state;return{openIndexes:void 0===this.props.openIndexes?n.openIndexes:this.props.openIndexes}}},{key:"internalSetState",value:function(n){var t,e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this.setState((function(r){var o=e.getState(r),a="function"===typeof n?n(o):n;return t=e.props.stateReducer(o,a)}),(function(){e.props.onStateChange(t),r()}))}},{key:"render",value:function(){return this.props.children({openIndexes:this.getState().openIndexes,handleItemClick:this.handleItemClick})}}]),e}(o.a.Component);Object(w.a)(j,"defaultProps",{stateReducer:function(n,t){return t},onStateChange:function(){}});var M=e("I+PZ"),S=e.n(M),I=e("yTye"),A=e.n(I),k=e("2A+t"),D=e("ZMKu");o.a.createElement;function N(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function P(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?N(Object(e),!0).forEach((function(t){Object(w.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):N(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var T=function(n){var t=n.children,e=Object(d.a)(n,["children"]);return Object(k.c)("div",Object(f.a)({css:{display:"flex",alignItems:"center",letterSpacing:"-0.2px",cursor:"pointer",fontSize:"17px",lineHeight:1.5,fontWeight:"500",border:"none",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"15px",paddingRight:"30px",position:"relative",color:"#0F2137","@media(min-width: 768px)":{paddingLeft:"30px",paddingRight:"30px",paddingTop:"20px",paddingBottom:"20px",fontSize:"15px"},":focus":{outline:"none",backgroundColor:"rgba(255, 255, 255, 0.4)"},span:{position:"absolute",top:"50%",right:"20px",transform:"translateY(-50%)",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",color:"#fff","@media(min-width: 768px)":{right:"30px"},img:{width:"7px","@media(min-width: 768px)":{width:"auto"}}}}},e),t)},C={open:{height:"auto",marginBottom:10,"@media(min-width: 768px)":{marginBottom:30}},closed:{height:0,marginTop:0,marginBottom:0}};function R(n){var t=n.isOpen,e=Object(d.a)(n,["isOpen"]);return Object(k.c)(D.a.div,Object(f.a)({initial:"closed",animate:t?"open":"closed",variants:C,css:{overflowY:"hidden",fontSize:15,padding:"0 15px",paddingRight:"40px",lineHeight:"30px",color:"#343D48","@media(min-width: 768px)":{padding:"0 30px"}}},e))}var E=function(n){n.isOpen;var t=n.children,e=Object(d.a)(n,["isOpen","children"]);return Object(k.c)("div",Object(f.a)({css:{borderRadius:5,marginBottom:10,border:"1px solid #EDEFF2",padding:0,overflow:"hidden"}},e),t)},z=function(n,t){return"closing"===t.type&&n.openIndexes.length<2?P(P({},t),{},{openIndexes:n.openIndexes}):t},L=function(n,t){return"opening"===t.type?P(P({},t),{},{openIndexes:t.openIndexes.slice(-1)}):t},B=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return function(n,e){return t.reduce((function(t,e){return e(n,t)}),e)}},F=o.a.createElement;function q(n){var t=n.items,e=Object(d.a)(n,["items"]),r=F(i.i,{src:A.a,alt:"open icon"}),a=F(i.i,{src:S.a,alt:"close icon"});return F(j,Object(f.a)({stateReducer:B(L,z)},e),(function(n){var e=n.openIndexes,i=n.handleItemClick;return F(o.a.Fragment,null,t.map((function(n,t){return F(E,{key:n.title,isOpen:e.includes(t)},F(T,{onClick:function(){return i(t)}},F("span",null,e.includes(t)?r:a),n.title),F(R,{isOpen:e.includes(t)},n.contents))})))}))}var _=o.a.createElement,H=[{isExpanded:!1,title:"How much does it cost to be a credit card merchant?",contents:_("div",null,"For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")},{isExpanded:!0,title:"How can I open a merchant account?",contents:_("div",null,"For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")},{isExpanded:!1,title:"How long does the application take?",contents:_("div",null,"For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")},{isExpanded:!1,title:"Can I make payment outside of Hong Kong?",contents:_("div",null,"For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")},{isExpanded:!1,title:"How do I get the payment complete?",contents:_("div",null,"For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")}],U=function(){return _(i.a,null,_(i.d,null,_(c.a,{slogan:"Beberapa pertanyaan umum",title:"Frequently Asked Question"}),_(i.e,{sx:Z.flex},_(i.a,{sx:Z.faqWrapper},_(q,{items:H})),_(i.a,{sx:Z.content},_(i.g,{as:"h3"},"Punya pertanyaan lain?"),_(i.n,{as:"p"},"Silahkan ajukan pertanyaan anda melalui halaman  ",_(i.l,{href:"/contact",sx:Z.contact},"Contact Us"),".")))))},Z={contact:{textDecoration:"none",color:"#0C606A","&:hover":{color:"#000"}},flex:{flexWrap:"wrap",flexDirection:["column",null,null,null,null,"row-reverse"],pb:["70px",null,null,null,"90px",null,"130px"]},content:{flex:["0 0 100%",null,null,null,"0 0 33.333%"],maxWidth:["100%",null,null,"450px","100%"],mx:["auto",null,null,null,"0"],mb:["0px",null,null,null,"0"],textAlign:["center",null,null,null,null,"left"],mt:["40px",null,null,null,null,"0"],h3:{fontSize:["23px",null,null,null,"24px"],lineHeight:[1.5,null,null,null,1.67],color:"black",fontWeight:700,letterSpacing:"-1.5px",mt:"-5px",pr:["0",null,null,null,null,"30px"]},p:{fontSize:"16px",lineHeight:1.87,color:"#343D48",opacity:.7,mt:"10px",pr:["0",null,null,null,null,"80px"]}},askButton:{display:"inline-block",verticalAlign:"middle",backgroundColor:"#02073E",color:"#fff",borderRadius:"5px",fontSize:"16px",fontWeight:700,p:"6.5px 19px",letterSpacing:"-0.16px",mt:"25px",transition:"all 500ms ease","&:hover":{opacity:.8}},faqWrapper:{flex:["0 0 100%",null,null,null,"0 0 66.666%"]}},G=o.a.createElement;function W(){return G(a.a,{theme:u.a},G(l.a,null,G(i.d,null,G(c.a,{slogan:"Iya",title:"Tools"}),G(s.a,{title:"FAQ'S | E-Device Portal BNI "}),G(U,null))))}},mrSG:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return a})),e.d(t,"d",(function(){return i})),e.d(t,"g",(function(){return u})),e.d(t,"c",(function(){return c})),e.d(t,"e",(function(){return s})),e.d(t,"f",(function(){return l}));var r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)};function o(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}var a=function(){return(a=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)};function i(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e}function u(n){var t="function"===typeof Symbol&&Symbol.iterator,e=t&&n[t],r=0;if(e)return e.call(n);if(n&&"number"===typeof n.length)return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(n,t){var e="function"===typeof Symbol&&n[Symbol.iterator];if(!e)return n;var r,o,a=e.call(n),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return i}function s(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(c(arguments[t]));return n}function l(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length;var r=Array(n),o=0;for(t=0;t<e;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)r[o]=a[i];return r}},yTye:function(n,t){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC4zMjggOC43NzRhMS4wNDcgMS4wNDcgMCAwMS0uNzM1LS4zMjRMMS4yODggMS44NThBMS4wNSAxLjA1IDAgMTEyLjgwNy40MDZMOC4zODUgNi4yNCAxNC4yMTcuNjYxYTEuMDUgMS4wNSAwIDAxMS40NTIgMS41MThMOS4wNzggOC40ODRjLS4yMS4yLS40OC4yOTYtLjc1LjI5eiIgZmlsbD0iIzAyMDczRSIvPjwvc3ZnPg=="}},[["3HE9",0,2,4,5,7,1,3]]]);