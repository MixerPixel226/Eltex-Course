import{E as fa,F as pa,J as ha,N as ba,b as ca,d as da,u as Xe,v as ua,x as ma,y as Je}from"./chunk-P4MKJZCO.js";import{$ as be,Ab as fe,B as jo,Ba as ie,Bb as pe,C as Bo,Ca as Ki,Cb as bn,D as we,Db as ai,Ea as Go,Eb as si,F as ni,Fb as ht,Ga as Ko,H as Uo,Ha as $o,Hb as gn,Ia as Yo,Ib as yn,K as ii,Kb as Ze,L as qo,Lb as jt,Mb as oe,Nb as Xo,O as Qo,Ob as Yi,P as Wo,Pb as ae,Q as mt,Qb as se,R as $e,Rb as Jo,S as Ho,Sb as ea,T as ri,Tb as Zi,Ub as Xi,V as Rt,Vb as le,W as De,Wa as re,Wb as ta,Xb as na,Yb as ia,_ as V,_a as Zo,a as p,ab as Vt,b as k,ba as L,bb as ft,c as Xn,ca as fn,d as Q,da as E,ec as vn,f as Jn,fc as ra,h as X,i as z,ib as _e,ic as li,j as ei,jb as ge,k as Ro,kb as J,l as Lo,lb as $i,m as Le,ma as Lt,mb as oi,n as Hi,na as Ye,nc as _n,o as Po,oc as oa,p as Ke,pb as hn,q as Pe,qc as aa,r as Vo,ra as P,sc as Ve,tb as pt,tc as sa,u as zo,ub as ue,uc as la,v as G,va as pn,vb as me,x as mn,xa as Pt,y as ti,ya as Gi,zb as zt}from"./chunk-Z6VOZYT6.js";var nm={dev:!1,useDevService:!1,isSockets:!1};function xn(n){return n.buttons===0||n.detail===0}function En(n){let e=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var Ji;function ga(){if(Ji==null){let n=typeof document<"u"?document.head:null;Ji=!!(n&&(n.createShadowRoot||n.attachShadow))}return Ji}function er(n){if(ga()){let e=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function nc(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let e=n.shadowRoot.activeElement;if(e===n)break;n=e}return n}function Te(n){return n.composedPath?n.composedPath()[0]:n.target}var tr;try{tr=typeof Intl<"u"&&Intl.v8BreakIterator}catch{tr=!1}var $=(()=>{class n{_platformId=E(Ko);isBrowser=this._platformId?da(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||tr)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wn;function ya(){if(wn==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>wn=!0}))}finally{wn=wn||!1}return wn}function Bt(n){return ya()?n:!!n.capture}function va(n,e=0){return _a(n)?Number(n):arguments.length===2?e:0}function _a(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function ke(n){return n instanceof ie?n.nativeElement:n}var xa=new L("cdk-input-modality-detector-options"),Ea={ignoreKeys:[18,17,224,91,16]},wa=650,nr={passive:!0,capture:!0},Ta=(()=>{class n{_platform=E($);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ei(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(i=>i===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Te(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<wa||(this._modality.next(xn(t)?"keyboard":"mouse"),this._mostRecentTarget=Te(t))};_onTouchstart=t=>{if(En(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Te(t)};constructor(){let t=E(P),i=E(Ye),r=E(xa,{optional:!0});if(this._options=p(p({},Ea),r),this.modalityDetected=this._modality.pipe(Ho(1)),this.modalityChanged=this.modalityDetected.pipe(ii()),this._platform.isBrowser){let o=E(Vt).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,nr),o.listen(i,"mousedown",this._onMousedown,nr),o.listen(i,"touchstart",this._onTouchstart,nr)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(i){return new(i||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Tn=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Tn||{}),ka=new L("cdk-focus-monitor-default-options"),ci=Bt({passive:!0,capture:!0}),ir=(()=>{class n{_ngZone=E(P);_platform=E($);_inputModalityDetector=E(Ta);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=E(Ye);_stopInputModalityDetector=new z;constructor(){let t=E(ka,{optional:!0});this._detectionMode=t?.detectionMode||Tn.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let i=Te(t);for(let r=i;r;r=r.parentElement)t.type==="focus"?this._onFocus(t,r):this._onBlur(t,r)};monitor(t,i=!1){let r=ke(t);if(!this._platform.isBrowser||r.nodeType!==1)return Pe();let o=er(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new z,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(t){let i=ke(t),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(t,i,r){let o=ke(t),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((t,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===Tn.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,i){t.classList.toggle("cdk-focused",!!i),t.classList.toggle("cdk-touch-focused",i==="touch"),t.classList.toggle("cdk-keyboard-focused",i==="keyboard"),t.classList.toggle("cdk-mouse-focused",i==="mouse"),t.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(t,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&i,this._detectionMode===Tn.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?wa:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(t,i){let r=this._elementInfo.get(i),o=Te(t);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(t,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&t.relatedTarget instanceof Node&&i.contains(t.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(t,i){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(i))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let i=t.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,ci),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,ci)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Rt(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let i=t.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,ci),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,ci),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,i,r){this._setClasses(t,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(t){let i=[];return this._elementInfo.forEach((r,o)=>{(o===t||r.checkChildren&&o.contains(t))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let o=t.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Fm(n){return Array.isArray(n)?n:[n]}var Sa=new Set,bt,rr=(()=>{class n{_platform=E($);_nonce=E(Yo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):oc}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&rc(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function rc(n,e){if(!Sa.has(n))try{bt||(bt=document.createElement("style"),e&&bt.setAttribute("nonce",e),bt.setAttribute("type","text/css"),document.head.appendChild(bt)),bt.sheet&&(bt.sheet.insertRule(`@media ${n} {body{ }}`,0),Sa.add(n))}catch(t){console.error(t)}}function oc(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var ac=(()=>{class n{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ia=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=ge({type:n});static \u0275inj=be({providers:[ac]})}return n})();var sc=(()=>{class n{_platform=E($);constructor(){}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return cc(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let i=lc(gc(t));if(i&&(Oa(i)===-1||!this.isVisible(i)))return!1;let r=t.nodeName.toLowerCase(),o=Oa(t);return t.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!hc(t)?!1:r==="audio"?t.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,i){return bc(t)&&!this.isDisabled(t)&&(i?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function lc(n){try{return n.frameElement}catch{return null}}function cc(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function dc(n){let e=n.nodeName.toLowerCase();return e==="input"||e==="select"||e==="button"||e==="textarea"}function uc(n){return fc(n)&&n.type=="hidden"}function mc(n){return pc(n)&&n.hasAttribute("href")}function fc(n){return n.nodeName.toLowerCase()=="input"}function pc(n){return n.nodeName.toLowerCase()=="a"}function Ca(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let e=n.getAttribute("tabindex");return!!(e&&!isNaN(parseInt(e,10)))}function Oa(n){if(!Ca(n))return null;let e=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(e)?-1:e}function hc(n){let e=n.nodeName.toLowerCase(),t=e==="input"&&n.type;return t==="text"||t==="password"||e==="select"||e==="textarea"}function bc(n){return uc(n)?!1:dc(n)||mc(n)||n.hasAttribute("contenteditable")||Ca(n)}function gc(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var or=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_enabled=!0;constructor(e,t,i,r,o=!1,a){this._element=e,this._checker=t,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let e=this._startAnchor,t=this._endAnchor;e&&(e.removeEventListener("focus",this.startAnchorListener),e.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let t=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let i=this._getFirstTabbableElement(t);return i?.focus(e),!!i}return t.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let t=this._getRegionBoundary("start");return t&&t.focus(e),!!t}focusLastTabbableElement(e){let t=this._getRegionBoundary("end");return t&&t.focus(e),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let i=0;i<t.length;i++){let r=t[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[i]):null;if(r)return r}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let i=t.length-1;i>=0;i--){let r=t[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[i]):null;if(r)return r}return null}_createAnchor(){let e=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add("cdk-visually-hidden"),e.classList.add("cdk-focus-trap-anchor"),e.setAttribute("aria-hidden","true"),e}_toggleAnchorTabIndex(e,t){e?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){this._injector?Zo(e,{injector:this._injector}):setTimeout(e)}},Gm=(()=>{class n{_checker=E(sc);_ngZone=E(P);_document=E(Ye);_injector=E(Lt);constructor(){E(Xe).load(ua)}create(t,i=!1){return new or(t,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var yc=200,di=class{_letterKeyStream=new z;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new z;selectedItem=this._selectedItem;constructor(e,t){let i=typeof t?.debounceInterval=="number"?t.debounceInterval:yc;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(e),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(e){this._selectedItemIndex=e}setItems(e){this._items=e}handleKey(e){let t=e.keyCode;e.key&&e.key.length===1?this._letterKeyStream.next(e.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(e){this._letterKeyStream.pipe(De(t=>this._pressedLetters.push(t)),Uo(e),we(()=>this._pressedLetters.length>0),G(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Da(n,...e){return e.length?e.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var ui=class{_items;_activeItemIndex=pn(-1);_activeItem=pn(null);_wrap=!1;_typeaheadSubscription=Jn.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=e=>e.disabled;constructor(e,t){this._items=e,e instanceof Ki?this._itemChangesSubscription=e.changes.subscribe(i=>this._itemsChanged(i.toArray())):hn(e)&&(this._effectRef=Pt(()=>this._itemsChanged(e()),{injector:t}))}tabOut=new z;change=new z;skipPredicate(e){return this._skipPredicateFn=e,this}withWrap(e=!0){return this._wrap=e,this}withVerticalOrientation(e=!0){return this._vertical=e,this}withHorizontalOrientation(e){return this._horizontal=e,this}withAllowedModifierKeys(e){return this._allowedModifierKeys=e,this}withTypeAhead(e=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new di(t,{debounceInterval:typeof e=="number"?e:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(e=!0){return this._homeAndEnd=e,this}withPageUpDown(e=!0,t=10){return this._pageUpAndDown={enabled:e,delta:t},this}setActiveItem(e){let t=this._activeItem();this.updateActiveItem(e),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(e){let t=e.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!e[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Da(e,"shiftKey"))&&this._typeahead?.handleKey(e);return}this._typeahead?.reset(),e.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(e){let t=this._getItemsArray(),i=typeof e=="number"?e:t.indexOf(e),r=t[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(e){this._wrap?this._setActiveInWrapMode(e):this._setActiveInDefaultMode(e)}_setActiveInWrapMode(e){let t=this._getItemsArray();for(let i=1;i<=t.length;i++){let r=(this._activeItemIndex()+e*i+t.length)%t.length,o=t[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(e){this._setActiveItemByIndex(this._activeItemIndex()+e,e)}_setActiveItemByIndex(e,t){let i=this._getItemsArray();if(i[e]){for(;this._skipPredicateFn(i[e]);)if(e+=t,!i[e])return;this.setActiveItem(e)}}_getItemsArray(){return hn(this._items)?this._items():this._items instanceof Ki?this._items.toArray():this._items}_itemsChanged(e){this._typeahead?.setItems(e);let t=this._activeItem();if(t){let i=e.indexOf(t);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var ar=class extends ui{_origin="program";setFocusOrigin(e){return this._origin=e,this}setActiveItem(e){super.setActiveItem(e),this.activeItem&&this.activeItem.focus(this._origin)}};var sr={},ze=class n{_appId=E(Go);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(e,t=!1){return this._appId!=="ng"&&(e+=this._appId),sr.hasOwnProperty(e)||(sr[e]=0),`${e}${t?n._infix+"-":""}${sr[e]++}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})};function Cf(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Ut(n){return n!=null&&`${n}`!="false"}var gt;function Nf(){if(gt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return gt=!1,gt;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)gt=!0;else{let n=Element.prototype.scrollTo;n?gt=!/\{\s*\[native code\]\s*\}/.test(n.toString()):gt=!1}}return gt}function Rf(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var qt,Fa=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function lr(){if(qt)return qt;if(typeof document!="object"||!document)return qt=new Set(Fa),qt;let n=document.createElement("input");return qt=new Set(Fa.filter(e=>(n.setAttribute("type",e),n.type===e))),qt}var cr=class{_box;_destroyed=new z;_resizeSubject=new z;_resizeObserver;_elementObservables=new Map;constructor(e){this._box=e,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new X(t=>{let i=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),i.unsubscribe(),this._elementObservables.delete(e)}}).pipe(we(t=>t.some(i=>i.target===e)),$e({bufferSize:1,refCount:!0}),Rt(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Aa=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=E(P);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new cr(r)),this._observers.get(r).observe(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var vc=new L("MATERIAL_ANIMATIONS"),Na=null;function _c(){return E(vc,{optional:!0})?.animationsDisabled||E($o,{optional:!0})==="NoopAnimations"?"di-disabled":(Na??=E(rr).matchMedia("(prefers-reduced-motion)").matches,Na?"reduced-motion":"enabled")}function et(){return _c()!=="enabled"}var xc=["notch"],Ec=["matFormFieldNotchedOutline",""],wc=["*"],Ma=["iconPrefixContainer"],Ra=["textPrefixContainer"],La=["iconSuffixContainer"],Pa=["textSuffixContainer"],Tc=["textField"],kc=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Sc=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Ic(n,e){n&1&&bn(0,"span",21)}function Oc(n,e){if(n&1&&(fe(0,"label",20),oe(1,1),ue(2,Ic,1,0,"span",21),pe()),n&2){let t=Ze(2);zt("floating",t._shouldLabelFloat())("monitorResize",t._hasOutline())("id",t._labelId),pt("for",t._control.disableAutomaticLabeling?null:t._control.id),re(2),me(!t.hideRequiredMarker&&t._control.required?2:-1)}}function Cc(n,e){if(n&1&&ue(0,Oc,3,5,"label",20),n&2){let t=Ze();me(t._hasFloatingLabel()?0:-1)}}function Dc(n,e){n&1&&bn(0,"div",7)}function Fc(n,e){}function Ac(n,e){if(n&1&&oi(0,Fc,0,0,"ng-template",13),n&2){Ze(2);let t=Xi(1);zt("ngTemplateOutlet",t)}}function Nc(n,e){if(n&1&&(fe(0,"div",9),ue(1,Ac,1,1,null,13),pe()),n&2){let t=Ze();zt("matFormFieldNotchedOutlineOpen",t._shouldLabelFloat()),re(),me(t._forceDisplayInfixLabel()?-1:1)}}function Mc(n,e){n&1&&(fe(0,"div",10,2),oe(2,2),pe())}function Rc(n,e){n&1&&(fe(0,"div",11,3),oe(2,3),pe())}function Lc(n,e){}function Pc(n,e){if(n&1&&oi(0,Lc,0,0,"ng-template",13),n&2){Ze();let t=Xi(1);zt("ngTemplateOutlet",t)}}function Vc(n,e){n&1&&(fe(0,"div",14,4),oe(2,4),pe())}function zc(n,e){n&1&&(fe(0,"div",15,5),oe(2,5),pe())}function jc(n,e){n&1&&bn(0,"div",16)}function Bc(n,e){n&1&&(fe(0,"div",18),oe(1,6),pe())}function Uc(n,e){if(n&1&&(fe(0,"mat-hint",22),na(1),pe()),n&2){let t=Ze(2);zt("id",t._hintLabelId),re(),ia(t.hintLabel)}}function qc(n,e){if(n&1&&(fe(0,"div",19),ue(1,Uc,2,2,"mat-hint",22),oe(2,7),bn(3,"div",23),oe(4,8),pe()),n&2){let t=Ze();re(),me(t.hintLabel?1:-1)}}var dr=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=J({type:n,selectors:[["mat-label"]]})}return n})(),Qa=new L("MatError"),Qc=(()=>{class n{id=E(ze).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275dir=J({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&gn("id",r.id)},inputs:{id:"id"},features:[vn([{provide:Qa,useExisting:n}])]})}return n})(),ur=(()=>{class n{align="start";id=E(ze).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||n)};static \u0275dir=J({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(gn("id",r.id),pt("align",null),le("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),Wc=new L("MatPrefix");var Hc=new L("MatSuffix");var Wa=new L("FloatingLabelParent"),Va=(()=>{class n{_elementRef=E(ie);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=E(Aa);_ngZone=E(P);_parent=E(Wa);_resizeSubscription=new Jn;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Gc(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||n)};static \u0275dir=J({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&le("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Gc(n){let e=n;if(e.offsetParent!==null)return e.scrollWidth;let t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let i=t.scrollWidth;return t.remove(),i}var za="mdc-line-ripple--active",mi="mdc-line-ripple--deactivating",ja=(()=>{class n{_elementRef=E(ie);_cleanupTransitionEnd;constructor(){let t=E(P),i=E(ft);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(mi),t.add(za)}deactivate(){this._elementRef.nativeElement.classList.add(mi)}_handleTransitionEnd=t=>{let i=this._elementRef.nativeElement.classList,r=i.contains(mi);t.propertyName==="opacity"&&r&&i.remove(za,mi)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=J({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Ba=(()=>{class n{_elementRef=E(ie);_ngZone=E(P);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,i=t.querySelector(".mdc-floating-label");i?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let i=this._notch.nativeElement;!this.open||!t?i.style.width="":i.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=_e({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Yi(xc,5),i&2){let o;ae(o=se())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&le("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Ec,ngContentSelectors:wc,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(jt(),ht(0,"div",1),ai(1,"div",2,0),oe(3),si(),ht(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),mr=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||n)};static \u0275dir=J({type:n})}return n})();var fr=new L("MatFormField"),Kc=new L("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Ua="fill",$c="auto",qa="fixed",Yc="translateY(-50%)",Ha=(()=>{class n{_elementRef=E(ie);_changeDetectorRef=E(aa);_platform=E($);_idGenerator=E(ze);_ngZone=E(P);_defaults=E(Kc,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=_n("iconPrefixContainer");_textPrefixContainerSignal=_n("textPrefixContainer");_iconSuffixContainerSignal=_n("iconSuffixContainer");_textSuffixContainerSignal=_n("textSuffixContainer");_prefixSuffixContainers=li(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=oa(dr);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=Ut(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||$c}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let i=t||this._defaults?.appearance||Ua;this._appearanceSignal.set(i)}_appearanceSignal=pn(Ua);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||qa}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||qa}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new z;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=et();constructor(){let t=this._defaults,i=E(ma);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),Pt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=li(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let i=this._control,r="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(r+t.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(ri([void 0,void 0]),G(()=>[i.errorState,i.userAriaDescribedBy]),Wo(),we(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Rt(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Bo(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){la({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=li(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let i=this._control?this._control.ngControl:null;return i&&i[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||t;r=t.concat(i.filter(a=>a&&!o.includes(a)))}else r=t;this._control.setDescribedByIds(r),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,m=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,b=`var(--mat-mdc-form-field-label-transform, ${Yc} translateX(${m}))`,h=a+s+l+c;return[b,h]}_writeOutlinedLabelStyles(t){if(t!==null){let[i,r]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let i=t.getRootNode();return i&&i!==t}return document.documentElement.contains(t)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=_e({type:n,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Jo(o,r._labelChild,dr,5),Xo(o,mr,5)(o,Wc,5)(o,Hc,5)(o,Qa,5)(o,ur,5)),i&2){Zi();let a;ae(a=se())&&(r._formFieldControl=a.first),ae(a=se())&&(r._prefixChildren=a),ae(a=se())&&(r._suffixChildren=a),ae(a=se())&&(r._errorChildren=a),ae(a=se())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(ea(r._iconPrefixContainerSignal,Ma,5)(r._textPrefixContainerSignal,Ra,5)(r._iconSuffixContainerSignal,La,5)(r._textSuffixContainerSignal,Pa,5),Yi(Tc,5)(Ma,5)(Ra,5)(La,5)(Pa,5)(Va,5)(Ba,5)(ja,5)),i&2){Zi(4);let o;ae(o=se())&&(r._textField=o.first),ae(o=se())&&(r._iconPrefixContainer=o.first),ae(o=se())&&(r._textPrefixContainer=o.first),ae(o=se())&&(r._iconSuffixContainer=o.first),ae(o=se())&&(r._textSuffixContainer=o.first),ae(o=se())&&(r._floatingLabel=o.first),ae(o=se())&&(r._notchedOutline=o.first),ae(o=se())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&le("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[vn([{provide:fr,useExisting:n},{provide:Wa,useExisting:n}])],ngContentSelectors:Sc,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(jt(kc),oi(0,Cc,1,1,"ng-template",null,0,ra),fe(2,"div",6,1),yn("click",function(a){return r._control.onContainerClick(a)}),ue(4,Dc,1,0,"div",7),fe(5,"div",8),ue(6,Nc,2,2,"div",9),ue(7,Mc,3,0,"div",10),ue(8,Rc,3,0,"div",11),fe(9,"div",12),ue(10,Pc,1,1,null,13),oe(11),pe(),ue(12,Vc,3,0,"div",14),ue(13,zc,3,0,"div",15),pe(),ue(14,jc,1,0,"div",16),pe(),fe(15,"div",17),ue(16,Bc,2,0,"div",18)(17,qc,5,1,"div",19),pe()),i&2){let o;re(2),le("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),re(2),me(!r._hasOutline()&&!r._control.disabled?4:-1),re(2),me(r._hasOutline()?6:-1),re(),me(r._hasIconPrefix?7:-1),re(),me(r._hasTextPrefix?8:-1),re(2),me(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),re(2),me(r._hasTextSuffix?12:-1),re(),me(r._hasIconSuffix?13:-1),re(),me(r._hasOutline()?-1:14),re(),le("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();re(),me((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Va,Ba,ca,ja,ur],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return n})();var pr=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=ge({type:n});static \u0275inj=be({imports:[Ia,Ha,Je]})}return n})();var Zc=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=_e({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return n})(),Xc={passive:!0},Ga=(()=>{class n{_platform=E($);_ngZone=E(P);_renderer=E(Vt).createRenderer(null,null);_styleLoader=E(Xe);_monitoredElements=new Map;constructor(){}monitor(t){if(!this._platform.isBrowser)return Le;this._styleLoader.load(Zc);let i=ke(t),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new z,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,Xc)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(t){let i=ke(t),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((t,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ka=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=ge({type:n});static \u0275inj=be({})}return n})();var $a=new L("MAT_INPUT_VALUE_ACCESSOR");var Ya=(()=>{class n{isErrorState(t,i){return!!(t&&t.invalid&&(t.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var fi=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(e,t,i,r,o){this._defaultMatcher=e,this.ngControl=t,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let e=this.errorState,t=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,t)??!1;o!==e&&(this.errorState=o,this._stateChanges.next())}};var Jc=["button","checkbox","file","hidden","image","radio","range","reset","submit"],ed=new L("MAT_INPUT_CONFIG"),rh=(()=>{class n{_elementRef=E(ie);_platform=E($);ngControl=E(pa,{optional:!0,self:!0});_autofillMonitor=E(Ga);_ngZone=E(P);_formField=E(fr,{optional:!0});_renderer=E(ft);_uid=E(ze).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=E(ed,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new z;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=Ut(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(fa.required)??!1}set required(t){this._required=Ut(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&lr().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=Ut(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>lr().has(t));constructor(){let t=E(ha,{optional:!0}),i=E(ba,{optional:!0}),r=E(Ya),o=E($a,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?hn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new fi(r,this.ngControl,i,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Pt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=t,t?i.setAttribute("placeholder",t):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Jc.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,i=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let i=this._elementRef.nativeElement;t.length?i.setAttribute("aria-describedby",t.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let i=t.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||n)};static \u0275dir=J({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&yn("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(gn("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),pt("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),le("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ve]},exportAs:["matInput"],features:[vn([{provide:mr,useExisting:n}]),Gi]})}return n})(),oh=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=ge({type:n});static \u0275inj=be({imports:[pr,pr,Ka,Je]})}return n})();var xe=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(xe||{}),hr=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=xe.HIDDEN;constructor(e,t,i,r=!1){this._renderer=e,this.element=t,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},Za=Bt({passive:!0,capture:!0}),br=class{_events=new Map;addHandler(e,t,i,r){let o=this._events.get(t);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(t,new Map([[i,new Set([r])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Za)})}removeHandler(e,t,i){let r=this._events.get(e);if(!r)return;let o=r.get(t);o&&(o.delete(i),o.size===0&&r.delete(t),r.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,Za)))}_delegateEventHandler=e=>{let t=Te(e);t&&this._events.get(e.type)?.forEach((i,r)=>{(r===t||r.contains(t))&&i.forEach(o=>o.handleEvent(e))})}},kn={enterDuration:225,exitDuration:150},td=800,Xa=Bt({passive:!0,capture:!0}),Ja=["mousedown","touchstart"],es=["mouseup","mouseleave","touchend","touchcancel"],nd=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=_e({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return n})(),Sn=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new br;constructor(e,t,i,r,o){this._target=e,this._ngZone=t,this._platform=r,r.isBrowser&&(this._containerElement=ke(i)),o&&o.get(Xe).load(nd)}fadeInRipple(e,t,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=p(p({},kn),i.animation);i.centered&&(e=r.left+r.width/2,t=r.top+r.height/2);let a=i.radius||id(e,t,r),s=e-r.left,l=t-r.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${l-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),u=f.transitionProperty,m=f.transitionDuration,b=u==="none"||m==="0s"||m==="0s, 0s"||r.width===0&&r.height===0,h=new hr(this,d,i,b);d.style.transform="scale3d(1, 1, 1)",h.state=xe.FADING_IN,i.persistent||(this._mostRecentTransientRipple=h);let g=null;return!b&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let v=()=>{g&&(g.fallbackTimer=null),clearTimeout(O),this._finishRippleTransition(h)},T=()=>this._destroyRipple(h),O=setTimeout(T,c+100);d.addEventListener("transitionend",v),d.addEventListener("transitioncancel",T),g={onTransitionEnd:v,onTransitionCancel:T,fallbackTimer:O}}),this._activeRipples.set(h,g),(b||!c)&&this._finishRippleTransition(h),h}fadeOutRipple(e){if(e.state===xe.FADING_OUT||e.state===xe.HIDDEN)return;let t=e.element,i=p(p({},kn),e.config.animation);t.style.transitionDuration=`${i.exitDuration}ms`,t.style.opacity="0",e.state=xe.FADING_OUT,(e._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=ke(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Ja.forEach(i=>{n._eventManager.addHandler(this._ngZone,i,t,this)}))}handleEvent(e){e.type==="mousedown"?this._onMousedown(e):e.type==="touchstart"?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{es.forEach(t=>{this._triggerElement.addEventListener(t,this,Xa)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===xe.FADING_IN?this._startFadeOutTransition(e):e.state===xe.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:i}=e.config;e.state=xe.VISIBLE,!i&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=xe.HIDDEN,t!==null&&(e.element.removeEventListener("transitionend",t.onTransitionEnd),e.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=xn(e),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+td;!this._target.rippleDisabled&&!t&&!i&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!En(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let i=0;i<t.length;i++)this.fadeInRipple(t[i].clientX,t[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===xe.VISIBLE||e.config.terminateOnPointerUp&&e.state===xe.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(Ja.forEach(t=>n._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&(es.forEach(t=>e.removeEventListener(t,this,Xa)),this._pointerUpEventsRegistered=!1))}};function id(n,e,t){let i=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),r=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(i*i+r*r)}var gr=new L("mat-ripple-global-options"),yh=(()=>{class n{_elementRef=E(ie);_animationsDisabled=et();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=E(P),i=E($),r=E(gr,{optional:!0}),o=E(Lt);this._globalOptions=r||{},this._rippleRenderer=new Sn(this,t,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:p(p(p({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,i=0,r){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,i,p(p({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,p(p({},this.rippleConfig),t))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=J({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&le("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var rd={capture:!0},od=["focus","mousedown","mouseenter","touchstart"],yr="mat-ripple-loader-uninitialized",vr="mat-ripple-loader-class-name",ts="mat-ripple-loader-centered",pi="mat-ripple-loader-disabled",ns=(()=>{class n{_document=E(Ye);_animationsDisabled=et();_globalRippleOptions=E(gr,{optional:!0});_platform=E($);_ngZone=E(P);_injector=E(Lt);_eventCleanups;_hosts=new Map;constructor(){let t=E(Vt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>od.map(i=>t.listen(this._document,i,this._onInteraction,rd)))}ngOnDestroy(){let t=this._hosts.keys();for(let i of t)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(t,i){t.setAttribute(yr,this._globalRippleOptions?.namespace??""),(i.className||!t.hasAttribute(vr))&&t.setAttribute(vr,i.className||""),i.centered&&t.setAttribute(ts,""),i.disabled&&t.setAttribute(pi,"")}setDisabled(t,i){let r=this._hosts.get(t);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(t))):i?t.setAttribute(pi,""):t.removeAttribute(pi)}_onInteraction=t=>{let i=Te(t);if(i instanceof HTMLElement){let r=i.closest(`[${yr}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",t.getAttribute(vr)),t.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??kn.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??kn.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||t.hasAttribute(pi),rippleConfig:{centered:t.hasAttribute(ts),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Sn(s,this._ngZone,i,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:l,hasSetUpEvents:c}),t.removeAttribute(yr)}destroyRipple(t){let i=this._hosts.get(t);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var is=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=_e({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return n})();var ad=new L("MAT_BUTTON_CONFIG");function rs(n){return n==null?void 0:sa(n)}var os=(()=>{class n{_elementRef=E(ie);_ngZone=E(P);_animationsDisabled=et();_config=E(ad,{optional:!0});_focusMonitor=E(ir);_cleanupClick;_renderer=E(ft);_rippleLoader=E(ns);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){E(Xe).load(is);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",i){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=J({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(pt("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),ta(r.color?"mat-"+r.color:""),le("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Ve],disabled:[2,"disabled","disabled",Ve],ariaDisabled:[2,"aria-disabled","ariaDisabled",Ve],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ve],tabIndex:[2,"tabIndex","tabIndex",rs],_tabindex:[2,"tabindex","_tabindex",rs]}})}return n})();var as=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=ge({type:n});static \u0275inj=be({imports:[Je]})}return n})();var sd=["matButton",""],ld=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],cd=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var ss=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Hh=(()=>{class n extends os{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=dd(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?ss.get(this._appearance):null,o=ss.get(t);r&&i.remove(...r),i.add(...o),this._appearance=t}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=_e({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[$i],attrs:sd,ngContentSelectors:cd,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(jt(ld),ht(0,"span",0),oe(1),ai(2,"span",1),oe(3,1),si(),oe(4,2),ht(5,"span",2)(6,"span",3)),i&2&&le("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return n})();function dd(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Gh=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=ge({type:n});static \u0275inj=be({imports:[as,Je]})}return n})();var{toString:ls,hasOwnProperty:ud}=Object.prototype,cs=Function.prototype.toString,_r=new Map;function N(n,e){try{return xr(n,e)}finally{_r.clear()}}function xr(n,e){if(n===e)return!0;let t=ls.call(n),i=ls.call(e);if(t!==i)return!1;switch(t){case"[object Array]":if(n.length!==e.length)return!1;case"[object Object]":{if(us(n,e))return!0;let r=ds(n),o=ds(e),a=r.length;if(a!==o.length)return!1;for(let s=0;s<a;++s)if(!ud.call(e,r[s]))return!1;for(let s=0;s<a;++s){let l=r[s];if(!xr(n[l],e[l]))return!1}return!0}case"[object Error]":return n.name===e.name&&n.message===e.message;case"[object Number]":if(n!==n)return e!==e;case"[object Boolean]":case"[object Date]":return+n==+e;case"[object RegExp]":case"[object String]":return n==`${e}`;case"[object Map]":case"[object Set]":{if(n.size!==e.size)return!1;if(us(n,e))return!0;let r=n.entries(),o=t==="[object Map]";for(;;){let a=r.next();if(a.done)break;let[s,l]=a.value;if(!e.has(s)||o&&!xr(l,e.get(s)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":n=new Uint8Array(n),e=new Uint8Array(e);case"[object DataView]":{let r=n.byteLength;if(r===e.byteLength)for(;r--&&n[r]===e[r];);return r===-1}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{let r=cs.call(n);return r!==cs.call(e)?!1:!pd(r,fd)}}return!1}function ds(n){return Object.keys(n).filter(md,n)}function md(n){return this[n]!==void 0}var fd="{ [native code] }";function pd(n,e){let t=n.length-e.length;return t>=0&&n.indexOf(e,t)===t}function us(n,e){let t=_r.get(n);if(t){if(t.has(e))return!0}else _r.set(n,t=new Set);return t.add(e),!1}var hd=()=>Object.create(null),{forEach:bd,slice:ms}=Array.prototype,{hasOwnProperty:gd}=Object.prototype,ee=class n{constructor(e=!0,t=hd){this.weakness=e,this.makeData=t}lookup(){return this.lookupArray(arguments)}lookupArray(e){let t=this;return bd.call(e,i=>t=t.getChildTrie(i)),gd.call(t,"data")?t.data:t.data=this.makeData(ms.call(e))}peek(){return this.peekArray(arguments)}peekArray(e){let t=this;for(let i=0,r=e.length;t&&i<r;++i){let o=t.mapFor(e[i],!1);t=o&&o.get(e[i])}return t&&t.data}remove(){return this.removeArray(arguments)}removeArray(e){let t;if(e.length){let i=e[0],r=this.mapFor(i,!1),o=r&&r.get(i);o&&(t=o.removeArray(ms.call(e,1)),!o.data&&!o.weak&&!(o.strong&&o.strong.size)&&r.delete(i))}else t=this.data,delete this.data;return t}getChildTrie(e){let t=this.mapFor(e,!0),i=t.get(e);return i||t.set(e,i=new n(this.weakness,this.makeData)),i}mapFor(e,t){return this.weakness&&yd(e)?this.weak||(t?this.weak=new WeakMap:void 0):this.strong||(t?this.strong=new Map:void 0)}};function yd(n){switch(typeof n){case"object":if(n===null)break;case"function":return!0}return!1}function vd(){}var tt=class{constructor(e=1/0,t=vd){this.max=e,this.dispose=t,this.map=new Map,this.newest=null,this.oldest=null}has(e){return this.map.has(e)}get(e){let t=this.getNode(e);return t&&t.value}get size(){return this.map.size}getNode(e){let t=this.map.get(e);if(t&&t!==this.newest){let{older:i,newer:r}=t;r&&(r.older=i),i&&(i.newer=r),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=r)}return t}set(e,t){let i=this.getNode(e);return i?i.value=t:(i={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=i),this.newest=i,this.oldest=this.oldest||i,this.map.set(e,i),i.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(e){let t=this.map.get(e);return t?(t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.map.delete(e),this.dispose(t.value,e),!0):!1}};function Er(){}var _d=Er,xd=typeof WeakRef<"u"?WeakRef:function(n){return{deref:()=>n}},Ed=typeof WeakMap<"u"?WeakMap:Map,wd=typeof FinalizationRegistry<"u"?FinalizationRegistry:function(){return{register:Er,unregister:Er}},Td=10024,Fe=class{constructor(e=1/0,t=_d){this.max=e,this.dispose=t,this.map=new Ed,this.newest=null,this.oldest=null,this.unfinalizedNodes=new Set,this.finalizationScheduled=!1,this.size=0,this.finalize=()=>{let i=this.unfinalizedNodes.values();for(let r=0;r<Td;r++){let o=i.next().value;if(!o)break;this.unfinalizedNodes.delete(o);let a=o.key;delete o.key,o.keyRef=new xd(a),this.registry.register(a,o,o)}this.unfinalizedNodes.size>0?queueMicrotask(this.finalize):this.finalizationScheduled=!1},this.registry=new wd(this.deleteNode.bind(this))}has(e){return this.map.has(e)}get(e){let t=this.getNode(e);return t&&t.value}getNode(e){let t=this.map.get(e);if(t&&t!==this.newest){let{older:i,newer:r}=t;r&&(r.older=i),i&&(i.newer=r),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=r)}return t}set(e,t){let i=this.getNode(e);return i?i.value=t:(i={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=i),this.newest=i,this.oldest=this.oldest||i,this.scheduleFinalization(i),this.map.set(e,i),this.size++,i.value)}clean(){for(;this.oldest&&this.size>this.max;)this.deleteNode(this.oldest)}deleteNode(e){e===this.newest&&(this.newest=e.older),e===this.oldest&&(this.oldest=e.newer),e.newer&&(e.newer.older=e.older),e.older&&(e.older.newer=e.newer),this.size--;let t=e.key||e.keyRef&&e.keyRef.deref();this.dispose(e.value,t),e.keyRef?this.registry.unregister(e):this.unfinalizedNodes.delete(e),t&&this.map.delete(t)}delete(e){let t=this.map.get(e);return t?(this.deleteNode(t),!0):!1}scheduleFinalization(e){this.unfinalizedNodes.add(e),this.finalizationScheduled||(this.finalizationScheduled=!0,queueMicrotask(this.finalize))}};var te=null,fs={},kd=1,Sd=()=>class{constructor(){this.id=["slot",kd++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let e=te;e;e=e.parent)if(this.id in e.slots){let t=e.slots[this.id];if(t===fs)break;return e!==te&&(te.slots[this.id]=t),!0}return te&&(te.slots[this.id]=fs),!1}getValue(){if(this.hasValue())return te.slots[this.id]}withValue(e,t,i,r){let o={__proto__:null,[this.id]:e},a=te;te={parent:a,slots:o};try{return t.apply(r,i)}finally{te=a}}static bind(e){let t=te;return function(){let i=te;try{return te=t,e.apply(this,arguments)}finally{te=i}}}static noContext(e,t,i){if(te){let r=te;try{return te=null,e.apply(i,t)}finally{te=r}}else return e.apply(i,t)}};function ps(n){try{return n()}catch{}}var wr="@wry/context:Slot",Id=ps(()=>globalThis)||ps(()=>global)||Object.create(null),hs=Id,je=hs[wr]||Array[wr]||(function(n){try{Object.defineProperty(hs,wr,{value:n,enumerable:!1,writable:!1,configurable:!0})}finally{return n}})(Sd());var{bind:bs,noContext:gs}=je;var yt=new je;var{hasOwnProperty:ys}=Object.prototype,In=Array.from||function(n){let e=[];return n.forEach(t=>e.push(t)),e};function Qt(n){let{unsubscribe:e}=n;typeof e=="function"&&(n.unsubscribe=void 0,e())}var On=[],Dd=100;function Wt(n,e){if(!n)throw new Error(e||"assertion failure")}function _s(n,e){let t=n.length;return t>0&&t===e.length&&n[t-1]===e[t-1]}function xs(n){switch(n.length){case 0:throw new Error("unknown value");case 1:return n[0];case 2:throw n[1]}}function Es(n){return n.slice(0)}var ws=(()=>{class n{constructor(t){this.fn=t,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++n.count}peek(){if(this.value.length===1&&!nt(this))return vs(this),this.value[0]}recompute(t){return Wt(!this.recomputing,"already recomputing"),vs(this),nt(this)?Fd(this,t):xs(this.value)}setDirty(){this.dirty||(this.dirty=!0,Ts(this),Qt(this))}dispose(){this.setDirty(),Cs(this),Tr(this,(t,i)=>{t.setDirty(),Ds(t,this)})}forget(){this.dispose()}dependOn(t){t.add(this),this.deps||(this.deps=On.pop()||new Set),this.deps.add(t)}forgetDeps(){this.deps&&(In(this.deps).forEach(t=>t.delete(this)),this.deps.clear(),On.push(this.deps),this.deps=null)}}return n.count=0,n})();function vs(n){let e=yt.getValue();if(e)return n.parents.add(e),e.childValues.has(n)||e.childValues.set(n,[]),nt(n)?Ss(e,n):Is(e,n),e}function Fd(n,e){return Cs(n),yt.withValue(n,Ad,[n,e]),Md(n,e)&&Nd(n),xs(n.value)}function Ad(n,e){n.recomputing=!0;let{normalizeResult:t}=n,i;t&&n.value.length===1&&(i=Es(n.value)),n.value.length=0;try{if(n.value[0]=n.fn.apply(null,e),t&&i&&!_s(i,n.value))try{n.value[0]=t(n.value[0],i[0])}catch{}}catch(r){n.value[1]=r}n.recomputing=!1}function nt(n){return n.dirty||!!(n.dirtyChildren&&n.dirtyChildren.size)}function Nd(n){n.dirty=!1,!nt(n)&&ks(n)}function Ts(n){Tr(n,Ss)}function ks(n){Tr(n,Is)}function Tr(n,e){let t=n.parents.size;if(t){let i=In(n.parents);for(let r=0;r<t;++r)e(i[r],n)}}function Ss(n,e){Wt(n.childValues.has(e)),Wt(nt(e));let t=!nt(n);if(!n.dirtyChildren)n.dirtyChildren=On.pop()||new Set;else if(n.dirtyChildren.has(e))return;n.dirtyChildren.add(e),t&&Ts(n)}function Is(n,e){Wt(n.childValues.has(e)),Wt(!nt(e));let t=n.childValues.get(e);t.length===0?n.childValues.set(e,Es(e.value)):_s(t,e.value)||n.setDirty(),Os(n,e),!nt(n)&&ks(n)}function Os(n,e){let t=n.dirtyChildren;t&&(t.delete(e),t.size===0&&(On.length<Dd&&On.push(t),n.dirtyChildren=null))}function Cs(n){n.childValues.size>0&&n.childValues.forEach((e,t)=>{Ds(n,t)}),n.forgetDeps(),Wt(n.dirtyChildren===null)}function Ds(n,e){e.parents.delete(n),n.childValues.delete(e),Os(n,e)}function Md(n,e){if(typeof n.subscribe=="function")try{Qt(n),n.unsubscribe=n.subscribe.apply(null,e)}catch{return n.setDirty(),!1}return!0}var Rd={setDirty:!0,dispose:!0,forget:!0};function Cn(n){let e=new Map,t=n&&n.subscribe;function i(r){let o=yt.getValue();if(o){let a=e.get(r);a||e.set(r,a=new Set),o.dependOn(a),typeof t=="function"&&(Qt(a),a.unsubscribe=t(r))}}return i.dirty=function(o,a){let s=e.get(o);if(s){let l=a&&ys.call(Rd,a)?a:"setDirty";In(s).forEach(c=>c[l]()),e.delete(o),Qt(s)}},i}var Fs;function Sr(...n){return(Fs||(Fs=new ee(typeof WeakMap=="function"))).lookupArray(n)}var kr=new Set;function Be(n,{max:e=Math.pow(2,16),keyArgs:t,makeCacheKey:i=Sr,normalizeResult:r,subscribe:o,cache:a=tt}=Object.create(null)){let s=typeof a=="function"?new a(e,u=>u.dispose()):a,l=function(){let u=i.apply(null,t?t.apply(null,arguments):arguments);if(u===void 0)return n.apply(null,arguments);let m=s.get(u);m||(s.set(u,m=new ws(n)),m.normalizeResult=r,m.subscribe=o,m.forget=()=>s.delete(u));let b=m.recompute(Array.prototype.slice.call(arguments));return s.set(u,m),kr.add(s),yt.hasValue()||(kr.forEach(h=>h.clean()),kr.clear()),b};Object.defineProperty(l,"size",{get:()=>s.size,configurable:!1,enumerable:!1}),Object.freeze(l.options={max:e,keyArgs:t,makeCacheKey:i,normalizeResult:r,subscribe:o,cache:s});function c(u){let m=u&&s.get(u);m&&m.setDirty()}l.dirtyKey=c,l.dirty=function(){c(i.apply(null,arguments))};function d(u){let m=u&&s.get(u);if(m)return m.peek()}l.peekKey=d,l.peek=function(){return d(i.apply(null,arguments))};function f(u){return u?s.delete(u):!1}return l.forgetKey=f,l.forget=function(){return f(i.apply(null,arguments))},l.makeCacheKey=i,l.getKey=t?function(){return i.apply(null,t.apply(null,arguments))}:i,Object.freeze(l)}function Ht(n,e){if(!!!n)throw new Error(e)}function As(n){return typeof n=="object"&&n!==null}function Ns(n,e){if(!!!n)throw new Error(e??"Unexpected invariant triggered.")}var Ld=/\r\n|[\n\r]/g;function Gt(n,e){let t=0,i=1;for(let r of n.body.matchAll(Ld)){if(typeof r.index=="number"||Ns(!1),r.index>=e)break;t=r.index+r[0].length,i+=1}return{line:i,column:e+1-t}}function Ir(n){return hi(n.source,Gt(n.source,n.start))}function hi(n,e){let t=n.locationOffset.column-1,i="".padStart(t)+n.body,r=e.line-1,o=n.locationOffset.line-1,a=e.line+o,s=e.line===1?t:0,l=e.column+s,c=`${n.name}:${a}:${l}
`,d=i.split(/\r\n|[\n\r]/g),f=d[r];if(f.length>120){let u=Math.floor(l/80),m=l%80,b=[];for(let h=0;h<f.length;h+=80)b.push(f.slice(h,h+80));return c+Ms([[`${a} |`,b[0]],...b.slice(1,u+1).map(h=>["|",h]),["|","^".padStart(m)],["|",b[u+1]]])}return c+Ms([[`${a-1} |`,d[r-1]],[`${a} |`,f],["|","^".padStart(l)],[`${a+1} |`,d[r+1]]])}function Ms(n){let e=n.filter(([i,r])=>r!==void 0),t=Math.max(...e.map(([i])=>i.length));return e.map(([i,r])=>i.padStart(t)+(r?" "+r:"")).join(`
`)}function Pd(n){let e=n[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:n[1],positions:n[2],path:n[3],originalError:n[4],extensions:n[5]}:e}var bi=class n extends Error{constructor(e,...t){var i,r,o;let{nodes:a,source:s,positions:l,path:c,originalError:d,extensions:f}=Pd(t);super(e),this.name="GraphQLError",this.path=c??void 0,this.originalError=d??void 0,this.nodes=Rs(Array.isArray(a)?a:a?[a]:void 0);let u=Rs((i=this.nodes)===null||i===void 0?void 0:i.map(b=>b.loc).filter(b=>b!=null));this.source=s??(u==null||(r=u[0])===null||r===void 0?void 0:r.source),this.positions=l??u?.map(b=>b.start),this.locations=l&&s?l.map(b=>Gt(s,b)):u?.map(b=>Gt(b.source,b.start));let m=As(d?.extensions)?d?.extensions:void 0;this.extensions=(o=f??m)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),d!=null&&d.stack?Object.defineProperty(this,"stack",{value:d.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,n):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(let t of this.nodes)t.loc&&(e+=`

`+Ir(t.loc));else if(this.source&&this.locations)for(let t of this.locations)e+=`

`+hi(this.source,t);return e}toJSON(){let e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}};function Rs(n){return n===void 0||n.length===0?void 0:n}function U(n,e,t){return new bi(`Syntax Error: ${t}`,{source:n,positions:[e]})}var Kt=class{constructor(e,t,i){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=i}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}},vt=class{constructor(e,t,i,r,o,a){this.kind=e,this.start=t,this.end=i,this.line=r,this.column=o,this.value=a,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}},Or={Name:[],Document:["definitions"],OperationDefinition:["description","name","variableDefinitions","directives","selectionSet"],VariableDefinition:["description","variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["description","name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","directives","locations"],SchemaExtension:["directives","operationTypes"],DirectiveExtension:["name","directives"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"],TypeCoordinate:["name"],MemberCoordinate:["name","memberName"],ArgumentCoordinate:["name","fieldName","argumentName"],DirectiveCoordinate:["name"],DirectiveArgumentCoordinate:["name","argumentName"]},Vd=new Set(Object.keys(Or));function Cr(n){let e=n?.kind;return typeof e=="string"&&Vd.has(e)}var ce=(function(n){return n.QUERY="query",n.MUTATION="mutation",n.SUBSCRIPTION="subscription",n})(ce||{});var gi=(function(n){return n.QUERY="QUERY",n.MUTATION="MUTATION",n.SUBSCRIPTION="SUBSCRIPTION",n.FIELD="FIELD",n.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",n.FRAGMENT_SPREAD="FRAGMENT_SPREAD",n.INLINE_FRAGMENT="INLINE_FRAGMENT",n.VARIABLE_DEFINITION="VARIABLE_DEFINITION",n.SCHEMA="SCHEMA",n.SCALAR="SCALAR",n.OBJECT="OBJECT",n.FIELD_DEFINITION="FIELD_DEFINITION",n.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",n.INTERFACE="INTERFACE",n.UNION="UNION",n.ENUM="ENUM",n.ENUM_VALUE="ENUM_VALUE",n.INPUT_OBJECT="INPUT_OBJECT",n.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION",n.DIRECTIVE_DEFINITION="DIRECTIVE_DEFINITION",n})(gi||{});var _=(function(n){return n.NAME="Name",n.DOCUMENT="Document",n.OPERATION_DEFINITION="OperationDefinition",n.VARIABLE_DEFINITION="VariableDefinition",n.SELECTION_SET="SelectionSet",n.FIELD="Field",n.ARGUMENT="Argument",n.FRAGMENT_SPREAD="FragmentSpread",n.INLINE_FRAGMENT="InlineFragment",n.FRAGMENT_DEFINITION="FragmentDefinition",n.VARIABLE="Variable",n.INT="IntValue",n.FLOAT="FloatValue",n.STRING="StringValue",n.BOOLEAN="BooleanValue",n.NULL="NullValue",n.ENUM="EnumValue",n.LIST="ListValue",n.OBJECT="ObjectValue",n.OBJECT_FIELD="ObjectField",n.DIRECTIVE="Directive",n.NAMED_TYPE="NamedType",n.LIST_TYPE="ListType",n.NON_NULL_TYPE="NonNullType",n.SCHEMA_DEFINITION="SchemaDefinition",n.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",n.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",n.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",n.FIELD_DEFINITION="FieldDefinition",n.INPUT_VALUE_DEFINITION="InputValueDefinition",n.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",n.UNION_TYPE_DEFINITION="UnionTypeDefinition",n.ENUM_TYPE_DEFINITION="EnumTypeDefinition",n.ENUM_VALUE_DEFINITION="EnumValueDefinition",n.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",n.DIRECTIVE_DEFINITION="DirectiveDefinition",n.SCHEMA_EXTENSION="SchemaExtension",n.DIRECTIVE_EXTENSION="DirectiveExtension",n.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",n.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",n.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",n.UNION_TYPE_EXTENSION="UnionTypeExtension",n.ENUM_TYPE_EXTENSION="EnumTypeExtension",n.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension",n.TYPE_COORDINATE="TypeCoordinate",n.MEMBER_COORDINATE="MemberCoordinate",n.ARGUMENT_COORDINATE="ArgumentCoordinate",n.DIRECTIVE_COORDINATE="DirectiveCoordinate",n.DIRECTIVE_ARGUMENT_COORDINATE="DirectiveArgumentCoordinate",n})(_||{});function yi(n){return n===9||n===32}function $t(n){return n>=48&&n<=57}function Ls(n){return n>=97&&n<=122||n>=65&&n<=90}function Dr(n){return Ls(n)||n===95}function Ps(n){return Ls(n)||$t(n)||n===95}function Vs(n){var e;let t=Number.MAX_SAFE_INTEGER,i=null,r=-1;for(let a=0;a<n.length;++a){var o;let s=n[a],l=zd(s);l!==s.length&&(i=(o=i)!==null&&o!==void 0?o:a,r=a,a!==0&&l<t&&(t=l))}return n.map((a,s)=>s===0?a:a.slice(t)).slice((e=i)!==null&&e!==void 0?e:0,r+1)}function zd(n){let e=0;for(;e<n.length&&yi(n.charCodeAt(e));)++e;return e}function zs(n,e){let t=n.replace(/"""/g,'\\"""'),i=t.split(/\r\n|[\n\r]/g),r=i.length===1,o=i.length>1&&i.slice(1).every(m=>m.length===0||yi(m.charCodeAt(0))),a=t.endsWith('\\"""'),s=n.endsWith('"')&&!a,l=n.endsWith("\\"),c=s||l,d=!(e!=null&&e.minimize)&&(!r||n.length>70||c||o||a),f="",u=r&&yi(n.charCodeAt(0));return(d&&!u||o)&&(f+=`
`),f+=t,(d||c)&&(f+=`
`),'"""'+f+'"""'}var y=(function(n){return n.SOF="<SOF>",n.EOF="<EOF>",n.BANG="!",n.DOLLAR="$",n.AMP="&",n.PAREN_L="(",n.PAREN_R=")",n.DOT=".",n.SPREAD="...",n.COLON=":",n.EQUALS="=",n.AT="@",n.BRACKET_L="[",n.BRACKET_R="]",n.BRACE_L="{",n.PIPE="|",n.BRACE_R="}",n.NAME="Name",n.INT="Int",n.FLOAT="Float",n.STRING="String",n.BLOCK_STRING="BlockString",n.COMMENT="Comment",n})(y||{});var Fn=class{constructor(e){let t=new vt(y.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==y.EOF)do if(e.next)e=e.next;else{let t=jd(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===y.COMMENT);return e}};function Bs(n){return n===y.BANG||n===y.DOLLAR||n===y.AMP||n===y.PAREN_L||n===y.PAREN_R||n===y.DOT||n===y.SPREAD||n===y.COLON||n===y.EQUALS||n===y.AT||n===y.BRACKET_L||n===y.BRACKET_R||n===y.BRACE_L||n===y.PIPE||n===y.BRACE_R}function Yt(n){return n>=0&&n<=55295||n>=57344&&n<=1114111}function vi(n,e){return Us(n.charCodeAt(e))&&qs(n.charCodeAt(e+1))}function Us(n){return n>=55296&&n<=56319}function qs(n){return n>=56320&&n<=57343}function _t(n,e){let t=n.source.body.codePointAt(e);if(t===void 0)return y.EOF;if(t>=32&&t<=126){let i=String.fromCodePoint(t);return i==='"'?`'"'`:`"${i}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function W(n,e,t,i,r){let o=n.line,a=1+t-n.lineStart;return new vt(e,t,i,o,a,r)}function jd(n,e){let t=n.source.body,i=t.length,r=e;for(;r<i;){let o=t.charCodeAt(r);switch(o){case 65279:case 9:case 32:case 44:++r;continue;case 10:++r,++n.line,n.lineStart=r;continue;case 13:t.charCodeAt(r+1)===10?r+=2:++r,++n.line,n.lineStart=r;continue;case 35:return Bd(n,r);case 33:return W(n,y.BANG,r,r+1);case 36:return W(n,y.DOLLAR,r,r+1);case 38:return W(n,y.AMP,r,r+1);case 40:return W(n,y.PAREN_L,r,r+1);case 41:return W(n,y.PAREN_R,r,r+1);case 46:if(t.charCodeAt(r+1)===46&&t.charCodeAt(r+2)===46)return W(n,y.SPREAD,r,r+3);break;case 58:return W(n,y.COLON,r,r+1);case 61:return W(n,y.EQUALS,r,r+1);case 64:return W(n,y.AT,r,r+1);case 91:return W(n,y.BRACKET_L,r,r+1);case 93:return W(n,y.BRACKET_R,r,r+1);case 123:return W(n,y.BRACE_L,r,r+1);case 124:return W(n,y.PIPE,r,r+1);case 125:return W(n,y.BRACE_R,r,r+1);case 34:return t.charCodeAt(r+1)===34&&t.charCodeAt(r+2)===34?Gd(n,r):qd(n,r)}if($t(o)||o===45)return Ud(n,r,o);if(Dr(o))return Kd(n,r);throw U(n.source,r,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Yt(o)||vi(t,r)?`Unexpected character: ${_t(n,r)}.`:`Invalid character: ${_t(n,r)}.`)}return W(n,y.EOF,i,i)}function Bd(n,e){let t=n.source.body,i=t.length,r=e+1;for(;r<i;){let o=t.charCodeAt(r);if(o===10||o===13)break;if(Yt(o))++r;else if(vi(t,r))r+=2;else break}return W(n,y.COMMENT,e,r,t.slice(e+1,r))}function Ud(n,e,t){let i=n.source.body,r=e,o=t,a=!1;if(o===45&&(o=i.charCodeAt(++r)),o===48){if(o=i.charCodeAt(++r),$t(o))throw U(n.source,r,`Invalid number, unexpected digit after 0: ${_t(n,r)}.`)}else r=Fr(n,r,o),o=i.charCodeAt(r);if(o===46&&(a=!0,o=i.charCodeAt(++r),r=Fr(n,r,o),o=i.charCodeAt(r)),(o===69||o===101)&&(a=!0,o=i.charCodeAt(++r),(o===43||o===45)&&(o=i.charCodeAt(++r)),r=Fr(n,r,o),o=i.charCodeAt(r)),o===46||Dr(o))throw U(n.source,r,`Invalid number, expected digit but got: ${_t(n,r)}.`);return W(n,a?y.FLOAT:y.INT,e,r,i.slice(e,r))}function Fr(n,e,t){if(!$t(t))throw U(n.source,e,`Invalid number, expected digit but got: ${_t(n,e)}.`);let i=n.source.body,r=e+1;for(;$t(i.charCodeAt(r));)++r;return r}function qd(n,e){let t=n.source.body,i=t.length,r=e+1,o=r,a="";for(;r<i;){let s=t.charCodeAt(r);if(s===34)return a+=t.slice(o,r),W(n,y.STRING,e,r+1,a);if(s===92){a+=t.slice(o,r);let l=t.charCodeAt(r+1)===117?t.charCodeAt(r+2)===123?Qd(n,r):Wd(n,r):Hd(n,r);a+=l.value,r+=l.size,o=r;continue}if(s===10||s===13)break;if(Yt(s))++r;else if(vi(t,r))r+=2;else throw U(n.source,r,`Invalid character within String: ${_t(n,r)}.`)}throw U(n.source,r,"Unterminated string.")}function Qd(n,e){let t=n.source.body,i=0,r=3;for(;r<12;){let o=t.charCodeAt(e+r++);if(o===125){if(r<5||!Yt(i))break;return{value:String.fromCodePoint(i),size:r}}if(i=i<<4|Dn(o),i<0)break}throw U(n.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+r)}".`)}function Wd(n,e){let t=n.source.body,i=js(t,e+2);if(Yt(i))return{value:String.fromCodePoint(i),size:6};if(Us(i)&&t.charCodeAt(e+6)===92&&t.charCodeAt(e+7)===117){let r=js(t,e+8);if(qs(r))return{value:String.fromCodePoint(i,r),size:12}}throw U(n.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+6)}".`)}function js(n,e){return Dn(n.charCodeAt(e))<<12|Dn(n.charCodeAt(e+1))<<8|Dn(n.charCodeAt(e+2))<<4|Dn(n.charCodeAt(e+3))}function Dn(n){return n>=48&&n<=57?n-48:n>=65&&n<=70?n-55:n>=97&&n<=102?n-87:-1}function Hd(n,e){let t=n.source.body;switch(t.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw U(n.source,e,`Invalid character escape sequence: "${t.slice(e,e+2)}".`)}function Gd(n,e){let t=n.source.body,i=t.length,r=n.lineStart,o=e+3,a=o,s="",l=[];for(;o<i;){let c=t.charCodeAt(o);if(c===34&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34){s+=t.slice(a,o),l.push(s);let d=W(n,y.BLOCK_STRING,e,o+3,Vs(l).join(`
`));return n.line+=l.length-1,n.lineStart=r,d}if(c===92&&t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34&&t.charCodeAt(o+3)===34){s+=t.slice(a,o),a=o+1,o+=4;continue}if(c===10||c===13){s+=t.slice(a,o),l.push(s),c===13&&t.charCodeAt(o+1)===10?o+=2:++o,s="",a=o,r=o;continue}if(Yt(c))++o;else if(vi(t,o))o+=2;else throw U(n.source,o,`Invalid character within String: ${_t(n,o)}.`)}throw U(n.source,o,"Unterminated string.")}function Kd(n,e){let t=n.source.body,i=t.length,r=e+1;for(;r<i;){let o=t.charCodeAt(r);if(Ps(o))++r;else break}return W(n,y.NAME,e,r,t.slice(e,r))}function Zt(n){return _i(n,[])}function _i(n,e){switch(typeof n){case"string":return JSON.stringify(n);case"function":return n.name?`[function ${n.name}]`:"[function]";case"object":return $d(n,e);default:return String(n)}}function $d(n,e){if(n===null)return"null";if(e.includes(n))return"[Circular]";let t=[...e,n];if(Yd(n)){let i=n.toJSON();if(i!==n)return typeof i=="string"?i:_i(i,t)}else if(Array.isArray(n))return Xd(n,t);return Zd(n,t)}function Yd(n){return typeof n.toJSON=="function"}function Zd(n,e){let t=Object.entries(n);return t.length===0?"{}":e.length>2?"["+Jd(n)+"]":"{ "+t.map(([r,o])=>r+": "+_i(o,e)).join(", ")+" }"}function Xd(n,e){if(n.length===0)return"[]";if(e.length>2)return"[Array]";let t=Math.min(10,n.length),i=n.length-t,r=[];for(let o=0;o<t;++o)r.push(_i(n[o],e));return i===1?r.push("... 1 more item"):i>1&&r.push(`... ${i} more items`),"["+r.join(", ")+"]"}function Jd(n){let e=Object.prototype.toString.call(n).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof n.constructor=="function"){let t=n.constructor.name;if(typeof t=="string"&&t!=="")return t}return e}var eu=globalThis.process&&!0,Qs=eu?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;if(typeof e=="object"&&e!==null){var i;let r=t.prototype[Symbol.toStringTag],o=Symbol.toStringTag in e?e[Symbol.toStringTag]:(i=e.constructor)===null||i===void 0?void 0:i.name;if(r===o){let a=Zt(e);throw new Error(`Cannot use ${r} "${a}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};var Xt=class{constructor(e,t="GraphQL request",i={line:1,column:1}){typeof e=="string"||Ht(!1,`Body must be a string. Received: ${Zt(e)}.`),this.body=e,this.name=t,this.locationOffset=i,this.locationOffset.line>0||Ht(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||Ht(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}};function Ws(n){return Qs(n,Xt)}function Ei(n,e){let t=new Ar(n,e),i=t.parseDocument();return Object.defineProperty(i,"tokenCount",{enumerable:!1,value:t.tokenCount}),i}var Ar=class{constructor(e,t={}){let o=t,{lexer:i}=o,r=Q(o,["lexer"]);if(i)this._lexer=i;else{let a=Ws(e)?e:new Xt(e);this._lexer=new Fn(a)}this._options=r,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){let e=this.expectToken(y.NAME);return this.node(e,{kind:_.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:_.DOCUMENT,definitions:this.many(y.SOF,this.parseDefinition,y.EOF)})}parseDefinition(){if(this.peek(y.BRACE_L))return this.parseOperationDefinition();let e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(e&&t.kind===y.BRACE_L)throw U(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are not supported on shorthand queries.");if(t.kind===y.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition()}if(e)throw U(this._lexer.source,this._lexer.token.start,"Unexpected description, only GraphQL definitions support descriptions.");if(t.value==="extend")return this.parseTypeSystemExtension()}throw this.unexpected(t)}parseOperationDefinition(){let e=this._lexer.token;if(this.peek(y.BRACE_L))return this.node(e,{kind:_.OPERATION_DEFINITION,operation:ce.QUERY,description:void 0,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});let t=this.parseDescription(),i=this.parseOperationType(),r;return this.peek(y.NAME)&&(r=this.parseName()),this.node(e,{kind:_.OPERATION_DEFINITION,operation:i,description:t,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){let e=this.expectToken(y.NAME);switch(e.value){case"query":return ce.QUERY;case"mutation":return ce.MUTATION;case"subscription":return ce.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(y.PAREN_L,this.parseVariableDefinition,y.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:_.VARIABLE_DEFINITION,description:this.parseDescription(),variable:this.parseVariable(),type:(this.expectToken(y.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(y.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){let e=this._lexer.token;return this.expectToken(y.DOLLAR),this.node(e,{kind:_.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:_.SELECTION_SET,selections:this.many(y.BRACE_L,this.parseSelection,y.BRACE_R)})}parseSelection(){return this.peek(y.SPREAD)?this.parseFragment():this.parseField()}parseField(){let e=this._lexer.token,t=this.parseName(),i,r;return this.expectOptionalToken(y.COLON)?(i=t,r=this.parseName()):r=t,this.node(e,{kind:_.FIELD,alias:i,name:r,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(y.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){let t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(y.PAREN_L,t,y.PAREN_R)}parseArgument(e=!1){let t=this._lexer.token,i=this.parseName();return this.expectToken(y.COLON),this.node(t,{kind:_.ARGUMENT,name:i,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){let e=this._lexer.token;this.expectToken(y.SPREAD);let t=this.expectOptionalKeyword("on");return!t&&this.peek(y.NAME)?this.node(e,{kind:_.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:_.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){let e=this._lexer.token,t=this.parseDescription();return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:_.FRAGMENT_DEFINITION,description:t,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:_.FRAGMENT_DEFINITION,description:t,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){let t=this._lexer.token;switch(t.kind){case y.BRACKET_L:return this.parseList(e);case y.BRACE_L:return this.parseObject(e);case y.INT:return this.advanceLexer(),this.node(t,{kind:_.INT,value:t.value});case y.FLOAT:return this.advanceLexer(),this.node(t,{kind:_.FLOAT,value:t.value});case y.STRING:case y.BLOCK_STRING:return this.parseStringLiteral();case y.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:_.BOOLEAN,value:!0});case"false":return this.node(t,{kind:_.BOOLEAN,value:!1});case"null":return this.node(t,{kind:_.NULL});default:return this.node(t,{kind:_.ENUM,value:t.value})}case y.DOLLAR:if(e)if(this.expectToken(y.DOLLAR),this._lexer.token.kind===y.NAME){let i=this._lexer.token.value;throw U(this._lexer.source,t.start,`Unexpected variable "$${i}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){let e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:_.STRING,value:e.value,block:e.kind===y.BLOCK_STRING})}parseList(e){let t=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:_.LIST,values:this.any(y.BRACKET_L,t,y.BRACKET_R)})}parseObject(e){let t=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:_.OBJECT,fields:this.any(y.BRACE_L,t,y.BRACE_R)})}parseObjectField(e){let t=this._lexer.token,i=this.parseName();return this.expectToken(y.COLON),this.node(t,{kind:_.OBJECT_FIELD,name:i,value:this.parseValueLiteral(e)})}parseDirectives(e){let t=[];for(;this.peek(y.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){let t=this._lexer.token;return this.expectToken(y.AT),this.node(t,{kind:_.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){let e=this._lexer.token,t;if(this.expectOptionalToken(y.BRACKET_L)){let i=this.parseTypeReference();this.expectToken(y.BRACKET_R),t=this.node(e,{kind:_.LIST_TYPE,type:i})}else t=this.parseNamedType();return this.expectOptionalToken(y.BANG)?this.node(e,{kind:_.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:_.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(y.STRING)||this.peek(y.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");let i=this.parseConstDirectives(),r=this.many(y.BRACE_L,this.parseOperationTypeDefinition,y.BRACE_R);return this.node(e,{kind:_.SCHEMA_DEFINITION,description:t,directives:i,operationTypes:r})}parseOperationTypeDefinition(){let e=this._lexer.token,t=this.parseOperationType();this.expectToken(y.COLON);let i=this.parseNamedType();return this.node(e,{kind:_.OPERATION_TYPE_DEFINITION,operation:t,type:i})}parseScalarTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");let i=this.parseName(),r=this.parseConstDirectives();return this.node(e,{kind:_.SCALAR_TYPE_DEFINITION,description:t,name:i,directives:r})}parseObjectTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");let i=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(e,{kind:_.OBJECT_TYPE_DEFINITION,description:t,name:i,interfaces:r,directives:o,fields:a})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(y.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(y.BRACE_L,this.parseFieldDefinition,y.BRACE_R)}parseFieldDefinition(){let e=this._lexer.token,t=this.parseDescription(),i=this.parseName(),r=this.parseArgumentDefs();this.expectToken(y.COLON);let o=this.parseTypeReference(),a=this.parseConstDirectives();return this.node(e,{kind:_.FIELD_DEFINITION,description:t,name:i,arguments:r,type:o,directives:a})}parseArgumentDefs(){return this.optionalMany(y.PAREN_L,this.parseInputValueDef,y.PAREN_R)}parseInputValueDef(){let e=this._lexer.token,t=this.parseDescription(),i=this.parseName();this.expectToken(y.COLON);let r=this.parseTypeReference(),o;this.expectOptionalToken(y.EQUALS)&&(o=this.parseConstValueLiteral());let a=this.parseConstDirectives();return this.node(e,{kind:_.INPUT_VALUE_DEFINITION,description:t,name:i,type:r,defaultValue:o,directives:a})}parseInterfaceTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");let i=this.parseName(),r=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(e,{kind:_.INTERFACE_TYPE_DEFINITION,description:t,name:i,interfaces:r,directives:o,fields:a})}parseUnionTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");let i=this.parseName(),r=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(e,{kind:_.UNION_TYPE_DEFINITION,description:t,name:i,directives:r,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(y.EQUALS)?this.delimitedMany(y.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");let i=this.parseName(),r=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(e,{kind:_.ENUM_TYPE_DEFINITION,description:t,name:i,directives:r,values:o})}parseEnumValuesDefinition(){return this.optionalMany(y.BRACE_L,this.parseEnumValueDefinition,y.BRACE_R)}parseEnumValueDefinition(){let e=this._lexer.token,t=this.parseDescription(),i=this.parseEnumValueName(),r=this.parseConstDirectives();return this.node(e,{kind:_.ENUM_VALUE_DEFINITION,description:t,name:i,directives:r})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw U(this._lexer.source,this._lexer.token.start,`${xi(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");let i=this.parseName(),r=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(e,{kind:_.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:i,directives:r,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(y.BRACE_L,this.parseInputValueDef,y.BRACE_R)}parseTypeSystemExtension(){let e=this._lexer.lookahead();if(e.kind===y.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension();case"directive":if(this._options.experimentalDirectivesOnDirectiveDefinitions)return this.parseDirectiveDefinitionExtension();break}throw this.unexpected(e)}parseSchemaExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");let t=this.parseConstDirectives(),i=this.optionalMany(y.BRACE_L,this.parseOperationTypeDefinition,y.BRACE_R);if(t.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:_.SCHEMA_EXTENSION,directives:t,operationTypes:i})}parseScalarTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");let t=this.parseName(),i=this.parseConstDirectives();if(i.length===0)throw this.unexpected();return this.node(e,{kind:_.SCALAR_TYPE_EXTENSION,name:t,directives:i})}parseObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");let t=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(i.length===0&&r.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:_.OBJECT_TYPE_EXTENSION,name:t,interfaces:i,directives:r,fields:o})}parseInterfaceTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");let t=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(i.length===0&&r.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:_.INTERFACE_TYPE_EXTENSION,name:t,interfaces:i,directives:r,fields:o})}parseUnionTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");let t=this.parseName(),i=this.parseConstDirectives(),r=this.parseUnionMemberTypes();if(i.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:_.UNION_TYPE_EXTENSION,name:t,directives:i,types:r})}parseEnumTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");let t=this.parseName(),i=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();if(i.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:_.ENUM_TYPE_EXTENSION,name:t,directives:i,values:r})}parseInputObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");let t=this.parseName(),i=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();if(i.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:_.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:i,fields:r})}parseDirectiveDefinitionExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("directive"),this.expectToken(y.AT);let t=this.parseName(),i=this.parseConstDirectives();if(i.length===0)throw this.unexpected();return this.node(e,{kind:_.DIRECTIVE_EXTENSION,name:t,directives:i})}parseDirectiveDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(y.AT);let i=this.parseName(),r=this.parseArgumentDefs(),o=this._options.experimentalDirectivesOnDirectiveDefinitions?this.parseConstDirectives():[],a=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");let s=this.parseDirectiveLocations();return this.node(e,{kind:_.DIRECTIVE_DEFINITION,description:t,name:i,arguments:r,directives:o,repeatable:a,locations:s})}parseDirectiveLocations(){return this.delimitedMany(y.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){let e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(gi,t.value))return t;throw this.unexpected(e)}parseSchemaCoordinate(){let e=this._lexer.token,t=this.expectOptionalToken(y.AT),i=this.parseName(),r;!t&&this.expectOptionalToken(y.DOT)&&(r=this.parseName());let o;return(t||r)&&this.expectOptionalToken(y.PAREN_L)&&(o=this.parseName(),this.expectToken(y.COLON),this.expectToken(y.PAREN_R)),t?o?this.node(e,{kind:_.DIRECTIVE_ARGUMENT_COORDINATE,name:i,argumentName:o}):this.node(e,{kind:_.DIRECTIVE_COORDINATE,name:i}):r?o?this.node(e,{kind:_.ARGUMENT_COORDINATE,name:i,fieldName:r,argumentName:o}):this.node(e,{kind:_.MEMBER_COORDINATE,name:i,memberName:r}):this.node(e,{kind:_.TYPE_COORDINATE,name:i})}node(e,t){return this._options.noLocation!==!0&&(t.loc=new Kt(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){let t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw U(this._lexer.source,t.start,`Expected ${Hs(e)}, found ${xi(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){let t=this._lexer.token;if(t.kind===y.NAME&&t.value===e)this.advanceLexer();else throw U(this._lexer.source,t.start,`Expected "${e}", found ${xi(t)}.`)}expectOptionalKeyword(e){let t=this._lexer.token;return t.kind===y.NAME&&t.value===e?(this.advanceLexer(),!0):!1}unexpected(e){let t=e??this._lexer.token;return U(this._lexer.source,t.start,`Unexpected ${xi(t)}.`)}any(e,t,i){this.expectToken(e);let r=[];for(;!this.expectOptionalToken(i);)r.push(t.call(this));return r}optionalMany(e,t,i){if(this.expectOptionalToken(e)){let r=[];do r.push(t.call(this));while(!this.expectOptionalToken(i));return r}return[]}many(e,t,i){this.expectToken(e);let r=[];do r.push(t.call(this));while(!this.expectOptionalToken(i));return r}delimitedMany(e,t){this.expectOptionalToken(e);let i=[];do i.push(t.call(this));while(this.expectOptionalToken(e));return i}advanceLexer(){let{maxTokens:e}=this._options,t=this._lexer.advance();if(t.kind!==y.EOF&&(++this._tokenCounter,e!==void 0&&this._tokenCounter>e))throw U(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}};function xi(n){let e=n.value;return Hs(n.kind)+(e!=null?` "${e}"`:"")}function Hs(n){return Bs(n)?`"${n}"`:n}function Gs(n){return`"${n.replace(tu,nu)}"`}var tu=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function nu(n){return iu[n.charCodeAt(0)]}var iu=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"];var Ue=Object.freeze({});function H(n,e,t=Or){let i=new Map;for(let v of Object.values(_))i.set(v,Nr(e,v));let r,o=Array.isArray(n),a=[n],s=-1,l=[],c=n,d,f,u=[],m=[];do{s++;let v=s===a.length,T=v&&l.length!==0;if(v){if(d=m.length===0?void 0:u[u.length-1],c=f,f=m.pop(),T)if(o){c=c.slice();let S=0;for(let[F,Ge]of l){let Mt=F-S;Ge===null?(c.splice(Mt,1),S++):c[Mt]=Ge}}else{c=p({},c);for(let[S,F]of l)c[S]=F}s=r.index,a=r.keys,l=r.edits,o=r.inArray,r=r.prev}else if(f){if(d=o?s:a[s],c=f[d],c==null)continue;u.push(d)}let O;if(!Array.isArray(c)){var b,h;Cr(c)||Ht(!1,`Invalid AST Node: ${Zt(c)}.`);let S=v?(b=i.get(c.kind))===null||b===void 0?void 0:b.leave:(h=i.get(c.kind))===null||h===void 0?void 0:h.enter;if(O=S?.call(e,c,d,f,u,m),O===Ue)break;if(O===!1){if(!v){u.pop();continue}}else if(O!==void 0&&(l.push([d,O]),!v))if(Cr(O))c=O;else{u.pop();continue}}if(O===void 0&&T&&l.push([d,c]),v)u.pop();else{var g;r={inArray:o,index:s,keys:a,edits:l,prev:r},o=Array.isArray(c),a=o?c:(g=t[c.kind])!==null&&g!==void 0?g:[],s=-1,l=[],f&&m.push(f),f=c}}while(r!==void 0);return l.length!==0?l[l.length-1][1]:n}function Nr(n,e){let t=n[e];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:n.enter,leave:n.leave}}function Ti(n){return H(n,ou)}var ru=80,ou={Name:{leave:n=>n.value},Variable:{leave:n=>"$"+n.name},Document:{leave:n=>I(n.definitions,`

`)},OperationDefinition:{leave(n){let e=Mr(n.variableDefinitions)?D(`(
`,I(n.variableDefinitions,`
`),`
)`):D("(",I(n.variableDefinitions,", "),")"),t=D("",n.description,`
`)+I([n.operation,I([n.name,e]),I(n.directives," ")]," ");return(t==="query"?"":t+" ")+n.selectionSet}},VariableDefinition:{leave:({variable:n,type:e,defaultValue:t,directives:i,description:r})=>D("",r,`
`)+n+": "+e+D(" = ",t)+D(" ",I(i," "))},SelectionSet:{leave:({selections:n})=>Se(n)},Field:{leave({alias:n,name:e,arguments:t,directives:i,selectionSet:r}){let o=D("",n,": ")+e,a=o+D("(",I(t,", "),")");return a.length>ru&&(a=o+D(`(
`,wi(I(t,`
`)),`
)`)),I([a,I(i," "),r]," ")}},Argument:{leave:({name:n,value:e})=>n+": "+e},FragmentSpread:{leave:({name:n,directives:e})=>"..."+n+D(" ",I(e," "))},InlineFragment:{leave:({typeCondition:n,directives:e,selectionSet:t})=>I(["...",D("on ",n),I(e," "),t]," ")},FragmentDefinition:{leave:({name:n,typeCondition:e,variableDefinitions:t,directives:i,selectionSet:r,description:o})=>D("",o,`
`)+`fragment ${n}${D("(",I(t,", "),")")} on ${e} ${D("",I(i," ")," ")}`+r},IntValue:{leave:({value:n})=>n},FloatValue:{leave:({value:n})=>n},StringValue:{leave:({value:n,block:e})=>e?zs(n):Gs(n)},BooleanValue:{leave:({value:n})=>n?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:n})=>n},ListValue:{leave:({values:n})=>"["+I(n,", ")+"]"},ObjectValue:{leave:({fields:n})=>"{"+I(n,", ")+"}"},ObjectField:{leave:({name:n,value:e})=>n+": "+e},Directive:{leave:({name:n,arguments:e})=>"@"+n+D("(",I(e,", "),")")},NamedType:{leave:({name:n})=>n},ListType:{leave:({type:n})=>"["+n+"]"},NonNullType:{leave:({type:n})=>n+"!"},SchemaDefinition:{leave:({description:n,directives:e,operationTypes:t})=>D("",n,`
`)+I(["schema",I(e," "),Se(t)]," ")},OperationTypeDefinition:{leave:({operation:n,type:e})=>n+": "+e},ScalarTypeDefinition:{leave:({description:n,name:e,directives:t})=>D("",n,`
`)+I(["scalar",e,I(t," ")]," ")},ObjectTypeDefinition:{leave:({description:n,name:e,interfaces:t,directives:i,fields:r})=>D("",n,`
`)+I(["type",e,D("implements ",I(t," & ")),I(i," "),Se(r)]," ")},FieldDefinition:{leave:({description:n,name:e,arguments:t,type:i,directives:r})=>D("",n,`
`)+e+(Mr(t)?D(`(
`,wi(I(t,`
`)),`
)`):D("(",I(t,", "),")"))+": "+i+D(" ",I(r," "))},InputValueDefinition:{leave:({description:n,name:e,type:t,defaultValue:i,directives:r})=>D("",n,`
`)+I([e+": "+t,D("= ",i),I(r," ")]," ")},InterfaceTypeDefinition:{leave:({description:n,name:e,interfaces:t,directives:i,fields:r})=>D("",n,`
`)+I(["interface",e,D("implements ",I(t," & ")),I(i," "),Se(r)]," ")},UnionTypeDefinition:{leave:({description:n,name:e,directives:t,types:i})=>D("",n,`
`)+I(["union",e,I(t," "),D("= ",I(i," | "))]," ")},EnumTypeDefinition:{leave:({description:n,name:e,directives:t,values:i})=>D("",n,`
`)+I(["enum",e,I(t," "),Se(i)]," ")},EnumValueDefinition:{leave:({description:n,name:e,directives:t})=>D("",n,`
`)+I([e,I(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:n,name:e,directives:t,fields:i})=>D("",n,`
`)+I(["input",e,I(t," "),Se(i)]," ")},DirectiveDefinition:{leave:({description:n,name:e,arguments:t,directives:i,repeatable:r,locations:o})=>D("",n,`
`)+"directive @"+e+(Mr(t)?D(`(
`,wi(I(t,`
`)),`
)`):D("(",I(t,", "),")"))+D(" ",I(i," "))+(r?" repeatable":"")+" on "+I(o," | ")},SchemaExtension:{leave:({directives:n,operationTypes:e})=>I(["extend schema",I(n," "),Se(e)]," ")},ScalarTypeExtension:{leave:({name:n,directives:e})=>I(["extend scalar",n,I(e," ")]," ")},ObjectTypeExtension:{leave:({name:n,interfaces:e,directives:t,fields:i})=>I(["extend type",n,D("implements ",I(e," & ")),I(t," "),Se(i)]," ")},InterfaceTypeExtension:{leave:({name:n,interfaces:e,directives:t,fields:i})=>I(["extend interface",n,D("implements ",I(e," & ")),I(t," "),Se(i)]," ")},UnionTypeExtension:{leave:({name:n,directives:e,types:t})=>I(["extend union",n,I(e," "),D("= ",I(t," | "))]," ")},EnumTypeExtension:{leave:({name:n,directives:e,values:t})=>I(["extend enum",n,I(e," "),Se(t)]," ")},InputObjectTypeExtension:{leave:({name:n,directives:e,fields:t})=>I(["extend input",n,I(e," "),Se(t)]," ")},DirectiveExtension:{leave:({name:n,directives:e})=>I(["extend directive @"+n,I(e," ")]," ")},TypeCoordinate:{leave:({name:n})=>n},MemberCoordinate:{leave:({name:n,memberName:e})=>I([n,D(".",e)])},ArgumentCoordinate:{leave:({name:n,fieldName:e,argumentName:t})=>I([n,D(".",e),D("(",t,":)")])},DirectiveCoordinate:{leave:({name:n})=>I(["@",n])},DirectiveArgumentCoordinate:{leave:({name:n,argumentName:e})=>I(["@",n,D("(",e,":)")])}};function I(n,e=""){var t;return(t=n?.filter(i=>i).join(e))!==null&&t!==void 0?t:""}function Se(n){return D(`{
`,wi(I(n,`
`)),`
}`)}function D(n,e,t=""){return e!=null&&e!==""?n+e+t:""}function wi(n){return D("  ",n.replace(/\n/g,`
  `))}function Mr(n){var e;return(e=n?.some(t=>t.includes(`
`)))!==null&&e!==void 0?e:!1}var w=globalThis.__DEV__===!0;function xt(n){try{return n()}catch{}}var Jt=xt(()=>globalThis)||xt(()=>window)||xt(()=>self)||xt(()=>global)||xt(function(){return xt.constructor("return this")()});var An="4.1.9";var Ks=new Map;function Nn(n){let e=Ks.get(n)||1;return Ks.set(n,e+1),`${n}:${e}:${Math.random().toString(36).slice(2)}`}function Mn(n,e=0){let t=Nn("stringifyForDisplay");return JSON.stringify(n,(i,r)=>r===void 0?t:r,e).split(JSON.stringify(t)).join("<undefined>")}var $s="Invariant Violation",Rr=class n extends Error{constructor(e=$s){super(e),this.name=$s,Object.setPrototypeOf(this,n.prototype)}},Zs=["debug","log","warn","error","silent"],mu=Zs.indexOf(w?"log":"silent");function x(n,...e){if(!n)throw j(...e)}function ki(n){return function(e,...t){if(Zs.indexOf(n)>=mu){let i=console[n]||console.log;if(typeof e=="number"){let r=e;e=Xs(r),e||(e=Js(r,t),t=[])}i(e,...t)}}}x.debug=ki("debug");x.log=ki("log");x.warn=ki("warn");x.error=ki("error");function j(n,...e){return new Rr(Xs(n,e)||Js(n,e))}var Ys=Symbol.for("ApolloErrorMessageHandler_"+An);function Lr(n){if(typeof n=="string")return n;try{return Mn(n,2).slice(0,1e3)}catch{return"<non-serializable>"}}function Xs(n,e=[]){if(n)return Jt[Ys]&&Jt[Ys](n,e.map(Lr))}function Js(n,e=[]){if(n)return typeof n=="string"?e.reduce((t,i)=>t.replace(/%[sdfo]/,Lr(i)),n):`An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#${encodeURIComponent(JSON.stringify({version:An,message:n,args:e.map(Lr)}))}`}function qe(n,e,t,i){if(t.kind===_.INT||t.kind===_.FLOAT)n[e.value]=Number(t.value);else if(t.kind===_.BOOLEAN||t.kind===_.STRING)n[e.value]=t.value;else if(t.kind===_.OBJECT){let r={};t.fields.map(o=>qe(r,o.name,o.value,i)),n[e.value]=r}else if(t.kind===_.VARIABLE){let r=(i||{})[t.name.value];n[e.value]=r}else if(t.kind===_.LIST)n[e.value]=t.values.map(r=>{let o={};return qe(o,e,r,i),o[e.value]});else if(t.kind===_.ENUM)n[e.value]=t.value;else if(t.kind===_.NULL)n[e.value]=null;else throw j(19,e.value,t.kind)}function Et(n,e){if(n.arguments&&n.arguments.length){let t={};return n.arguments.forEach(({name:i,value:r})=>qe(t,i,r,e)),t}return null}var fu=Symbol.for("apollo.cacheSize"),q=p({},Jt[fu]);function Y(n,e){return n.definitions.find(t=>t.kind==="OperationDefinition"&&!!t.name)?.name.value??e}var Pr=new WeakSet;function el(n){n.size<=(n.max||-1)||Pr.has(n)||(Pr.add(n),setTimeout(()=>{n.clean(),Pr.delete(n)},100))}var wt=function(n,e){let t=new Fe(n,e);return t.set=function(i,r){let o=Fe.prototype.set.call(this,i,r);return el(this),o},t},Vr=function(n,e){let t=new tt(n,e);return t.set=function(i,r){let o=tt.prototype.set.call(this,i,r);return el(this),o},t};function Si(n,{max:e,makeCacheKey:t=i=>i}){let i=new ee(!0),r=new wt(e);return(...o)=>{let a=i.lookupArray(t(o)),s=r.get(a);if(s){if(s.error)throw s.error;return s.result}let l=r.set(a,{});try{return l.result=n(...o)}catch(c){throw l.error=c,c}}}var de=Si((n,e)=>{x(n&&n.kind==="Document",1);let t=n.definitions.filter(i=>i.kind==="OperationDefinition");w&&(n.definitions.forEach(i=>{if(i.kind!=="OperationDefinition"&&i.kind!=="FragmentDefinition")throw j(2,i.kind)}),x(t.length<=1,3,t.length)),e&&x(t.length==1&&t[0].operation===e,4,e,e,t[0].operation),H(n,{Field(i,r,o,a){if(i.alias&&(i.alias.value==="__typename"||i.alias.value.startsWith("__ac_"))&&i.alias.value!==i.name.value){let s=n,l=[];for(let c of a)s=s[c],s.kind===_.FIELD&&l.push(s.alias?.value||s.name.value);throw l.splice(-1,1,i.name.value),j(5,i.alias.value,l.join("."),t[0].operation,Y(n,"(anonymous)"))}}})},{max:q.checkDocument||2e3});var{toString:pu}=Object.prototype;function jr(n){return zr(n)}function zr(n,e){switch(pu.call(n)){case"[object Array]":{if(e=e||new Map,e.has(n))return e.get(n);let t=n.slice(0);return e.set(n,t),t.forEach(function(i,r){t[r]=zr(i,e)}),t}case"[object Object]":{if(e=e||new Map,e.has(n))return e.get(n);let t=Object.create(Object.getPrototypeOf(n));return e.set(n,t),Object.keys(n).forEach(i=>{t[i]=zr(n[i],e)}),t}default:return n}}function Br(n){return n.length===0?Le:new X(e=>{let{length:t}=n,i=new Array(t),r=new Map;n.forEach((l,c)=>{r.has(l)||r.set(l,new Set),r.get(l).add(c)});let o=r.size,a=r.size,s;r.forEach((l,c)=>{let d=!1,f=c.subscribe({next:u=>{l.forEach(m=>i[m]=u),d||(d=!0,a--),a||(s||=new Set(n.filter(m=>m.dirty)),s.delete(c),s.size||(e.next(i.slice()),s=void 0))},complete:()=>{o--,o||e.complete()},error:e.error.bind(e)});e.add(f)})})}function Ee(...n){let e={};return n.forEach(t=>{t&&Reflect.ownKeys(t).forEach(i=>{let r=t[i];r!==void 0&&(e[i]=r)})}),e}function Ie(n=[]){let e={};return n.forEach(t=>{e[t.name.value]=t}),e}function R(n){return n!==null&&typeof n=="object"}var{hasOwnProperty:hu}=Object.prototype,bu=function(n,e,t){return this.merge(n[t],e[t])},tl=n=>isNaN(+n)?{}:[],he=class{options;reconciler;constructor(e={}){this.options=e,this.reconciler=e.reconciler||bu}merge(e,t,i={}){let r=i.atPath;if(r?.length){let[o,...a]=r;e===void 0&&(e=tl(o));let s=e[o];s===void 0&&a.length&&(s=tl(a[0]));let l=this.merge(s,t,k(p({},i),{atPath:a}));return s!==l&&(e=this.shallowCopyForMerge(e),e[o]=l),e}return Array.isArray(e)&&Array.isArray(t)&&this.options.arrayMerge==="truncate"&&e.length>t.length&&(e=e.slice(0,t.length),this.pastCopies.add(e)),R(t)&&R(e)?(Object.keys(t).forEach(o=>{if(hu.call(e,o)){let a=e[o];if(t[o]!==a){let s=this.reconciler(e,t,o);s!==a&&(e=this.shallowCopyForMerge(e),e[o]=s)}}else e=this.shallowCopyForMerge(e),e[o]=t[o]}),e):t}isObject=R;pastCopies=new Set;shallowCopyForMerge(e){return R(e)&&(this.pastCopies.has(e)||(Array.isArray(e)?e=e.slice(0):e=p({__proto__:Object.getPrototypeOf(e)},e),this.pastCopies.add(e))),e}};function Tt(n){let e={},t=n&&n.variableDefinitions;return t&&t.length&&t.forEach(i=>{i.defaultValue&&qe(e,i.variable.name,i.defaultValue)}),e}function it(n,e){switch(n.kind){case"InlineFragment":return n;case"FragmentSpread":{let t=n.name.value;if(typeof e=="function")return e(t);let i=e&&e[t];return x(i,9,t),i||null}default:return null}}function Ur(n,e){let t=e,i=[];return n.definitions.forEach(o=>{if(o.kind==="OperationDefinition")throw j(10,o.operation,o.name?` named '${o.name.value}'`:"");o.kind==="FragmentDefinition"&&i.push(o)}),typeof t>"u"&&(x(i.length===1,11,i.length),t=i[0].name.value),k(p({},n),{definitions:[{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:t}}]}},...n.definitions]})}function Rn(n){x(n.kind==="Document",6),x(n.definitions.length<=1,7);let e=n.definitions[0];return x(e.kind==="FragmentDefinition",8),e}function Oe(n){return n.definitions.filter(e=>e.kind==="FragmentDefinition")}function en(n){de(n);let e;for(let t of n.definitions){if(t.kind==="OperationDefinition")return t;t.kind==="FragmentDefinition"&&!e&&(e=t)}if(e)return e;throw j(12)}function ne(n){return de(n),n.definitions.filter(e=>e.kind==="OperationDefinition")[0]}function Ln(n){let e=ne(n);return x(e&&e.operation==="query",13),e}var qr={};function Pn(n,e){qr[n]=e}var Hr=w?yu:void 0,Gr=w?vu:void 0,Kr=w?nl:void 0;function gu(){return Object.fromEntries(Object.entries({canonicalStringify:1e3,checkDocument:2e3,print:2e3,"documentTransform.cache":2e3,"queryManager.getDocumentInfo":2e3,"PersistedQueryLink.persistedQueryHashes":2e3,"fragmentRegistry.transform":2e3,"fragmentRegistry.lookup":1e3,"fragmentRegistry.findFragmentSpreads":4e3,"cache.fragmentQueryDocuments":1e3,"removeTypenameFromVariables.getVariableDefinitions":2e3,"inMemoryCache.maybeBroadcastWatch":5e3,"inMemoryCache.executeSelectionSet":5e4,"inMemoryCache.executeSubSelectedArray":1e4}).map(([e,t])=>[e,q[e]||t]))}function yu(){if(!w)throw new Error("only supported in development mode");return{limits:gu(),sizes:p({print:qr.print?.(),canonicalStringify:qr.canonicalStringify?.(),links:Wr(this.link),queryManager:{getDocumentInfo:this.queryManager.transformCache.size,documentTransforms:rl(this.queryManager.documentTransform)}},this.cache.getMemoryInternals?.())}}function nl(){return{cache:{fragmentQueryDocuments:rt(this.getFragmentDoc)}}}function vu(){let n=this.config.fragments;return k(p({},nl.apply(this)),{addTypenameDocumentTransform:rl(this.addTypenameTransform),inMemoryCache:{executeSelectionSet:rt(this.storeReader.executeSelectionSet),executeSubSelectedArray:rt(this.storeReader.executeSubSelectedArray),maybeBroadcastWatch:rt(this.maybeBroadcastWatch)},fragmentRegistry:{findFragmentSpreads:rt(n?.findFragmentSpreads),lookup:rt(n?.lookup),transform:rt(n?.transform)}})}function _u(n){return!!n&&"dirtyKey"in n}function rt(n){return _u(n)?n.size:void 0}function il(n){return n!=null}function rl(n){return Qr(n).map(e=>({cache:e}))}function Qr(n){return n?[rt(n?.performWork),...Qr(n?.left),...Qr(n?.right)].filter(il):[]}function Wr(n){return n?[n?.getMemoryInternals?.(),...Wr(n?.left),...Wr(n?.right)].filter(il):[]}var Z=Object.assign(function(e){return JSON.stringify(e,xu)},{reset(){tn=new Vr(q.canonicalStringify||1e3)}});w&&Pn("canonicalStringify",()=>tn.size);var tn;Z.reset();function xu(n,e){if(e&&typeof e=="object"){let t=Object.getPrototypeOf(e);if(t===Object.prototype||t===null){let i=Object.keys(e);if(i.every(Eu))return e;let r=JSON.stringify(i),o=tn.get(r);if(!o){i.sort();let s=JSON.stringify(i);o=tn.get(s)||i,tn.set(r,o),tn.set(s,o)}let a=Object.create(t);return o.forEach(s=>{a[s]=e[s]}),a}}return e}function Eu(n,e,t){return e===0||t[e-1]<=n}var wu=["connection","include","skip","client","rest","export","nonreactive","stream"],Vn=Z,zn=Object.assign(function(n,e,t){if(e&&t&&t.connection&&t.connection.key){if(t.connection.filter&&t.connection.filter.length>0){let r=t.connection.filter?t.connection.filter:[];r.sort();let o={};r.forEach(s=>{o[s]=e[s]});let a=Vn(o);if(a!=="{}")return`${t.connection.key}(${a})`}return t.connection.key}let i=n;if(e){let r=Vn(e);r!=="{}"&&(i+=`(${r})`)}return t&&Object.keys(t).forEach(r=>{wu.indexOf(r)===-1&&(t[r]&&Object.keys(t[r]).length?i+=`@${r}(${Vn(t[r])})`:i+=`@${r}`)}),i},{setStringify(n){let e=Vn;return Vn=n,e}});function Qe(n){return!!n.errors?.length}function Ae(n,e,t){let i=new Set(n),r=i.size;return H(e,{Directive(o){if(i.delete(o.name.value)&&(!t||!i.size))return Ue}}),t?!i.size:i.size<r}function $r(n){let e=!1;return H(n,{Directive:{enter(t){if(t.name.value==="client"&&t.arguments&&(e=t.arguments.some(i=>i.name.value==="always"&&i.value.kind==="BooleanValue"&&i.value.value===!0),e))return Ue}}}),e}var M=Array.isArray;function Yr(n){return R(n)&&n.kind==="Document"&&Array.isArray(n.definitions)}function Ne(n){return n.kind==="Field"}function kt(n){return Array.isArray(n)&&n.length>0}function Me(n){return{__ref:String(n)}}function ol(n){let e=new Set([n]);return e.forEach(t=>{R(t)&&Tu(t)===t&&Object.getOwnPropertyNames(t).forEach(i=>{R(t[i])&&e.add(t[i])})}),n}function Tu(n){if(w&&!Object.isFrozen(n))try{Object.freeze(n)}catch(e){if(e instanceof TypeError)return null;throw e}return n}function ot(n){return w&&ol(n),n}function Zr(n){let e=n[0]||{},t=n.length;if(t>1){let i=new he;for(let r=1;r<t;++r)e=i.merge(e,n[r])}return e}function St(n,e){return Ee(n,e,e.variables&&{variables:Ee(p(p({},n&&n.variables),e.variables))})}function Ii(n){return n.catch(()=>{}),n}function Xr(n,e){de(e);let t=al(""),i=al(""),r=g=>{for(let v=0,T;v<g.length&&(T=g[v]);++v)if(!M(T)){if(T.kind===_.OPERATION_DEFINITION)return t(T.name&&T.name.value);if(T.kind===_.FRAGMENT_DEFINITION)return i(T.name.value)}return x.error(14),null},o=0;for(let g=e.definitions.length-1;g>=0;--g)e.definitions[g].kind===_.OPERATION_DEFINITION&&++o;let a=ku(n),s=g=>kt(g)&&g.map(a).some(v=>v&&v.remove),l=new Map,c=!1,d={enter(g){if(s(g.directives))return c=!0,null}},f=H(e,{Field:d,InlineFragment:d,VariableDefinition:{enter(){return!1}},Variable:{enter(g,v,T,O,S){let F=r(S);F&&F.variables.add(g.name.value)}},FragmentSpread:{enter(g,v,T,O,S){if(s(g.directives))return c=!0,null;let F=r(S);F&&F.fragmentSpreads.add(g.name.value)}},FragmentDefinition:{enter(g,v,T,O){l.set(JSON.stringify(O),g)},leave(g,v,T,O){let S=l.get(JSON.stringify(O));if(g===S)return g;if(o>0&&g.selectionSet.selections.every(F=>F.kind===_.FIELD&&F.name.value==="__typename"))return i(g.name.value).removed=!0,c=!0,null}},Directive:{leave(g){if(a(g))return c=!0,null}}});if(!c)return e;let u=g=>(g.transitiveVars||(g.transitiveVars=new Set(g.variables),g.removed||g.fragmentSpreads.forEach(v=>{u(i(v)).transitiveVars.forEach(T=>{g.transitiveVars.add(T)})})),g),m=new Set;f.definitions.forEach(g=>{g.kind===_.OPERATION_DEFINITION?u(t(g.name&&g.name.value)).fragmentSpreads.forEach(v=>{m.add(v)}):g.kind===_.FRAGMENT_DEFINITION&&o===0&&!i(g.name.value).removed&&m.add(g.name.value)}),m.forEach(g=>{u(i(g)).fragmentSpreads.forEach(v=>{m.add(v)})});let b=g=>!!(!m.has(g)||i(g).removed),h={enter(g){if(b(g.name.value))return null}};return Su(H(f,{FragmentSpread:h,FragmentDefinition:h,OperationDefinition:{leave(g){if(g.variableDefinitions){let v=u(t(g.name&&g.name.value)).transitiveVars;if(v.size<g.variableDefinitions.length)return k(p({},g),{variableDefinitions:g.variableDefinitions.filter(T=>v.has(T.variable.name.value))})}}}}))}function al(n){let e=new Map;return function(i=n){let r=e.get(i);return r||e.set(i,r={variables:new Set,fragmentSpreads:new Set}),r}}function ku(n){let e=new Map,t=new Map;return n.forEach(i=>{i&&(i.name?e.set(i.name,i):i.test&&t.set(i.test,i))}),i=>{let r=e.get(i.name.value);return!r&&t.size&&t.forEach((o,a)=>{a(i)&&(r=o)}),r}}function sl(n,e){return!n||n.selectionSet.selections.every(t=>t.kind===_.FRAGMENT_SPREAD&&sl(e[t.name.value],e))}function Su(n){return sl(ne(n)||Rn(n),Ie(Oe(n)))?null:n}function Jr(n){return H(n,{FragmentSpread(e){if(!e.directives?.some(({name:t})=>t.value==="unmask"))return null}})}function ye(n){return n.alias?n.alias.value:n.name.value}function We({directives:n},e){return!n||!n.length?!0:Ou(n).every(({directive:t,ifArgument:i})=>{let r=!1;return i.value.kind==="Variable"?(r=e&&e[i.value.name.value],x(r!==void 0,15,t.name.value)):r=i.value.value,t.name.value==="skip"?!r:r})}function Iu({name:{value:n}}){return n==="skip"||n==="include"}function Ou(n){let e=[];return n&&n.length&&n.forEach(t=>{if(!Iu(t))return;let i=t.arguments,r=t.name.value;x(i&&i.length===1,16,r);let o=i[0];x(o.name&&o.name.value==="if",17,r);let a=o.value;x(a&&(a.kind==="Variable"||a.kind==="BooleanValue"),18,r),e.push({directive:t,ifArgument:o})}),e}function eo(n,e){let t=null;n.directives&&(t={},n.directives.forEach(r=>{t[r.name.value]={},r.arguments&&r.arguments.forEach(({name:o,value:a})=>qe(t[r.name.value],o,a,e))}));let i=null;return n.arguments&&n.arguments.length&&(i={},n.arguments.forEach(({name:r,value:o})=>qe(i,r,o,e))),zn(n.name.value,i,t)}function at(n){let e={data:n.data};return n.error&&(e.error=n.error),e}function nn(n,e=()=>{}){return t=>new X(i=>{let r=e();return t.subscribe({next(o){let a;try{a=n(o,r)}catch(s){i.error(s)}a!==void 0&&i.next(a)},error(o){i.error(o)},complete(){i.complete()}})})}function jn(n,a,l,o){var s=a,{data:e}=s,t=Q(s,["data"]);var c=l,{data:i}=c,r=Q(c,["data"]);return N(t,r)&&Oi(en(n).selectionSet,e,i,{fragmentMap:Ie(Oe(n)),variables:o})}function Oi(n,e,t,i){if(e===t)return!0;let r=new Set;return n.selections.every(o=>{if(r.has(o)||(r.add(o),!We(o,i.variables))||ll(o))return!0;if(Ne(o)){let a=ye(o),s=e&&e[a],l=t&&t[a],c=o.selectionSet;if(!c)return N(s,l);let d=Array.isArray(s),f=Array.isArray(l);if(d!==f)return!1;if(d&&f){let u=s.length;if(l.length!==u)return!1;for(let m=0;m<u;++m)if(!Oi(c,s[m],l[m],i))return!1;return!0}return Oi(c,s,l,i)}else{let a=it(o,i.fragmentMap);if(a)return ll(a)?!0:Oi(a.selectionSet,e,t,i)}})}function ll(n){return!!n.directives&&n.directives.some(Cu)}function Cu(n){return n.name.value==="nonreactive"}function Du(n,e){let t,i;function r(o){return o!==t&&(t=o,i=e(t)),i}return Object.assign(n.pipe(G(r),$e({bufferSize:1,refCount:!0})),{getCurrentResult:()=>r(n.getCurrentResult())})}var Bn=Si(function(e,t,i){return Du(e,i)},{max:1,makeCacheKey:n=>n.slice(0,2)});var Un=Symbol.for("apollo.result.extensions"),ve=Symbol.for("apollo.result.streamInfo"),to=Symbol.for("apollo.observableQuery.variablesUnknown");function no(...n){return Sr.bind(null,...n)}function Fu(n){return n}var He=class n{transform;cached;resultCache=new WeakSet;getCacheKey(e){return[e]}static identity(){return new n(Fu,{cache:!1})}static split(e,t,i=n.identity()){return Object.assign(new n(r=>(e(r)?t:i).transformDocument(r),{cache:!1}),{left:t,right:i})}constructor(e,t={}){this.transform=e,t.getCacheKey&&(this.getCacheKey=t.getCacheKey),this.cached=t.cache!==!1,this.resetCache()}resetCache(){if(this.cached){let e=new ee;this.performWork=Be(n.prototype.performWork.bind(this),{makeCacheKey:t=>{let i=this.getCacheKey(t);if(i)return x(Array.isArray(i),20),e.lookupArray(i)},max:q["documentTransform.cache"],cache:Fe})}}performWork(e){return de(e),this.transform(e)}transformDocument(e){if(this.resultCache.has(e))return e;let t=this.performWork(e);return this.resultCache.add(t),t}concat(e){return Object.assign(new n(t=>e.transformDocument(this.transformDocument(t)),{cache:!1}),{left:this,right:e})}left;right};var qn,st=Object.assign(n=>{let e=qn.get(n);return e||(e=Ti(n),qn.set(n,e)),e},{reset(){qn=new wt(q.print||2e3)}});st.reset();w&&Pn("print",()=>qn?qn.size:0);function A(n){return!!(n&&typeof n=="object"&&typeof n.__ref=="string")}var cl={kind:_.FIELD,name:{kind:_.NAME,value:"__typename"}},It=Object.assign(function(n){return H(n,{SelectionSet:{enter(e,t,i){if(i&&i.kind===_.OPERATION_DEFINITION)return;let{selections:r}=e;if(!r||r.some(s=>s.kind===_.FIELD&&(s.name.value==="__typename"||s.name.value.lastIndexOf("__",0)===0)))return;let a=i;if(!(a.kind===_.FIELD&&a.directives&&a.directives.some(s=>s.name.value==="export")))return k(p({},e),{selections:[...r,cl]})}}})},{added(n){return n===cl}});function Qn(n){return n===7||n===8}function Ot(n){return!Qn(n)}var rn=class{assumeImmutableResults=!1;lookupFragment(e){return null}batch(e){let t=typeof e.optimistic=="string"?e.optimistic:e.optimistic===!1?null:void 0,i;return this.performTransaction(()=>i=e.update(this),t),i}recordOptimisticTransaction(e,t){this.performTransaction(e,t)}transformDocument(e){return e}transformForLink(e){return e}identify(e){}gc(){return[]}modify(e){return!1}readQuery(e,t=!!e.optimistic){return this.read(k(p({},e),{rootId:e.id||"ROOT_QUERY",optimistic:t}))}fragmentWatches=new ee(!0);watchFragment(e){let{fragment:t,fragmentName:i,from:r}=e,o=this.getFragmentDoc(t,i),s=(Array.isArray(r)?r:[r]).map(m=>{let b=m==null?m:this.toCacheId(m);if(w){let h=i||Rn(t).name.value;b===void 0&&w&&x.warn(113,h)}return b});if(!Array.isArray(r)){let m=this.watchSingleFragment(s[0],o,e);return r===null?m:Bn(m,Symbol.for("apollo.transform.individualResult"),b=>k(p({},b),{data:b.data??{}}))}let l;function c(m){let b=m.reduce((h,g,v)=>(h.data.push(g.data),h.complete&&=g.complete,h.dataState=h.complete?"complete":"partial",g.missing&&(h.missing||={},h.missing[v]=g.missing),h),{data:[],dataState:"complete",complete:!0});return N(l,b)||(l=b),l}if(s.length===0)return Nu;let d=!1,f=s.map(m=>this.watchSingleFragment(m,o,e)),u=Br(f).pipe(G(c),De({subscribe:()=>d=!0,unsubscribe:()=>d=!1}),$e({bufferSize:1,refCount:!0}));return Object.assign(u,{getCurrentResult:()=>{if(d&&l)return l;let m=f.map(b=>b.getCurrentResult());return c(m)}})}onAfterBroadcast=e=>e();watchSingleFragment(e,t,i){if(e===null)return Au;let{optimistic:r=!0,variables:o}=i,a=[t,Z({id:e,optimistic:r,variables:o})],s=this.fragmentWatches.lookupArray(a);if(!s.observable){let f=function(m){let b=m.result;return(!d||!jn(t,{data:d.data},{data:b},i.variables))&&(d={data:b,dataState:m.complete?"complete":"partial",complete:m.complete},m.missing&&(d.missing=m.missing.missing)),d};var l=f;let c=!1,d,u=new X(m=>{c=!0;let b=this.watch({variables:o,returnPartialData:!0,id:e,query:t,optimistic:r,immediate:!0,callback:h=>{u.dirty=!0,this.onAfterBroadcast(()=>{m.next(f(h)),u.dirty=!1})}});return()=>{c=!1,b(),this.fragmentWatches.removeArray(a)}}).pipe(ii(),mt({connector:()=>new Ro(1),resetOnRefCountZero:()=>jo(0)}));s.observable=Object.assign(u,{dirty:!1,getCurrentResult:()=>c&&d?d:f(this.diff({id:e,query:t,returnPartialData:!0,optimistic:r,variables:o}))})}return s.observable}getFragmentDoc=Be(Ur,{max:q["cache.fragmentQueryDocuments"]||1e3,cache:Fe,makeCacheKey:no(this)});readFragment(e,t=!!e.optimistic){let i=e.from!==void 0?this.toCacheId(e.from):e.id;return this.read(k(p({},e),{query:this.getFragmentDoc(e.fragment,e.fragmentName),rootId:i,optimistic:t}))}writeQuery(r){var o=r,{id:e,data:t}=o,i=Q(o,["id","data"]);return this.write(Object.assign(i,{dataId:e||"ROOT_QUERY",result:t}))}writeFragment(o){var a=o,{data:e,fragment:t,fragmentName:i}=a,r=Q(a,["data","fragment","fragmentName"]);let s=r.from!==void 0?this.toCacheId(r.from):r.id;return this.write(Object.assign(r,{query:this.getFragmentDoc(t,i),dataId:s,result:e}))}updateQuery(e,t){return this.batch({update(i){let r=i.readQuery(e),o=t(r);return o==null?r:(i.writeQuery(k(p({},e),{data:o})),o)}})}updateFragment(e,t){return this.batch({update(i){let r=i.readFragment(e),o=t(r);return o==null?r:(i.writeFragment(k(p({},e),{data:o})),o)}})}toCacheId(e){return typeof e=="string"?e:this.identify(e)}};w&&(rn.prototype.getMemoryInternals=Kr);var dl=Object.freeze({data:null,dataState:"complete",complete:!0}),Au=Object.assign(new X(n=>{n.next(dl)}),{dirty:!1,getCurrentResult:()=>dl}),ul=Object.freeze({data:[],dataState:"complete",complete:!0}),Nu=Object.assign(new X(n=>{n.next(ul)}),{getCurrentResult:()=>ul});var{hasOwnProperty:B}=Object.prototype;function Di({__typename:n,id:e,_id:t},i){if(typeof n=="string"&&(i&&(i.keyObject=e!=null?{id:e}:t!=null?{_id:t}:void 0),e==null&&t!=null&&(e=t),e!=null))return`${n}:${typeof e=="number"||typeof e=="string"?e:JSON.stringify(e)}`}var Mu={dataIdFromObject:Di,resultCaching:!0};function ml(n){return Ee(Mu,n)}function fl(n,e){return A(e)?n.get(e.__ref,"__typename"):e&&e.__typename}var io=/^[_a-z][_0-9a-z]*/i;function Ce(n){let e=n.match(io);return e?e[0]:n}function Ci(n,e,t){return R(e)?M(e)?e.every(i=>Ci(n,i,t)):n.selections.every(i=>{if(Ne(i)&&We(i,t)){let r=ye(i);return B.call(e,r)&&(!i.selectionSet||Ci(i.selectionSet,e[r],t))}return!0}):!1}function lt(n){return R(n)&&!A(n)&&!M(n)}function pl(){return new he}function Fi(n,e){let t=Ie(Oe(n));return{fragmentMap:t,lookupFragment(i){let r=t[i];return!r&&e&&(r=e.lookup(i)),r||null}}}var Ai={},ro=()=>Ai,hl={},Ct=class{policies;group;data={};constructor(e,t){this.policies=e,this.group=t}toObject(){return p({},this.data)}has(e){return this.lookup(e,!0)!==void 0}get(e,t){if(this.group.depend(e,t),B.call(this.data,e)){let i=this.data[e];if(i&&B.call(i,t))return i[t]}if(t==="__typename"&&B.call(this.policies.rootTypenamesById,e))return this.policies.rootTypenamesById[e];if(this instanceof Re)return this.parent.get(e,t)}lookup(e,t){if(t&&this.group.depend(e,"__exists"),B.call(this.data,e))return this.data[e];if(this instanceof Re)return this.parent.lookup(e,t);if(this.policies.rootTypenamesById[e])return{}}merge(e,t){let i;A(e)&&(e=e.__ref),A(t)&&(t=t.__ref);let r=typeof e=="string"?this.lookup(i=e):e,o=typeof t=="string"?this.lookup(i=t):t;if(!o)return;x(typeof i=="string",99);let a=new he({reconciler:Ru}).merge(r,o);if(this.data[i]=a,a!==r&&(delete this.refs[i],this.group.caching)){let s={};r||(s.__exists=1),Object.keys(o).forEach(l=>{if(!r||r[l]!==a[l]){s[l]=1;let c=Ce(l);c!==l&&!this.policies.hasKeyArgs(a.__typename,c)&&(s[c]=1),a[l]===void 0&&!(this instanceof Re)&&delete a[l]}}),s.__typename&&!(r&&r.__typename)&&this.policies.rootTypenamesById[i]===a.__typename&&delete s.__typename,Object.keys(s).forEach(l=>this.group.dirty(i,l))}}modify(e,t,i){let r=this.lookup(e);if(r){let o={},a=!1,s=!0,l={DELETE:Ai,INVALIDATE:hl,isReference:A,toReference:this.toReference,canRead:this.canRead,readField:(c,d)=>this.policies.readField(typeof c=="string"?{fieldName:c,from:d||Me(e)}:c,{store:this})};if(Object.keys(r).forEach(c=>{let d=Ce(c),f=r[c];if(f===void 0)return;let u=typeof t=="function"?t:t[c]||(i?void 0:t[d]);if(u){let m=u===ro?Ai:u(ot(f),k(p({},l),{fieldName:d,storeFieldName:c,storage:this.getStorage(e,c)}));if(m===hl)this.group.dirty(e,c);else if(m===Ai&&(m=void 0),m!==f&&(o[c]=m,a=!0,f=m,w)){let b=h=>{if(this.lookup(h.__ref)===void 0)return w&&x.warn(100,h),!0};if(A(m))b(m);else if(Array.isArray(m)){let h=!1,g;for(let v of m){if(A(v)){if(h=!0,b(v))break}else if(typeof v=="object"&&v){let[T]=this.policies.identify(v);T&&(g=v)}if(h&&g!==void 0){w&&x.warn(101,g);break}}}}}f!==void 0&&(s=!1)}),a)return this.merge(e,o),s&&(this instanceof Re?this.data[e]=void 0:delete this.data[e],this.group.dirty(e,"__exists")),!0}return!1}delete(e,t,i){let r=this.lookup(e);if(r){let o=this.getFieldValue(r,"__typename"),a=t&&i?this.policies.getStoreFieldName({typename:o,fieldName:t,args:i}):t;return this.modify(e,a?{[a]:ro}:ro,!!i)}return!1}evict(e,t){let i=!1;return e.id&&(B.call(this.data,e.id)&&(i=this.delete(e.id,e.fieldName,e.args)),this instanceof Re&&this!==t&&(i=this.parent.evict(e,t)||i),(e.fieldName||i)&&this.group.dirty(e.id,e.fieldName||"__exists")),i}clear(){this.replace(null)}extract(){let e=this.toObject(),t=[];return this.getRootIdSet().forEach(i=>{B.call(this.policies.rootTypenamesById,i)||t.push(i)}),t.length&&(e.__META={extraRootIds:t.sort()}),e}replace(e){if(Object.keys(this.data).forEach(i=>{e&&B.call(e,i)||this.delete(i)}),e){let t=e,{__META:i}=t,r=Q(t,["__META"]);Object.keys(r).forEach(o=>{this.merge(o,r[o])}),i&&i.extraRootIds.forEach(this.retain,this)}}rootIds={};retain(e){return this.rootIds[e]=(this.rootIds[e]||0)+1}release(e){if(this.rootIds[e]>0){let t=--this.rootIds[e];return t||delete this.rootIds[e],t}return 0}getRootIdSet(e=new Set){return Object.keys(this.rootIds).forEach(e.add,e),this instanceof Re?this.parent.getRootIdSet(e):Object.keys(this.policies.rootTypenamesById).forEach(e.add,e),e}gc(){let e=this.getRootIdSet(),t=this.toObject();e.forEach(r=>{B.call(t,r)&&(Object.keys(this.findChildRefIds(r)).forEach(e.add,e),delete t[r])});let i=Object.keys(t);if(i.length){let r=this;for(;r instanceof Re;)r=r.parent;i.forEach(o=>r.delete(o))}return i}refs={};findChildRefIds(e){if(!B.call(this.refs,e)){let t=this.refs[e]={},i=this.data[e];if(!i)return t;let r=new Set([i]);r.forEach(o=>{A(o)&&(t[o.__ref]=!0),R(o)&&Object.keys(o).forEach(a=>{let s=o[a];R(s)&&r.add(s)})})}return this.refs[e]}makeCacheKey(){return this.group.keyMaker.lookupArray(arguments)}getFieldValue=(e,t)=>ot(A(e)?this.get(e.__ref,t):e&&e[t]);canRead=e=>A(e)?this.has(e.__ref):typeof e=="object";toReference=(e,t)=>{if(typeof e=="string")return Me(e);if(A(e))return e;let[i]=this.policies.identify(e);if(i){let r=Me(i);return t&&this.merge(i,e),r}};get supportsResultCaching(){return this.group.caching}},Ni=class{caching;parent;d=null;keyMaker;constructor(e,t=null){this.caching=e,this.parent=t,this.resetCaching()}resetCaching(){this.d=this.caching?Cn():null,this.keyMaker=new ee}depend(e,t){if(this.d){this.d(oo(e,t));let i=Ce(t);i!==t&&this.d(oo(e,i)),this.parent&&this.parent.depend(e,t)}}dirty(e,t){this.d&&this.d.dirty(oo(e,t),t==="__exists"?"forget":"setDirty")}};function oo(n,e){return e+"#"+n}function lo(n,e){Dt(n)&&n.group.depend(e,"__exists")}var ao=class extends Ct{constructor({policies:e,resultCaching:t=!0,seed:i}){super(e,new Ni(t)),i&&this.replace(i)}stump=new so(this);addLayer(e,t){return this.stump.addLayer(e,t)}removeLayer(){return this}storageTrie=new ee;getStorage(){return this.storageTrie.lookupArray(arguments)}};Ct.Root=ao;var Re=class n extends Ct{id;parent;replay;group;constructor(e,t,i,r){super(t.policies,r),this.id=e,this.parent=t,this.replay=i,this.group=r,i(this)}addLayer(e,t){return new n(e,this,t,this.group)}removeLayer(e){let t=this.parent.removeLayer(e);return e===this.id?(this.group.caching&&Object.keys(this.data).forEach(i=>{let r=this.data[i],o=t.lookup(i);o?r?r!==o&&Object.keys(r).forEach(a=>{N(r[a],o[a])||this.group.dirty(i,a)}):(this.group.dirty(i,"__exists"),Object.keys(o).forEach(a=>{this.group.dirty(i,a)})):this.delete(i)}),t):t===this.parent?this:t.addLayer(this.id,this.replay)}toObject(){return p(p({},this.parent.toObject()),this.data)}findChildRefIds(e){let t=this.parent.findChildRefIds(e);return B.call(this.data,e)?p(p({},t),super.findChildRefIds(e)):t}getStorage(...e){let t=this.parent;for(;t.parent;)t=t.parent;return t.getStorage(...e)}},so=class extends Re{constructor(e){super("EntityStore.Stump",e,()=>{},new Ni(e.group.caching,e.group))}removeLayer(){return this}merge(e,t){return this.parent.merge(e,t)}};function Ru(n,e,t){let i=n[t],r=e[t];return N(i,r)?i:r}function Dt(n){return!!(n&&n.supportsResultCaching)}var on=new je;function bl(n){let e=n.directives?.find(({name:i})=>i.value==="unmask");if(!e)return"mask";let t=e.arguments?.find(({name:i})=>i.value==="mode");return w&&t&&(t.value.kind===_.VARIABLE?w&&x.warn(44):t.value.kind!==_.STRING?w&&x.warn(45):t.value.value!=="migrate"&&w&&x.warn(46,t.value.value)),t&&"value"in t.value&&t.value.value==="migrate"?"migrate":"unmask"}function Mi(n,e,t){return on.withValue(!0,()=>{let i=Wn(n,e,t,!1);return Object.isFrozen(n)&&ot(i),i})}function Lu(n,e){if(e.has(n))return e.get(n);let t=Array.isArray(n)?[]:{};return e.set(n,t),t}function Wn(n,e,t,i,r){let{knownChanged:o}=t,a=Lu(n,t.mutableTargets);if(Array.isArray(n)){for(let[s,l]of Array.from(n.entries())){if(l===null){a[s]=null;continue}let c=Wn(l,e,t,i,w?`${r||""}[${s}]`:void 0);o.has(c)&&o.add(a),a[s]=c}return o.has(a)?a:n}for(let s of e.selections){let l;if(i&&o.add(a),s.kind===_.FIELD){let c=ye(s),d=s.selectionSet;if(l=a[c]||n[c],l===void 0)continue;if(d&&l!==null){let f=Wn(n[c],d,t,i,w?`${r||""}.${c}`:void 0);o.has(f)&&(l=f)}w||(a[c]=l),w&&(i&&c!=="__typename"&&!Object.getOwnPropertyDescriptor(a,c)?.value?Object.defineProperty(a,c,Pu(c,l,r||"",t.operationName,t.operationType)):(delete a[c],a[c]=l))}if(s.kind===_.INLINE_FRAGMENT&&(!s.typeCondition||t.cache.fragmentMatches(s,n.__typename))&&(l=Wn(n,s.selectionSet,t,i,r)),s.kind===_.FRAGMENT_SPREAD){let c=s.name.value,d=t.fragmentMap[c]||(t.fragmentMap[c]=t.cache.lookupFragment(c));x(d,39,c);let f=bl(s);f!=="mask"&&(l=Wn(n,d.selectionSet,t,f==="migrate",r))}o.has(l)&&o.add(a)}return"__typename"in n&&!("__typename"in a)&&(a.__typename=n.__typename),Object.keys(a).length!==Object.keys(n).length&&o.add(a),o.has(a)?a:n}function Pu(n,e,t,i,r){let o=()=>(on.getValue()||(w&&x.warn(40,i?`${r} '${i}'`:`anonymous ${r}`,`${t}.${n}`.replace(/^\./,"")),o=()=>e),e);return{get(){return o()},set(a){o=()=>a},enumerable:!0,configurable:!0}}function co(n,e,t,i){let r=e.definitions.filter(a=>a.kind===_.FRAGMENT_DEFINITION);typeof i>"u"&&(x(r.length===1,41,r.length),i=r[0].name.value);let o=r.find(a=>a.name.value===i);return x(!!o,42,i),n==null||N(n,{})?n:Mi(n,o.selectionSet,{operationType:"fragment",operationName:o.name.value,fragmentMap:Ie(Oe(e)),cache:t,mutableTargets:new WeakMap,knownChanged:new WeakSet})}function uo(n,e,t){let i=ne(e);return x(i,43),n==null?n:Mi(n,i.selectionSet,{operationType:i.operation,operationName:i.name?.value,fragmentMap:Ie(Oe(e)),cache:t,mutableTargets:new WeakMap,knownChanged:new WeakSet})}var gl={};function mo(n){let e=JSON.stringify(n);return gl[e]||(gl[e]={})}function fo(n){let e=mo(n);return e.keyFieldsFn||(e.keyFieldsFn=(t,i)=>{let r=(a,s)=>i.readField(s,a),o=i.keyObject=ho(n,a=>{let s=an(i.storeObject,a,r);return s===void 0&&t!==i.storeObject&&B.call(t,a[0])&&(s=an(t,a,vl)),x(s!==void 0,102,a.join("."),t),s});return`${i.typename}:${JSON.stringify(o)}`})}function po(n){let e=mo(n);return e.keyArgsFn||(e.keyArgsFn=(t,{field:i,variables:r,fieldName:o})=>{let a=ho(n,l=>{let c=l[0],d=c.charAt(0);if(d==="@"){if(i&&kt(i.directives)){let f=c.slice(1),u=i.directives.find(b=>b.name.value===f),m=u&&Et(u,r);return m&&an(m,l.slice(1))}return}if(d==="$"){let f=c.slice(1);if(r&&B.call(r,f)){let u=l.slice(0);return u[0]=f,an(r,u)}return}if(t)return an(t,l)}),s=JSON.stringify(a);return(t||s!=="{}")&&(o+=":"+s),o})}function ho(n,e){let t=new he;return yl(n).reduce((i,r)=>{let o=e(r);if(o!==void 0){for(let a=r.length-1;a>=0;--a)o={[r[a]]:o};i=t.merge(i,o)}return i},{})}function yl(n){let e=mo(n);if(!e.paths){let t=e.paths=[],i=[];n.forEach((r,o)=>{M(r)?(yl(r).forEach(a=>t.push(i.concat(a))),i.length=0):(i.push(r),M(n[o+1])||(t.push(i.slice(0)),i.length=0))})}return e.paths}function vl(n,e){return n[e]}function an(n,e,t){return t=t||vl,_l(e.reduce(function i(r,o){return M(r)?r.map(a=>i(a,o)):r&&t(r,o)},n))}function _l(n){return R(n)?M(n)?n.map(_l):ho(Object.keys(n).sort(),e=>an(n,e)):n}var bo=new je,xl=new WeakMap;function Hn(n){let e=xl.get(n);return e||xl.set(n,e={vars:new Set,dep:Cn()}),e}function go(n){Hn(n).vars.forEach(e=>e.forgetCache(n))}function El(n){Hn(n).vars.forEach(e=>e.attachCache(n))}function yo(n){let e=new Set,t=new Set,i=function(o){if(arguments.length>0){if(n!==o){n=o,e.forEach(s=>{Hn(s).dep.dirty(i),Vu(s)});let a=Array.from(t);t.clear(),a.forEach(s=>s(n))}}else{let a=bo.getValue();a&&(r(a),Hn(a).dep(i))}return n};i.onNextChange=o=>(t.add(o),()=>{t.delete(o)});let r=i.attachCache=o=>(e.add(o),Hn(o).vars.add(i),i);return i.forgetCache=o=>e.delete(o),i}function Vu(n){n.broadcastWatches&&n.broadcastWatches()}function vo(n){return n.args!==void 0?n.args:n.field?Et(n.field,n.variables):null}var zu=()=>{},wl=(n,e)=>e.fieldName,Tl=(n,e,{mergeObjects:t})=>t(n,e),kl=(n,e)=>e,Sl=(n,e,{streamFieldInfo:t,existingData:i})=>{if(!n&&!i)return e;let r=[],o=n??i,a=t?.isLastChunk?e.length:Math.max(o.length,e.length);for(let s=0;s<a;s++)r[s]=e[s]===void 0?o[s]:e[s];return r},Ri=class{config;typePolicies={};toBeAdded={};supertypeMap=new Map;fuzzySubtypes=new Map;cache;rootIdsByTypename={};rootTypenamesById={};usingPossibleTypes=!1;constructor(e){this.config=e,this.config=p({dataIdFromObject:Di},e),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),e.possibleTypes&&this.addPossibleTypes(e.possibleTypes),e.typePolicies&&this.addTypePolicies(e.typePolicies)}identify(e,t){let i=this,r=t&&(t.typename||t.storeObject?.__typename)||e.__typename;if(r===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];let o=t&&t.storeObject||e,a=k(p({},t),{typename:r,storeObject:o,readField:t&&t.readField||((...d)=>{let f=Li(d,o);return i.readField(f,{store:i.cache.data,variables:f.variables})})}),s,l=r&&this.getTypePolicy(r),c=l&&l.keyFn||this.config.dataIdFromObject;return on.withValue(!0,()=>{for(;c;){let d=c(p(p({},e),o),a);if(M(d))c=fo(d);else{s=d;break}}}),s=s?String(s):void 0,a.keyObject?[s,a.keyObject]:[s]}addTypePolicies(e){Object.keys(e).forEach(t=>{let s=e[t],{queryType:i,mutationType:r,subscriptionType:o}=s,a=Q(s,["queryType","mutationType","subscriptionType"]);i&&this.setRootTypename("Query",t),r&&this.setRootTypename("Mutation",t),o&&this.setRootTypename("Subscription",t),B.call(this.toBeAdded,t)?this.toBeAdded[t].push(a):this.toBeAdded[t]=[a]})}updateTypePolicy(e,t,i){let r=this.getTypePolicy(e),{keyFields:o,fields:a}=t;function s(l,c){l.merge=typeof c=="function"?c:c===!0?Tl:c===!1?kl:l.merge}s(r,t.merge),r.keyFn=o===!1?zu:M(o)?fo(o):typeof o=="function"?o:r.keyFn,a&&Object.keys(a).forEach(l=>{let c=i[l];(!c||c?.typename!==e)&&(c=i[l]={typename:e});let d=a[l];if(typeof d=="function")c.read=d;else{let{keyArgs:f,read:u,merge:m}=d;c.keyFn=f===!1?wl:M(f)?po(f):typeof f=="function"?f:c.keyFn,typeof u=="function"&&(c.read=u),s(c,m)}c.read&&c.merge&&(c.keyFn=c.keyFn||wl)})}setRootTypename(e,t=e){let i="ROOT_"+e.toUpperCase(),r=this.rootTypenamesById[i];t!==r&&(x(!r||r===e,103,e),r&&delete this.rootIdsByTypename[r],this.rootIdsByTypename[t]=i,this.rootTypenamesById[i]=t)}addPossibleTypes(e){this.usingPossibleTypes=!0,Object.keys(e).forEach(t=>{this.getSupertypeSet(t,!0),e[t].forEach(i=>{this.getSupertypeSet(i,!0).add(t);let r=i.match(io);(!r||r[0]!==i)&&this.fuzzySubtypes.set(i,new RegExp(i))})})}getTypePolicy(e){if(!B.call(this.typePolicies,e)){let i=this.typePolicies[e]={};i.fields={};let r=this.supertypeMap.get(e);!r&&this.fuzzySubtypes.size&&(r=this.getSupertypeSet(e,!0),this.fuzzySubtypes.forEach((o,a)=>{if(o.test(e)){let s=this.supertypeMap.get(a);s&&s.forEach(l=>r.add(l))}})),r&&r.size&&r.forEach(o=>{let l=this.getTypePolicy(o),{fields:a}=l,s=Q(l,["fields"]);Object.assign(i,s),Object.assign(i.fields,a)})}let t=this.toBeAdded[e];return t&&t.length&&t.splice(0).forEach(i=>{this.updateTypePolicy(e,i,this.typePolicies[e].fields)}),this.typePolicies[e]}getFieldPolicy(e,t){if(e)return this.getTypePolicy(e).fields[t]}getSupertypeSet(e,t){let i=this.supertypeMap.get(e);return!i&&t&&this.supertypeMap.set(e,i=new Set),i}fragmentMatches(e,t,i,r){if(!e.typeCondition)return!0;if(!t)return!1;let o=e.typeCondition.name.value;if(t===o)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(o)){let a=this.getSupertypeSet(t,!0),s=[a],l=f=>{let u=this.getSupertypeSet(f,!1);u&&u.size&&s.indexOf(u)<0&&s.push(u)},c=!!(i&&this.fuzzySubtypes.size),d=!1;for(let f=0;f<s.length;++f){let u=s[f];if(u.has(o))return a.has(o)||(d&&w&&x.warn(104,t,o),a.add(o)),!0;u.forEach(l),c&&f===s.length-1&&Ci(e.selectionSet,i,r)&&(c=!1,d=!0,this.fuzzySubtypes.forEach((m,b)=>{let h=t.match(m);h&&h[0]===t&&l(b)}))}}return!1}hasKeyArgs(e,t){let i=this.getFieldPolicy(e,t);return!!(i&&i.keyFn)}getStoreFieldName(e){let{typename:t,fieldName:i}=e,r=this.getFieldPolicy(t,i),o,a=r&&r.keyFn;if(a&&t){let s={typename:t,fieldName:i,field:e.field||null,variables:e.variables},l=vo(e);for(;a;){let c=a(l,s);if(M(c))a=po(c);else{o=c||i;break}}}return o===void 0&&(o=e.field?eo(e.field,e.variables):zn(i,vo(e))),o===!1?i:i===Ce(o)?o:i+":"+o}readField(e,t){let i=e.from;if(!i||!(e.field||e.fieldName))return;if(e.typename===void 0){let d=t.store.getFieldValue(i,"__typename");d&&(e.typename=d)}let o=this.getStoreFieldName(e),a=Ce(o),s=t.store.getFieldValue(i,o),l=this.getFieldPolicy(e.typename,a),c=l&&l.read;if(c){let d=Il(this,i,e,t,t.store.getStorage(A(i)?i.__ref:i,o));return bo.withValue(this.cache,c,[s,d])}return s}getReadFunction(e,t){let i=this.getFieldPolicy(e,t);return i&&i.read}getMergeFunction(e,t,i){let r=this.getFieldPolicy(e,t),o=r&&r.merge;return!o&&i&&(r=this.getTypePolicy(i),o=r&&r.merge),o}runMergeFunction(e,t,{field:i,typename:r,merge:o,path:a},s,l){let c=e;if(o===Tl)return Ol(s.store)(e,t);if(o===kl)return t;s.overwrite&&(e=void 0);let d=s.extensions?.[ve]?.deref()?.peekArray(a);if(d){let{current:u,previous:m}=d;if(m&&N(m.incoming,t)&&N(m.streamFieldInfo,u))return m.result}let f=o(e,t,ju(this,void 0,{typename:r,fieldName:i.name.value,field:i,variables:s.variables,path:a},s,l||{},c));return d&&(d.previous={incoming:t,streamFieldInfo:d.current,result:f}),f}};function Il(n,e,t,i,r){let o=n.getStoreFieldName(t),a=Ce(o),s=t.variables||i.variables,{toReference:l,canRead:c}=i.store;return{args:vo(t),field:t.field||null,fieldName:a,storeFieldName:o,variables:s,isReference:A,toReference:l,storage:r,cache:n.cache,canRead:c,readField(...d){return n.readField(Li(d,e,s),i)},mergeObjects:Ol(i.store)}}function ju(n,e,t,i,r,o){var l;let a=k(p({},Il(n,e,t,i,r)),{extensions:i.extensions,existingData:o}),s=i.extensions;if(s&&ve in s){let c=s,{[l=ve]:d}=c,f=Q(c,[Xn(l)]),u=d?.deref()?.peekArray(t.path);u&&(a.streamFieldInfo=u.current),a.extensions=Object.keys(f).length===0?void 0:f}return a}function Li(n,e,t){let{0:i,1:r,length:o}=n,a;return typeof i=="string"?a={fieldName:i,from:o>1?r:e}:(a=p({},i),B.call(a,"from")||(a.from=e)),w&&a.from===void 0&&w&&x.warn(105,Mn(Array.from(n))),a.variables===void 0&&(a.variables=t),a}function Ol(n){return function(t,i){if(M(t)||M(i))throw j(106);if(R(t)&&R(i)){let r=n.getFieldValue(t,"__typename"),o=n.getFieldValue(i,"__typename");if(r&&o&&r!==o)return i;if(A(t)&&lt(i))return n.merge(t.__ref,i),t;if(lt(t)&&A(i))return n.merge(t,i.__ref),i;if(lt(t)&&lt(i))return p(p({},t),i)}return i}}var Gn=class n extends Error{message;path;query;variables;constructor(e,t,i,r){if(super(e),this.message=e,this.path=t,this.query=i,this.variables=r,this.name="MissingFieldError",Array.isArray(this.path)){this.missing=this.message;for(let o=this.path.length-1;o>=0;--o)this.missing={[this.path[o]]:this.missing}}else this.missing=this.path;this.__proto__=n.prototype}missing};function Cl(n){return[n.selectionSet,n.objectOrReference,n.context]}var Pi=class{executeSelectionSet;executeSubSelectedArray;config;knownResults=new WeakMap;constructor(e){this.config=e,this.executeSelectionSet=Be(t=>{let i=Cl(t),r=this.executeSelectionSet.peek(...i);return r||(lo(t.context.store,t.enclosingRef.__ref),this.execSelectionSetImpl(t))},{max:q["inMemoryCache.executeSelectionSet"]||5e4,keyArgs:Cl,makeCacheKey(t,i,r){if(Dt(r.store))return r.store.makeCacheKey(t,A(i)?i.__ref:i,r.varString)}}),this.executeSubSelectedArray=Be(t=>(lo(t.context.store,t.enclosingRef.__ref),this.execSubSelectedArrayImpl(t)),{max:q["inMemoryCache.executeSubSelectedArray"]||1e4,makeCacheKey({field:t,array:i,context:r}){if(Dt(r.store))return r.store.makeCacheKey(t,i,r.varString)}})}diffQueryAgainstStore({store:e,query:t,rootId:i="ROOT_QUERY",variables:r,returnPartialData:o=!0}){let a=this.config.cache.policies;r=p(p({},Tt(Ln(t))),r);let s=Me(i),l=this.executeSelectionSet({selectionSet:en(t).selectionSet,objectOrReference:s,enclosingRef:s,context:p({store:e,query:t,policies:a,variables:r,varString:Z(r)},Fi(t,this.config.fragments))}),c;l.missing&&(c=new Gn(Bu(l.missing),l.missing,t,r));let d=!c,{result:f}=l;return{result:d?f:o?Object.keys(f).length===0?null:f:null,complete:d,missing:c}}isFresh(e,t,i,r){if(Dt(r.store)&&this.knownResults.get(e)===i){let o=this.executeSelectionSet.peek(i,t,r);if(o&&e===o.result)return!0}return!1}execSelectionSetImpl({selectionSet:e,objectOrReference:t,enclosingRef:i,context:r}){if(A(t)&&!r.policies.rootTypenamesById[t.__ref]&&!r.store.has(t.__ref))return{result:{},missing:`Dangling reference to missing ${t.__ref} object`};let{variables:o,policies:a,store:s}=r,l=s.getFieldValue(t,"__typename"),c=[],d,f=new he;typeof l=="string"&&!a.rootIdsByTypename[l]&&c.push({__typename:l});function u(v,T){return v.missing&&(d=f.merge(d,{[T]:v.missing})),v.result}let m=new Set(e.selections);m.forEach(v=>{if(We(v,o))if(Ne(v)){let T=a.readField({fieldName:v.name.value,field:v,variables:r.variables,from:t},r),O=ye(v);T===void 0?It.added(v)||(d=f.merge(d,{[O]:`Can't find field '${v.name.value}' on ${A(t)?t.__ref+" object":"object "+JSON.stringify(t,null,2)}`})):M(T)?T.length>0&&(T=u(this.executeSubSelectedArray({field:v,array:T,enclosingRef:i,context:r}),O)):v.selectionSet&&T!=null&&(T=u(this.executeSelectionSet({selectionSet:v.selectionSet,objectOrReference:T,enclosingRef:A(T)?T:i,context:r}),O)),T!==void 0&&c.push({[O]:T})}else{let T=it(v,r.lookupFragment);if(!T&&v.kind===_.FRAGMENT_SPREAD)throw j(107,v.name.value);T&&a.fragmentMatches(T,l)&&T.selectionSet.selections.forEach(m.add,m)}});let h={result:Zr(c),missing:d},g=ot(h);return g.result&&this.knownResults.set(g.result,e),g}execSubSelectedArrayImpl({field:e,array:t,enclosingRef:i,context:r}){let o,a=new he;function s(l,c){return l.missing&&(o=a.merge(o,{[c]:l.missing})),l.result}return e.selectionSet&&(t=t.filter(l=>l===void 0||r.store.canRead(l))),t=t.map((l,c)=>l===null?null:M(l)?s(this.executeSubSelectedArray({field:e,array:l,enclosingRef:i,context:r}),c):e.selectionSet?s(this.executeSelectionSet({selectionSet:e.selectionSet,objectOrReference:l,enclosingRef:A(l)?l:i,context:r}),c):(w&&Uu(r.store,e,l),l)),{result:t,missing:o}}};function Bu(n){try{JSON.stringify(n,(e,t)=>{if(typeof t=="string")throw t;return t})}catch(e){return e}}function Uu(n,e,t){if(!e.selectionSet){let i=new Set([t]);i.forEach(r=>{R(r)&&(x(!A(r),108,fl(n,r),e.name.value),Object.values(r).forEach(i.add,i))})}}function _o(n,e,t){let i=`${e}${t}`,r=n.flavors.get(i);return r||n.flavors.set(i,r=n.clientOnly===e&&n.deferred===t?n:k(p({},n),{clientOnly:e,deferred:t})),r}var Vi=class{cache;reader;fragments;constructor(e,t,i){this.cache=e,this.reader=t,this.fragments=i}writeToStore(e,{query:t,result:i,dataId:r,variables:o,overwrite:a,extensions:s}){let l=ne(t),c=pl();o=p(p({},Tt(l)),o);let d=k(p({store:e,written:{},merge(u,m){return c.merge(u,m)},variables:o,varString:Z(o)},Fi(t,this.fragments)),{overwrite:!!a,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map,extensions:s}),f=this.processSelectionSet({result:i||{},dataId:r,selectionSet:l.selectionSet,mergeTree:{map:new Map},context:d,path:[]});if(!A(f))throw j(109,i);return d.incomingById.forEach(({storeObject:u,mergeTree:m,fieldNodeSet:b},h)=>{let g=Me(h);if(m&&m.map.size){let v=this.applyMerges(m,g,u,d);if(A(v))return;u=v}if(w&&!d.overwrite){let v={};b.forEach(S=>{S.selectionSet&&(v[S.name.value]=!0)});let T=S=>v[Ce(S)]===!0,O=S=>{let F=m&&m.map.get(S);return!!(F&&F.info&&F.info.merge)};Object.keys(u).forEach(S=>{T(S)&&!O(S)&&qu(g,u,S,d.store)})}e.merge(h,u)}),e.retain(f.__ref),f}processSelectionSet({dataId:e,result:t,selectionSet:i,context:r,mergeTree:o,path:a}){let{policies:s}=this.cache,l={},c=e&&s.rootTypenamesById[e]||Eo(t,i,r.fragmentMap)||e&&r.store.get(e,"__typename");typeof c=="string"&&(l.__typename=c);let d=(...u)=>{let m=Li(u,l,r.variables);if(A(m.from)){let b=r.incomingById.get(m.from.__ref);if(b){let h=s.readField(k(p({},m),{from:b.storeObject}),r);if(h!==void 0)return h}}return s.readField(m,r)},f=new Set;this.flattenFields(i,t,r,c).forEach((u,m)=>{let b=ye(m),h=t[b],g=[...a,m.name.value];if(f.add(m),h!==void 0){let v=s.getStoreFieldName({typename:c,fieldName:m.name.value,field:m,variables:u.variables}),T=Dl(o,v),O=this.processFieldValue(h,m,m.selectionSet?_o(u,!1,!1):u,T,g),S;m.selectionSet&&(A(O)||lt(O))&&(S=d("__typename",O));let F=s.getMergeFunction(c,m.name.value,S);F?T.info={field:m,typename:c,merge:F,path:g}:Ae(["stream"],m)&&Array.isArray(O)&&u.extensions?.[ve]?T.info={field:m,typename:c,merge:Sl,path:g}:Fl(o,v),l=u.merge(l,{[v]:O})}else w&&!u.clientOnly&&!u.deferred&&!It.added(m)&&!s.getReadFunction(c,m.name.value)&&x.error(110,ye(m),t)});try{let[u,m]=s.identify(t,{typename:c,selectionSet:i,fragmentMap:r.fragmentMap,storeObject:l,readField:d});e=e||u,m&&(l=r.merge(l,m))}catch(u){if(!e)throw u}if(typeof e=="string"){let u=Me(e),m=r.written[e]||(r.written[e]=[]);if(m.indexOf(i)>=0||(m.push(i),this.reader&&this.reader.isFresh(t,u,i,r)))return u;let b=r.incomingById.get(e);return b?(b.storeObject=r.merge(b.storeObject,l),b.mergeTree=xo(b.mergeTree,o),f.forEach(h=>b.fieldNodeSet.add(h))):r.incomingById.set(e,{storeObject:l,mergeTree:zi(o)?void 0:o,fieldNodeSet:f}),u}return l}processFieldValue(e,t,i,r,o){return!t.selectionSet||e===null?w?jr(e):e:M(e)?e.map((a,s)=>{let l=this.processFieldValue(a,t,i,Dl(r,s),[...o,s]);return Fl(r,s),l}):this.processSelectionSet({result:e,selectionSet:t.selectionSet,context:i,mergeTree:r,path:o})}flattenFields(e,t,i,r=Eo(t,e,i.fragmentMap)){let o=new Map,{policies:a}=this.cache,s=new ee(!1);return(function l(c,d){let f=s.lookup(c,d.clientOnly,d.deferred);f.visited||(f.visited=!0,c.selections.forEach(u=>{if(!We(u,i.variables))return;let{clientOnly:m,deferred:b}=d;if(!(m&&b)&&kt(u.directives)&&u.directives.forEach(h=>{let g=h.name.value;if(g==="client"&&(m=!0),g==="defer"){let v=Et(h,i.variables);(!v||v.if!==!1)&&(b=!0)}}),Ne(u)){let h=o.get(u);h&&(m=m&&h.clientOnly,b=b&&h.deferred),o.set(u,_o(i,m,b))}else{let h=it(u,i.lookupFragment);if(!h&&u.kind===_.FRAGMENT_SPREAD)throw j(111,u.name.value);h&&a.fragmentMatches(h,r,t,i.variables)&&l(h.selectionSet,_o(i,m,b))}}))})(e,i),o}applyMerges(e,t,i,r,o){if(e.map.size&&!A(i)){let a=!M(i)&&(A(t)||lt(t))?t:void 0,s=i;a&&!o&&(o=[A(a)?a.__ref:a]);let l,c=(d,f)=>M(d)?typeof f=="number"?d[f]:void 0:r.store.getFieldValue(d,String(f));e.map.forEach((d,f)=>{let u=c(a,f),m=c(s,f);if(m===void 0)return;o&&o.push(f);let b=this.applyMerges(d,u,m,r,o);b!==m&&(l=l||new Map,l.set(f,b)),o&&x(o.pop()===f)}),l&&(i=M(s)?s.slice(0):p({},s),l.forEach((d,f)=>{i[f]=d}))}return e.info?this.cache.policies.runMergeFunction(t,i,e.info,r,o&&r.store.getStorage(...o)):i}},Nl=[];function Dl({map:n},e){return n.has(e)||n.set(e,Nl.pop()||{map:new Map}),n.get(e)}function xo(n,e){if(n===e||!e||zi(e))return n;if(!n||zi(n))return e;let t=n.info&&e.info?p(p({},n.info),e.info):n.info||e.info,i=n.map.size&&e.map.size,r=i?new Map:n.map.size?n.map:e.map,o={info:t,map:r};if(i){let a=new Set(e.map.keys());n.map.forEach((s,l)=>{o.map.set(l,xo(s,e.map.get(l))),a.delete(l)}),a.forEach(s=>{o.map.set(s,xo(e.map.get(s),n.map.get(s)))})}return o}function zi(n){return!n||!(n.info||n.map.size)}function Fl({map:n},e){let t=n.get(e);t&&zi(t)&&(Nl.push(t),n.delete(e))}var Al=new Set;function qu(n,e,t,i){let r=f=>{let u=i.getFieldValue(f,t);return typeof u=="object"&&u},o=r(n);if(!o)return;let a=r(e);if(!a||A(o)||N(o,a)||Object.keys(o).every(f=>i.getFieldValue(a,f)!==void 0))return;let s=i.getFieldValue(n,"__typename")||i.getFieldValue(e,"__typename"),l=Ce(t),c=`${s}.${l}`;if(Al.has(c))return;Al.add(c);let d=[];!M(o)&&!M(a)&&[o,a].forEach(f=>{let u=i.getFieldValue(f,"__typename");typeof u=="string"&&!d.includes(u)&&d.push(u)}),w&&x.warn(112,l,s,d.length?"either ensure all objects of type "+d.join(" and ")+" have an ID or a custom merge function, or ":"",c,Array.isArray(o)?[...o]:p({},o),Array.isArray(a)?[...a]:p({},a))}function Eo(n,e,t){let i;for(let r of e.selections)if(Ne(r)){if(r.name.value==="__typename")return n[ye(r)]}else i?i.push(r):i=[r];if(typeof n.__typename=="string")return n.__typename;if(i)for(let r of i){let o=Eo(n,it(r,t).selectionSet,t);if(typeof o=="string")return o}}var Kn=class extends rn{data;optimisticData;config;watches=new Set;storeReader;storeWriter;addTypenameTransform=new He(It);maybeBroadcastWatch;assumeImmutableResults=!0;policies;makeVar=yo;constructor(e={}){super(),this.config=ml(e),this.policies=new Ri({cache:this,dataIdFromObject:this.config.dataIdFromObject,possibleTypes:this.config.possibleTypes,typePolicies:this.config.typePolicies}),this.init()}init(){let e=this.data=new Ct.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=e.stump,this.resetResultCache()}resetResultCache(){let{fragments:e}=this.config;this.addTypenameTransform.resetCache(),e?.resetCaches(),this.storeWriter=new Vi(this,this.storeReader=new Pi({cache:this,fragments:e}),e),this.maybeBroadcastWatch=Be((t,i)=>this.broadcastWatch(t,i),{max:q["inMemoryCache.maybeBroadcastWatch"]||5e3,makeCacheKey:t=>{let i=t.optimistic?this.optimisticData:this.data;if(Dt(i)){let{optimistic:r,id:o,variables:a}=t;return i.makeCacheKey(t.query,t.callback,Z({optimistic:r,id:o,variables:a}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(t=>t.resetCaching())}restore(e){return this.init(),e&&this.data.replace(e),this}extract(e=!1){return(e?this.optimisticData:this.data).extract()}read(e){let{returnPartialData:t=!1}=e;return this.storeReader.diffQueryAgainstStore(k(p({},e),{store:e.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:t})).result}write(e){try{return++this.txCount,this.storeWriter.writeToStore(this.data,e)}finally{!--this.txCount&&e.broadcast!==!1&&this.broadcastWatches()}}modify(e){if(B.call(e,"id")&&!e.id)return!1;let t=e.optimistic?this.optimisticData:this.data;try{return++this.txCount,t.modify(e.id||"ROOT_QUERY",e.fields,!1)}finally{!--this.txCount&&e.broadcast!==!1&&this.broadcastWatches()}}diff(e){return this.storeReader.diffQueryAgainstStore(k(p({},e),{store:e.optimistic?this.optimisticData:this.data,rootId:e.id||"ROOT_QUERY",config:this.config}))}watch(e){return this.watches.size||El(this),this.watches.add(e),e.immediate&&this.maybeBroadcastWatch(e),()=>{this.watches.delete(e)&&!this.watches.size&&go(this),this.maybeBroadcastWatch.forget(e)}}gc(e){Z.reset(),st.reset();let t=this.optimisticData.gc();return e&&!this.txCount&&e.resetResultCache&&this.resetResultCache(),t}retain(e,t){return(t?this.optimisticData:this.data).retain(e)}release(e,t){return(t?this.optimisticData:this.data).release(e)}identify(e){if(A(e))return e.__ref;try{return this.policies.identify(e)[0]}catch(t){w&&x.warn(t)}}evict(e){if(!e.id){if(B.call(e,"id"))return!1;e=k(p({},e),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(e,this.data)}finally{!--this.txCount&&e.broadcast!==!1&&this.broadcastWatches()}}reset(e){return this.init(),Z.reset(),e&&e.discardWatches?(this.watches.forEach(t=>this.maybeBroadcastWatch.forget(t)),this.watches.clear(),go(this)):this.broadcastWatches(),Promise.resolve()}removeOptimistic(e){let t=this.optimisticData.removeLayer(e);t!==this.optimisticData&&(this.optimisticData=t,this.broadcastWatches())}txCount=0;batch(e){let{update:t,optimistic:i=!0,removeOptimistic:r,onWatchUpdated:o}=e,a,s=c=>{let{data:d,optimisticData:f}=this;++this.txCount,c&&(this.data=this.optimisticData=c);try{return a=t(this)}finally{--this.txCount,this.data=d,this.optimisticData=f}},l=new Set;return o&&!this.txCount&&this.broadcastWatches(k(p({},e),{onWatchUpdated(c){return l.add(c),!1}})),typeof i=="string"?this.optimisticData=this.optimisticData.addLayer(i,s):i===!1?s(this.data):s(),typeof r=="string"&&(this.optimisticData=this.optimisticData.removeLayer(r)),o&&l.size?(this.broadcastWatches(k(p({},e),{onWatchUpdated(c,d){let f=o.call(this,c,d);return f!==!1&&l.delete(c),f}})),l.size&&l.forEach(c=>this.maybeBroadcastWatch.dirty(c))):this.broadcastWatches(e),a}performTransaction(e,t){return this.batch({update:e,optimistic:t||t!==null})}transformDocument(e){return this.addTypenameTransform.transformDocument(this.addFragmentsToDocument(e))}fragmentMatches(e,t){return this.policies.fragmentMatches(e,t)}lookupFragment(e){return this.config.fragments?.lookup(e)||null}resolvesClientField(e,t){return!!this.policies.getReadFunction(e,t)}broadcastWatches(e){if(!this.txCount){let t=this.onAfterBroadcast,i=new Set;this.onAfterBroadcast=r=>{i.add(r)};try{this.watches.forEach(r=>this.maybeBroadcastWatch(r,e)),i.forEach(r=>r())}finally{this.onAfterBroadcast=t}}}addFragmentsToDocument(e){let{fragments:t}=this.config;return t?t.transform(e):e}broadcastWatch(e,t){let{lastDiff:i}=e,r=this.diff(e);t&&(e.optimistic&&typeof t.optimistic=="string"&&(r.fromOptimisticTransaction=!0),t.onWatchUpdated&&t.onWatchUpdated.call(this,e,r,i)===!1)||(!i||!N(i.result,r.result))&&e.callback(e.lastDiff=r,i)}};w&&(Kn.prototype.getMemoryInternals=Gr);var $n=class{isIncrementalResult(e){return!1}prepareRequest(e){return x(!Ae(["defer","stream"],e.query),67),e}extractErrors(){}startRequest=void 0};function wo(n,{client:e}){let t={query:n.query,variables:n.variables||{},extensions:n.extensions||{},operationName:Y(n.query),operationType:ne(n.query).operation},i=p({},n.context),r=a=>{typeof a=="function"?i=p(p({},i),a(o())):i=p(p({},i),a)},o=()=>Object.freeze(p({},i));return Object.defineProperty(t,"setContext",{enumerable:!1,value:r}),Object.defineProperty(t,"getContext",{enumerable:!1,value:o}),Object.defineProperty(t,"client",{enumerable:!1,value:e}),t}var sn=class n{static empty(){return new n(()=>Le)}static from(e){if(e.length===0)return n.empty();let[t,...i]=e;return t.concat(...i)}static split(e,t,i=new n((r,o)=>o(r))){let r=new n((o,a)=>{let s=e(o);return w&&typeof s!="boolean"&&w&&x.warn(63,s),s?t.request(o,a):i.request(o,a)});return Object.assign(r,{left:t,right:i})}static execute(e,t,i){return e.request(wo(t,i),()=>(w&&w&&x.warn(64),Le))}static concat(...e){return n.from(e)}constructor(e){e&&(this.request=e)}split(e,t,i){return this.concat(n.split(e,t,i))}concat(...e){return e.length===0?this:e.reduce(this.combine.bind(this),this)}combine(e,t){let i=new n((r,o)=>e.request(r,a=>t.request(a,o)));return Object.assign(i,{left:e,right:t})}request(e,t){throw j(65)}left;right};var Ft=sn.execute;function ct(n,e){return typeof n=="object"&&n!==null&&n[Symbol.for("apollo.error")]===e}function dt(n){Object.defineProperty(n,Symbol.for("apollo.error"),{value:n.name,enumerable:!1,writable:!1,configurable:!1})}function Ml(n){return n.map(e=>e.message||"Error message not found.").join(`
`)}var Rl=(()=>{class n extends Error{static is(t){return ct(t,"CombinedProtocolErrors")}static formatMessage=Ml;errors;constructor(t){super(n.formatMessage(t,{defaultFormatMessage:Ml})),this.name="CombinedProtocolErrors",this.errors=t,dt(this),Object.setPrototypeOf(this,n.prototype)}}return n})();function Ll(n){return n!==null&&typeof n=="object"&&typeof n.message=="string"&&typeof n.name=="string"&&(typeof n.stack=="string"||typeof n.stack>"u")}var ji=class n extends Error{static is(e){return ct(e,"UnconventionalError")}constructor(e){super("An error of unexpected shape occurred.",{cause:e}),this.name="UnconventionalError",dt(this),Object.setPrototypeOf(this,n.prototype)}};function Pl(n){return n.filter(e=>e).map(e=>e.message||"Error message not found.").join(`
`)}var At=(()=>{class n extends Error{static is(t){return ct(t,"CombinedGraphQLErrors")}static formatMessage=Pl;errors;data;extensions;constructor(t,i=t.errors||[]){super(n.formatMessage(i,{result:t,defaultFormatMessage:Pl})),this.errors=i,this.data=t.data,this.extensions=t.extensions,this.name="CombinedGraphQLErrors",dt(this),Object.setPrototypeOf(this,n.prototype)}}return n})();var Qu=new WeakSet;function To(n){Qu.add(n)}var ko=class n extends Error{static is(e){return ct(e,"ServerError")}response;statusCode;bodyText;constructor(e,t){super(e),this.name="ServerError",this.response=t.response,this.statusCode=t.response.status,this.bodyText=t.bodyText,dt(this),Object.setPrototypeOf(this,n.prototype)}};var Bi=Symbol();function Vl(n){return"extensions"in n?Rl.is(n.extensions[Bi]):!1}function zl(n){return Ll(n)?n:typeof n=="string"?new Error(n,{cause:n}):new ji(n)}var C=(function(n){return n[n.loading=1]="loading",n[n.setVariables=2]="setVariables",n[n.fetchMore=3]="fetchMore",n[n.refetch=4]="refetch",n[n.poll=6]="poll",n[n.ready=7]="ready",n[n.error=8]="error",n[n.streaming=9]="streaming",n})(C||{});var{assign:jl,hasOwnProperty:Wu}=Object,ln={loading:!0,networkStatus:C.loading,data:void 0,dataState:"empty",partial:!0},So={loading:!1,networkStatus:C.ready,data:void 0,dataState:"empty",partial:!0},cn=class{options;queryName;variablesUnknown=!1;_lastWrite;get query(){return this.lastQuery}get variables(){return this.options.variables}unsubscribeFromCache;input;subject;isTornDown;queryManager;subscriptions=new Set;waitForNetworkResult;lastQuery;linkSubscription;pollingInfo;get networkStatus(){return this.subject.getValue().result.networkStatus}get cache(){return this.queryManager.cache}constructor({queryManager:e,options:t,transformedQuery:i=e.transform(t.query)}){this.queryManager=e,this.waitForNetworkResult=t.fetchPolicy==="network-only",this.isTornDown=!1,this.subscribeToMore=this.subscribeToMore.bind(this),this.maskResult=this.maskResult.bind(this);let{watchQuery:{fetchPolicy:r="cache-first"}={}}=e.defaultOptions,{fetchPolicy:o=r,initialFetchPolicy:a=o==="standby"?r:o}=t;t[to]&&(x(o==="standby",80),this.variablesUnknown=!0),this.lastQuery=i,this.options=k(p({},t),{initialFetchPolicy:a,fetchPolicy:o,variables:this.getVariablesWithDefaults(t.variables)}),this.initializeObservablesQueue(),this["@@observable"]=()=>this,Symbol.observable&&(this[Symbol.observable]=()=>this);let s=ne(this.query);this.queryName=s&&s.name&&s.name.value}initializeObservablesQueue(){this.subject=new ei({query:this.query,variables:this.variables,result:ln,meta:{}});let e=this.subject.pipe(De({subscribe:()=>{this.subject.observed||(this.reobserve(),setTimeout(()=>this.updatePolling()))},unsubscribe:()=>{this.subject.observed||this.tearDownQuery()}}),nn(({query:t,variables:i,result:r,meta:o},a)=>{let{shouldEmit:s}=o;if(r===ln&&(a.previous=void 0,a.previousVariables=void 0),this.options.fetchPolicy==="standby"||s===2)return;if(s===1)return d();let{previous:l,previousVariables:c}=a;if(l){let f=this.queryManager.getDocumentInfo(t),u=this.queryManager.dataMasking,m=u?f.nonReactiveQuery:t;if((u||f.hasNonreactiveDirective?jn(m,l,r,i):N(l,r))&&N(c,i))return}if(s===3&&(!this.options.notifyOnNetworkStatusChange||N(l,r)))return;return d();function d(){return a.previous=r,a.previousVariables=i,r}},()=>({})));this.pipe=e.pipe.bind(e),this.subscribe=e.subscribe.bind(e),this.input=new z,this.input.complete=()=>{},this.input.pipe(this.operator).subscribe(this.subject)}subscribe;pipe;[Symbol.observable];"@@observable";getCacheDiff({optimistic:e=!0}={}){return this.cache.diff({query:this.query,variables:this.variables,returnPartialData:!0,optimistic:e})}getInitialResult(e){let t=e||this.options.fetchPolicy;this.queryManager.prioritizeCacheValues&&(t==="network-only"||t==="cache-and-network")&&(t="cache-first");let i=()=>{let r=this.getCacheDiff(),o=this.options.returnPartialData||r.complete?r.result??void 0:void 0;return this.maskResult({data:o,dataState:r.complete?"complete":o===void 0?"empty":"partial",loading:!r.complete,networkStatus:r.complete?C.ready:C.loading,partial:!r.complete})};switch(t){case"cache-only":return k(p({},i()),{loading:!1,networkStatus:C.ready});case"cache-first":return i();case"cache-and-network":return k(p({},i()),{loading:!0,networkStatus:C.loading});case"standby":return So;default:return ln}}resubscribeCache(){let{variables:e,fetchPolicy:t}=this.options,i=this.query,r=t==="standby"||t==="no-cache"||this.waitForNetworkResult,o=!Yn({query:i,variables:e},this.unsubscribeFromCache)&&!this.waitForNetworkResult;if((r||o)&&this.unsubscribeFromCache?.(),r||!o)return;let a={query:i,variables:e,optimistic:!0,watcher:this,callback:l=>{let c=this.queryManager.getDocumentInfo(i);if((c.hasClientExports||c.hasForcedResolvers)&&(a.lastDiff=void 0),a.lastOwnDiff===l)return;let{result:d}=this.subject.getValue();!l.complete&&(d.error||d===ln||d===So)||N(d.data,l.result)||this.scheduleNotify()}},s=this.cache.watch(a);this.unsubscribeFromCache=Object.assign(()=>{this.unsubscribeFromCache=void 0,s()},{query:i,variables:e})}stableLastResult;getCurrentResult(){let{result:e}=this.subject.getValue(),t=e.networkStatus===C.error||this.hasObservers()||this.options.fetchPolicy==="no-cache"?e:this.getInitialResult();return t===ln&&(t=this.getInitialResult()),N(this.stableLastResult,t)||(this.stableLastResult=t),this.stableLastResult}refetch(e){let{fetchPolicy:t}=this.options,i={pollInterval:0};if(t==="no-cache"?i.fetchPolicy="no-cache":i.fetchPolicy="network-only",w&&e&&Wu.call(e,"variables")){let r=Ln(this.query),o=r.variableDefinitions;(!o||!o.some(a=>a.variable.name.value==="variables"))&&w&&x.warn(81,e,r.name?.value||r)}return e&&!N(this.variables,e)&&(i.variables=this.options.variables=this.getVariablesWithDefaults(p(p({},this.variables),e))),this._lastWrite=void 0,this._reobserve(i,{newNetworkStatus:C.refetch})}fetchMore({query:e,variables:t,context:i,errorPolicy:r,updateQuery:o}){x(this.options.fetchPolicy!=="cache-only",82,Y(this.query,"(anonymous)"));let a=k(p({},Ee(this.options,{errorPolicy:"none"},{query:e,context:i,errorPolicy:r})),{variables:e?t:p(p({},this.variables),t),fetchPolicy:"no-cache",notifyOnNetworkStatusChange:this.options.notifyOnNetworkStatusChange});a.query=this.transformDocument(a.query),this.lastQuery=e?this.transformDocument(this.options.query):a.query;let s=!1,l=this.options.fetchPolicy!=="no-cache";l||x(o,83);let{finalize:c,pushNotification:d}=this.pushOperation(C.fetchMore);d({source:"newNetworkStatus",kind:"N",value:{}},{shouldEmit:3});let{promise:f,operator:u}=Bl(),{observable:m}=this.queryManager.fetchObservableWithInfo(a,{networkStatus:C.fetchMore,exposeExtensions:!0}),b=m.pipe(u,we(h=>h.kind==="N"&&h.source==="network")).subscribe({next:h=>{s=!1;let g=h.value,v=g[Un];if(Qn(h.value.networkStatus)&&c(),l){let T=this.getCacheDiff();this.cache.batch({update:O=>{o?O.updateQuery({query:this.query,variables:this.variables,returnPartialData:!0,optimistic:!1,extensions:v},S=>o(S,{fetchMoreResult:g.data,variables:a.variables})):O.writeQuery({query:a.query,variables:a.variables,data:g.data,extensions:v})},onWatchUpdated:(O,S)=>{if(O.watcher===this&&!N(S.result,T.result)){s=!0;let F=this.getCurrentResult();Ot(g.networkStatus)&&d({kind:"N",source:"network",value:k(p({},F),{networkStatus:g.networkStatus===C.error?C.ready:g.networkStatus,loading:!1,data:S.result,dataState:g.dataState==="streaming"?"streaming":"complete"})})}}})}else{let T=this.getCurrentResult(),O=o(T.data,{fetchMoreResult:g.data,variables:a.variables});d({kind:"N",value:k(p({},T),{networkStatus:C.ready,loading:!1,data:O,dataState:T.dataState==="streaming"?"streaming":"complete"}),source:"network"})}}});return Ii(f.then(h=>at(this.maskResult(h))).finally(()=>{if(b.unsubscribe(),c(),l&&!s){let h=this.getCurrentResult();h.dataState==="streaming"?d({kind:"N",source:"network",value:k(p({},h),{dataState:"complete",networkStatus:C.ready})}):d({kind:"N",source:"newNetworkStatus",value:{}},{shouldEmit:1})}}))}subscribeToMore(e){let t=this.queryManager.startGraphQLSubscription({query:e.document,variables:e.variables,context:e.context}).subscribe({next:i=>{let{updateQuery:r,onError:o}=e,{error:a}=i;if(a){o?o(a):x.error(84,a);return}r&&this.updateQuery((s,l)=>r(s,p({subscriptionData:i},l)))}});return this.subscriptions.add(t),()=>{this.subscriptions.delete(t)&&t.unsubscribe()}}applyOptions(e){let t=Ee(this.options,e||{});jl(this.options,t),this.updatePolling()}async setVariables(e){return e=this.getVariablesWithDefaults(e),N(this.variables,e)?at(this.getCurrentResult()):(this.options.variables=e,this.hasObservers()?this._reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:e},{newNetworkStatus:C.setVariables}):at(this.getCurrentResult()))}updateQuery(e){let{queryManager:t}=this,{result:i,complete:r}=this.getCacheDiff({optimistic:!1}),o=e(i,{variables:this.variables,complete:!!r,previousData:i});o&&(this.cache.writeQuery({query:this.options.query,data:o,variables:this.variables}),t.broadcastQueries())}startPolling(e){this.options.pollInterval=e,this.updatePolling()}stopPolling(){this.options.pollInterval=0,this.updatePolling()}applyNextFetchPolicy(e,t){if(t.nextFetchPolicy){let{fetchPolicy:i="cache-first",initialFetchPolicy:r=i}=t;i==="standby"||(typeof t.nextFetchPolicy=="function"?t.fetchPolicy=t.nextFetchPolicy.call(t,i,{reason:e,options:t,observable:this,initialFetchPolicy:r}):e==="variables-changed"?t.fetchPolicy=r:t.fetchPolicy=t.nextFetchPolicy)}return t.fetchPolicy}fetch(e,t,i,r){let o=this.options.fetchPolicy;e.context??={};let a=!1,s=()=>{a=!0},l=g=>new X(v=>{try{return g.subscribe({next(T){a=!0,v.next(T)},error:T=>v.error(T),complete:()=>v.complete()})}finally{a||(m.override=t,this.input.next({kind:"N",source:"newNetworkStatus",value:{resetError:!0},query:f,variables:u,meta:{shouldEmit:3,fetchPolicy:o}}))}}),{observable:c,fromLink:d}=this.queryManager.fetchObservableWithInfo(e,{networkStatus:t,query:i,onCacheHit:s,fetchQueryOperator:l,observableQuery:this}),{query:f,variables:u}=this,m={abort:()=>{h.unsubscribe()},query:f,variables:u};this.activeOperations.add(m);let b=t==C.refetch||t==C.setVariables;c=c.pipe(r,mt());let h=c.pipe(De({next:g=>{g.source==="newNetworkStatus"||g.kind==="N"&&g.value.loading?m.override=t:delete m.override},finalize:()=>this.activeOperations.delete(m)})).subscribe({next:g=>{let v={};b&&g.kind==="N"&&"loading"in g.value&&!g.value.loading&&(b=!1,v.shouldEmit=1),this.input.next(k(p({},g),{query:f,variables:u,meta:v}))}});return{fromLink:d,subscription:h,observable:c}}didWarnCacheOnlyPolling=!1;updatePolling(){if(this.queryManager.ssrMode)return;let{pollingInfo:e,options:{fetchPolicy:t,pollInterval:i}}=this,r=()=>{let{options:l}=this;return!l.pollInterval||!this.hasObservers()||l.fetchPolicy==="cache-only"||l.fetchPolicy==="standby"};if(r()){w&&!this.didWarnCacheOnlyPolling&&i&&t==="cache-only"&&(w&&x.warn(85,Y(this.query,"(anonymous)")),this.didWarnCacheOnlyPolling=!0),this.cancelPolling();return}if(e?.interval===i)return;let o=e||(this.pollingInfo={});o.interval=i;let a=()=>{if(r())return this.cancelPolling();this.pollingInfo&&(!Ot(this.networkStatus)&&!this.options.skipPollAttempt?.()?this._reobserve({fetchPolicy:this.options.initialFetchPolicy==="no-cache"?"no-cache":"network-only"},{newNetworkStatus:C.poll}).then(s,s):s())},s=()=>{let l=this.pollingInfo;l&&(clearTimeout(l.timeout),l.timeout=setTimeout(a,l.interval))};s()}cancelPolling(){this.pollingInfo&&(clearTimeout(this.pollingInfo.timeout),delete this.pollingInfo)}reobserve(e){return this._reobserve(e)}_reobserve(e,t){this.isTornDown=!1;let{newNetworkStatus:i}=t||{};this.queryManager.obsQueries.add(this);let r=i===C.refetch||i===C.poll,o=this.variables,a=this.options.fetchPolicy,s=Ee(this.options,e||{});this.variablesUnknown&&=s.fetchPolicy==="standby";let l=r?s:jl(this.options,s),c=this.transformDocument(l.query);this.lastQuery=c,e&&"variables"in e&&(l.variables=this.getVariablesWithDefaults(e.variables)),r||(this.updatePolling(),e&&e.variables&&!N(e.variables,o)&&l.fetchPolicy!=="standby"&&(l.fetchPolicy===a||typeof l.nextFetchPolicy=="function")&&(this.applyNextFetchPolicy("variables-changed",l),i===void 0&&(i=C.setVariables)));let d=this.networkStatus;i||(i=C.loading,d!==C.loading&&e?.variables&&!N(e.variables,o)&&(i=C.setVariables),l.fetchPolicy==="standby"&&(i=C.ready)),l.fetchPolicy==="standby"&&this.cancelPolling(),this.resubscribeCache();let{promise:f,operator:u}=Bl(l.fetchPolicy==="standby"?{data:void 0}:void 0),{subscription:m,observable:b,fromLink:h}=this.fetch(l,i,c,u);!r&&(h||!this.linkSubscription)&&(this.linkSubscription&&this.linkSubscription.unsubscribe(),this.linkSubscription=m);let g=Object.assign(Ii(f.then(v=>at(this.maskResult(v))).finally(()=>{!this.hasObservers()&&this.activeOperations.size===0&&this.tearDownQuery()})),{retain:()=>{let v=b.subscribe({}),T=()=>v.unsubscribe();return f.then(T,T),g}});return g}hasObservers(){return this.subject.observed}stop(){this.subject.complete(),this.initializeObservablesQueue(),this.tearDownQuery()}tearDownQuery(){this.isTornDown||(this.resetNotifications(),this.unsubscribeFromCache?.(),this.linkSubscription&&(this.linkSubscription.unsubscribe(),delete this.linkSubscription),this.stopPolling(),this.subscriptions.forEach(e=>e.unsubscribe()),this.subscriptions.clear(),this.queryManager.obsQueries.delete(this),this.isTornDown=!0,this.abortActiveOperations(),this._lastWrite=void 0)}transformDocument(e){return this.queryManager.transform(e)}maskResult(e){let t=this.queryManager.maskOperation({document:this.query,data:e.data,fetchPolicy:this.options.fetchPolicy,cause:this});return t===e.data?e:k(p({},e),{data:t})}dirty=!1;notifyTimeout;resetNotifications(){this.notifyTimeout&&(clearTimeout(this.notifyTimeout),this.notifyTimeout=void 0),this.dirty=!1}scheduleNotify(){this.dirty||(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(()=>this.notify(!0),0)))}notify(e=!1){if(!e){let i=this.queryManager.getDocumentInfo(this.query);if(i.hasClientExports||i.hasForcedResolvers)return}let{dirty:t}=this;if(this.resetNotifications(),t&&(this.options.fetchPolicy==="cache-only"||this.options.fetchPolicy==="cache-and-network"||!this.activeOperations.size)){let i=this.getCacheDiff();N(i.result,this.getCacheDiff({optimistic:!1}).result)?this.reobserveCacheFirst():this.input.next({kind:"N",value:{data:i.result,dataState:i.complete?"complete":i.result?"partial":"empty",networkStatus:C.ready,loading:!1,error:void 0,partial:!i.complete},source:"cache",query:this.query,variables:this.variables,meta:{}})}}activeOperations=new Set;pushOperation(e){let t=!1,{query:i,variables:r}=this,o=()=>{this.activeOperations.delete(a)},a={override:e,abort:()=>{t=!0,o()},query:i,variables:r};return this.activeOperations.add(a),{finalize:o,pushNotification:(s,l)=>{t||this.input.next(k(p({},s),{query:i,variables:r,meta:p({},l)}))}}}calculateNetworkStatus(e){return e===C.streaming?e:Array.from(this.activeOperations.values()).reverse().find(i=>Yn(i,this)&&i.override!==void 0)?.override??e}abortActiveOperations(){this.activeOperations.forEach(e=>e.abort())}reset(){let e=this.options.fetchPolicy==="cache-only";this.setResult(e?So:ln,{shouldEmit:e?1:2}),this.abortActiveOperations()}setResult(e,t){this.input.next({source:"setResult",kind:"N",value:e,query:this.query,variables:this.variables,meta:p({},t)})}operator=nn(e=>{let{query:t,variables:i,meta:r}=e;if(e.source==="setResult")return{query:t,variables:i,result:e.value,meta:r};if(e.kind==="C"||!Yn(e,this))return;let o,a=this.subject.getValue();if(e.source==="cache"){if(o=e.value,o.networkStatus===C.ready&&o.partial&&(!this.options.returnPartialData||a.result.networkStatus===C.error)&&this.options.fetchPolicy!=="cache-only")return}else if(e.source==="network")this.waitForNetworkResult&&(this.waitForNetworkResult=!1,this.resubscribeCache()),o=e.kind==="E"?k(p({},Yn(a,e)?a.result:{data:void 0,dataState:"empty",partial:!0}),{error:e.error,networkStatus:C.error,loading:!1}):e.value,e.kind==="E"&&o.dataState==="streaming"&&(o.dataState="complete"),o.error&&(r.shouldEmit=1);else if(e.source==="newNetworkStatus"){let s=Yn(a,e)?a.result:this.getInitialResult(r.fetchPolicy),{resetError:l}=e.value,c=l?void 0:s.error,d=c?C.error:C.ready;o=k(p({},s),{error:c,networkStatus:d})}return x(o),o.error||delete o.error,o.networkStatus=this.calculateNetworkStatus(o.networkStatus),o.loading=Ot(o.networkStatus),o=this.maskResult(o),{query:t,variables:i,result:o,meta:r}});reobserveCacheFirst(){let{fetchPolicy:e,nextFetchPolicy:t}=this.options;e==="cache-and-network"||e==="network-only"?this.reobserve({fetchPolicy:"cache-first",nextFetchPolicy(i,r){return this.nextFetchPolicy=t,typeof this.nextFetchPolicy=="function"?this.nextFetchPolicy(i,r):e}}):this.reobserve()}getVariablesWithDefaults(e){return this.queryManager.getVariables(this.query,e)}};function Ul(n){w&&n&&w&&x.debug(86,n)}function Yn(n,e){return!!(n&&e&&n.query===e.query&&N(n.variables,e.variables))}function Bl(n){let e=n,t,i,r=new Promise((a,s)=>{t=a,i=s}),o=De({next(a){if(a.kind==="E")return i(a.error);a.kind==="N"&&a.source!=="newNetworkStatus"&&!a.value.loading&&(e=a.value)},finalize:()=>{if(e)t(e);else{let a="The operation was aborted.",s="AbortError";i(typeof DOMException<"u"?new DOMException(a,s):Object.assign(new Error(a),{name:s}))}}});return{promise:r,operator:o}}var ql={},dn=new WeakMap;function Io(n,e){let t=n[e];typeof t=="function"&&(n[e]=function(){return dn.set(n,(dn.get(n)+1)%1e15),t.apply(this,arguments)})}var Ql=new WeakMap,un=class{lastRequestId=1;cache;queryManager;id;observableQuery;incremental;constructor(e,t){let i=this.cache=e.cache,r=(Ql.get(e)||0)+1;Ql.set(e,r),this.id=r+"",this.observableQuery=t,this.queryManager=e,dn.has(i)||(dn.set(i,0),Io(i,"evict"),Io(i,"modify"),Io(i,"reset"))}_lastWrite;get lastWrite(){return(this.observableQuery||this)._lastWrite}set lastWrite(e){(this.observableQuery||this)._lastWrite=e}resetLastWrite(){this.lastWrite=void 0}shouldWrite(e,t){let{lastWrite:i}=this;return!(i&&i.dmCount===dn.get(this.cache)&&N(t,i.variables)&&N(e.data,i.result.data)&&e.extensions?.[ve]===i.result.extensions?.[ve])}get hasNext(){return this.incremental?this.incremental.hasNext:!1}maybeHandleIncrementalResult(e,t,i){let{incrementalHandler:r}=this.queryManager;return r.isIncrementalResult(t)?(this.incremental||=r.startRequest({query:i}),this.incremental.handle(e,t)):t}markQueryResult(e,{document:t,variables:i,errorPolicy:r,cacheWriteBehavior:o}){let a={query:t,variables:i,returnPartialData:!0,optimistic:!0};this.observableQuery?.resetNotifications();let s=o===0,l=s?void 0:this.cache.diff(a),c=this.maybeHandleIncrementalResult(l?.result,e,t);return s||(Oo(c,r)?this.cache.batch({onWatchUpdated:(d,f)=>{d.watcher===this.observableQuery&&(d.lastOwnDiff=f)},update:d=>{if(this.shouldWrite(c,i))d.writeQuery({query:t,data:c.data,variables:i,overwrite:o===1,extensions:c.extensions}),this.lastWrite={result:c,variables:i,dmCount:dn.get(this.cache)};else if(l&&l.complete){c=k(p({},c),{data:l.result});return}let f=d.diff(a);f.complete&&(c=k(p({},c),{data:f.result}))}}):this.lastWrite=void 0),c}markMutationResult(e,t,i=this.cache){let r=[],o=t.cacheWriteBehavior===0,a=this.maybeHandleIncrementalResult(o?void 0:i.diff({id:"ROOT_MUTATION",query:this.queryManager.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0}).result,e,t.document);if(t.errorPolicy==="ignore"&&(a=k(p({},a),{errors:[]})),Qe(a)&&t.errorPolicy==="none")return Promise.resolve(a);let s=()=>k(p({},a),{dataState:this.hasNext?"streaming":"complete"});if(!o&&Oo(a,t.errorPolicy)){r.push({result:a.data,dataId:"ROOT_MUTATION",query:t.document,variables:t.variables,extensions:a.extensions});let{updateQueries:c}=t;c&&this.queryManager.getObservableQueries("all").forEach(d=>{let f=d&&d.queryName;if(!f||!Object.hasOwnProperty.call(c,f))return;let u=c[f],{query:m,variables:b}=d,{result:h,complete:g}=d.getCacheDiff({optimistic:!1});if(g&&h){let v=u(h,{mutationResult:s(),queryName:m&&Y(m)||void 0,queryVariables:b});v&&r.push({result:v,dataId:"ROOT_QUERY",query:m,variables:b})}})}let l=t.refetchQueries;if(typeof l=="function"&&(l=l(s())),r.length>0||(l||"").length>0||t.update||t.onQueryUpdated||t.removeOptimistic){let c=[];if(this.queryManager.refetchQueries({updateCache:d=>{o||r.forEach(u=>d.write(u));let{update:f}=t;if(f){if(!o){let u=d.diff({id:"ROOT_MUTATION",query:this.queryManager.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0});u.complete&&(a=k(p({},a),{data:u.result}))}this.hasNext||f(d,a,{context:t.context,variables:t.variables})}!o&&!t.keepRootFields&&!this.hasNext&&d.modify({id:"ROOT_MUTATION",fields(u,{fieldName:m,DELETE:b}){return m==="__typename"?u:b}})},include:l,optimistic:!1,removeOptimistic:t.removeOptimistic,onQueryUpdated:t.onQueryUpdated||null}).forEach(d=>c.push(d)),t.awaitRefetchQueries||t.onQueryUpdated)return Promise.all(c).then(()=>a)}return Promise.resolve(a)}markMutationOptimistic(e,t){let i=typeof e=="function"?e(t.variables,{IGNORE:ql}):e;return i===ql?!1:(this.cache.recordOptimisticTransaction(r=>{try{this.markMutationResult({data:i},t,r)}catch(o){x.error(o)}},this.id),!0)}markSubscriptionResult(e,{document:t,variables:i,errorPolicy:r,cacheWriteBehavior:o}){o!==0&&(Oo(e,r)&&this.cache.write({query:t,result:e.data,dataId:"ROOT_SUBSCRIPTION",variables:i,extensions:e.extensions}),this.queryManager.broadcastQueries())}};function Oo(n,e="none"){let t=e==="ignore"||e==="all",i=!Qe(n);return!i&&t&&n.data&&(i=!0),i}var Ui=class{defaultOptions;client;clientOptions;assumeImmutableResults;documentTransform;ssrMode;defaultContext;dataMasking;incrementalHandler;localState;queryDeduplication;prioritizeCacheValues=!1;onBroadcast;mutationStore;obsQueries=new Set;fetchCancelFns=new Map;constructor(e){let t=new He(r=>this.cache.transformDocument(r),{cache:!1});this.client=e.client,this.defaultOptions=e.defaultOptions,this.queryDeduplication=e.queryDeduplication,this.clientOptions=e.clientOptions,this.ssrMode=e.ssrMode,this.assumeImmutableResults=e.assumeImmutableResults,this.dataMasking=e.dataMasking,this.localState=e.localState,this.incrementalHandler=e.incrementalHandler;let i=e.documentTransform;this.documentTransform=i?t.concat(i).concat(t):t,this.defaultContext=e.defaultContext||{},(this.onBroadcast=e.onBroadcast)&&(this.mutationStore={})}get link(){return this.client.link}get cache(){return this.client.cache}stop(){this.obsQueries.forEach(e=>e.stop()),this.cancelPendingFetches(j(87))}cancelPendingFetches(e){this.fetchCancelFns.forEach(t=>t(e)),this.fetchCancelFns.clear()}async mutate({mutation:e,variables:t,optimisticResponse:i,updateQueries:r,refetchQueries:o=[],awaitRefetchQueries:a=!1,update:s,onQueryUpdated:l,fetchPolicy:c,errorPolicy:d,keepRootFields:f,context:u}){let m=new un(this);e=this.cache.transformForLink(this.transform(e));let{hasClientExports:b}=this.getDocumentInfo(e);t=this.getVariables(e,t),b&&(w&&x(this.localState,88,Y(e,"(anonymous)")),t=await this.localState.getExportedVariables({client:this.client,document:e,variables:t,context:u}));let h=this.mutationStore&&(this.mutationStore[m.id]={mutation:e,variables:t,loading:!0,error:null}),g=i&&m.markMutationOptimistic(i,{document:e,variables:t,cacheWriteBehavior:c==="no-cache"?0:2,errorPolicy:d,context:u,updateQueries:r,update:s,keepRootFields:f});return this.broadcastQueries(),new Promise((v,T)=>{let O={};return this.getObservableFromLink(e,k(p({},u),{optimisticResponse:g?i:void 0}),t,c,{},!1).observable.pipe(Wl(),mn(S=>{let F=p({},S);return Ke(m.markMutationResult(F,{document:e,variables:t,cacheWriteBehavior:c==="no-cache"?0:2,errorPolicy:d,context:u,update:s,updateQueries:r,awaitRefetchQueries:a,refetchQueries:o,removeOptimistic:g?m.id:void 0,onQueryUpdated:l,keepRootFields:f}))})).pipe(G(S=>{if(Qe(S)&&d==="none")throw new At(Co(S));return h&&(h.loading=!1,h.error=null),S})).subscribe({next:S=>{if(this.broadcastQueries(),!m.hasNext){let F={data:this.maskOperation({document:e,data:S.data,fetchPolicy:c,cause:O})};Qe(S)&&(F.error=new At(S)),Object.keys(S.extensions||{}).length&&(F.extensions=S.extensions),v(F)}},error:S=>{if(h&&(h.loading=!1,h.error=S),g&&this.cache.removeOptimistic(m.id),this.broadcastQueries(),d==="ignore")return v({data:void 0});if(d==="all")return v({data:void 0,error:S});T(S)}})})}fetchQuery(e,t){return de(e.query,ce.QUERY),(async()=>zo(this.fetchObservableWithInfo(e,{networkStatus:t}).observable.pipe(nn(i=>{switch(i.kind){case"E":throw i.error;case"N":if(i.source!=="newNetworkStatus")return at(i.value)}})),{defaultValue:{data:void 0}}))()}transform(e){return this.documentTransform.transformDocument(e)}transformCache=new wt(q["queryManager.getDocumentInfo"]||2e3);getDocumentInfo(e){let{transformCache:t}=this;if(!t.has(e)){let r=ne(e),o={hasClientExports:Ae(["client","export"],e,!0),hasForcedResolvers:$r(e),hasNonreactiveDirective:Ae(["nonreactive"],e),hasIncrementalDirective:Ae(["defer"],e),nonReactiveQuery:Gu(e),clientQuery:Ae(["client"],e)?e:null,serverQuery:Xr([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"},{name:"unmask"}],e),operationType:r?.operation,defaultVars:Tt(r),asQuery:k(p({},e),{definitions:e.definitions.map(a=>a.kind==="OperationDefinition"&&a.operation!=="query"?k(p({},a),{operation:"query"}):a)})};t.set(e,o)}let i=t.get(e);if(i.violation)throw i.violation;return i}getVariables(e,t){let i=this.getDocumentInfo(e).defaultVars,r=Object.entries(t??{}).map(([o,a])=>[o,a===void 0?i[o]:a]);return p(p({},i),Object.fromEntries(r))}watchQuery(e){de(e.query,ce.QUERY);let t=this.transform(e.query);return e=k(p({},e),{variables:this.getVariables(t,e.variables)}),typeof e.notifyOnNetworkStatusChange>"u"&&(e.notifyOnNetworkStatusChange=!0),new cn({queryManager:this,options:e,transformedQuery:t})}query(e){let t=this.transform(e.query);return this.fetchQuery(k(p({},e),{query:t})).then(i=>k(p({},i),{data:this.maskOperation({document:t,data:i?.data,fetchPolicy:e.fetchPolicy})}))}requestIdCounter=1;generateRequestId(){return this.requestIdCounter++}clearStore(e={discardWatches:!0}){return this.cancelPendingFetches(j(89)),this.obsQueries.forEach(t=>{t.reset()}),this.mutationStore&&(this.mutationStore={}),this.cache.reset(e)}getObservableQueries(e="active"){let t=new Set,i=new Map,r=new Map,o=new Set;return Array.isArray(e)&&e.forEach(a=>{if(typeof a=="string")i.set(a,a),r.set(a,!1);else if(Yr(a)){let s=st(this.transform(a));i.set(s,Y(a)),r.set(s,!1)}else R(a)&&a.query&&o.add(a)}),this.obsQueries.forEach(a=>{let s=st(this.transform(a.options.query));if(e==="all"){t.add(a);return}let{queryName:l,options:{fetchPolicy:c}}=a;e==="active"&&c==="standby"||(e==="active"||l&&r.has(l)||s&&r.has(s))&&(t.add(a),l&&r.set(l,!0),s&&r.set(s,!0))}),o.size&&o.forEach(a=>{let s=new cn({queryManager:this,options:k(p({},St(this.defaultOptions.watchQuery,a)),{fetchPolicy:"network-only"})});t.add(s)}),w&&r.size&&r.forEach((a,s)=>{if(!a){let l=i.get(s);l?w&&x.warn(90,l):w&&x.warn(91)}}),t}refetchObservableQueries(e=!1){let t=[];return this.getObservableQueries(e?"all":"active").forEach(i=>{let{fetchPolicy:r}=i.options;(e||r!=="standby")&&r!=="cache-only"&&t.push(i.refetch())}),this.broadcastQueries(),Promise.all(t)}startGraphQLSubscription(e){let{query:t,variables:i}=e,{fetchPolicy:r="cache-first",errorPolicy:o="none",context:a={},extensions:s={}}=e;de(t,ce.SUBSCRIPTION),t=this.transform(t),i=this.getVariables(t,i);let l;w&&x(!this.getDocumentInfo(t).hasClientExports||this.localState,92,Y(t,"(anonymous)"));let c=(this.getDocumentInfo(t).hasClientExports?Ke(this.localState.getExportedVariables({client:this.client,document:t,variables:i,context:a})):Pe(i)).pipe(mn(d=>{let{observable:f,restart:u}=this.getObservableFromLink(t,a,d,r,s),m=new un(this);return l=u,f.pipe(G(b=>{m.markSubscriptionResult(b,{document:t,variables:d,errorPolicy:o,cacheWriteBehavior:r==="no-cache"?0:2});let h={data:b.data??void 0};return Qe(b)?h.error=new At(b):Vl(b)&&(h.error=b.extensions[Bi],delete b.extensions[Bi]),b.extensions&&Object.keys(b.extensions).length&&(h.extensions=b.extensions),h.error&&o==="none"&&(h.data=void 0),o==="ignore"&&delete h.error,h}),ni(b=>o==="ignore"?Pe({data:void 0}):Pe({data:void 0,error:b})),we(b=>!!(b.data||b.error)))}));return Object.assign(c,{restart:()=>l?.()})}broadcastQueries(){this.onBroadcast&&this.onBroadcast(),this.obsQueries.forEach(e=>e.notify())}inFlightLinkObservables=new ee(!1);getObservableFromLink(e,t,i,r,o,a=t?.queryDeduplication??this.queryDeduplication){let s={},{serverQuery:l,clientQuery:c,operationType:d,hasIncrementalDirective:f}=this.getDocumentInfo(e),u=Y(e),m={client:this.client};if(l){let{inFlightLinkObservables:h,link:g}=this;try{let T=function(O){return new X(S=>{function F(){return O.subscribe({next:S.next.bind(S),complete:S.complete.bind(S),error:S.error.bind(S)})}let Ge=F();return s.restart||=()=>{Ge.unsubscribe(),Ge=F()},()=>{Ge.unsubscribe(),s.restart=void 0}})};var b=T;let v=this.incrementalHandler.prepareRequest({query:l,variables:i,context:k(p(p({},this.defaultContext),t),{queryDeduplication:a}),extensions:o});if(t=v.context,a){let O=st(l),S=Z(i);s=h.lookup(O,S),s.observable||(s.observable=Ft(g,v,m).pipe(T,qo(()=>{h.peek(O,S)===s&&h.remove(O,S)}),d===ce.SUBSCRIPTION?mt():$e({refCount:!0})))}else s.observable=Ft(g,v,m).pipe(T)}catch(v){s.observable=Vo(()=>v)}}else s.observable=Pe({data:{}});if(c){let{operation:h}=ne(e);w&&x(this.localState,93,h[0].toUpperCase()+h.slice(1),u??"(anonymous)"),x(!f,94,h[0].toUpperCase()+h.slice(1),u??"(anonymous)"),s.observable=s.observable.pipe(mn(g=>Ke(this.localState.execute({client:this.client,document:c,remoteResult:g,context:t,variables:i,fetchPolicy:r}))))}return{restart:()=>s.restart?.(),observable:s.observable.pipe(ni(h=>{throw h=zl(h),To(h),h}))}}getResultsFromLink(e,{queryInfo:t,cacheWriteBehavior:i,observableQuery:r,exposeExtensions:o}){let a=t.lastRequestId=this.generateRequestId(),{errorPolicy:s}=e,l=this.cache.transformForLink(e.query);return this.getObservableFromLink(l,e.context,e.variables,e.fetchPolicy).observable.pipe(G(c=>{let d=t.markQueryResult(c,k(p({},e),{document:l,cacheWriteBehavior:i})),f=Qe(d);if(f&&s==="none")throw t.resetLastWrite(),r?.resetNotifications(),new At(Co(d));let u=p({data:d.data},t.hasNext?{loading:!0,networkStatus:C.streaming,dataState:"streaming",partial:!0}:{dataState:d.data?"complete":"empty",loading:!1,networkStatus:C.ready,partial:!d.data});return o&&"extensions"in d&&(u[Un]=d.extensions),f&&(s==="none"&&(u.data=void 0,u.dataState="empty"),s!=="ignore"&&(u.error=new At(Co(d)),u.dataState!=="streaming"&&(u.networkStatus=C.error))),u}),ni(c=>{if(a>=t.lastRequestId&&s==="none")throw t.resetLastWrite(),r?.resetNotifications(),c;let d={data:void 0,dataState:"empty",loading:!1,networkStatus:C.ready,partial:!0};return s!=="ignore"&&(d.error=c,d.networkStatus=C.error),Pe(d)}))}fetchObservableWithInfo(e,{networkStatus:t=C.loading,query:i=e.query,fetchQueryOperator:r=l=>l,onCacheHit:o=()=>{},observableQuery:a,exposeExtensions:s}){let l=this.getVariables(i,e.variables),{fetchPolicy:c="cache-first",errorPolicy:d="none",returnPartialData:f=!1,notifyOnNetworkStatusChange:u=!0,context:m={}}=e;this.prioritizeCacheValues&&(c==="network-only"||c==="cache-and-network")&&(c="cache-first");let b=Object.assign({},e,{query:i,variables:l,fetchPolicy:c,errorPolicy:d,returnPartialData:f,notifyOnNetworkStatusChange:u,context:m}),h=new un(this,a),g=F=>{b.variables=F;let Ge=c==="no-cache"?0:t===C.refetch&&b.refetchWritePolicy!=="merge"?1:2,Mt=this.fetchQueryByPolicy(b,{queryInfo:h,cacheWriteBehavior:Ge,onCacheHit:o,observableQuery:a,exposeExtensions:s});return Mt.observable=Mt.observable.pipe(r),b.fetchPolicy!=="standby"&&a?.applyNextFetchPolicy("after-fetch",e),Mt},v=()=>{this.fetchCancelFns.delete(h.id)};this.fetchCancelFns.set(h.id,F=>{T.next({kind:"E",error:F,source:"network"})});let T=new z,O,S;if(this.getDocumentInfo(b.query).hasClientExports)w&&x(this.localState,95,Y(b.query,"(anonymous)")),O=Ke(this.localState.getExportedVariables({client:this.client,document:b.query,variables:b.variables,context:b.context})).pipe(mn(F=>g(F).observable)),S=!0;else{let F=g(b.variables);S=F.fromLink,O=F.observable}return{observable:new X(F=>{F.add(v),O.subscribe(F),T.subscribe(F)}).pipe(mt()),fromLink:S}}refetchQueries({updateCache:e,include:t,optimistic:i=!1,removeOptimistic:r=i?Nn("refetchQueries"):void 0,onQueryUpdated:o}){let a=new Map;t&&this.getObservableQueries(t).forEach(l=>{if(l.options.fetchPolicy==="cache-only"||l.variablesUnknown)return;let c=l.getCurrentResult();a.set(l,{oq:l,lastDiff:{result:c?.data,complete:!c?.partial}})});let s=new Map;if(e){let l=new Set;this.cache.batch({update:e,optimistic:i&&r||!1,removeOptimistic:r,onWatchUpdated(c,d,f){let u=c.watcher;if(u instanceof cn&&!l.has(u)){if(l.add(u),o){a.delete(u);let m=o(u,d,f);return m===!0&&(m=u.refetch().retain()),m!==!1&&s.set(u,m),m}o!==null&&u.options.fetchPolicy!=="cache-only"&&a.set(u,{oq:u,lastDiff:f,diff:d})}}})}return a.size&&a.forEach(({oq:l,lastDiff:c,diff:d})=>{let f;o&&(d||(d=l.getCacheDiff()),f=o(l,d,c)),(!o||f===!0)&&(f=l.refetch().retain()),f!==!1&&s.set(l,f)}),r&&this.cache.removeOptimistic(r),s}noCacheWarningsByCause=new WeakSet;maskOperation(e){let{document:t,data:i}=e;if(w){let{fetchPolicy:r,cause:o={}}=e,a=ne(t)?.operation;this.dataMasking&&r==="no-cache"&&!Hu(t)&&!this.noCacheWarningsByCause.has(o)&&(this.noCacheWarningsByCause.add(o),w&&x.warn(96,Y(t,`Unnamed ${a??"operation"}`)))}return this.dataMasking?uo(i,t,this.cache):i}maskFragment(e){let{data:t,fragment:i,fragmentName:r}=e;return this.dataMasking?co(t,i,this.cache,r):t}fetchQueryByPolicy({query:e,variables:t,fetchPolicy:i,errorPolicy:r,returnPartialData:o,context:a},{cacheWriteBehavior:s,onCacheHit:l,queryInfo:c,observableQuery:d,exposeExtensions:f}){let u=()=>this.cache.diff({query:e,variables:t,returnPartialData:!0,optimistic:!0}),m=(h,g)=>{let v=h.result;w&&!o&&v!==null&&Ul(h.missing);let T=S=>(!h.complete&&!o&&(S=void 0),{data:S,dataState:h.complete?"complete":S?"partial":"empty",loading:Ot(g),networkStatus:g,partial:!h.complete}),O=S=>Pe({kind:"N",value:T(S),source:"cache"});return(h.complete||o)&&this.getDocumentInfo(e).hasForcedResolvers?(w&&x(this.localState,97,Y(e,"(anonymous)")),l(),Ke(this.localState.execute({client:this.client,document:e,remoteResult:v?{data:v}:void 0,context:a,variables:t,onlyRunForcedResolvers:!0,returnPartialData:!0,fetchPolicy:i}).then(S=>({kind:"N",value:T(S.data||void 0),source:"cache"})))):r==="none"&&g===C.refetch&&h.missing?O(void 0):O(v||void 0)},b=()=>this.getResultsFromLink({query:e,variables:t,context:a,fetchPolicy:i,errorPolicy:r},{cacheWriteBehavior:s,queryInfo:c,observableQuery:d,exposeExtensions:f}).pipe(Wl(),Qo(),G(h=>k(p({},h),{source:"network"})));switch(i){default:case"cache-first":{let h=u();return h.complete?{fromLink:!1,observable:m(h,C.ready)}:o?{fromLink:!0,observable:ti(m(h,C.loading),b())}:{fromLink:!0,observable:b()}}case"cache-and-network":{let h=u();return h.complete||o?{fromLink:!0,observable:ti(m(h,C.loading),b())}:{fromLink:!0,observable:b()}}case"cache-only":return{fromLink:!1,observable:ti(m(u(),C.ready))};case"network-only":return{fromLink:!0,observable:b()};case"no-cache":return{fromLink:!0,observable:b()};case"standby":return{fromLink:!1,observable:Le}}}};function Wl(){let n=!1;return De({next(){n=!0},complete(){x(n,98)}})}function Hu(n){let e=!0;return H(n,{FragmentSpread:t=>{if(e=!!t.directives&&t.directives.some(i=>i.name.value==="unmask"),!e)return Ue}}),e}function Gu(n){return H(n,{FragmentSpread:e=>{if(!e.directives?.some(t=>t.name.value==="unmask"))return k(p({},e),{directives:[...e.directives||[],{kind:_.DIRECTIVE,name:{kind:_.NAME,value:"nonreactive"}}]})}})}function Co(n){var a;if(n.extensions?.[ve]==null)return n;let r=n,{extensions:o}=r,s=o,{[a=ve]:e}=s,t=Q(s,[Xn(a)]),i=Q(r,["extensions"]);return Object.keys(t).length>0&&(i.extensions=t),i}var Hl=!1,Nt=class{link;cache;disableNetworkFetches;set prioritizeCacheValues(e){this.queryManager.prioritizeCacheValues=e}get prioritizeCacheValues(){return this.queryManager.prioritizeCacheValues}version;queryDeduplication;defaultOptions;devtoolsConfig;queryManager;devToolsHookCb;resetStoreCallbacks=[];clearStoreCallbacks=[];constructor(e){w&&(x(e.cache,68),x(e.link,69));let{cache:t,documentTransform:i,ssrMode:r=!1,ssrForceFetchDelay:o=0,queryDeduplication:a=!0,defaultOptions:s,defaultContext:l,assumeImmutableResults:c=t.assumeImmutableResults,localState:d,devtools:f,dataMasking:u,link:m,incrementalHandler:b=new $n,experiments:h=[]}=e;this.link=m,this.cache=t,this.queryDeduplication=a,this.defaultOptions=s||{},this.devtoolsConfig=k(p({},f),{enabled:f?.enabled??w}),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.watchFragment=this.watchFragment.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.refetchObservableQueries=this.refetchObservableQueries.bind(this),this.version=An,this.queryManager=new Ui({client:this,defaultOptions:this.defaultOptions,defaultContext:l,documentTransform:i,queryDeduplication:a,ssrMode:r,dataMasking:!!u,clientOptions:e,incrementalHandler:b,assumeImmutableResults:c,onBroadcast:this.devtoolsConfig.enabled?()=>{this.devToolsHookCb&&this.devToolsHookCb()}:void 0,localState:d}),this.prioritizeCacheValues=r||o>0,o&&setTimeout(()=>{this.prioritizeCacheValues=!1},o),this.devtoolsConfig.enabled&&this.connectToDevTools(),h.forEach(g=>g.call(this,e))}connectToDevTools(){if(typeof window>"u")return;let e=window,t=Symbol.for("apollo.devtools");(e[t]=e[t]||[]).push(this),e.__APOLLO_CLIENT__=this,!Hl&&w&&(Hl=!0,window.document&&window.top===window.self&&/^(https?|file):$/.test(window.location.protocol)&&setTimeout(()=>{if(!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__){let i=window.navigator,r=i&&i.userAgent,o;typeof r=="string"&&(r.indexOf("Chrome/")>-1?o="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":r.indexOf("Firefox/")>-1&&(o="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),o&&w&&x.log("Download the Apollo DevTools for a better development experience: %s",o)}},1e4))}get documentTransform(){return this.queryManager.documentTransform}get localState(){return this.queryManager.localState}set localState(e){this.queryManager.localState=e}stop(){this.queryManager.stop()}watchQuery(e){return this.defaultOptions.watchQuery&&(e=St(this.defaultOptions.watchQuery,e)),this.queryManager.watchQuery(e)}query(e){return this.defaultOptions.query&&(e=St(this.defaultOptions.query,e)),w&&(x(e.fetchPolicy!=="cache-and-network",70),x(e.fetchPolicy!=="standby",71),x(e.query,72),x(e.query.kind==="Document",73),x(!e.returnPartialData,74),x(!e.pollInterval,75),x(!e.notifyOnNetworkStatusChange,76)),this.queryManager.query(e)}mutate(e){let t=St(Ee({fetchPolicy:"network-only",errorPolicy:"none"},this.defaultOptions.mutate),e);return w&&(x(t.mutation,77),x(t.fetchPolicy==="network-only"||t.fetchPolicy==="no-cache",78)),de(t.mutation,ce.MUTATION),this.queryManager.mutate(t)}subscribe(e){let t={},i=this.queryManager.startGraphQLSubscription(e),r=i.pipe(G(o=>k(p({},o),{data:this.queryManager.maskOperation({document:e.query,data:o.data,fetchPolicy:e.fetchPolicy,cause:t})})));return Object.assign(r,{restart:i.restart})}readQuery(e,t=!1){return this.cache.readQuery(k(p({},e),{query:this.transform(e.query)}),t)}watchFragment(e){let t=this.queryManager.dataMasking,i=this.cache.watchFragment(k(p({},e),{fragment:this.transform(e.fragment,t)}));return w?Bn(i,Symbol.for("apollo.transform.dev.mask"),r=>k(p({},r),{data:this.queryManager.maskFragment(k(p({},e),{data:r.data}))})):i}readFragment(e,t=!1){return this.cache.readFragment(k(p({},e),{fragment:this.transform(e.fragment)}),t)}writeQuery(e){let t=this.cache.writeQuery(e);return e.broadcast!==!1&&this.queryManager.broadcastQueries(),t}writeFragment(e){let t=this.cache.writeFragment(e);return e.broadcast!==!1&&this.queryManager.broadcastQueries(),t}__actionHookForDevTools(e){this.devToolsHookCb=e}__requestRaw(e){return Ft(this.link,e,{client:this})}resetStore(){return Promise.resolve().then(()=>this.queryManager.clearStore({discardWatches:!1})).then(()=>Promise.all(this.resetStoreCallbacks.map(e=>e()))).then(()=>this.refetchObservableQueries())}clearStore(){return Promise.resolve().then(()=>this.queryManager.clearStore({discardWatches:!0})).then(()=>Promise.all(this.clearStoreCallbacks.map(e=>e())))}onResetStore(e){return this.resetStoreCallbacks.push(e),()=>{this.resetStoreCallbacks=this.resetStoreCallbacks.filter(t=>t!==e)}}onClearStore(e){return this.clearStoreCallbacks.push(e),()=>{this.clearStoreCallbacks=this.clearStoreCallbacks.filter(t=>t!==e)}}reFetchObservableQueries;refetchObservableQueries(e){return this.queryManager.refetchObservableQueries(e)}refetchQueries(e){let t=this.queryManager.refetchQueries(e),i=[],r=[];t.forEach((a,s)=>{i.push(s),r.push(a)});let o=Promise.all(r);return o.queries=i,o.results=r,o.catch(a=>{w&&x.debug(79,a)}),o}getObservableQueries(e="active"){return this.queryManager.getObservableQueries(e)}extract(e){return this.cache.extract(e)}restore(e){return this.cache.restore(e)}setLink(e){this.link=e}get defaultContext(){return this.queryManager.defaultContext}maskedFragmentTransform=new He(Jr);transform(e,t=!1){let i=this.queryManager.transform(e);return t?this.maskedFragmentTransform.transformDocument(i):i}};w&&(Nt.prototype.getMemoryInternals=Hr);var qi=new Map,Do=new Map,Gl=!0,Qi=!1;function Kl(n){return n.replace(/[\s,]+/g," ").trim()}function Ku(n){return Kl(n.source.body.substring(n.start,n.end))}function $u(n){var e=new Set,t=[];return n.definitions.forEach(function(i){if(i.kind==="FragmentDefinition"){var r=i.name.value,o=Ku(i.loc),a=Do.get(r);a&&!a.has(o)?Gl&&console.warn("Warning: fragment with name "+r+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):a||Do.set(r,a=new Set),a.add(o),e.has(o)||(e.add(o),t.push(i))}else t.push(i)}),Hi(Hi({},n),{definitions:t})}function Yu(n){var e=new Set(n.definitions);e.forEach(function(i){i.loc&&delete i.loc,Object.keys(i).forEach(function(r){var o=i[r];o&&typeof o=="object"&&e.add(o)})});var t=n.loc;return t&&(delete t.startToken,delete t.endToken),n}function Zu(n){var e=Kl(n);if(!qi.has(e)){var t=Ei(n,{experimentalFragmentVariables:Qi,allowLegacyFragmentVariables:Qi});if(!t||t.kind!=="Document")throw new Error("Not a valid GraphQL document.");qi.set(e,Yu($u(t)))}return qi.get(e)}function ut(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];typeof n=="string"&&(n=[n]);var i=n[0];return e.forEach(function(r,o){r&&r.kind==="Document"?i+=r.loc.source.body:i+=r,i+=n[o+1]}),Zu(i)}function $l(){qi.clear(),Do.clear()}function Yl(){Gl=!1}function Zl(){Qi=!0}function Xl(){Qi=!1}var Zn={gql:ut,resetCaches:$l,disableFragmentWarnings:Yl,enableExperimentalFragmentVariables:Zl,disableExperimentalFragmentVariables:Xl};(function(n){n.gql=Zn.gql,n.resetCaches=Zn.resetCaches,n.disableFragmentWarnings=Zn.disableFragmentWarnings,n.enableExperimentalFragmentVariables=Zn.enableExperimentalFragmentVariables,n.disableExperimentalFragmentVariables=Zn.disableExperimentalFragmentVariables})(ut||(ut={}));ut.default=ut;function Jl(n){return new X(e=>(n().then(t=>{e.closed||(e.next(t),e.complete())},t=>{e.closed||e.error(t)}),()=>e.unsubscribe()))}function Xu(n,e){return e?n.pipe(G(t=>k(p({},t),{loading:!1})),ri({data:void 0,loading:!0})):n.pipe(G(t=>k(p({},t),{loading:!1})))}var Ao=class{zone;constructor(e){this.zone=e}now=Date.now;schedule(e,t=0,i){return this.zone.run(()=>Lo.schedule(e,t,i))}};function No(n,e){return n.pipe(Po(new Ao(e)))}var Mo=class{obsQuery;valueChanges;constructor(e,t){this.obsQuery=e,this.valueChanges=No(Ke(this.obsQuery),t)}get options(){return this.obsQuery.options}get variables(){return this.obsQuery.variables}getCurrentResult(){return this.obsQuery.getCurrentResult()}refetch(e){return this.obsQuery.refetch(e)}fetchMore(e){return this.obsQuery.fetchMore(e)}subscribeToMore(e){return this.obsQuery.subscribeToMore(e)}updateQuery(e){return this.obsQuery.updateQuery(e)}stopPolling(){return this.obsQuery.stopPolling()}startPolling(e){return this.obsQuery.startPolling(e)}setVariables(e){return this.obsQuery.setVariables(e)}reobserve(e){return this.obsQuery.reobserve(e)}},ec=new L("APOLLO_FLAGS"),tc=new L("APOLLO_OPTIONS"),Ju=new L("APOLLO_NAMED_OPTIONS"),Wi=class{ngZone;flags;_client;useMutationLoading;constructor(e,t,i){this.ngZone=e,this.flags=t,this._client=i,this.useMutationLoading=t?.useMutationLoading??!1}watchQuery(e){return new Mo(this.ensureClient().watchQuery(p({},e)),this.ngZone)}query(e){return Jl(()=>this.ensureClient().query(p({},e)))}mutate(e){return Xu(Jl(()=>this.ensureClient().mutate(p({},e))),e.useMutationLoading??this.useMutationLoading)}watchFragment(e){let o=e,{useZone:t}=o,i=Q(o,["useZone"]),r=this.ensureClient().watchFragment(p({},i));return t!==!0?r:No(r,this.ngZone)}subscribe(e){let o=e,{useZone:t}=o,i=Q(o,["useZone"]),r=this.ensureClient().subscribe(p({},i));return t!==!0?r:No(r,this.ngZone)}get client(){return this.ensureClient()}set client(e){if(this._client)throw new Error("Client has been already defined");this._client=e}ensureClient(){return this.checkInstance(),this._client}checkInstance(){if(this._client)return!0;throw new Error("Client has not been defined yet")}},em=(()=>{class n extends Wi{map=new Map;constructor(t,i,r,o){if(super(t,o),i&&this.createDefault(i),r&&typeof r=="object"){for(let a in r)if(r.hasOwnProperty(a)){let s=r[a];this.create(s,a)}}}create(t,i){Fo(i)?this.createNamed(i,t):this.createDefault(t)}default(){return this}use(t){return Fo(t)?this.map.get(t):this.default()}createDefault(t){if(this._client)throw new Error("Apollo has been already created.");this.client=this.ngZone.runOutsideAngular(()=>new Nt(t))}createNamed(t,i){if(this.map.has(t))throw new Error(`Client ${t} has been already created`);this.map.set(t,new Wi(this.ngZone,this.flags,this.ngZone.runOutsideAngular(()=>new Nt(i))))}removeClient(t){Fo(t)?this.map.delete(t):this._client=void 0}static \u0275fac=function(i){return new(i||n)(fn(P),fn(tc,8),fn(Ju,8),fn(ec,8))};static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();function Fo(n){return!!n&&n!=="default"}function NT(n,e={}){return[em,{provide:tc,useFactory:n},{provide:ec,useValue:e}]}var tm=ut,MT=tm;export{xn as a,En as b,nc as c,Te as d,$ as e,va as f,ke as g,ir as h,Fm as i,sc as j,Gm as k,Da as l,ar as m,ze as n,Cf as o,Nf as p,Rf as q,et as r,dr as s,Qc as t,Ha as u,pr as v,rh as w,oh as x,yh as y,is as z,as as A,Hh as B,Gh as C,Ti as D,sn as E,Kn as F,ko as G,em as H,NT as I,MT as J,nm as K};
