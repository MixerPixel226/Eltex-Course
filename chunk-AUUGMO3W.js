import{e as hi,g as tt,h as be}from"./chunk-P5HJXLLW.js";import{a as ai,b as bt,c as si,d as li,e as di,g as ci,i as mi,j as ui,k as he,l as fi,m as pi}from"./chunk-H2KU7UZT.js";import{A as ri,B as Z,b as Xn,c as Jn,d as ti,k as ei,o as ni,t as pe,u as Mt,v as St,x as ii,y as Q,z as oi}from"./chunk-6AVRHEWP.js";import{Aa as On,Ab as zt,Bb as z,C as Mn,Ca as Ln,D as ce,Da as Nn,Db as R,Ea as Pn,Eb as J,Fb as x,Gb as Vn,H as Sn,Hb as ze,Ib as F,Jb as A,Kb as qn,Lb as $n,M as kn,Mb as He,Nb as Ht,O as In,Ob as k,P as Rn,Pb as Gn,Q as Fn,Qb as S,Ra as Bn,Rb as Et,S as vt,Sb as jt,Ta as f,X as b,Y as L,Ya as xt,Za as ut,Zb as ht,_,_a as zn,_b as Wn,a as y,aa as s,b as V,bc as Tt,cb as M,db as P,e as Xo,eb as C,f as wn,fa as at,fb as Be,ga as st,gb as fe,gc as Ut,h as K,hc as Kn,i as j,ib as Hn,j as Cn,ja as Pe,ka as yt,la as An,lc as Yn,m as En,mb as ft,na as me,nb as E,nc as lt,oa as w,ob as T,oc as Qn,pc as Zn,q as Tn,qb as jn,rb as Un,sa as mt,sb as q,tb as m,ua as ue,ub as u,v as Y,va as Dn,vb as I,wb as wt,xb as Ct,ya as N,yb as pt,zb as Bt}from"./chunk-YSA7DVOS.js";var Jo=["*"];var tr=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],er=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],nr=new _("MAT_CARD_CONFIG"),bi=(()=>{class i{appearance;constructor(){let t=s(nr,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(e,o){e&2&&k("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Jo,decls:1,vars:0,template:function(e,o){e&1&&(J(),x(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return i})(),gi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return i})();var _i=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return i})();var vi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:er,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(e,o){e&1&&(J(tr),x(0),wt(1,"div",0),x(2,1),Ct(),x(3,2))},encapsulation:2,changeDetection:0})}return i})(),yi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,selectors:[["mat-card-footer"]],hostAttrs:[1,"mat-mdc-card-footer"]})}return i})();var xi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-mdc-card-avatar"]})}return i})();var wi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=P({type:i});static \u0275inj=L({imports:[Q]})}return i})();var je=new _("HISTORY_CARD_SERVICE_TOKEN");var ge=class i{getHistoryFromServer(n){return new K(t=>{let o=JSON.parse(localStorage.getItem(pe)??"[]").find(r=>r.id===n);if(!o){t.error({message:"\u041D\u0435\u0442 \u0442\u0430\u043A\u0438\u0445"});return}t.next(o),t.complete()})}getCommentsFromServer(n){return new K(t=>{let o=JSON.parse(localStorage.getItem(Mt)??"[]").filter(r=>r.articleId===n);t.next(o),t.complete()})}addCommentsOnServer(n){return new K(t=>{let e=JSON.parse(localStorage.getItem(Mt)??"[]"),o=V(y({},n),{id:crypto.randomUUID(),rating:0,createdAt:new Date().toDateString()});e.push(o),localStorage.setItem(Mt,JSON.stringify(e)),t.next(o),t.complete()})}likeCommentOnServer(n,t){return new K(e=>{let o=JSON.parse(localStorage.getItem(Mt)??"[]"),r,a=o.map(l=>{if(l.id===n){let d=l.rating??0,p=t?d+1:d-1;return r=V(y({},l),{rating:p}),r}return l});localStorage.setItem(Mt,JSON.stringify(a)),r?e.next(r):e.error(new Error("Comment not found")),e.complete()})}likeHistoryOnServer(n,t){return new K(e=>{let o=JSON.parse(localStorage.getItem(pe)??"[]"),r,a=o.map(l=>{if(l.id===n){let d=l.rating??0,p=t?d+1:d-1;return r=V(y({},l),{rating:p}),r}return l});localStorage.setItem(pe,JSON.stringify(a)),r?e.next(r):e.error(new Error("History not found")),e.complete()})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=b({token:i,factory:i.\u0275fac})};var Vt=class i{constructor(){}_history=mt(null);history=this._history.asReadonly();_comments=mt([]);comments=this._comments.asReadonly();setHistory(n){this._history.set(n)}setComments(n){this._comments.set(n)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=b({token:i,factory:i.\u0275fac})};function qt(i){return i.buttons===0||i.detail===0}function $t(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Ue;function Ci(){if(Ue==null){let i=typeof document<"u"?document.head:null;Ue=!!(i&&(i.createShadowRoot||i.attachShadow))}return Ue}function Ve(i){if(Ci()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function $(i){return i.composedPath?i.composedPath()[0]:i.target}var qe;try{qe=typeof Intl<"u"&&Intl.v8BreakIterator}catch{qe=!1}var D=(()=>{class i{_platformId=s(Ln);isBrowser=this._platformId?ti(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||qe)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Gt;function Ei(){if(Gt==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Gt=!0}))}finally{Gt=Gt||!1}return Gt}function kt(i){return Ei()?i:!!i.capture}function G(i){return i instanceof N?i.nativeElement:i}var Ti=new _("cdk-input-modality-detector-options"),Mi={ignoreKeys:[18,17,224,91,16]},Si=650,$e={passive:!0,capture:!0},ki=(()=>{class i{_platform=s(D);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Cn(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=$(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Si||(this._modality.next(qt(t)?"keyboard":"mouse"),this._mostRecentTarget=$(t))};_onTouchstart=t=>{if($t(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=$(t)};constructor(){let t=s(w),e=s(yt),o=s(Ti,{optional:!0});if(this._options=y(y({},Mi),o),this.modalityDetected=this._modality.pipe(Rn(1)),this.modalityChanged=this.modalityDetected.pipe(Sn()),this._platform.isBrowser){let r=s(xt).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(e,"keydown",this._onKeydown,$e),r.listen(e,"mousedown",this._onMousedown,$e),r.listen(e,"touchstart",this._onTouchstart,$e)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||i)};static \u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Wt=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(Wt||{}),Ii=new _("cdk-focus-monitor-default-options"),_e=kt({passive:!0,capture:!0}),Ge=(()=>{class i{_ngZone=s(w);_platform=s(D);_inputModalityDetector=s(ki);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(yt);_stopInputModalityDetector=new j;constructor(){let t=s(Ii,{optional:!0});this._detectionMode=t?.detectionMode||Wt.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=$(t);for(let o=e;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,e=!1){let o=G(t);if(!this._platform.isBrowser||o.nodeType!==1)return Tn();let r=Ve(o)||this._document,a=this._elementInfo.get(o);if(a)return e&&(a.checkChildren=!0),a.subject;let l={checkChildren:e,subject:new j,rootNode:r};return this._elementInfo.set(o,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(t){let e=G(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){let r=G(t),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([l,d])=>this._originChanged(l,e,d)):(this._setOrigin(e),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===Wt.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===Wt.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Si:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,e){let o=this._elementInfo.get(e),r=$(t);!o||!o.checkChildren&&e!==r||this._originChanged(e,this._getFocusOrigin(r),o)}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,_e),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,_e)}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(vt(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,_e),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,_e),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,r)=>{(r===t||o.checkChildren&&r.contains(t))&&e.push([r,o])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ri=new Set,gt,We=(()=>{class i{_platform=s(D);_nonce=s(Pn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):rr}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&or(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function or(i,n){if(!Ri.has(i))try{gt||(gt=document.createElement("style"),n&&gt.setAttribute("nonce",n),gt.setAttribute("type","text/css"),document.head.appendChild(gt)),gt.sheet&&(gt.sheet.insertRule(`@media ${i} {body{ }}`,0),Ri.add(i))}catch(t){console.error(t)}}function rr(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var ar=(()=>{class i{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Fi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=P({type:i});static \u0275inj=L({providers:[ar]})}return i})();var Ke={},et=class i{_appId=s(On);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){return this._appId!=="ng"&&(n+=this._appId),Ke.hasOwnProperty(n)||(Ke[n]=0),`${n}${t?i._infix+"-":""}${Ke[n]++}`}static \u0275fac=function(t){return new(t||i)};static \u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"})};function It(i){return i!=null&&`${i}`!="false"}var Rt,Ai=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ye(){if(Rt)return Rt;if(typeof document!="object"||!document)return Rt=new Set(Ai),Rt;let i=document.createElement("input");return Rt=new Set(Ai.filter(n=>(i.setAttribute("type",n),i.type===n))),Rt}var Qe=class{_box;_destroyed=new j;_resizeSubject=new j;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new K(t=>{let e=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),e.unsubscribe(),this._elementObservables.delete(n)}}).pipe(ce(t=>t.some(e=>e.target===n)),In({bufferSize:1,refCount:!0}),vt(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Di=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=s(w);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,e){let o=e?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new Qe(o)),this._observers.get(o).observe(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var lr=new _("MATERIAL_ANIMATIONS"),Oi=null;function dr(){return s(lr,{optional:!0})?.animationsDisabled||s(Nn,{optional:!0})==="NoopAnimations"?"di-disabled":(Oi??=s(We).matchMedia("(prefers-reduced-motion)").matches,Oi?"reduced-motion":"enabled")}function Ft(){return dr()!=="enabled"}var cr=["notch"],mr=["matFormFieldNotchedOutline",""],ur=["*"],Li=["iconPrefixContainer"],Ni=["textPrefixContainer"],Pi=["iconSuffixContainer"],Bi=["textSuffixContainer"],fr=["textField"],pr=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],hr=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function br(i,n){i&1&&I(0,"span",21)}function gr(i,n){if(i&1&&(m(0,"label",20),x(1,1),E(2,br,1,0,"span",21),u()),i&2){let t=R(2);q("floating",t._shouldLabelFloat())("monitorResize",t._hasOutline())("id",t._labelId),ft("for",t._control.disableAutomaticLabeling?null:t._control.id),f(2),T(!t.hideRequiredMarker&&t._control.required?2:-1)}}function _r(i,n){if(i&1&&E(0,gr,3,5,"label",20),i&2){let t=R();T(t._hasFloatingLabel()?0:-1)}}function vr(i,n){i&1&&I(0,"div",7)}function yr(i,n){}function xr(i,n){if(i&1&&fe(0,yr,0,0,"ng-template",13),i&2){R(2);let t=Ht(1);q("ngTemplateOutlet",t)}}function wr(i,n){if(i&1&&(m(0,"div",9),E(1,xr,1,1,null,13),u()),i&2){let t=R();q("matFormFieldNotchedOutlineOpen",t._shouldLabelFloat()),f(),T(t._forceDisplayInfixLabel()?-1:1)}}function Cr(i,n){i&1&&(m(0,"div",10,2),x(2,2),u())}function Er(i,n){i&1&&(m(0,"div",11,3),x(2,3),u())}function Tr(i,n){}function Mr(i,n){if(i&1&&fe(0,Tr,0,0,"ng-template",13),i&2){R();let t=Ht(1);q("ngTemplateOutlet",t)}}function Sr(i,n){i&1&&(m(0,"div",14,4),x(2,4),u())}function kr(i,n){i&1&&(m(0,"div",15,5),x(2,5),u())}function Ir(i,n){i&1&&I(0,"div",16)}function Rr(i,n){i&1&&(m(0,"div",18),x(1,6),u())}function Fr(i,n){if(i&1&&(m(0,"mat-hint",22),S(1),u()),i&2){let t=R(2);q("id",t._hintLabelId),f(),Et(t.hintLabel)}}function Ar(i,n){if(i&1&&(m(0,"div",19),E(1,Fr,2,2,"mat-hint",22),x(2,7),I(3,"div",23),x(4,8),u()),i&2){let t=R();f(),T(t.hintLabel?1:-1)}}var Kt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,selectors:[["mat-label"]]})}return i})(),$i=new _("MatError"),Xe=(()=>{class i{id=s(et).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(e,o){e&2&&zt("id",o.id)},inputs:{id:"id"},features:[ht([{provide:$i,useExisting:i}])]})}return i})(),Ze=(()=>{class i{align="start";id=s(et).getId("mat-mdc-hint-");static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(e,o){e&2&&(zt("id",o.id),ft("align",null),k("mat-mdc-form-field-hint-end",o.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),Dr=new _("MatPrefix");var Or=new _("MatSuffix");var Gi=new _("FloatingLabelParent"),zi=(()=>{class i{_elementRef=s(N);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(Di);_ngZone=s(w);_parent=s(Gi);_resizeSubscription=new wn;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Lr(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(e,o){e&2&&k("mdc-floating-label--float-above",o.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Lr(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let t=n.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let e=t.scrollWidth;return t.remove(),e}var Hi="mdc-line-ripple--active",ve="mdc-line-ripple--deactivating",ji=(()=>{class i{_elementRef=s(N);_cleanupTransitionEnd;constructor(){let t=s(w),e=s(ut);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=e.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(ve),t.add(Hi)}deactivate(){this._elementRef.nativeElement.classList.add(ve)}_handleTransitionEnd=t=>{let e=this._elementRef.nativeElement.classList,o=e.contains(ve);t.propertyName==="opacity"&&o&&e.remove(Hi,ve)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Ui=(()=>{class i{_elementRef=s(N);_ngZone=s(w);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,e=t.querySelector(".mdc-floating-label");e?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(e.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>e.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let e=this._notch.nativeElement;!this.open||!t?e.style.width="":e.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(e,o){if(e&1&&ze(cr,5),e&2){let r;F(r=A())&&(o._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(e,o){e&2&&k("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:mr,ngContentSelectors:ur,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(e,o){e&1&&(J(),pt(0,"div",1),wt(1,"div",2,0),x(3),Ct(),pt(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),Je=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i})}return i})();var tn=new _("MatFormField"),Nr=new _("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Vi="fill",Pr="auto",qi="fixed",Br="translateY(-50%)",ye=(()=>{class i{_elementRef=s(N);_changeDetectorRef=s(Yn);_platform=s(D);_idGenerator=s(et);_ngZone=s(w);_defaults=s(Nr,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ut("iconPrefixContainer");_textPrefixContainerSignal=Ut("textPrefixContainer");_iconSuffixContainerSignal=Ut("iconSuffixContainer");_textSuffixContainerSignal=Ut("textSuffixContainer");_prefixSuffixContainers=Tt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Kn(Kt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=It(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Pr}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let e=t||this._defaults?.appearance||Vi;this._appearanceSignal.set(e)}_appearanceSignal=mt(Vi);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||qi}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||qi}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new j;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ft();constructor(){let t=this._defaults,e=s(ii);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),ue(()=>this._currentDirection=e.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Tt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let e=this._control,o="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(o+t.controlType),e.controlType&&this._elementRef.nativeElement.classList.add(o+e.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=e.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=e.stateChanges.pipe(Fn([void 0,void 0]),Y(()=>[e.errorState,e.userAriaDescribedBy]),kn(),ce(([[r,a],[l,d]])=>r!==l||a!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),e.ngControl&&e.ngControl.valueChanges&&(this._valueChanges=e.ngControl.valueChanges.pipe(vt(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Mn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){Zn({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Tt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let e=this._control?this._control.ngControl:null;return e&&e[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,a=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;r?t.push(r.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(r=>r.id));let e=this._control.describedByIds,o;if(e){let r=this._describedByIds||t;o=t.concat(e.filter(a=>a&&!r.includes(a)))}else o=t;this._control.setDescribedByIds(o),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,e=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,l=e?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,p=r?.getBoundingClientRect().width??0,h=this._currentDirection==="rtl"?"-1":"1",B=`${a+l}px`,le=`calc(${h} * (${B} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Pt=`var(--mat-mdc-form-field-label-transform, ${Br} translateX(${le}))`,X=a+l+d+p;return[Pt,X]}_writeOutlinedLabelStyles(t){if(t!==null){let[e,o]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=e),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let e=t.getRootNode();return e&&e!==t}return document.documentElement.contains(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["mat-form-field"]],contentQueries:function(e,o,r){if(e&1&&(qn(r,o._labelChild,Kt,5),Vn(r,Je,5)(r,Dr,5)(r,Or,5)(r,$i,5)(r,Ze,5)),e&2){He();let a;F(a=A())&&(o._formFieldControl=a.first),F(a=A())&&(o._prefixChildren=a),F(a=A())&&(o._suffixChildren=a),F(a=A())&&(o._errorChildren=a),F(a=A())&&(o._hintChildren=a)}},viewQuery:function(e,o){if(e&1&&($n(o._iconPrefixContainerSignal,Li,5)(o._textPrefixContainerSignal,Ni,5)(o._iconSuffixContainerSignal,Pi,5)(o._textSuffixContainerSignal,Bi,5),ze(fr,5)(Li,5)(Ni,5)(Pi,5)(Bi,5)(zi,5)(Ui,5)(ji,5)),e&2){He(4);let r;F(r=A())&&(o._textField=r.first),F(r=A())&&(o._iconPrefixContainer=r.first),F(r=A())&&(o._textPrefixContainer=r.first),F(r=A())&&(o._iconSuffixContainer=r.first),F(r=A())&&(o._textSuffixContainer=r.first),F(r=A())&&(o._floatingLabel=r.first),F(r=A())&&(o._notchedOutline=r.first),F(r=A())&&(o._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(e,o){e&2&&k("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ht([{provide:tn,useExisting:i},{provide:Gi,useExisting:i}])],ngContentSelectors:hr,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(e,o){if(e&1&&(J(pr),fe(0,_r,1,1,"ng-template",null,0,Wn),m(2,"div",6,1),z("click",function(a){return o._control.onContainerClick(a)}),E(4,vr,1,0,"div",7),m(5,"div",8),E(6,wr,2,2,"div",9),E(7,Cr,3,0,"div",10),E(8,Er,3,0,"div",11),m(9,"div",12),E(10,Mr,1,1,null,13),x(11),u(),E(12,Sr,3,0,"div",14),E(13,kr,3,0,"div",15),u(),E(14,Ir,1,0,"div",16),u(),m(15,"div",17),E(16,Rr,2,0,"div",18)(17,Ar,5,1,"div",19),u()),e&2){let r;f(2),k("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),f(2),T(!o._hasOutline()&&!o._control.disabled?4:-1),f(2),T(o._hasOutline()?6:-1),f(),T(o._hasIconPrefix?7:-1),f(),T(o._hasTextPrefix?8:-1),f(2),T(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),f(2),T(o._hasTextSuffix?12:-1),f(),T(o._hasIconSuffix?13:-1),f(),T(o._hasOutline()?-1:14),f(),k("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();f(),T((r=a)==="error"?16:r==="hint"?17:-1)}},dependencies:[zi,Ui,Xn,ji,Ze],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var Yt=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=P({type:i});static \u0275inj=L({imports:[Fi,ye,Q]})}return i})();var Hr=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),jr={passive:!0},Wi=(()=>{class i{_platform=s(D);_ngZone=s(w);_renderer=s(xt).createRenderer(null,null);_styleLoader=s(St);_monitoredElements=new Map;constructor(){}monitor(t){if(!this._platform.isBrowser)return En;this._styleLoader.load(Hr);let e=G(t),o=this._monitoredElements.get(e);if(o)return o.subject;let r=new j,a="cdk-text-field-autofilled",l=p=>{p.animationName==="cdk-text-field-autofill-start"&&!e.classList.contains(a)?(e.classList.add(a),this._ngZone.run(()=>r.next({target:p.target,isAutofilled:!0}))):p.animationName==="cdk-text-field-autofill-end"&&e.classList.contains(a)&&(e.classList.remove(a),this._ngZone.run(()=>r.next({target:p.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(e.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(e,"animationstart",l,jr)));return this._monitoredElements.set(e,{subject:r,unlisten:d}),r}stopMonitoring(t){let e=G(t),o=this._monitoredElements.get(e);o&&(o.unlisten(),o.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ki=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=P({type:i});static \u0275inj=L({})}return i})();var Yi=new _("MAT_INPUT_VALUE_ACCESSOR");var Qi=(()=>{class i{isErrorState(t,e){return!!(t&&t.invalid&&(t.touched||e&&e.submitted))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var xe=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,t,e,o,r){this._defaultMatcher=n,this.ngControl=t,this._parentFormGroup=e,this._parentForm=o,this._stateChanges=r}updateErrorState(){let n=this.errorState,t=this._parentFormGroup||this._parentForm,e=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=e?.isErrorState(o,t)??!1;r!==n&&(this.errorState=r,this._stateChanges.next())}};var Ur=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Vr=new _("MAT_INPUT_CONFIG"),Zi=(()=>{class i{_elementRef=s(N);_platform=s(D);ngControl=s(si,{optional:!0,self:!0});_autofillMonitor=s(Wi);_ngZone=s(w);_formField=s(tn,{optional:!0});_renderer=s(ut);_uid=s(et).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(Vr,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new j;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=It(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(bt.required)??!1}set required(t){this._required=It(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&Ye().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=It(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>Ye().has(t));constructor(){let t=s(ci,{optional:!0}),e=s(he,{optional:!0}),o=s(Qi),r=s(Yi,{optional:!0,self:!0}),a=this._elementRef.nativeElement,l=a.nodeName.toLowerCase();r?Hn(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new xe(o,this.ngControl,e,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ue(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let e=this._elementRef.nativeElement;e.type==="number"?(e.type="text",e.setSelectionRange(0,0),e.type="number"):e.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let e=this._elementRef.nativeElement;this._previousPlaceholder=t,t?e.setAttribute("placeholder",t):e.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Ur.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,e=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&e&&e.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let e=t.target;!e.value&&e.selectionStart===0&&e.selectionEnd===0&&(e.setSelectionRange(1,1),e.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(e,o){e&1&&z("focus",function(){return o._focusChanged(!0)})("blur",function(){return o._focusChanged(!1)})("input",function(){return o._onInput()}),e&2&&(zt("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),ft("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),k("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",lt]},exportAs:["matInput"],features:[ht([{provide:Je,useExisting:i}]),Dn]})}return i})(),Xi=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=P({type:i});static \u0275inj=L({imports:[Yt,Yt,Ki,Q]})}return i})();var U=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(U||{}),en=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=U.HIDDEN;constructor(n,t,e,o=!1){this._renderer=n,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},Ji=kt({passive:!0,capture:!0}),nn=class{_events=new Map;addHandler(n,t,e,o){let r=this._events.get(t);if(r){let a=r.get(e);a?a.add(o):r.set(e,new Set([o]))}else this._events.set(t,new Map([[e,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Ji)})}removeHandler(n,t,e){let o=this._events.get(n);if(!o)return;let r=o.get(t);r&&(r.delete(e),r.size===0&&o.delete(t),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Ji)))}_delegateEventHandler=n=>{let t=$(n);t&&this._events.get(n.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(r=>r.handleEvent(n))})}},Qt={enterDuration:225,exitDuration:150},$r=800,to=kt({passive:!0,capture:!0}),eo=["mousedown","touchstart"],no=["mouseup","mouseleave","touchend","touchcancel"],Gr=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),we=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new nn;constructor(n,t,e,o,r){this._target=n,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=G(e)),r&&r.get(St).load(Gr)}fadeInRipple(n,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=y(y({},Qt),e.animation);e.centered&&(n=o.left+o.width/2,t=o.top+o.height/2);let a=e.radius||Wr(n,t,o),l=n-o.left,d=t-o.top,p=r.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${l-a}px`,h.style.top=`${d-a}px`,h.style.height=`${a*2}px`,h.style.width=`${a*2}px`,e.color!=null&&(h.style.backgroundColor=e.color),h.style.transitionDuration=`${p}ms`,this._containerElement.appendChild(h);let B=window.getComputedStyle(h),rt=B.transitionProperty,le=B.transitionDuration,Pt=rt==="none"||le==="0s"||le==="0s, 0s"||o.width===0&&o.height===0,X=new en(this,h,e,Pt);h.style.transform="scale3d(1, 1, 1)",X.state=U.FADING_IN,e.persistent||(this._mostRecentTransientRipple=X);let de=null;return!Pt&&(p||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let yn=()=>{de&&(de.fallbackTimer=null),clearTimeout(xn),this._finishRippleTransition(X)},Ne=()=>this._destroyRipple(X),xn=setTimeout(Ne,p+100);h.addEventListener("transitionend",yn),h.addEventListener("transitioncancel",Ne),de={onTransitionEnd:yn,onTransitionCancel:Ne,fallbackTimer:xn}}),this._activeRipples.set(X,de),(Pt||!p)&&this._finishRippleTransition(X),X}fadeOutRipple(n){if(n.state===U.FADING_OUT||n.state===U.HIDDEN)return;let t=n.element,e=y(y({},Qt),n.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",n.state=U.FADING_OUT,(n._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=G(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,eo.forEach(e=>{i._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{no.forEach(t=>{this._triggerElement.addEventListener(t,this,to)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===U.FADING_IN?this._startFadeOutTransition(n):n.state===U.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:e}=n.config;n.state=U.VISIBLE,!e&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=U.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=qt(n),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+$r;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!$t(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===U.VISIBLE||n.config.terminateOnPointerUp&&n.state===U.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(eo.forEach(t=>i._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(no.forEach(t=>n.removeEventListener(t,this,to)),this._pointerUpEventsRegistered=!1))}};function Wr(i,n,t){let e=Math.max(Math.abs(i-t.left),Math.abs(i-t.right)),o=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(e*e+o*o)}var io=new _("mat-ripple-global-options");var Kr={capture:!0},Yr=["focus","mousedown","mouseenter","touchstart"],on="mat-ripple-loader-uninitialized",rn="mat-ripple-loader-class-name",oo="mat-ripple-loader-centered",Ce="mat-ripple-loader-disabled",ro=(()=>{class i{_document=s(yt);_animationsDisabled=Ft();_globalRippleOptions=s(io,{optional:!0});_platform=s(D);_ngZone=s(w);_injector=s(Pe);_eventCleanups;_hosts=new Map;constructor(){let t=s(xt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Yr.map(e=>t.listen(this._document,e,this._onInteraction,Kr)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(on,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(rn))&&t.setAttribute(rn,e.className||""),e.centered&&t.setAttribute(oo,""),e.disabled&&t.setAttribute(Ce,"")}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):e?t.setAttribute(Ce,""):t.removeAttribute(Ce)}_onInteraction=t=>{let e=$(t);if(e instanceof HTMLElement){let o=e.closest(`[${on}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(rn)),t.append(e);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??Qt.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??Qt.exitDuration,l={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(Ce),rippleConfig:{centered:t.hasAttribute(oo),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},d=new we(l,this._ngZone,e,this._platform,this._injector),p=!l.rippleDisabled;p&&d.setupTriggerEvents(t),this._hosts.set(t,{target:l,renderer:d,hasSetUpEvents:p}),t.removeAttribute(on)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ao=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Qr=new _("MAT_BUTTON_CONFIG");function so(i){return i==null?void 0:Qn(i)}var lo=(()=>{class i{_elementRef=s(N);_ngZone=s(w);_animationsDisabled=Ft();_config=s(Qr,{optional:!0});_focusMonitor=s(Ge);_cleanupClick;_renderer=s(ut);_rippleLoader=s(ro);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){s(St).load(ao);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=C({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,o){e&2&&(ft("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),Gn(o.color?"mat-"+o.color:""),k("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",lt],disabled:[2,"disabled","disabled",lt],ariaDisabled:[2,"aria-disabled","ariaDisabled",lt],disabledInteractive:[2,"disabledInteractive","disabledInteractive",lt],tabIndex:[2,"tabIndex","tabIndex",so],_tabindex:[2,"tabindex","_tabindex",so]}})}return i})();var co=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=P({type:i});static \u0275inj=L({imports:[Q]})}return i})();var Zr=["matButton",""],Xr=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Jr=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var mo=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),uo=(()=>{class i extends lo{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=ta(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,o=this._appearance?mo.get(this._appearance):null,r=mo.get(t);o&&e.remove(...o),e.add(...r),this._appearance=t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Be],attrs:Zr,ngContentSelectors:Jr,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(J(Xr),pt(0,"span",0),x(1),wt(2,"span",1),x(3,1),Ct(),x(4,2),pt(5,"span",2)(6,"span",3)),e&2&&k("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function ta(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var fo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=P({type:i});static \u0275inj=L({imports:[co,Q]})}return i})();function ia(i,n){i&1&&(m(0,"mat-error"),S(1," \u0418\u043C\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E "),u())}function oa(i,n){i&1&&(m(0,"mat-error"),S(1," \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F "),u())}var Ee=class i{constructor(n){this.fb=n;this.commentForm=this.fb.group({username:["",[bt.required,bt.minLength(2)]],content:["",[bt.required,bt.maxLength(500)]]})}idHis;submitted=new me;commentForm;onSend(n){if(this.commentForm.valid){let t=V(y({},this.commentForm.value),{articleId:this.idHis});this.submitted.emit(t),n.resetForm()}}static \u0275fac=function(t){return new(t||i)(zn(fi))};static \u0275cmp=M({type:i,selectors:[["app-comment-form"]],inputs:{idHis:"idHis"},outputs:{submitted:"submitted"},decls:16,vars:3,consts:[["formDirective","ngForm"],[1,"comment-form",3,"ngSubmit","formGroup"],["appearance","outline",1,"full-width"],["matInput","","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F","formControlName","username"],["matInput","","placeholder","\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432","formControlName","content","rows","4"],["mat-flat-button","","color","primary","type","submit"]],template:function(t,e){if(t&1){let o=Bt();m(0,"h2"),S(1,"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),u(),m(2,"form",1,0),z("ngSubmit",function(){at(o);let a=Ht(3);return st(e.onSend(a))}),m(4,"mat-form-field",2)(5,"mat-label"),S(6,"\u0418\u043C\u044F"),u(),I(7,"input",3),E(8,ia,2,0,"mat-error"),u(),m(9,"mat-form-field",2)(10,"mat-label"),S(11,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),u(),I(12,"textarea",4),E(13,oa,2,0,"mat-error"),u(),m(14,"button",5),S(15,"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"),u()()}if(t&2){let o,r;f(2),q("formGroup",e.commentForm),f(6),T((o=e.commentForm.get("username"))!=null&&o.hasError("required")?8:-1),f(5),T((r=e.commentForm.get("text"))!=null&&r.hasError("required")?13:-1)}},dependencies:[Jn,pi,mi,ai,li,di,he,ui,Yt,ye,Kt,Xe,Xi,Zi,fo,uo],styles:["h2[_ngcontent-%COMP%]{font-size:20px}.comment-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;max-width:500px;margin:20px 0}.comment-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:100%}.comment-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-start;padding:0 32px}[_nghost-%COMP%]{display:block;width:100%}.comment-form[_ngcontent-%COMP%]     .mat-mdc-form-field-flex input, .comment-form[_ngcontent-%COMP%]     .mat-mdc-form-field-flex textarea, .comment-form[_ngcontent-%COMP%]     .mat-mdc-form-field-flex .mat-mdc-floating-label{color:#fff!important}.comment-form[_ngcontent-%COMP%]     .mdc-outlined-intrinsic-outline{border-color:#ffffff4d!important}.comment-form[_ngcontent-%COMP%]     .mat-mdc-form-field:hover .mdc-outlined-intrinsic-outline{border-color:#fff!important}.comment-form[_ngcontent-%COMP%]     input::placeholder, .comment-form[_ngcontent-%COMP%]     textarea::placeholder{color:#ffffff80!important}"]})};var po=tt`
  query GetArticle($id: ID!) {
    article(id: $id) {
      id
      title
      content
      imgSrc
      category {
        id
      }
      rating
    }
  }
`,ho=tt`
  mutation ArticleRatingUp($id: ID!) {
    articleRatingUp(id: $id) {
      avgRating
      categoryId
      content
      createdAt
      id
      imgSrc
      rating
      title
      updatedAt
      votes
      votesCount
    }
  }
`,bo=tt`
  mutation ArticleRatingDown($id: ID!) {
    articleRatingDown(id: $id) {
      avgRating
      categoryId
      content
      createdAt
      id
      imgSrc
      rating
      title
      updatedAt
      votes
      votesCount
    }
  }
`;var go=tt`
  query GetComments($articleId: ID!) {
    commentsByArticle(articleId: $articleId) {
      articleId
      avgRating
      content
      createdAt
      id
      rating
      username
      votesCount
      votes
    }
  }
`,_o=tt`
  mutation CreateComment($articleId: String!, $content: String!, $username: String!) {
    createComment(
      createComment: { articleId: $articleId, content: $content, username: $username }
    ) {
      articleId
      avgRating
      content
      createdAt
      id
      rating
      username
      votes
      votesCount
    }
  }
`,vo=tt`
  mutation CommentRatingUp($id: ID!) {
    commentRatingUp(id: $id) {
      articleId
      avgRating
      content
      createdAt
      id
      rating
      username
      votes
      votesCount
    }
  }
`,yo=tt`
  mutation CommentRatingDown($id: ID!) {
    commentRatingDown(id: $id) {
      articleId
      avgRating
      content
      createdAt
      id
      rating
      username
      votes
      votesCount
    }
  }
`;var Te=class i{apollo=s(hi);getHistoryFromServer(n){return this.apollo.query({query:po,variables:{id:n}}).pipe(Y(t=>t.data?.article??null))}getCommentsFromServer(n){return this.apollo.query({query:go,variables:{articleId:n}}).pipe(Y(t=>t.data?.commentsByArticle??null))}addCommentsOnServer(n){return this.apollo.mutate({mutation:_o,variables:y({},n)}).pipe(Y(t=>t.data?.createComment??null))}likeCommentOnServer(n,t){let e=t?vo:yo;return this.apollo.mutate({mutation:e,variables:{id:n}}).pipe(Y(o=>{if(!o.data)return null;let r=t?"commentRatingUp":"commentRatingDown";return o.data[r]??null}))}likeHistoryOnServer(n,t){let e=t?ho:bo;return this.apollo.mutate({mutation:e,variables:{id:n}}).pipe(Y(o=>{if(!o.data)return null;let r=t?"articleRatingUp":"articleRatingDown";return o.data[r]??null}))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=b({token:i,factory:i.\u0275fac})};var W=Object.create(null);W.open="0";W.close="1";W.ping="2";W.pong="3";W.message="4";W.upgrade="5";W.noop="6";var Zt=Object.create(null);Object.keys(W).forEach(i=>{Zt[W[i]]=i});var Xt={type:"error",data:"parser error"};var Co=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Eo=typeof ArrayBuffer=="function",To=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,Jt=({type:i,data:n},t,e)=>Co&&n instanceof Blob?t?e(n):xo(n,e):Eo&&(n instanceof ArrayBuffer||To(n))?t?e(n):xo(new Blob([n]),e):e(W[i]+(n||"")),xo=(i,n)=>{let t=new FileReader;return t.onload=function(){let e=t.result.split(",")[1];n("b"+(e||""))},t.readAsDataURL(i)};function wo(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}var an;function Mo(i,n){if(Co&&i.data instanceof Blob)return i.data.arrayBuffer().then(wo).then(n);if(Eo&&(i.data instanceof ArrayBuffer||To(i.data)))return n(wo(i.data));Jt(i,!1,t=>{an||(an=new TextEncoder),n(an.encode(t))})}var So="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",te=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<So.length;i++)te[So.charCodeAt(i)]=i;var ko=i=>{let n=i.length*.75,t=i.length,e,o=0,r,a,l,d;i[i.length-1]==="="&&(n--,i[i.length-2]==="="&&n--);let p=new ArrayBuffer(n),h=new Uint8Array(p);for(e=0;e<t;e+=4)r=te[i.charCodeAt(e)],a=te[i.charCodeAt(e+1)],l=te[i.charCodeAt(e+2)],d=te[i.charCodeAt(e+3)],h[o++]=r<<2|a>>4,h[o++]=(a&15)<<4|l>>2,h[o++]=(l&3)<<6|d&63;return p};var ra=typeof ArrayBuffer=="function",ee=(i,n)=>{if(typeof i!="string")return{type:"message",data:Io(i,n)};let t=i.charAt(0);return t==="b"?{type:"message",data:aa(i.substring(1),n)}:Zt[t]?i.length>1?{type:Zt[t],data:i.substring(1)}:{type:Zt[t]}:Xt},aa=(i,n)=>{if(ra){let t=ko(i);return Io(t,n)}else return{base64:!0,data:i}},Io=(i,n)=>n==="blob"?i instanceof Blob?i:new Blob([i]):i instanceof ArrayBuffer?i:i.buffer;var Ro="",Fo=(i,n)=>{let t=i.length,e=new Array(t),o=0;i.forEach((r,a)=>{Jt(r,!1,l=>{e[a]=l,++o===t&&n(e.join(Ro))})})},Ao=(i,n)=>{let t=i.split(Ro),e=[];for(let o=0;o<t.length;o++){let r=ee(t[o],n);if(e.push(r),r.type==="error")break}return e};function Do(){return new TransformStream({transform(i,n){Mo(i,t=>{let e=t.length,o;if(e<126)o=new Uint8Array(1),new DataView(o.buffer).setUint8(0,e);else if(e<65536){o=new Uint8Array(3);let r=new DataView(o.buffer);r.setUint8(0,126),r.setUint16(1,e)}else{o=new Uint8Array(9);let r=new DataView(o.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(e))}i.data&&typeof i.data!="string"&&(o[0]|=128),n.enqueue(o),n.enqueue(t)})}})}var sn;function Me(i){return i.reduce((n,t)=>n+t.length,0)}function Se(i,n){if(i[0].length===n)return i.shift();let t=new Uint8Array(n),e=0;for(let o=0;o<n;o++)t[o]=i[0][e++],e===i[0].length&&(i.shift(),e=0);return i.length&&e<i[0].length&&(i[0]=i[0].slice(e)),t}function Oo(i,n){sn||(sn=new TextDecoder);let t=[],e=0,o=-1,r=!1;return new TransformStream({transform(a,l){for(t.push(a);;){if(e===0){if(Me(t)<1)break;let d=Se(t,1);r=(d[0]&128)===128,o=d[0]&127,o<126?e=3:o===126?e=1:e=2}else if(e===1){if(Me(t)<2)break;let d=Se(t,2);o=new DataView(d.buffer,d.byteOffset,d.length).getUint16(0),e=3}else if(e===2){if(Me(t)<8)break;let d=Se(t,8),p=new DataView(d.buffer,d.byteOffset,d.length),h=p.getUint32(0);if(h>Math.pow(2,21)-1){l.enqueue(Xt);break}o=h*Math.pow(2,32)+p.getUint32(4),e=3}else{if(Me(t)<o)break;let d=Se(t,o);l.enqueue(ee(r?d:sn.decode(d),n)),e=0}if(o===0||o>i){l.enqueue(Xt);break}}}})}var ln=4;function g(i){if(i)return sa(i)}function sa(i){for(var n in g.prototype)i[n]=g.prototype[n];return i}g.prototype.on=g.prototype.addEventListener=function(i,n){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(n),this};g.prototype.once=function(i,n){function t(){this.off(i,t),n.apply(this,arguments)}return t.fn=n,this.on(i,t),this};g.prototype.off=g.prototype.removeListener=g.prototype.removeAllListeners=g.prototype.removeEventListener=function(i,n){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+i];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var e,o=0;o<t.length;o++)if(e=t[o],e===n||e.fn===n){t.splice(o,1);break}return t.length===0&&delete this._callbacks["$"+i],this};g.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var n=new Array(arguments.length-1),t=this._callbacks["$"+i],e=1;e<arguments.length;e++)n[e-1]=arguments[e];if(t){t=t.slice(0);for(var e=0,o=t.length;e<o;++e)t[e].apply(this,n)}return this};g.prototype.emitReserved=g.prototype.emit;g.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};g.prototype.hasListeners=function(i){return!!this.listeners(i).length};var nt=typeof Promise=="function"&&typeof Promise.resolve=="function"?n=>Promise.resolve().then(n):(n,t)=>t(n,0),O=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Lo="arraybuffer";function ke(i,...n){return n.reduce((t,e)=>(i.hasOwnProperty(e)&&(t[e]=i[e]),t),{})}var la=O.setTimeout,da=O.clearTimeout;function it(i,n){n.useNativeTimers?(i.setTimeoutFn=la.bind(O),i.clearTimeoutFn=da.bind(O)):(i.setTimeoutFn=O.setTimeout.bind(O),i.clearTimeoutFn=O.clearTimeout.bind(O))}var ca=1.33;function No(i){return typeof i=="string"?ma(i):Math.ceil((i.byteLength||i.size)*ca)}function ma(i){let n=0,t=0;for(let e=0,o=i.length;e<o;e++)n=i.charCodeAt(e),n<128?t+=1:n<2048?t+=2:n<55296||n>=57344?t+=3:(e++,t+=4);return t}function Ie(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Po(i){let n="";for(let t in i)i.hasOwnProperty(t)&&(n.length&&(n+="&"),n+=encodeURIComponent(t)+"="+encodeURIComponent(i[t]));return n}function Bo(i){let n={},t=i.split("&");for(let e=0,o=t.length;e<o;e++){let r=t[e].split("=");n[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return n}var Re=class extends Error{constructor(n,t,e){super(n),this.description=t,this.context=e,this.type="TransportError"}},ot=class extends g{constructor(n){super(),this.writable=!1,it(this,n),this.opts=n,this.query=n.query,this.socket=n.socket,this.supportsBinary=!n.forceBase64}onError(n,t,e){return super.emitReserved("error",new Re(n,t,e)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(n){this.readyState==="open"&&this.write(n)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(n){let t=ee(n,this.socket.binaryType);this.onPacket(t)}onPacket(n){super.emitReserved("packet",n)}onClose(n){this.readyState="closed",super.emitReserved("close",n)}pause(n){}createUri(n,t={}){return n+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){let n=this.opts.hostname;return n.indexOf(":")===-1?n:"["+n+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(n){let t=Po(n);return t.length?"?"+t:""}};var ne=class extends ot{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(n){this.readyState="pausing";let t=()=>{this.readyState="paused",n()};if(this._polling||!this.writable){let e=0;this._polling&&(e++,this.once("pollComplete",function(){--e||t()})),this.writable||(e++,this.once("drain",function(){--e||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(n){let t=e=>{if(this.readyState==="opening"&&e.type==="open"&&this.onOpen(),e.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(e)};Ao(n,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){let n=()=>{this.write([{type:"close"}])};this.readyState==="open"?n():this.once("open",n)}write(n){this.writable=!1,Fo(n,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let n=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Ie()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(n,t)}};var zo=!1;try{zo=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}var Ho=zo;function ua(){}var dn=class extends ne{constructor(n){if(super(n),typeof location<"u"){let t=location.protocol==="https:",e=location.port;e||(e=t?"443":"80"),this.xd=typeof location<"u"&&n.hostname!==location.hostname||e!==n.port}}doWrite(n,t){let e=this.request({method:"POST",data:n});e.on("success",t),e.on("error",(o,r)=>{this.onError("xhr post error",o,r)})}doPoll(){let n=this.request();n.on("data",this.onData.bind(this)),n.on("error",(t,e)=>{this.onError("xhr poll error",t,e)}),this.pollXhr=n}},Fe=(()=>{class i extends g{constructor(t,e,o){super(),this.createRequest=t,it(this,o),this._opts=o,this._method=o.method||"GET",this._uri=e,this._data=o.data!==void 0?o.data:null,this._create()}_create(){var t;let e=ke(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;let o=this._xhr=this.createRequest(e);try{o.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){o.setDisableHeaderCheck&&o.setDisableHeaderCheck(!0);for(let r in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(r)&&o.setRequestHeader(r,this._opts.extraHeaders[r])}}catch{}if(this._method==="POST")try{o.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{o.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(o),"withCredentials"in o&&(o.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(o.timeout=this._opts.requestTimeout),o.onreadystatechange=()=>{var r;o.readyState===3&&((r=this._opts.cookieJar)===null||r===void 0||r.parseCookies(o.getResponseHeader("set-cookie"))),o.readyState===4&&(o.status===200||o.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof o.status=="number"?o.status:0)},0))},o.send(this._data)}catch(r){this.setTimeoutFn(()=>{this._onError(r)},0);return}typeof document<"u"&&(this._index=i.requestsCount++,i.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=ua,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete i.requests[this._index],this._xhr=null}}_onLoad(){let t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}return i.requestsCount=0,i.requests={},i})();if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",jo);else if(typeof addEventListener=="function"){let i="onpagehide"in O?"pagehide":"unload";addEventListener(i,jo,!1)}}function jo(){for(let i in Fe.requests)Fe.requests.hasOwnProperty(i)&&Fe.requests[i].abort()}var fa=(function(){let i=Uo({xdomain:!1});return i&&i.responseType!==null})(),dt=class extends dn{constructor(n){super(n);let t=n&&n.forceBase64;this.supportsBinary=fa&&!t}request(n={}){return Object.assign(n,{xd:this.xd},this.opts),new Fe(Uo,this.uri(),n)}};function Uo(i){let n=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!n||Ho))return new XMLHttpRequest}catch{}if(!n)try{return new O[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}var Vo=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative",mn=class extends ot{get name(){return"websocket"}doOpen(){let n=this.uri(),t=this.opts.protocols,e=Vo?{}:ke(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(e.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(n,t,e)}catch(o){return this.emitReserved("error",o)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=n=>this.onClose({description:"websocket connection closed",context:n}),this.ws.onmessage=n=>this.onData(n.data),this.ws.onerror=n=>this.onError("websocket error",n)}write(n){this.writable=!1;for(let t=0;t<n.length;t++){let e=n[t],o=t===n.length-1;Jt(e,this.supportsBinary,r=>{try{this.doWrite(e,r)}catch{}o&&nt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){let n=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Ie()),this.supportsBinary||(t.b64=1),this.createUri(n,t)}},cn=O.WebSocket||O.MozWebSocket,ct=class extends mn{createSocket(n,t,e){return Vo?new cn(n,t,e):t?new cn(n,t):new cn(n)}doWrite(n,t){this.ws.send(t)}};var At=class extends ot{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(n){return this.emitReserved("error",n)}this._transport.closed.then(()=>{this.onClose()}).catch(n=>{this.onError("webtransport error",n)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(n=>{let t=Oo(Number.MAX_SAFE_INTEGER,this.socket.binaryType),e=n.readable.pipeThrough(t).getReader(),o=Do();o.readable.pipeTo(n.writable),this._writer=o.writable.getWriter();let r=()=>{e.read().then(({done:l,value:d})=>{l||(this.onPacket(d),r())}).catch(l=>{})};r();let a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(n){this.writable=!1;for(let t=0;t<n.length;t++){let e=n[t],o=t===n.length-1;this._writer.write(e).then(()=>{o&&nt(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var n;(n=this._transport)===null||n===void 0||n.close()}};var un={websocket:ct,webtransport:At,polling:dt};var pa=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ha=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Dt(i){if(i.length>8e3)throw"URI too long";let n=i,t=i.indexOf("["),e=i.indexOf("]");t!=-1&&e!=-1&&(i=i.substring(0,t)+i.substring(t,e).replace(/:/g,";")+i.substring(e,i.length));let o=pa.exec(i||""),r={},a=14;for(;a--;)r[ha[a]]=o[a]||"";return t!=-1&&e!=-1&&(r.source=n,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=ba(r,r.path),r.queryKey=ga(r,r.query),r}function ba(i,n){let t=/\/{2,9}/g,e=n.replace(t,"/").split("/");return(n.slice(0,1)=="/"||n.length===0)&&e.splice(0,1),n.slice(-1)=="/"&&e.splice(e.length-1,1),e}function ga(i,n){let t={};return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(e,o,r){o&&(t[o]=r)}),t}var fn=typeof addEventListener=="function"&&typeof removeEventListener=="function",Ae=[];fn&&addEventListener("offline",()=>{Ae.forEach(i=>i())},!1);var De=(()=>{class i extends g{constructor(t,e){if(super(),this.binaryType=Lo,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){let o=Dt(t);e.hostname=o.host,e.secure=o.protocol==="https"||o.protocol==="wss",e.port=o.port,o.query&&(e.query=o.query)}else e.host&&(e.hostname=Dt(e.host).host);it(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},e.transports.forEach(o=>{let r=o.prototype.name;this.transports.push(r),this._transportsByName[r]=o}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Bo(this.opts.query)),fn&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Ae.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){let e=Object.assign({},this.opts.query);e.EIO=ln,e.transport=t,this.id&&(e.sid=this.id);let o=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](o)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}let t=this.opts.rememberUpgrade&&i.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";let e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",i.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":let e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);let t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){let t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let o=0;o<this.writeBuffer.length;o++){let r=this.writeBuffer[o].data;if(r&&(e+=No(r)),o>0&&e>this._maxPayload)return this.writeBuffer.slice(0,o);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;let t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,nt(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,o){return this._sendPacket("message",t,e,o),this}send(t,e,o){return this._sendPacket("message",t,e,o),this}_sendPacket(t,e,o,r){if(typeof e=="function"&&(r=e,e=void 0),typeof o=="function"&&(r=o,o=null),this.readyState==="closing"||this.readyState==="closed")return;o=o||{},o.compress=o.compress!==!1;let a={type:t,data:e,options:o};this.emitReserved("packetCreate",a),this.writeBuffer.push(a),r&&this.once("flush",r),this.flush()}close(){let t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},o=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?o():t()}):this.upgrading?o():t()),this}_onError(t){if(i.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),fn&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){let o=Ae.indexOf(this._offlineEventListener);o!==-1&&Ae.splice(o,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}}return i.protocol=ln,i})(),Oe=class extends De{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let n=0;n<this._upgrades.length;n++)this._probe(this._upgrades[n])}_probe(n){let t=this.createTransport(n),e=!1;De.priorWebsocketSuccess=!1;let o=()=>{e||(t.send([{type:"ping",data:"probe"}]),t.once("packet",B=>{if(!e)if(B.type==="pong"&&B.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;De.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{e||this.readyState!=="closed"&&(h(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{let rt=new Error("probe error");rt.transport=t.name,this.emitReserved("upgradeError",rt)}}))};function r(){e||(e=!0,h(),t.close(),t=null)}let a=B=>{let rt=new Error("probe error: "+B);rt.transport=t.name,r(),this.emitReserved("upgradeError",rt)};function l(){a("transport closed")}function d(){a("socket closed")}function p(B){t&&B.name!==t.name&&r()}let h=()=>{t.removeListener("open",o),t.removeListener("error",a),t.removeListener("close",l),this.off("close",d),this.off("upgrading",p)};t.once("open",o),t.once("error",a),t.once("close",l),this.once("close",d),this.once("upgrading",p),this._upgrades.indexOf("webtransport")!==-1&&n!=="webtransport"?this.setTimeoutFn(()=>{e||t.open()},200):t.open()}onHandshake(n){this._upgrades=this._filterUpgrades(n.upgrades),super.onHandshake(n)}_filterUpgrades(n){let t=[];for(let e=0;e<n.length;e++)~this.transports.indexOf(n[e])&&t.push(n[e]);return t}},Ot=class extends Oe{constructor(n,t={}){let e=typeof n=="object"?n:t;(!e.transports||e.transports&&typeof e.transports[0]=="string")&&(e.transports=(e.transports||["polling","websocket","webtransport"]).map(o=>un[o]).filter(o=>!!o)),super(n,e)}};var wm=Ot.protocol;function qo(i,n="",t){let e=i;t=t||typeof location<"u"&&location,i==null&&(i=t.protocol+"//"+t.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=t.protocol+i:i=t.host+i),/^(https?|wss?):\/\//.test(i)||(typeof t<"u"?i=t.protocol+"//"+i:i="https://"+i),e=Dt(i)),e.port||(/^(http|ws)$/.test(e.protocol)?e.port="80":/^(http|ws)s$/.test(e.protocol)&&(e.port="443")),e.path=e.path||"/";let r=e.host.indexOf(":")!==-1?"["+e.host+"]":e.host;return e.id=e.protocol+"://"+r+":"+e.port+n,e.href=e.protocol+"://"+r+(t&&t.port===e.port?"":":"+e.port),e}var vn={};Xo(vn,{Decoder:()=>gn,Encoder:()=>bn,PacketType:()=>c,isPacketValid:()=>Ma,protocol:()=>Yo});var va=typeof ArrayBuffer=="function",ya=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,$o=Object.prototype.toString,xa=typeof Blob=="function"||typeof Blob<"u"&&$o.call(Blob)==="[object BlobConstructor]",wa=typeof File=="function"||typeof File<"u"&&$o.call(File)==="[object FileConstructor]";function oe(i){return va&&(i instanceof ArrayBuffer||ya(i))||xa&&i instanceof Blob||wa&&i instanceof File}function ie(i,n){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let t=0,e=i.length;t<e;t++)if(ie(i[t]))return!0;return!1}if(oe(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return ie(i.toJSON(),!0);for(let t in i)if(Object.prototype.hasOwnProperty.call(i,t)&&ie(i[t]))return!0;return!1}function Go(i){let n=[],t=i.data,e=i;return e.data=pn(t,n),e.attachments=n.length,{packet:e,buffers:n}}function pn(i,n){if(!i)return i;if(oe(i)){let t={_placeholder:!0,num:n.length};return n.push(i),t}else if(Array.isArray(i)){let t=new Array(i.length);for(let e=0;e<i.length;e++)t[e]=pn(i[e],n);return t}else if(typeof i=="object"&&!(i instanceof Date)){let t={};for(let e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=pn(i[e],n));return t}return i}function Wo(i,n){return i.data=hn(i.data,n),delete i.attachments,i}function hn(i,n){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<n.length)return n[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let t=0;t<i.length;t++)i[t]=hn(i[t],n);else if(typeof i=="object")for(let t in i)Object.prototype.hasOwnProperty.call(i,t)&&(i[t]=hn(i[t],n));return i}var Ko=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Yo=5,c=(function(i){return i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK",i})(c||{}),bn=class{constructor(n){this.replacer=n}encode(n){return(n.type===c.EVENT||n.type===c.ACK)&&ie(n)?this.encodeAsBinary({type:n.type===c.EVENT?c.BINARY_EVENT:c.BINARY_ACK,nsp:n.nsp,data:n.data,id:n.id}):[this.encodeAsString(n)]}encodeAsString(n){let t=""+n.type;return(n.type===c.BINARY_EVENT||n.type===c.BINARY_ACK)&&(t+=n.attachments+"-"),n.nsp&&n.nsp!=="/"&&(t+=n.nsp+","),n.id!=null&&(t+=n.id),n.data!=null&&(t+=JSON.stringify(n.data,this.replacer)),t}encodeAsBinary(n){let t=Go(n),e=this.encodeAsString(t.packet),o=t.buffers;return o.unshift(e),o}},gn=class i extends g{constructor(n){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof n=="function"?{reviver:n}:n)}add(n){let t;if(typeof n=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(n);let e=t.type===c.BINARY_EVENT;e||t.type===c.BINARY_ACK?(t.type=e?c.EVENT:c.ACK,this.reconstructor=new _n(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(oe(n)||n.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(n),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+n)}decodeString(n){let t=0,e={type:Number(n.charAt(0))};if(c[e.type]===void 0)throw new Error("unknown packet type "+e.type);if(e.type===c.BINARY_EVENT||e.type===c.BINARY_ACK){let r=t+1;for(;n.charAt(++t)!=="-"&&t!=n.length;);let a=n.substring(r,t);if(a!=Number(a)||n.charAt(t)!=="-")throw new Error("Illegal attachments");let l=Number(a);if(!Qo(l)||l<0)throw new Error("Illegal attachments");if(l>this.opts.maxAttachments)throw new Error("too many attachments");e.attachments=l}if(n.charAt(t+1)==="/"){let r=t+1;for(;++t&&!(n.charAt(t)===","||t===n.length););e.nsp=n.substring(r,t)}else e.nsp="/";let o=n.charAt(t+1);if(o!==""&&Number(o)==o){let r=t+1;for(;++t;){let a=n.charAt(t);if(a==null||Number(a)!=a){--t;break}if(t===n.length)break}e.id=Number(n.substring(r,t+1))}if(n.charAt(++t)){let r=this.tryParse(n.substr(t));if(i.isPayloadValid(e.type,r))e.data=r;else throw new Error("invalid payload")}return e}tryParse(n){try{return JSON.parse(n,this.opts.reviver)}catch{return!1}}static isPayloadValid(n,t){switch(n){case c.CONNECT:return Le(t);case c.DISCONNECT:return t===void 0;case c.CONNECT_ERROR:return typeof t=="string"||Le(t);case c.EVENT:case c.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Ko.indexOf(t[0])===-1);case c.ACK:case c.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}},_n=class{constructor(n){this.packet=n,this.buffers=[],this.reconPack=n}takeBinaryData(n){if(this.buffers.push(n),this.buffers.length===this.reconPack.attachments){let t=Wo(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}};function Ca(i){return typeof i=="string"}var Qo=Number.isInteger||function(i){return typeof i=="number"&&isFinite(i)&&Math.floor(i)===i};function Ea(i){return i===void 0||Qo(i)}function Le(i){return Object.prototype.toString.call(i)==="[object Object]"}function Ta(i,n){switch(i){case c.CONNECT:return n===void 0||Le(n);case c.DISCONNECT:return n===void 0;case c.EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&Ko.indexOf(n[0])===-1);case c.ACK:return Array.isArray(n);case c.CONNECT_ERROR:return typeof n=="string"||Le(n);default:return!1}}function Ma(i){return Ca(i.nsp)&&Ea(i.id)&&Ta(i.type,i.data)}function H(i,n,t){return i.on(n,t),function(){i.off(n,t)}}var Sa=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),Lt=class extends g{constructor(n,t,e){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=n,this.nsp=t,e&&e.auth&&(this.auth=e.auth),this._opts=Object.assign({},e),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;let n=this.io;this.subs=[H(n,"open",this.onopen.bind(this)),H(n,"packet",this.onpacket.bind(this)),H(n,"error",this.onerror.bind(this)),H(n,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...n){return n.unshift("message"),this.emit.apply(this,n),this}emit(n,...t){var e,o,r;if(Sa.hasOwnProperty(n))throw new Error('"'+n.toString()+'" is a reserved event name');if(t.unshift(n),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;let a={type:c.EVENT,data:t};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){let h=this.ids++,B=t.pop();this._registerAckCallback(h,B),a.id=h}let l=(o=(e=this.io.engine)===null||e===void 0?void 0:e.transport)===null||o===void 0?void 0:o.writable,d=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!l||(d?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(n,t){var e;let o=(e=this.flags.timeout)!==null&&e!==void 0?e:this._opts.ackTimeout;if(o===void 0){this.acks[n]=t;return}let r=this.io.setTimeoutFn(()=>{delete this.acks[n];for(let l=0;l<this.sendBuffer.length;l++)this.sendBuffer[l].id===n&&this.sendBuffer.splice(l,1);t.call(this,new Error("operation has timed out"))},o),a=(...l)=>{this.io.clearTimeoutFn(r),t.apply(this,l)};a.withError=!0,this.acks[n]=a}emitWithAck(n,...t){return new Promise((e,o)=>{let r=(a,l)=>a?o(a):e(l);r.withError=!0,t.push(r),this.emit(n,...t)})}_addToQueue(n){let t;typeof n[n.length-1]=="function"&&(t=n.pop());let e={id:this._queueSeq++,tryCount:0,pending:!1,args:n,flags:Object.assign({fromQueue:!0},this.flags)};n.push((o,...r)=>(this._queue[0],o!==null?e.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(o)):(this._queue.shift(),t&&t(null,...r)),e.pending=!1,this._drainQueue())),this._queue.push(e),this._drainQueue()}_drainQueue(n=!1){if(!this.connected||this._queue.length===0)return;let t=this._queue[0];t.pending&&!n||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(n){n.nsp=this.nsp,this.io._packet(n)}onopen(){typeof this.auth=="function"?this.auth(n=>{this._sendConnectPacket(n)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(n){this.packet({type:c.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},n):n})}onerror(n){this.connected||this.emitReserved("connect_error",n)}onclose(n,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",n,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(n=>{if(!this.sendBuffer.some(e=>String(e.id)===n)){let e=this.acks[n];delete this.acks[n],e.withError&&e.call(this,new Error("socket has been disconnected"))}})}onpacket(n){if(n.nsp===this.nsp)switch(n.type){case c.CONNECT:n.data&&n.data.sid?this.onconnect(n.data.sid,n.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case c.EVENT:case c.BINARY_EVENT:this.onevent(n);break;case c.ACK:case c.BINARY_ACK:this.onack(n);break;case c.DISCONNECT:this.ondisconnect();break;case c.CONNECT_ERROR:this.destroy();let e=new Error(n.data.message);e.data=n.data.data,this.emitReserved("connect_error",e);break}}onevent(n){let t=n.data||[];n.id!=null&&t.push(this.ack(n.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(n){if(this._anyListeners&&this._anyListeners.length){let t=this._anyListeners.slice();for(let e of t)e.apply(this,n)}super.emit.apply(this,n),this._pid&&n.length&&typeof n[n.length-1]=="string"&&(this._lastOffset=n[n.length-1])}ack(n){let t=this,e=!1;return function(...o){e||(e=!0,t.packet({type:c.ACK,id:n,data:o}))}}onack(n){let t=this.acks[n.id];typeof t=="function"&&(delete this.acks[n.id],t.withError&&n.data.unshift(null),t.apply(this,n.data))}onconnect(n,t){this.id=n,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(n=>this.emitEvent(n)),this.receiveBuffer=[],this.sendBuffer.forEach(n=>{this.notifyOutgoingListeners(n),this.packet(n)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(n=>n()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:c.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(n){return this.flags.compress=n,this}get volatile(){return this.flags.volatile=!0,this}timeout(n){return this.flags.timeout=n,this}onAny(n){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(n),this}prependAny(n){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(n),this}offAny(n){if(!this._anyListeners)return this;if(n){let t=this._anyListeners;for(let e=0;e<t.length;e++)if(n===t[e])return t.splice(e,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(n){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(n),this}prependAnyOutgoing(n){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(n),this}offAnyOutgoing(n){if(!this._anyOutgoingListeners)return this;if(n){let t=this._anyOutgoingListeners;for(let e=0;e<t.length;e++)if(n===t[e])return t.splice(e,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(n){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){let t=this._anyOutgoingListeners.slice();for(let e of t)e.apply(this,n.data)}}};function _t(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}_t.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var n=Math.random(),t=Math.floor(n*this.jitter*i);i=(Math.floor(n*10)&1)==0?i-t:i+t}return Math.min(i,this.max)|0};_t.prototype.reset=function(){this.attempts=0};_t.prototype.setMin=function(i){this.ms=i};_t.prototype.setMax=function(i){this.max=i};_t.prototype.setJitter=function(i){this.jitter=i};var Nt=class extends g{constructor(n,t){var e;super(),this.nsps={},this.subs=[],n&&typeof n=="object"&&(t=n,n=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,it(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((e=t.randomizationFactor)!==null&&e!==void 0?e:.5),this.backoff=new _t({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=n;let o=t.parser||vn;this.encoder=new o.Encoder,this.decoder=new o.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(n){return arguments.length?(this._reconnection=!!n,n||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(n){return n===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=n,this)}reconnectionDelay(n){var t;return n===void 0?this._reconnectionDelay:(this._reconnectionDelay=n,(t=this.backoff)===null||t===void 0||t.setMin(n),this)}randomizationFactor(n){var t;return n===void 0?this._randomizationFactor:(this._randomizationFactor=n,(t=this.backoff)===null||t===void 0||t.setJitter(n),this)}reconnectionDelayMax(n){var t;return n===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=n,(t=this.backoff)===null||t===void 0||t.setMax(n),this)}timeout(n){return arguments.length?(this._timeout=n,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(n){if(~this._readyState.indexOf("open"))return this;this.engine=new Ot(this.uri,this.opts);let t=this.engine,e=this;this._readyState="opening",this.skipReconnect=!1;let o=H(t,"open",function(){e.onopen(),n&&n()}),r=l=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",l),n?n(l):this.maybeReconnectOnOpen()},a=H(t,"error",r);if(this._timeout!==!1){let l=this._timeout,d=this.setTimeoutFn(()=>{o(),r(new Error("timeout")),t.close()},l);this.opts.autoUnref&&d.unref(),this.subs.push(()=>{this.clearTimeoutFn(d)})}return this.subs.push(o),this.subs.push(a),this}connect(n){return this.open(n)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");let n=this.engine;this.subs.push(H(n,"ping",this.onping.bind(this)),H(n,"data",this.ondata.bind(this)),H(n,"error",this.onerror.bind(this)),H(n,"close",this.onclose.bind(this)),H(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(n){try{this.decoder.add(n)}catch(t){this.onclose("parse error",t)}}ondecoded(n){nt(()=>{this.emitReserved("packet",n)},this.setTimeoutFn)}onerror(n){this.emitReserved("error",n)}socket(n,t){let e=this.nsps[n];return e?this._autoConnect&&!e.active&&e.connect():(e=new Lt(this,n,t),this.nsps[n]=e),e}_destroy(n){let t=Object.keys(this.nsps);for(let e of t)if(this.nsps[e].active)return;this._close()}_packet(n){let t=this.encoder.encode(n);for(let e=0;e<t.length;e++)this.engine.write(t[e],n.options)}cleanup(){this.subs.forEach(n=>n()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(n,t){var e;this.cleanup(),(e=this.engine)===null||e===void 0||e.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",n,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;let n=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{let t=this.backoff.duration();this._reconnecting=!0;let e=this.setTimeoutFn(()=>{n.skipReconnect||(this.emitReserved("reconnect_attempt",n.backoff.attempts),!n.skipReconnect&&n.open(o=>{o?(n._reconnecting=!1,n.reconnect(),this.emitReserved("reconnect_error",o)):n.onreconnect()}))},t);this.opts.autoUnref&&e.unref(),this.subs.push(()=>{this.clearTimeoutFn(e)})}}onreconnect(){let n=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",n)}};var re={};function ae(i,n){typeof i=="object"&&(n=i,i=void 0),n=n||{};let t=qo(i,n.path||"/socket.io"),e=t.source,o=t.id,r=t.path,a=re[o]&&r in re[o].nsps,l=n.forceNew||n["force new connection"]||n.multiplex===!1||a,d;return l?d=new Nt(e,n):(re[o]||(re[o]=new Nt(e,n)),d=re[o]),t.query&&!n.query&&(n.query=t.queryKey),d.socket(t.path,n)}Object.assign(ae,{Manager:Nt,Socket:Lt,io:ae,connect:ae});var se=class i{socket=null;constructor(){be.isSockets?this.socket=ae("http://localhost:3000/events",{autoConnect:!0}):console.log("\u0421\u043E\u043A\u0435\u0442\u044B \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u044B \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u043D\u0430.")}subscribeToArticle(n){this.socket?.emit("subscribe-article",n)}unsubscribeFromArticle(n){this.socket?.emit("unsubscribe-article",n)}subscribeToAll(){this.socket?.emit("subscribe-all")}emit(n,t){this.socket?.emit(n,t)}listen(n){return new K(t=>(this.socket?.on(n,e=>{t.next(e)}),()=>{this.socket?.off(n)}))}onCommentCreated(){return this.listen("comment-created")}onCommentRatingChanged(){return this.listen("comment-rating-changed")}onArticleRatingChanged(){return this.listen("article-rating-changed")}ngOnDestroy(){this.socket&&this.socket.disconnect()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=b({token:i,factory:i.\u0275fac})};var ka=(i,n)=>n.id;function Ia(i,n){if(i&1){let t=Bt();m(0,"h1",2),S(1),u(),I(2,"img",3),m(3,"div",4),S(4),u(),m(5,"div",5)(6,"button",6),z("click",function(){at(t);let o=R();return st(o.onLikeHistory(!1))}),I(7,"mat-icon",7),u(),m(8,"span",8),S(9),u(),m(10,"button",6),z("click",function(){at(t);let o=R();return st(o.onLikeHistory(!0))}),I(11,"mat-icon",9),u()(),m(12,"app-comment-form",10),z("submitted",function(o){at(t);let r=R();return st(r.addComment(o))}),u()}if(i&2){let t=n;f(),Et(t.title),f(),q("src",t.imgSrc||"assets/no-image.png",Bn),f(2),jt(" ",t.content," "),f(5),Et(t.rating),f(3),q("idHis",t.id)}}function Ra(i,n){if(i&1){let t=Bt();m(0,"li")(1,"mat-card",11)(2,"mat-card-header"),I(3,"img",12),m(4,"mat-card-title",13),S(5),u()(),m(6,"mat-card-content",14),S(7),u(),m(8,"mat-card-footer",15)(9,"div",5)(10,"button",6),z("click",function(){let o=at(t).$implicit,r=R(2);return st(r.onLikeComment(o.id,!1))}),I(11,"mat-icon",7),u(),m(12,"span",8),S(13),u(),m(14,"button",6),z("click",function(){let o=at(t).$implicit,r=R(2);return st(r.onLikeComment(o.id,!0))}),I(15,"mat-icon",9),u()()()()()}if(i&2){let t=n.$implicit;f(5),jt("@",t.username),f(2),jt(" ",t.content," "),f(6),Et(t.rating)}}function Fa(i,n){if(i&1&&(m(0,"ul"),jn(1,Ra,16,3,"li",null,ka),u()),i&2){let t=R();f(),Un(t.sortedComments())}}var Zo=class i{destroyRef=s(An);route=s(ni);cardService=s(je);cardStore=s(Vt);titleService=s(ei);cardServiceSocket=s(se);params$=this.route.paramMap.pipe(Y(n=>n.get("id")));history=this.cardStore.history;comments=this.cardStore.comments;idHistory=mt("");ngOnInit(){this.params$.pipe(Z(this.destroyRef)).subscribe(n=>{if(n){let t=this.idHistory();t&&t!==n&&this.cardServiceSocket.unsubscribeFromArticle(t),this.getHistory(n),this.idHistory.set(n),this.cardServiceSocket.subscribeToArticle(n)}}),this.initSocketListeners()}sortedComments=Tt(()=>[...this.comments()].sort((t,e)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()));getHistory(n){this.cardService.getHistoryFromServer(n).pipe(Z(this.destroyRef)).subscribe(t=>{if(!t){console.log("\u041E\u0448\u0438\u0431\u043E\u0447\u043A\u0430");return}this.cardStore.setHistory(t),t.title&&this.titleService.setTitle(t.title),this.get\u0421omments(t.id)})}get\u0421omments(n){this.cardService.getCommentsFromServer(n).pipe(Z(this.destroyRef)).subscribe(t=>{if(!t){console.log("\u041E\u0448\u0438\u0431\u043E\u0447\u043A\u0430");return}this.cardStore.setComments(t)})}addComment(n){this.cardService.addCommentsOnServer(n).pipe(Z(this.destroyRef)).subscribe(t=>{if(!t){console.log("\u041E\u0448\u0438\u0431\u043E\u0447\u043A\u0430");return}this.cardStore.setComments([...this.comments(),t])})}onLikeComment(n,t){this.cardService.likeCommentOnServer(n,t).pipe(Z(this.destroyRef)).subscribe(e=>{if(!e){console.log("\u041E\u0448\u0438\u0431\u043E\u0447\u043A\u0430");return}let o=this.comments().map(r=>r.id===n?V(y({},r),{rating:e.rating}):r);this.cardStore.setComments(o)})}onLikeHistory(n){let t=this.history()?.id;t&&this.cardService.likeHistoryOnServer(t,n).pipe(Z(this.destroyRef)).subscribe(e=>{if(!e){console.log("\u041E\u0448\u0438\u0431\u043E\u0447\u043A\u0430");return}let o=this.history();o&&this.cardStore.setHistory(V(y({},o),{rating:e.rating}))})}initSocketListeners(){this.cardServiceSocket.onCommentCreated().pipe(Z(this.destroyRef)).subscribe(n=>{if(n.payload.articleId===this.idHistory()){let t={id:n.payload.commentId,content:n.payload.content,articleId:n.payload.articleId,username:n.payload.username,createdAt:n.payload.createdAt,rating:0};this.cardStore.setComments([...this.comments(),t])}}),this.cardServiceSocket.onCommentRatingChanged().pipe(Z(this.destroyRef)).subscribe(n=>{if(n.payload.articleId===this.idHistory()){let t=this.comments().map(e=>e.id===n.payload.commentId?V(y({},e),{rating:n.payload.rating}):e);this.cardStore.setComments(t)}}),this.cardServiceSocket.onArticleRatingChanged().pipe(Z(this.destroyRef)).subscribe(n=>{let t=this.history();t&&n.payload.articleId===this.idHistory()&&this.cardStore.setHistory(V(y({},t),{rating:n.payload.rating}))})}ngOnDestroy(){let n=this.idHistory();n&&this.cardServiceSocket.unsubscribeFromArticle(n)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["app-history-page"]],features:[ht([{provide:je,useClass:be.useDevService?Te:ge},Vt,se])],decls:6,vars:3,consts:[[1,"history"],[1,"history__comments"],[1,"history__title"],[1,"history__image",3,"src"],[1,"history__text"],[1,"raiting"],[1,"raiting__btn",3,"click"],["fontIcon","arrow_drop_down"],[1,"raiting__amount"],["fontIcon","arrow_drop_up"],[3,"submitted","idHis"],["appearance","outlined",1,"comment"],["mat-card-avatar","","src","https://i.pinimg.com/736x/d1/56/2f/d1562ffd1f6cc711be1563895f426451.jpg",1,"comment__img"],[1,"comment__title"],[1,"comment__content"],[1,"comment__footer"]],template:function(t,e){if(t&1&&(m(0,"section",0),E(1,Ia,13,5),m(2,"div",1)(3,"h2"),S(4),u(),E(5,Fa,3,0,"ul"),u()()),t&2){let o;f(),T((o=e.history())?1:-1,o),f(3),jt("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 (",e.comments().length,")"),f(),T(e.comments().length>0?5:-1)}},dependencies:[wi,bi,xi,_i,yi,vi,gi,ri,oi,Ee],styles:[".history__image[_ngcontent-%COMP%]{width:100%;object-fit:cover;height:250px;border-radius:20px}.history__title[_ngcontent-%COMP%]{font-size:36px;padding:20px 0;font-weight:700}.history__text[_ngcontent-%COMP%]{font-size:17px;padding:20px 0}.history__comments[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.history__comments[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.comment[_ngcontent-%COMP%]{background-color:#292929;border-color:transparent}.comment__img[_ngcontent-%COMP%]{margin:0}.comment__title[_ngcontent-%COMP%]{font-size:15px;margin:auto 0}.comment__content[_ngcontent-%COMP%]{padding:10px 20px}.comment__footer[_ngcontent-%COMP%]{padding:0 20px 20px}.raiting[_ngcontent-%COMP%]{display:flex;align-items:center}.raiting__btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"],changeDetection:0})};export{Zo as HistoryPage};
