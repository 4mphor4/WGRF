if (self.CavalryLogger) { CavalryLogger.start_js(["x+hoG"]); }

__d("CometPageLikeButton_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometPageLikeButton_page",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show_page_like_warning",storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometPageLike_page"}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("CometSuspiciousPageLikeWarningDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3150607118376849",metadata:{relayPreloadable:!0},name:"CometSuspiciousPageLikeWarningDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("IXTCometSuspiciousPageLikeWarningDialogQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3572923829420619",metadata:{relayPreloadable:!0},name:"IXTCometSuspiciousPageLikeWarningDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSuspiciousPageLikeWarningDialog.entrypoint",["CometSuspiciousPageLikeWarningDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){return{extraProps:a,queries:{CometSuspiciousPageLikeWarningDialogQueryReference:{parameters:b("CometSuspiciousPageLikeWarningDialogQuery$Parameters"),variables:{pageID:a.pageID}}}}},root:b("JSResourceForInteraction")("CometSuspiciousPageLikeWarningDialog.react",{"class":"fluid",name:"Comet Suspicious Page Like Warning Dialog",oncall:"pages_integrity"}).__setRef("CometSuspiciousPageLikeWarningDialog.entrypoint")};e.exports=a}),null);
__d("IXTCometSuspiciousPageLikeWarningDialog.entrypoint",["IXTCometSuspiciousPageLikeWarningDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){return{extraProps:a,queries:{IXTCometSuspiciousPageLikeWarningDialogQueryReference:{parameters:b("IXTCometSuspiciousPageLikeWarningDialogQuery$Parameters"),variables:{pageID:a.pageID,scale:b("WebPixelRatio").get()}}}}},root:b("JSResourceForInteraction")("IXTCometSuspiciousPageLikeWarningDialog.react",{"class":"fluid",name:"Comet Suspicious Page Like Warning Dialog",oncall:"pages_integrity"}).__setRef("IXTCometSuspiciousPageLikeWarningDialog.entrypoint")};e.exports=a}),null);
__d("CometPageLikeButton.react",["ix","fbt","CometPageContext","CometSuspiciousPageLikeWarningDialog.entrypoint","CometTrackingNodeProvider.react","IXTCometSuspiciousPageLikeWarningDialog.entrypoint","React","TetraButton.react","fbicon","gkx","qex","useCometEntryPointDialog","useCometPageLike","CometRelay","CometPageLikeButton_page.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=b("React"),k="CometPageLikeButton/";function a(a){var c=a.labelIsHidden;c=c===void 0?!1:c;var d=a.location,e=a.logAction,f=a.padding,l=a.page$key;a=a.size;a=a===void 0?"large":a;l=b("CometRelay").useFragment(i!==void 0?i:i=b("CometPageLikeButton_page.graphql"),l);var m=b("useCometPageLike").useCometPageLike(l,d),n=m[0],o=m[1],p=m[2];m=o?"primary":"secondary";var q=k+m,r=j.useContext(b("CometPageContext"));q=b("useCometEntryPointDialog")(b("gkx")("1757248")?b("IXTCometSuspiciousPageLikeWarningDialog.entrypoint"):b("CometSuspiciousPageLikeWarningDialog.entrypoint"),{pageID:(q=l==null?void 0:l.id)!=null?q:""});var s=q[0];q=b("gkx")("1532627")&&!o&&(l==null?void 0:l.should_show_page_like_warning)===!0;if(n===!1)return null;var t=function(){p();d==="page__header"&&o===!1&&r.setShouldShowLikeChaining(!0);if(e==null)return;e(d,o)};l=function(){s({location:d,onConfirmLike:t})};return j.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:o?43:42,children:j.jsx(b("TetraButton.react"),{icon:b("fbicon")._(g("509921"),16),label:o?h._("Liked"):h._("Like"),labelIsHidden:c,onPress:q&&((n=b("qex")._("1755408"))!=null?n:!0)?l:t,padding:f,reduceEmphasis:o,size:a,testid:void 0,type:m},"fanning")})}}),null);