if (self.CavalryLogger) { CavalryLogger.start_js(["2qKtW"]); }

__d("useCometMediaURL_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};a=[a,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},a,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null}],storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometMediaURL_media",selections:[{kind:"InlineDataFragmentSpread",name:"getCometMediaURL_media",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_playable",storageKey:null},{kind:"InlineFragment",selections:a,type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:a,type:"Video",abstractKey:null}]}],type:"Media",abstractKey:"__isMedia"}}();e.exports=a}),null);
__d("CometInputWithCommands.react",["CometComponentWithKeyCommands.react","CometKeys","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=g.useMemo(function(){var c=[];a.enter!=null&&c.push({command:{key:b("CometKeys").ENTER},description:a.enter.description,handler:a.enter.handler,triggerFromInputs:!0});a["delete"]!=null&&c.push({command:{key:b("CometKeys").DELETE},description:a["delete"].description,handler:a["delete"].handler,triggerFromInputs:!0});a.up!=null&&c.push({command:{key:b("CometKeys").UP},description:a.up.description,handler:a.up.handler,triggerFromInputs:!0});a.down!=null&&c.push({command:{key:b("CometKeys").DOWN},description:a.down.description,handler:a.down.handler,triggerFromInputs:!0});a.tab!=null&&c.push({command:{key:b("CometKeys").TAB},description:a.tab.description,handler:a.tab.handler,triggerFromInputs:!0});a.esc!=null&&c.push({command:{key:b("CometKeys").ESCAPE},description:a.esc.description,handler:a.esc.handler,triggerFromInputs:!0});return c},[a["delete"],a.down,a.enter,a.esc,a.tab,a.up]);return g.jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:c,debugName:"InputSubmit",elementType:a.isInline===!0?"span":"div",xstyle:a.xstyle,children:a.children})}}),null);
__d("CometNewsfeedKeyCommandWidget",["createKeyCommandWidget"],(function(a,b,c,d,e,f){"use strict";a=b("createKeyCommandWidget")();e.exports=a}),null);
__d("CometProductTagDotHint.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var b=Boolean(a.isHighlighted)?"var(--accent)":"var(--fds-black-alpha-20)";return g.jsx("div",{className:"taijpn5t j83agx80 bp9cbjyn",style:{padding:a.padding},children:g.jsx("div",{className:"spb7xbtv bkmhp75w emlxlaya s45kfl79 q2y6ezfg sgqq4ow5",style:{border:a.borderSize+"px solid "+b,height:a.dotSize,width:a.dotSize}})})}}),null);
__d("CometTextInputWithIcon.react",["BaseTextInput.react","React","TetraIcon.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={disabledInput:{cursor:"rj84mg9z"},iconEnd:{end:"dpjh1vo5",position:"pmk7jnqg",top:"plgsh5y4"},iconStart:{position:"pmk7jnqg",start:"dnzpfbms",top:"plgsh5y4"},root:{color:"oo9gr5id",fontSize:"jq4qci2q",position:"l9j0dhe7"},textInput:{backgroundColor:"cwj9ozl2",borderTop:"gslguzes",borderEnd:"kigf72y9",borderBottom:"lnt8xvtb",borderStart:"bqd6ffn4",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",boxSizing:"rq0escxv",color:"oo9gr5id",fontSize:"l94mrbxd",fontWeight:"ekzkrbhg",height:"tv7at329",width:"k4urcfbm"},textInputEndIcon:{paddingTop:"jb3vyjys",paddingEnd:"bowiujrr",paddingBottom:"qt6c0cv9",paddingStart:"h4z51re5"},textInputStartIcon:{paddingTop:"jb3vyjys",paddingEnd:"rv4hoivh",paddingBottom:"qt6c0cv9",paddingStart:"jg4yhqs5"}};function a(a,c){var d=a.disabled;d=d===void 0?!1:d;var e=a.icon,f=a.iconColor,j=a.iconPlacement;j=j===void 0?"start":j;var k=a.label;a=babelHelpers.objectWithoutPropertiesLoose(a,["disabled","icon","iconColor","iconPlacement","label"]);return h.jsxs("div",{className:(g||(g=b("stylex")))(i.root),children:[j==="start"?h.jsx("div",{className:(g||(g=b("stylex")))(i.iconStart),children:h.jsx(b("TetraIcon.react"),{color:f,icon:e,size:16})}):null,h.jsx(b("BaseTextInput.react"),babelHelpers["extends"]({"aria-label":k,disabled:d,xstyle:[d&&i.disabledInput,i.textInput,j==="start"&&i.textInputStartIcon,j==="end"&&i.textInputEndIcon]},a,{ref:c})),j==="end"?h.jsx("div",{className:(g||(g=b("stylex")))(i.iconEnd),children:h.jsx(b("TetraIcon.react"),{color:f,icon:e,size:16})}):null]})}c=h.forwardRef(a);e.exports=c}),null);
__d("useMediaViewerVPVDLogger",["CometInteractionSourceContext","React","WebSession","gkx","requireDeferred","useVPVDImpression"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=b("requireDeferred")("CometMediaVpvdFalcoEvent");function a(a,c){var d=g.useContext(b("CometInteractionSourceContext")),e=a.authorId,f=a.createdTime,i=a.fbid,j=a.source,k=a.storyContainerId;c=g.useCallback(function(a){var c,g;a.hiddenTime;var l=a.visibleDuration;a=a.visibleTime;if(i==null)return;c=(c=j)!=null?c:d;var m={a:(g=e)!=null?g:"",ct:(g=f)!=null?g:0,d:l,i:i,s:c,si:k,sid:b("WebSession").getId(),vst:a};h.onReady(function(a){a=a.log;return a(function(){return m})})},[e,f,i,d,j,k]);return b("useVPVDImpression")({onVPVDEnd:c})}}),null);
__d("GroupCometComposerContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({errorMetadata:null,groupID:null,isSaving:!1});e.exports=c}),null);
__d("PagesCometComposerContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext();e.exports=c}),null);
__d("CometPhotoTaggingConstants",[],(function(a,b,c,d,e,f){"use strict";a=3;f.BOX_BORDER_SIZE=a;b=1;f.INITIAL_PHOTO_RENDER_SCALE=b;c=94;f.TAGGING_BOX_SIZE=c}),null);
__d("CometMediaViewerRightRailUFIGlimmer.react",["BaseGlimmer.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){return g.jsxs("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi kwzhilbh j83agx80",children:[g.jsx(b("BaseGlimmer.react"),{className:"a12rg87m bsodd3zb mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",index:1}),g.jsx(b("BaseGlimmer.react"),{className:"a12rg87m bsodd3zb mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",index:2}),g.jsx(b("BaseGlimmer.react"),{className:"a12rg87m bsodd3zb mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",index:3})]})}}),null);
__d("useSearchCometTypeaheadBaseLayoutInlineStrategyARIAProps",["React","useCometSearchInternalTypeaheadFetch","useCometUniqueID"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.helperText;a=a.inputLabel;var d=a===void 0?"":a,e=b("useCometUniqueID")();a=b("useCometSearchInternalTypeaheadFetch")();var f=a.isLoading,h=g.useMemo(function(){var a={"aria-label":d,role:"textbox"};c!=null&&String(c).length>0&&(a=Object.assign({},a,{"aria-describedby":e}));return a},[e,c,d]),i=g.useMemo(function(){return{"aria-busy":f,role:"none"}},[f]);return g.useMemo(function(){return{ariaDescribedByProps:{id:e},ariaInputProps:h,ariaViewProps:i}},[e,h,i])}}),null);
__d("CometSearchTypeaheadBaseLayoutInlineStrategy.react",["CometSearchTypeaheadBaseHelperText.react","CometSearchTypeaheadBaseProgressGlimmer.react","CometSearchTypeaheadInternalLayoutInlineStrategy.react","React","useCometSearchInternalTypeaheadFetch","useCometSearchInternalTypeaheadState","useCometSearchInternalTypeaheadStateDispatcher","useCometSearchTypeaheadBaseInputRefs","useCometSearchTypeaheadInternalLayoutInlineStrategyHandlers","useSearchCometTypeaheadBaseLayoutInlineStrategyARIAProps"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c){var d=a.extraLayoutProps,e=a.helperText,f=a.label,h=a.onBlur,i=a.onChange,j=a.onDownArrow,k=a.onEnter,l=a.onEscape,m=a.onHighlightEntry,n=a.onOutsideClick,o=a.onPressEntry,p=a.onUpArrow;a=babelHelpers.objectWithoutPropertiesLoose(a,["extraLayoutProps","helperText","label","onBlur","onChange","onDownArrow","onEnter","onEscape","onHighlightEntry","onOutsideClick","onPressEntry","onUpArrow"]);var q=b("useCometSearchInternalTypeaheadFetch")();q=q.isLoading;var r=b("useCometSearchInternalTypeaheadState")(),s=r.activeEntries;r=r.highlightedEntry;var t=b("useCometSearchInternalTypeaheadStateDispatcher")(),u=t.dispatchIsOpened;g.useEffect(function(){u(!0)},[]);t=b("useCometSearchTypeaheadBaseInputRefs")(c);c=t.composedRef;t=t.inputRef;t=b("useCometSearchTypeaheadInternalLayoutInlineStrategyHandlers")({inputRef:t,onBlur:h,onChange:i,onDownArrow:j,onEnter:k,onEscape:l,onHighlightEntry:m,onOutsideClick:n,onPressEntry:o,onUpArrow:p});h=b("useSearchCometTypeaheadBaseLayoutInlineStrategyARIAProps")({activeEntries:s,helperText:e,highlightedEntry:r,inputLabel:f,isOpened:!0});return g.jsx(b("CometSearchTypeaheadInternalLayoutInlineStrategy.react"),babelHelpers["extends"]({},a,t,{extraLayoutProps:{afterViewContent:(i=d==null?void 0:d.afterViewContent)!=null?i:null,ariaProps:h,beforeViewContent:(j=d==null?void 0:d.beforeViewContent)!=null?j:null,helperTextComponent:e!=null?g.jsx(b("CometSearchTypeaheadBaseHelperText.react"),{text:e}):null,isOpened:!0,loadingIndicator:q?g.jsx(b("CometSearchTypeaheadBaseProgressGlimmer.react"),{}):null},label:f,ref:c}))}c=g.forwardRef(a);e.exports=c}),null);
__d("useCometMediaURL",["CometRelay","getCometMediaURL","useCometMediaURL_media.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g;function a(a,c){a=b("CometRelay").useFragment(g!==void 0?g:g=b("useCometMediaURL_media.graphql"),a);return b("getCometMediaURL")(a,c)}}),null);