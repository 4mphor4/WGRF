if (self.CavalryLogger) { CavalryLogger.start_js(["m3vV1"]); }

__d("CometTahoeRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3479891075388162",metadata:{relayPreloadable:!0},name:"CometTahoeRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometTahoeSidepaneRendererPreloadedQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3446589438793731",metadata:{relayPreloadable:!0},name:"CometTahoeSidepaneRendererPreloadedQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("validateChainingCaller",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return typeof a==="string"?a:null}}),null);
__d("CometTahoeRoot.entrypoint",["CometTahoeRootQuery$Parameters","CometTahoeSidepaneRendererPreloadedQuery$Parameters","JSResource","WebPixelRatio","gkx","validateChainingCaller"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.routeParams.story_token,d=a.passthroughProps,e=(d==null?void 0:d.channelID)!=null?String(d==null?void 0:d.channelID):null,f=b("validateChainingCaller")(d==null?void 0:d.caller),g=d==null?void 0:d.channelEntryPoint,h=null;(d==null?void 0:d.searchKeyword)!=null&&(h=JSON.stringify({searchKeyword:d==null?void 0:d.searchKeyword}));var i=b("gkx")("1682872"),j=(d==null?void 0:d.chainingCursor)!=null?String(d==null?void 0:d.chainingCursor):null;d=(d==null?void 0:d.chainingSeedVideoId)!=null?String(d==null?void 0:d.chainingSeedVideoId):null;var k=b("gkx")("1677133"),l=b("gkx")("1696116"),m=a.routeProps.is_broadcast;l=!m&&!l||m;m=b("gkx")("1708664");d={UFI2CommentsProvider_commentsKey:"CometTahoeSidePaneQuery",caller:(f=f)!=null?f:"TAHOE",chainingCursor:j,chainingSeedVideoId:d,channelEntryPoint:(f=g)!=null?f:"TAHOE",channelID:(j=e)!=null?j:"",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"TAHOE",feedbackSource:41,focusCommentID:null,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"video_channel",scale:b("WebPixelRatio").get(),shareSheetRedesign:b("gkx")("967616"),shouldDeferUpNextFragment:l,shouldUseCometCommentForGFI:m,upNextCount:k?10:5,useDefaultActor:!1,useStreamConnectionForUpNext:k,videoChainingContext:h};g=babelHelpers["extends"]({},d,{canShowSeenState:!0,containerIsFeedStory:!1,containerIsLiveStory:!1,containerIsTahoe:!0,containerIsWorkplace:!1,shouldDeferSidepaneFragments:!i,shouldPreloadSidepaneSeparately:i});f=i?{tahoeSidepaneQueryReference:{parameters:b("CometTahoeSidepaneRendererPreloadedQuery$Parameters"),variables:babelHelpers["extends"]({},d,{videoID:c})}}:void 0;return{extraProps:{t:a.routeProps.t},queries:babelHelpers["extends"]({tahoeRootQueryReference:{parameters:b("CometTahoeRootQuery$Parameters"),variables:babelHelpers["extends"]({},g,{videoID:c})}},f)}},root:b("JSResource")("CometTahoeRoot.react").__setRef("CometTahoeRoot.entrypoint")};e.exports=a}),null);