import{b as j,d as x,w as O,c as V}from"./iframe.24ee6969.js";import{i as W}from"./instrumenter.a58ba764.js";var P;function $(r,e){return e||(e=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(e)}}))}function B(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function M(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function K(r,e,t){return e&&M(r.prototype,e),t&&M(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}var X=function(){return Math.random().toString(16).slice(2)},z=function(){function r(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.transport,o=t.async,s=o===void 0?!1:o;B(this,r),this.isAsync=void 0,this.sender=X(),this.events={},this.data={},this.transport=void 0,this.addPeerListener=j(function(a,i){e.addListener(a,i)},x(P||(P=$([`
      channel.addPeerListener is deprecated
    `])))),this.isAsync=s,n&&(this.transport=n,this.transport.setHandler(function(a){return e.handleEvent(a)}))}return K(r,[{key:"hasTransport",get:function(){return!!this.transport}},{key:"addListener",value:function(t,n){this.events[t]=this.events[t]||[],this.events[t].push(n)}},{key:"emit",value:function(t){for(var n=this,o=arguments.length,s=new Array(o>1?o-1:0),a=1;a<o;a++)s[a-1]=arguments[a];var i={type:t,args:s,from:this.sender},c={};s.length>=1&&s[0]&&s[0].options&&(c=s[0].options);var u=function(){n.transport&&n.transport.send(i,c),n.handleEvent(i)};this.isAsync?setImmediate(u):u()}},{key:"last",value:function(t){return this.data[t]}},{key:"eventNames",value:function(){return Object.keys(this.events)}},{key:"listenerCount",value:function(t){var n=this.listeners(t);return n?n.length:0}},{key:"listeners",value:function(t){var n=this.events[t];return n||void 0}},{key:"once",value:function(t,n){var o=this.onceListener(t,n);this.addListener(t,o)}},{key:"removeAllListeners",value:function(t){t?this.events[t]&&delete this.events[t]:this.events={}}},{key:"removeListener",value:function(t,n){var o=this.listeners(t);o&&(this.events[t]=o.filter(function(s){return s!==n}))}},{key:"on",value:function(t,n){this.addListener(t,n)}},{key:"off",value:function(t,n){this.removeListener(t,n)}},{key:"handleEvent",value:function(t){var n=this.listeners(t.type);n&&n.length&&n.forEach(function(o){o.apply(t,t.args)}),this.data[t.type]=t.args}},{key:"onceListener",value:function(t,n){var o=this,s=function a(){return o.removeListener(t,a),n.apply(void 0,arguments)};return s}}]),r}(),Q=z,J=O.LOGLEVEL,h=O.console,d={trace:1,debug:2,info:3,warn:4,error:5,silent:10},q=J,m=d[q]||d.info,Z={trace:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return m<=d.trace&&h.trace.apply(h,[e].concat(n))},debug:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return m<=d.debug&&h.debug.apply(h,[e].concat(n))},info:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return m<=d.info&&h.info.apply(h,[e].concat(n))},warn:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return m<=d.warn&&h.warn.apply(h,[e].concat(n))},error:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return m<=d.error&&h.error.apply(h,[e].concat(n))},log:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return m<d.silent&&h.log.apply(h,[e].concat(n))}};function ee(){var r={setHandler:function(){},send:function(){}};return new Q({transport:r})}var C;(function(r){r.TAB="tab",r.PANEL="panel",r.TOOL="tool",r.TOOLEXTRA="toolextra",r.PREVIEW="preview",r.NOTES_ELEMENT="notes-element"})(C||(C={}));function D(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function te(r,e,t){return e&&D(r.prototype,e),t&&D(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function ne(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var re=te(function r(){var e=this;ne(this,r),this.loaders={},this.elements={},this.config={},this.channel=void 0,this.serverChannel=void 0,this.promise=void 0,this.resolve=void 0,this.getChannel=function(){return e.channel||e.setChannel(ee()),e.channel},this.getServerChannel=function(){if(!e.serverChannel)throw new Error("Accessing non-existent serverChannel");return e.serverChannel},this.ready=function(){return e.promise},this.hasChannel=function(){return!!e.channel},this.hasServerChannel=function(){return!!e.serverChannel},this.setChannel=function(t){e.channel=t,e.resolve()},this.setServerChannel=function(t){e.serverChannel=t},this.getElements=function(t){return e.elements[t]||(e.elements[t]={}),e.elements[t]},this.addPanel=function(t,n){e.add(t,Object.assign({type:C.PANEL},n))},this.add=function(t,n){var o=n.type,s=e.getElements(o);s[t]=Object.assign({id:t},n)},this.setConfig=function(t){Object.assign(e.config,t)},this.getConfig=function(){return e.config},this.register=function(t,n){e.loaders[t]&&Z.warn("".concat(t," was loaded twice, this could have bad side-effects")),e.loaders[t]=n},this.loadAddons=function(t){Object.values(e.loaders).forEach(function(n){return n(t)})},this.promise=new Promise(function(t){e.resolve=function(){return t(e.getChannel())}})}),k="__STORYBOOK_ADDONS";function oe(){return O[k]||(O[k]=new re),O[k]}var ie=oe(),l;(function(r){r.CHANNEL_CREATED="channelCreated",r.CONFIG_ERROR="configError",r.STORY_INDEX_INVALIDATED="storyIndexInvalidated",r.STORY_SPECIFIED="storySpecified",r.SET_STORIES="setStories",r.SET_CURRENT_STORY="setCurrentStory",r.CURRENT_STORY_WAS_SET="currentStoryWasSet",r.FORCE_RE_RENDER="forceReRender",r.FORCE_REMOUNT="forceRemount",r.PRELOAD_STORIES="preloadStories",r.STORY_PREPARED="storyPrepared",r.STORY_CHANGED="storyChanged",r.STORY_UNCHANGED="storyUnchanged",r.STORY_RENDERED="storyRendered",r.STORY_MISSING="storyMissing",r.STORY_ERRORED="storyErrored",r.STORY_THREW_EXCEPTION="storyThrewException",r.STORY_RENDER_PHASE_CHANGED="storyRenderPhaseChanged",r.UPDATE_STORY_ARGS="updateStoryArgs",r.STORY_ARGS_UPDATED="storyArgsUpdated",r.RESET_STORY_ARGS="resetStoryArgs",r.SET_GLOBALS="setGlobals",r.UPDATE_GLOBALS="updateGlobals",r.GLOBALS_UPDATED="globalsUpdated",r.REGISTER_SUBSCRIPTION="registerSubscription",r.PREVIEW_KEYDOWN="previewKeydown",r.SELECT_STORY="selectStory",r.STORIES_COLLAPSE_ALL="storiesCollapseAll",r.STORIES_EXPAND_ALL="storiesExpandAll",r.DOCS_RENDERED="docsRendered",r.SHARED_STATE_CHANGED="sharedStateChanged",r.SHARED_STATE_SET="sharedStateSet",r.NAVIGATE_URL="navigateUrl",r.UPDATE_QUERY_PARAMS="updateQueryParams"})(l||(l={}));l.CHANNEL_CREATED;l.CONFIG_ERROR;l.STORY_INDEX_INVALIDATED;l.STORY_SPECIFIED;l.SET_STORIES;l.SET_CURRENT_STORY;l.CURRENT_STORY_WAS_SET;l.FORCE_RE_RENDER;var se=l.FORCE_REMOUNT;l.STORY_PREPARED;l.STORY_CHANGED;l.STORY_UNCHANGED;l.PRELOAD_STORIES;l.STORY_RENDERED;l.STORY_MISSING;l.STORY_ERRORED;l.STORY_THREW_EXCEPTION;var ae=l.STORY_RENDER_PHASE_CHANGED;l.UPDATE_STORY_ARGS;l.STORY_ARGS_UPDATED;l.RESET_STORY_ARGS;l.SET_GLOBALS;l.UPDATE_GLOBALS;l.GLOBALS_UPDATED;l.REGISTER_SUBSCRIPTION;l.PREVIEW_KEYDOWN;l.SELECT_STORY;l.STORIES_COLLAPSE_ALL;l.STORIES_EXPAND_ALL;l.DOCS_RENDERED;l.SHARED_STATE_CHANGED;l.SHARED_STATE_SET;l.NAVIGATE_URL;l.UPDATE_QUERY_PARAMS;var p={};Object.defineProperty(p,"__esModule",{value:!0});p.spyOn=p.mocked=p.fn=F=p.ModuleMocker=void 0;function S(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}const A="mockConstructor",G=/[\s!-\/:-@\[-`{-~]/,ce=new RegExp(G.source,"g"),le=new Set(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]);function ue(r,e){let t;switch(e){case 1:t=function(n){return r.apply(this,arguments)};break;case 2:t=function(n,o){return r.apply(this,arguments)};break;case 3:t=function(n,o,s){return r.apply(this,arguments)};break;case 4:t=function(n,o,s,a){return r.apply(this,arguments)};break;case 5:t=function(n,o,s,a,i){return r.apply(this,arguments)};break;case 6:t=function(n,o,s,a,i,c){return r.apply(this,arguments)};break;case 7:t=function(n,o,s,a,i,c,u){return r.apply(this,arguments)};break;case 8:t=function(n,o,s,a,i,c,u,f){return r.apply(this,arguments)};break;case 9:t=function(n,o,s,a,i,c,u,f,_){return r.apply(this,arguments)};break;default:t=function(){return r.apply(this,arguments)};break}return t}function T(r){return Object.prototype.toString.apply(r).slice(8,-1)}function fe(r){const e=T(r);return e==="Function"||e==="AsyncFunction"||e==="GeneratorFunction"?"function":Array.isArray(r)?"array":e==="Object"?"object":e==="Number"||e==="String"||e==="Boolean"||e==="Symbol"?"constant":e==="Map"||e==="WeakMap"||e==="Set"?"collection":e==="RegExp"?"regexp":r===void 0?"undefined":r===null?"null":null}function he(r,e){if(e==="arguments"||e==="caller"||e==="callee"||e==="name"||e==="length"){const t=T(r);return t==="Function"||t==="AsyncFunction"||t==="GeneratorFunction"}return e==="source"||e==="global"||e==="ignoreCase"||e==="multiline"?T(r)==="RegExp":!1}class Y{constructor(e){S(this,"_environmentGlobal",void 0),S(this,"_mockState",void 0),S(this,"_mockConfigRegistry",void 0),S(this,"_spyState",void 0),S(this,"_invocationCallCounter",void 0),this._environmentGlobal=e,this._mockState=new WeakMap,this._mockConfigRegistry=new WeakMap,this._spyState=new Set,this._invocationCallCounter=1}_getSlots(e){if(!e)return[];const t=new Set,n=this._environmentGlobal.Object.prototype,o=this._environmentGlobal.Function.prototype,s=this._environmentGlobal.RegExp.prototype,a=Object.prototype,i=Function.prototype,c=RegExp.prototype;for(;e!=null&&e!==n&&e!==o&&e!==s&&e!==a&&e!==i&&e!==c;){const u=Object.getOwnPropertyNames(e);for(let f=0;f<u.length;f++){const _=u[f];if(!he(e,_)){const E=Object.getOwnPropertyDescriptor(e,_);(E!==void 0&&!E.get||e.__esModule)&&t.add(_)}}e=Object.getPrototypeOf(e)}return Array.from(t)}_ensureMockConfig(e){let t=this._mockConfigRegistry.get(e);return t||(t=this._defaultMockConfig(),this._mockConfigRegistry.set(e,t)),t}_ensureMockState(e){let t=this._mockState.get(e);return t||(t=this._defaultMockState(),this._mockState.set(e,t)),t.calls.length>0&&(t.lastCall=t.calls[t.calls.length-1]),t}_defaultMockConfig(){return{mockImpl:void 0,mockName:"jest.fn()",specificMockImpls:[],specificReturnValues:[]}}_defaultMockState(){return{calls:[],instances:[],invocationCallOrder:[],results:[]}}_makeComponent(e,t){if(e.type==="object")return new this._environmentGlobal.Object;if(e.type==="array")return new this._environmentGlobal.Array;if(e.type==="regexp")return new this._environmentGlobal.RegExp("");if(e.type==="constant"||e.type==="collection"||e.type==="null"||e.type==="undefined")return e.value;if(e.type==="function"){const n=e.members&&e.members.prototype&&e.members.prototype.members||{},o=this._getSlots(n),s=this,a=ue(function(...c){const u=s._ensureMockState(i),f=s._ensureMockConfig(i);u.instances.push(this),u.calls.push(c);const _={type:"incomplete",value:void 0};u.results.push(_),u.invocationCallOrder.push(s._invocationCallCounter++);let E,w,v=!1;try{E=(()=>{if(this instanceof i){o.forEach(R=>{if(n[R].type==="function"){const H=this[R];this[R]=s.generateFromMetadata(n[R]),this[R]._protoImpl=H}});const I=f.specificMockImpls.length?f.specificMockImpls.shift():f.mockImpl;return I&&I.apply(this,arguments)}let g=f.specificMockImpls.shift();if(g===void 0&&(g=f.mockImpl),g)return g.apply(this,arguments);if(i._protoImpl)return i._protoImpl.apply(this,arguments)})()}catch(g){throw w=g,v=!0,g}finally{_.type=v?"throw":"return",_.value=v?w:E}return E},e.length||0),i=this._createMockFunction(e,a);return i._isMockFunction=!0,i.getMockImplementation=()=>this._ensureMockConfig(i).mockImpl,typeof t=="function"&&this._spyState.add(t),this._mockState.set(i,this._defaultMockState()),this._mockConfigRegistry.set(i,this._defaultMockConfig()),Object.defineProperty(i,"mock",{configurable:!1,enumerable:!0,get:()=>this._ensureMockState(i),set:c=>this._mockState.set(i,c)}),i.mockClear=()=>(this._mockState.delete(i),i),i.mockReset=()=>(i.mockClear(),this._mockConfigRegistry.delete(i),i),i.mockRestore=()=>(i.mockReset(),t?t():void 0),i.mockReturnValueOnce=c=>i.mockImplementationOnce(()=>c),i.mockResolvedValueOnce=c=>i.mockImplementationOnce(()=>Promise.resolve(c)),i.mockRejectedValueOnce=c=>i.mockImplementationOnce(()=>Promise.reject(c)),i.mockReturnValue=c=>i.mockImplementation(()=>c),i.mockResolvedValue=c=>i.mockImplementation(()=>Promise.resolve(c)),i.mockRejectedValue=c=>i.mockImplementation(()=>Promise.reject(c)),i.mockImplementationOnce=c=>(this._ensureMockConfig(i).specificMockImpls.push(c),i),i.mockImplementation=c=>{const u=this._ensureMockConfig(i);return u.mockImpl=c,i},i.mockReturnThis=()=>i.mockImplementation(function(){return this}),i.mockName=c=>{if(c){const u=this._ensureMockConfig(i);u.mockName=c}return i},i.getMockName=()=>this._ensureMockConfig(i).mockName||"jest.fn()",e.mockImpl&&i.mockImplementation(e.mockImpl),i}else{const n=e.type||"undefined type";throw new Error("Unrecognized type "+n)}}_createMockFunction(e,t){let n=e.name;if(!n)return t;const o="bound ";let s="";if(n&&n.startsWith(o))do n=n.substring(o.length),s=".bind(null)";while(n&&n.startsWith(o));if(n===A)return t;(le.has(n)||/^\d/.test(n))&&(n="$"+n),G.test(n)&&(n=n.replace(ce,"$"));const a="return function "+n+"() {return "+A+".apply(this,arguments);}"+s;return new this._environmentGlobal.Function(A,a)(t)}_generateMock(e,t,n){const o=this._makeComponent(e);return e.refID!=null&&(n[e.refID]=o),this._getSlots(e.members).forEach(s=>{const a=e.members&&e.members[s]||{};a.ref!=null?t.push(function(i){return()=>o[s]=n[i]}(a.ref)):o[s]=this._generateMock(a,t,n)}),e.type!=="undefined"&&e.type!=="null"&&o.prototype&&typeof o.prototype=="object"&&(o.prototype.constructor=o),o}generateFromMetadata(e){const t=[],n={},o=this._generateMock(e,t,n);return t.forEach(s=>s()),o}getMetadata(e,t){const n=t||new Map,o=n.get(e);if(o!=null)return{ref:o};const s=fe(e);if(!s)return null;const a={type:s};if(s==="constant"||s==="collection"||s==="undefined"||s==="null")return a.value=e,a;s==="function"&&(a.name=e.name,e._isMockFunction===!0&&(a.mockImpl=e.getMockImplementation())),a.refID=n.size,n.set(e,a.refID);let i=null;return s!=="array"&&this._getSlots(e).forEach(c=>{if(s==="function"&&e._isMockFunction===!0&&c.match(/^mock/))return;const u=this.getMetadata(e[c],n);u&&(i||(i={}),i[c]=u)}),i&&(a.members=i),a}isMockFunction(e){return!!e&&e._isMockFunction===!0}fn(e){const t=e?e.length:0,n=this._makeComponent({length:t,type:"function"});return e&&n.mockImplementation(e),n}spyOn(e,t,n){if(n)return this._spyOnProperty(e,t,n);if(typeof e!="object"&&typeof e!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(e)+" given");const o=e[t];if(!this.isMockFunction(o)){if(typeof o!="function")throw new Error("Cannot spy the "+t+" property because it is not a function; "+this._typeOf(o)+" given instead");const s=Object.prototype.hasOwnProperty.call(e,t);let a=Object.getOwnPropertyDescriptor(e,t),i=Object.getPrototypeOf(e);for(;!a&&i!==null;)a=Object.getOwnPropertyDescriptor(i,t),i=Object.getPrototypeOf(i);let c;if(a&&a.get){const u=a.get;c=this._makeComponent({type:"function"},()=>{a.get=u,Object.defineProperty(e,t,a)}),a.get=()=>c,Object.defineProperty(e,t,a)}else c=this._makeComponent({type:"function"},()=>{s?e[t]=o:delete e[t]}),e[t]=c;c.mockImplementation(function(){return o.apply(this,arguments)})}return e[t]}_spyOnProperty(e,t,n="get"){if(typeof e!="object"&&typeof e!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(e)+" given");if(!e)throw new Error("spyOn could not find an object to spy upon for "+t);if(!t)throw new Error("No property name supplied");let o=Object.getOwnPropertyDescriptor(e,t),s=Object.getPrototypeOf(e);for(;!o&&s!==null;)o=Object.getOwnPropertyDescriptor(s,t),s=Object.getPrototypeOf(s);if(!o)throw new Error(t+" property does not exist");if(!o.configurable)throw new Error(t+" is not declared configurable");if(!o[n])throw new Error("Property "+t+" does not have access type "+n);const a=o[n];if(!this.isMockFunction(a)){if(typeof a!="function")throw new Error("Cannot spy the "+t+" property because it is not a function; "+this._typeOf(a)+" given instead");o[n]=this._makeComponent({type:"function"},()=>{o[n]=a,Object.defineProperty(e,t,o)}),o[n].mockImplementation(function(){return a.apply(this,arguments)})}return Object.defineProperty(e,t,o),o[n]}clearAllMocks(){this._mockState=new WeakMap}resetAllMocks(){this._mockConfigRegistry=new WeakMap,this._mockState=new WeakMap}restoreAllMocks(){this._spyState.forEach(e=>e()),this._spyState=new Set}_typeOf(e){return e==null?""+e:typeof e}mocked(e,t=!1){return e}}var F=p.ModuleMocker=Y;const y=new Y(V),pe=y.fn.bind(y);p.fn=pe;const _e=y.spyOn.bind(y);p.spyOn=_e;const de=y.mocked.bind(y);p.mocked=de;function ge(r,e){return Re(r)||ye(r,e)||me(r,e)||Ee()}function Ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(r,e){if(!!r){if(typeof r=="string")return L(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return L(r,e)}}function L(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function ye(r,e){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],o=!0,s=!1,a,i;try{for(t=t.call(r);!(o=(a=t.next()).done)&&(n.push(a.value),!(e&&n.length===e));o=!0);}catch(c){s=!0,i=c}finally{try{!o&&t.return!=null&&t.return()}finally{if(s)throw i}}return n}}function Re(r){if(Array.isArray(r))return r}var N=new F(global),Se=N.fn.bind(N),Oe=W({action:Se},{retain:!0}),ve=Oe.action,U=ie.getChannel(),b=[];U.on(se,function(){return b.forEach(function(r){var e;return r==null||(e=r.mockClear)===null||e===void 0?void 0:e.call(r)})});U.on(ae,function(r){var e=r.newPhase;e==="loading"&&b.forEach(function(t){var n;return t==null||(n=t.mockClear)===null||n===void 0?void 0:n.call(t)})});var ke=function(e){var t=e.id,n=e.initialArgs;return Object.entries(n).reduce(function(o,s){var a=ge(s,2),i=a[0],c=a[1];return typeof c=="function"&&c.name==="actionHandler"?(Object.defineProperty(c,"name",{value:i,writable:!1}),Object.defineProperty(c,"__storyId__",{value:t,writable:!1}),o[i]=ve(c),b.push(o[i]),o):(o[i]=c,o)},{})},Te=[ke];export{Te as argsEnhancers};
//# sourceMappingURL=preview.91cb3f81.js.map
