(this.webpackJsonpewa_lipska_songs_collabs=this.webpackJsonpewa_lipska_songs_collabs||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"songsNumberByAuthor":[{"id":0,"author":"Zbigniew Preisner","songsNumber":20},{"id":1,"author":"Grzegorz Turnau","songsNumber":7},{"id":2,"author":"Anna Sza\u0142apak","songsNumber":14},{"id":3,"author":"Wawele (Jan Wojdak)","songsNumber":13},{"id":4,"author":"Skaldowie","songsNumber":2},{"id":5,"author":"Marek Grechuta","songsNumber":2},{"id":6,"author":"Ewa B\u0142aszczyk","songsNumber":1}],"textGenre":[{"id":0,"genre":"song","number":48},{"id":1,"genre":"used poem","number":10},{"id":2,"genre":"unused song","number":1},{"id":3,"genre":"unused poem","number":1}],"sourcesOfText":[{"id":0,"type":"book","number":2,"authors":["Anna Sza\u0142apak"]},{"id":1,"type":"cd insert","number":7,"authors":["Grzegorz Turnau","Zbigniew Preisner"]},{"id":2,"type":"unknown","number":3,"authors":["Wawele (Jan Wojdak)","Skaldowie","Ewa B\u0142aszczyk"]}],"genreSourceRelation":[{"id":0,"relation":"song written in book","number":13},{"id":1,"relation":"song written in cd insert","number":21},{"id":2,"relation":"poem written in cd insert","number":9},{"id":3,"relation":"poem written in book and cd insert","number":8},{"id":4,"relation":"sung poem written only in book","number":2}]}')},182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(41),i=(a(84),a(14)),l=a(15),s=a(17),c=a(16),u=(a(85),a(60)),d=a.n(u),p=function(){return r.a.createElement("div",{className:d.a.Header},r.a.createElement("h2",null,"Concept"))},h=a(61),m=a.n(h),g=function(){return r.a.createElement("div",{className:m.a.Bio},r.a.createElement("h4",null,"Digital Humanities"),r.a.createElement("p",null,"This project is an experimental part of implementig data visualization tools to the literary science."))},b=a(62),f=a.n(b),y=function(){return r.a.createElement("div",{className:f.a.Idea},r.a.createElement("h4",null,"Sources"),r.a.createElement("p",null,"All data in this project comes from bibliography of Ewa Lipska - polish contemporary female poet. Each piece of data is strictly connected with the genre of song."))},E=a(63),_=a.n(E),v=a(22),C=a(4),k=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={navigationItems:[{title:"Home",pathName:"/"},{title:"Bar",pathName:"/charts/bar/"},{title:"Radar",pathName:"/charts/radar/"},{title:"Polar",pathName:"/charts/polar/"},{title:"Doughnut",pathName:"/charts/pie/"}]},e}return Object(l.a)(a,[{key:"render",value:function(){var e={hoverPosition:{y:-2},tapPosition:{y:3}};return r.a.createElement("div",{className:_.a.Navigation},r.a.createElement("nav",null,r.a.createElement(C.a.ul,null,this.state.navigationItems.map((function(t,a){return r.a.createElement(C.a.li,{key:a,variants:e,whileHover:"hoverPosition",whileTap:"tapPosition"},r.a.createElement(v.b,{to:t.pathName,exact:!0},t.title))})))))}}]),a}(n.Component),x=a(65),D=a.n(x),N=function(){return r.a.createElement(C.a.div,{className:D.a.Aside,initial:{opacity:0,x:-100},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:200,delay:.5}},r.a.createElement(p,null),r.a.createElement(g,null),r.a.createElement(y,null),r.a.createElement(k,null))},w=a(66),P=a.n(w),O=a(67),H=a.n(O),T=a(68),B={homeTitle:"Home Page",homeDescription:"Welcome to the Home Page",barTitle:"Bar Chart Page",barDescription:"Welcome to the Bar Chart Page",radarTitle:"Radar Chart Page",radarDescription:"Welcome to the Radar Chart Page",polarTitle:"Polar Chart Page",polarDescription:"Welcome to the Polar Chart Page",doughnutTitle:"Doughnut Chart Page",doughnutDescription:"Welcome to the Doughnut Chart Page",mainLocation:"https://bevviemarsh.github.io"},L=function(e){var t=e.title,a=e.description,n=e.imgURL;return r.a.createElement(T.a,null,r.a.createElement("title",null,t),r.a.createElement("meta",{property:"og:title",content:t}),r.a.createElement("meta",{name:"description",content:a}),r.a.createElement("meta",{property:"og:description",content:a}),r.a.createElement("meta",{property:"og:image",content:B.mainLocation+n}),r.a.createElement("meta",{property:"og:url",content:B.mainLocation+window.location.pathname}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))},z=a(71),j=a.n(z),I=function(){return r.a.createElement(C.a.div,{className:H.a.DisplayedInfo,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:1.5}},exit:{opacity:0}},initial:"hidden",animate:"visible",exit:"exit"},r.a.createElement(L,{title:B.homeTitle,description:B.homeDescription,imgURL:j.a}),r.a.createElement("h2",null,"Ewa Lipska - songs data dashboard"),r.a.createElement("p",null," Please, choose a type of chart to see the data"))},A=a(11),R=a(73),W=a.n(R),G=function(e){return r.a.createElement(C.a.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:1.5}},exit:{opacity:0}},initial:"hidden",animate:"visible",exit:"exit"},r.a.createElement(L,{title:B.barTitle,description:B.barDescription,imgURL:W.a}),r.a.createElement(A.a,{data:e.data,options:e.options}))},S=a(74),U=a.n(S),M=function(e){return r.a.createElement(C.a.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:1.5}},exit:{opacity:0}},initial:"hidden",animate:"visible",exit:"exit"},r.a.createElement(L,{title:B.radarTitle,description:B.radarDescription,imgURL:U.a}),r.a.createElement(A.d,{data:e.data,options:e.options}))},F=a(75),J=a.n(F),Z=function(e){return r.a.createElement(C.a.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:1.5}},exit:{opacity:0}},initial:"hidden",animate:"visible",exit:"exit"},r.a.createElement(L,{title:B.polarTitle,description:B.polarDescription,imgURL:J.a}),r.a.createElement(A.c,{data:e.data,options:e.options}))},V=a(76),X=a.n(V),$=function(e){return r.a.createElement(C.a.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:1.5}},exit:{opacity:0}},initial:"hidden",animate:"visible",exit:"exit"},r.a.createElement(L,{title:B.doughnutTitle,description:B.doughnutDescription,imgURL:X.a}),r.a.createElement(A.b,{data:e.data,options:e.options}))},q=a(10),K=a(77),Q=a.n(K),Y={getDataBackgroundColors:function(){return["hsla(357, 100%, 17%, 0.5)","hsla(126, 72%, 29%, 0.5)","hsla(37, 100%, 6%, 0.5)","hsla(29, 100%, 50%, 0.5)","hsla(240, 16%, 44%, 0.5)","hsla(46, 74%, 92%, 0.5)","hsla(300, 62%, 68%, 0.5)"]},getTitleHandler:function(e,t,a){return{display:!0,text:e,fontSize:t,fontColor:a}},getTooltipHandler:function(e,t,a,n){return{backgroundColor:e,callbacks:{labelColor:function(){return{borderColor:t,backgroundColor:a}},labelTextColor:function(){return n}}}},getLegendHandler:function(e,t){return{display:!0,labels:{fontSize:e,fontColor:t,usePointStyle:!0}}},getChartPropertiesHandler:function(){return{bar_width:100,tick_labels_padding:15,font_size_title:20,font_size_legend:15,font_color:"#E8E9F3",getBackgroundColor:function(e){return"hsla(267, 73%, 3%, ".concat(e,")")},getLabelColors:function(e){return"hsla(357, 100%, 17%, ".concat(e,")")},label_color:"#2EC4B6"}}},ee=Y.getDataBackgroundColors,te=Y.getTitleHandler,ae=Y.getLegendHandler,ne=Y.getTooltipHandler,re=Y.getChartPropertiesHandler,oe=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={authors:q.songsNumberByAuthor.map((function(e){return e.author})),songsByAuthors:q.songsNumberByAuthor.map((function(e){return e.songsNumber})),genres:q.textGenre.map((function(e){return e.genre})),genreNumber:q.textGenre.map((function(e){return e.number})),sourceType:q.sourcesOfText.map((function(e){return e.type})),sourceNumber:q.sourcesOfText.map((function(e){return e.number})),relationType:q.genreSourceRelation.map((function(e){return e.relation})),relationNumber:q.genreSourceRelation.map((function(e){return e.number})),barData:{},barOptions:{},radarData:{},radarOptions:{},polarData:{},polarOptions:{},doughnutData:{},doughnutOptions:{}},e.getProperChartType=function(e){return e},e.getBarDataHandler=function(){var t=re(),a=t.bar_width,n=t.tick_labels_padding,r=t.font_size_title,o=t.font_size_legend,i=t.font_color,l=t.getBackgroundColor,s=t.getLabelColors,c=t.label_color;e.setState({barData:{labels:e.state.relationType,datasets:[{label:"genre-source text's relation",barThickness:a,data:e.state.relationNumber,backgroundColor:ee()}]},barOptions:{title:te("Genre of text related to the source of text",r,i),legend:ae(o,i),tooltips:ne(l(.8),s(.7),s(.5),c),scales:{xAxes:[{gridLines:{offsetGridLines:!0,color:l(.2)},ticks:{fontColor:i,labelOffset:a/2,padding:n}}],yAxes:[{gridLines:{beginAtZero:!0,color:l(.2)},ticks:{beginAtZero:!0,fontColor:i,padding:n}}]}}})},e.getRadarDataHandler=function(){var t=re(),a=t.font_size_title,n=t.font_size_legend,r=t.font_color,o=t.getBackgroundColor,i=t.getLabelColors,l=t.label_color;e.setState({radarData:{labels:e.state.authors,datasets:[{label:"number of songs",data:e.state.songsByAuthors,backgroundColor:ee(),pointRadius:7,pointHoverRadius:12,pointLabelFontColor:r,borderWidth:4,borderColor:o(.8),fill:!1,tension:.5}]},radarOptions:{scale:{pointLabels:{fontColor:r},ticks:{fontColor:r,backdropColor:o(.9)},angleLines:{color:o(.5)},gridLines:{lineWidth:2,color:o(.4),offsetGridLines:!0},scaleLabel:{fontColor:r}},title:te("Number of songs (by authors)",a,r),legend:ae(n,r),tooltips:ne(o(.8),i(.7),i(.5),l)}})},e.getPolarDataHandler=function(){var t=re(),a=t.font_size_title,n=t.font_size_legend,r=t.font_color,o=t.getBackgroundColor,i=t.getLabelColors,l=t.label_color;e.setState({polarData:{labels:e.state.genres,datasets:[{data:e.state.genreNumber,backgroundColor:ee(),borderColor:r,borderWidth:2,hoverBorderWidth:5}]},polarOptions:{title:te("Genres",a,r),tooltips:ne(o(.8),i(.7),i(.5),l),legend:ae(n,r),scale:{ticks:{fontColor:r,backdropColor:o(.9)},gridLines:{lineWidth:2,color:o(.3)}}}})},e.getPieDataHandler=function(){var t=re(),a=t.font_size_title,n=t.font_size_legend,r=t.font_color,o=t.getBackgroundColor,i=t.getLabelColors,l=t.label_color;e.setState({doughnutData:{labels:e.state.sourceType,datasets:[{data:e.state.sourceNumber,backgroundColor:ee(),borderColor:r,borderWidth:2,hoverBorderWidth:5}]},doughnutOptions:{cutoutPercentage:70,title:te("Type of source",a,r),tooltips:ne(o(.8),i(.7),i(.5),l),legend:ae(n,r)}})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getChartHandler()}},{key:"componentDidUpdate",value:function(e){this.props.chartId!==e.chartId&&this.getChartHandler()}},{key:"getChartFactoryHandler",value:function(e,t,a,n,r){switch(e){case"bar":return t;case"radar":return a;case"polar":return n;case"pie":return r}}},{key:"getRenderedChart",value:function(){return this.getChartFactoryHandler(this.props.chartId,this.getProperChartType(r.a.createElement(G,{data:this.state.barData,options:this.state.barOptions})),this.getProperChartType(r.a.createElement(M,{data:this.state.radarData,options:this.state.radarOptions})),this.getProperChartType(r.a.createElement(Z,{data:this.state.polarData,options:this.state.polarOptions})),this.getProperChartType(r.a.createElement($,{data:this.state.doughnutData,options:this.state.doughnutOptions})))}},{key:"getChartDataHandler",value:function(e,t,a,n,r){switch(e){case"bar":t();break;case"radar":a();break;case"polar":n();break;case"pie":r()}}},{key:"getChartHandler",value:function(){this.getChartDataHandler(this.props.chartId,this.getBarDataHandler,this.getRadarDataHandler,this.getPolarDataHandler,this.getPieDataHandler)}},{key:"render",value:function(){return r.a.createElement("div",{className:Q.a.DisplayedCharts},this.getRenderedChart())}}]),a}(n.Component),ie=a(2),le=function(){return r.a.createElement(C.a.div,{className:P.a.Main,initial:{opacity:0,x:500},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:100,delay:1}},r.a.createElement(ie.c,null,r.a.createElement(ie.a,{path:"/",exact:!0,component:I}),r.a.createElement(ie.a,{path:"/charts/bar/",exact:!0,render:function(e){return r.a.createElement(oe,Object.assign({},e,{chartId:"bar"}))}}),r.a.createElement(ie.a,{path:"/charts/radar/",exact:!0,render:function(e){return r.a.createElement(oe,Object.assign({},e,{chartId:"radar"}))}}),r.a.createElement(ie.a,{path:"/charts/polar/",exact:!0,render:function(e){return r.a.createElement(oe,Object.assign({},e,{chartId:"polar"}))}}),r.a.createElement(ie.a,{path:"/charts/pie/",exact:!0,render:function(e){return r.a.createElement(oe,Object.assign({},e,{chartId:"pie"}))}})))},se=a(78),ce=a.n(se),ue=function(){return r.a.createElement("div",{className:ce.a.Dashboard},r.a.createElement(N,null),r.a.createElement(le,null))},de=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,{basename:"/ewa_lipska_songs_dashboard"},r.a.createElement("div",{className:"App"},r.a.createElement(ue,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=document.getElementById("root");pe.hasChildNodes()?Object(o.hydrate)(r.a.createElement(de,null),pe):Object(o.render)(r.a.createElement(de,null),pe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){e.exports={Header:"Header_Header__1DuFa"}},61:function(e,t,a){e.exports={Bio:"BioInfo_Bio__GfnC8"}},62:function(e,t,a){e.exports={Idea:"IdeaSources_Idea__3f01c"}},63:function(e,t,a){e.exports={Navigation:"ChartsNavigation_Navigation__1jGzz"}},65:function(e,t,a){e.exports={Aside:"AsideContainer_Aside__3E_Mn"}},66:function(e,t,a){e.exports={Main:"MainContainer_Main__1no7V"}},67:function(e,t,a){e.exports={DisplayedInfo:"DisplayedInfo_DisplayedInfo__3OawU"}},71:function(e,t,a){e.exports=a.p+"static/media/imgHome.d14a67be.PNG"},73:function(e,t,a){e.exports=a.p+"static/media/imgBar.78ffe4a9.PNG"},74:function(e,t,a){e.exports=a.p+"static/media/imgRadar.70bed997.PNG"},75:function(e,t,a){e.exports=a.p+"static/media/imgPolar.58accae1.PNG"},76:function(e,t,a){e.exports=a.p+"static/media/imgDoughnut.c712a5bc.PNG"},77:function(e,t,a){e.exports={DisplayedCharts:"DisplayedCharts_DisplayedCharts__OXnyP"}},78:function(e,t,a){e.exports={Dashboard:"DataDashboard_Dashboard__3o7bj"}},79:function(e,t,a){e.exports=a(182)},84:function(e,t,a){},85:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.26269565.chunk.js.map