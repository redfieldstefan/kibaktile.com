(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{150:function(e,a,t){"use strict";t.r(a);t(153),t(48),t(77),t(166);var n=t(7),i=t.n(n),r=t(49),l=t.n(r),c=t(0),s=t.n(c),o=t(161),m=(t(33),t(169)),A=t.n(m),g=t(279),d=t.n(g),u=t(164),p=t.n(u),E=t(295),h=t.n(E),b=t(296),G=t.n(b),I=function(e){var a=e.className,t=e.next,n=e.prev,i=A()(e,["className","next","prev"]);return s.a.createElement("button",Object.assign({className:p()(a,"CarouselArrow")},i),t&&s.a.createElement("img",{className:"arrow-icon",src:h.a}),n&&s.a.createElement("img",{className:"arrow-icon",src:G.a}))},k=function(e){var a=e.slides,t=(e.thumbs,e.slidesToScroll),n=e.slidesToShow,i=(A()(e,["slides","thumbs","slidesToScroll","slidesToShow"]),{nextArrow:s.a.createElement(I,{next:!0}),prevArrow:s.a.createElement(I,{prev:!0}),dotsClass:"slick-dots slick-thumb"});return s.a.createElement(d.a,Object.assign({className:"carousel",slidesToScroll:t,slidesToShow:n},i,{dots:!0}),a.map(function(e,a){return s.a.createElement("img",{key:a,className:"tiles-main-img",src:e})}))};k.defaultProps={slidesToShow:3,slidesToScroll:1};t(162);var N=t(159),Z=function(e,a){return s.a.createElement("span",{className:"pattern-bar-tile line-drawing"},s.a.createElement("img",{src:e.fourPiece,alt:e.name}),s.a.createElement("span",{className:"pattern-bar-text "+a},s.a.createElement("span",{className:"pattern-bar-text-body"},s.a.createElement("span",null,"This is"),s.a.createElement("span",{className:"pattern-bar-headline"},e.name),s.a.createElement(N.Link,{className:"pattern-bar-link",to:e.url},"View more configurations"))))},M=function(e){var a=e.backgroundColor,t=e.pattern,n=e.alignment;return s.a.createElement("div",{className:"PatternBar "+n+" background-"+a},"right"!==n&&Z(t,n),function(e){for(var a=[],t=0;t<=2;t++)a.push(e);return a}(t.painted).map(function(e,a){return s.a.createElement("span",{key:a,className:"pattern-bar-tile"},s.a.createElement("img",{src:e,alt:t.name+" individual"}))}),"right"===n&&Z(t,n))},w=t(175),Y=t(160),U=t(297),D=t.n(U),R=t(170),B=t(172),S=t(171),v=t(173);t.d(a,"default",function(){return T});var T=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={pattern:null},t.pickRandomPattern=t.pickRandomPattern.bind(l()(l()(t))),t}i()(a,e);var t=a.prototype;return t.componentDidMount=function(){console.log("are you fucking kidding me?!");var e=Y.a.filter(function(e){return"/catalog/sakura-cherry-tree/"!==e.url}),a=e[Math.floor(Math.random()*e.length)];this.setState({pattern:a})},t.pickRandomPattern=function(e){var a=this;e.preventDefault();var t=Y.a.filter(function(e){return e!==a.state.pattern&&"/catalog/sakura-cherry-tree/"!==e.url}),n=t[Math.floor(Math.random()*t.length)];this.setState({pattern:n})},t.generateTiles=function(e){for(var a=[],t=0;t<=11;t++)a.push(e.painted);return a},t.renderHomeHero=function(e){return e?s.a.createElement("div",{className:"HomeHero"},s.a.createElement("button",{className:"pick-random-pattern",onClick:this.pickRandomPattern},s.a.createElement("img",{src:D.a})),s.a.createElement("div",{className:"HomeHero-background"},this.generateTiles(e).map(function(a,t){return s.a.createElement("span",{key:t,className:"HomeHero-tile "+e.rotationClass},s.a.createElement("img",{src:a}))})),s.a.createElement("div",{className:"HomeHero-text-container"},s.a.createElement("div",{className:"HomeHero-text"},s.a.createElement("h1",null,"Kibak Tile"),s.a.createElement("h2",null,"Design, make, bake, repeat. Hand-painted ceramic tile made in Oregon since 1981.")))):null},t.render=function(){return s.a.createElement(o.a,{className:"home"},this.renderHomeHero(this.state.pattern),this.state.pattern&&s.a.createElement("div",{className:"pattern-cta"},s.a.createElement("p",null,"You are looking at our ",s.a.createElement(N.Link,{className:"random-pattern-link",to:this.state.pattern.url},this.state.pattern.name)," pattern. View more of our ",s.a.createElement(N.Link,{to:"/catalog/"},"Catalog")," online or download the ",s.a.createElement("a",{href:"https://s3-us-west-2.amazonaws.com/studio-redfield/2018+Kibak+Tile+catalog.pdf"},"full PDF"))),s.a.createElement("section",{className:"text-main"},s.a.createElement("section",{className:"mission-statement"},s.a.createElement("p",null,"Kibak Tile is the only company that has been designing and producing dry-line, hand-painted tile, specializing in custom coloring and designing  for customers worldwide since 1981. We are an all female company; a lady gang of mothers, daughters, sisters, and grandmothers. Over our 40+ years in the business, our clients have ranged from satisfied homeowners to some of the most elite, architectural and design firms in the USA and abroad."),s.a.createElement("p",null,"Our vision is to bring handcrafted excellence, artistry and beauty  to the world of ceramic tile one piece at a time. Tile is timeless - let’s make history together."),s.a.createElement("p",{className:"contact-us"},"Contact us via email at ",s.a.createElement("a",{href:"mailto:info@kibaktile.com"},"info@kibaktile.com"))),s.a.createElement(M,{pattern:B.a,alignment:"left",backgroundColor:"dark-blue"}),s.a.createElement(M,{pattern:v.a,alignment:"right",backgroundColor:"black"})),s.a.createElement(w.a,null),s.a.createElement(M,{pattern:S.a,alignment:"right",backgroundColor:"dark-brown"}),s.a.createElement(M,{pattern:R.a,alignment:"left",backgroundColor:"light-gray"}))},a}(s.a.Component)},175:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(7),i=t.n(n),r=t(0),l=t.n(r),c=t(164),s=t.n(c),o=function(e){function a(){return e.apply(this,arguments)||this}return i()(a,e),a.prototype.render=function(){var e=this.props.className;return l.a.createElement("div",{id:"contact",className:s()(e,"Contact")},l.a.createElement("h2",{className:"feature-page-section-header"},"Contact us"),l.a.createElement("form",{action:"https://formspree.io/info@kibaktile.com",method:"post",enctype:"text/plain"},l.a.createElement("span",{className:"name"},l.a.createElement("input",{type:"text",placeholder:"Name",name:"name"})),l.a.createElement("span",{className:"email"},l.a.createElement("input",{type:"text",placeholder:"Email",name:"mail"})),l.a.createElement("textarea",{placeholder:"Message",className:"body",type:"text",name:"comment"}),l.a.createElement("button",{className:"submit",type:"submit",value:"Send"},"Send")))},a}(r.Component)},295:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAuCAYAAABap1twAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjU2MzlCNzk1MUY5MTFFNzhFMzFBQTA0QkExMDhFODYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjU2MzlCN0E1MUY5MTFFNzhFMzFBQTA0QkExMDhFODYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNTYzOUI3NzUxRjkxMUU3OEUzMUFBMDRCQTEwOEU4NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNTYzOUI3ODUxRjkxMUU3OEUzMUFBMDRCQTEwOEU4NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po6EIcsAAAHySURBVHjazJm9SwNBEMU35yHYWQhiY2VnIQELsdJC8C+wsLUQIoIaEYVgFURQ04gIgigWksIPsFGwMI0fhRAstLJKY6GgSFAJIedbmYVV1jMmd7fz4Ee68Jh9mZ3ZxDzPOxZCjIN7wVAOGAS3YBk0s3PofdcjSIAGIDgQk64MvvNgCuQ4HLFJcXAGDkCHTYO/VVBXCSyBRVDkaFDpAaTANqhwNKjncwxc2sygn2Q+z8EuaOdYQV3vIAMWwBtHg0oFMAuysrVyNKh0BSbp01oG/dQDLsAWaONYQV1F6p0Zyio7g3o+5bW5z+GITZKtaI+uzjhHg0p94BpsglZOR2zSC0iDVbrr2RlUklP8DDjkalDpFEyAO5sZ9NMAuAFroIVjBX/mcx6sgzJHg0ryuJOO4KtG0MTR4CuYBp3y1+0yMlahdSJF68WXuBjM0X2d59Zm5CAxBPpN5mxWsOpRLGqDsqXtgDk9Z1wM1rQOOBHlbBj01rKrhFnBQFZSN6ScZWkNLdT7ZUEblK0iwXHtlL/IEdAdpLkgKvgBVkSIT3P1GDykcT3Ux3e3xpxF9jz8nww+gVHKWSTmqq1gidbDNI3jkeovg0dy7BYW/+Rx/fYBcGJ7UHQMOZPvz10czOkVLIMNGrefOS0oLlUqadrqOehTgAEApzodRxUx5OsAAAAASUVORK5CYII="},296:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAuCAYAAABap1twAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjU2MzlCN0Q1MUY5MTFFNzhFMzFBQTA0QkExMDhFODYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjU2MzlCN0U1MUY5MTFFNzhFMzFBQTA0QkExMDhFODYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNTYzOUI3QjUxRjkxMUU3OEUzMUFBMDRCQTEwOEU4NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNTYzOUI3QzUxRjkxMUU3OEUzMUFBMDRCQTEwOEU4NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnoHM/MAAAIASURBVHjazJk/SMNAFMZzodQ/dCgiQpdOmXSQgkNxqpM6KNRBxEEKLqJ0qQ6ibgoWsRWEuunopq5uOomDIA46Obk46OLsEL+DFzhq2rRN7vI++JFCW/jy3kvuvTvhuq7FVA44tRkaS4Nj8ApmLRlBJthgHXy5ihJMolYAdZBr/sJmUGfX4M7PnFRcEUyBbbAF+tr90LRBmbESOACZTv5g0mAenLVKZbs70q0suAQP3ZrTHcEBsAsq9Lkn6TAowBKoUvRCKaGhzk7oGtlTFYXkE3lBdZaP8o4TEdRZhd5pKR2FHMbgAqUzq/MV0EuKc7Q0Xek2163BEXAOnmhxN6JOUpwEZbBHvZpRBRksgiPqOmJRK4Oj1J9Nx90oNtfgMGiAFw7m1AjK6xrYj6POggzOgBqllZ1sWg2SXGdPafAGjFH7/cPNoGga3DPUjpcYDFS+BtXlrG5yxeh2qXsGU2ARfHCMoNGWKqxBtT4PwQq19ewMamvro+4HH8EkWDZRnyLk/uAg2Ak7Wuo0qA7nVRo3BUeDobY3TG59yPqcAKvgk2MEVXlbbJugn6NBTw6NDUWuBj0VrBbbvCZrsJ3uqT5l5/7NMYKq0jTGloOaZRHzQY5DaZ/jkGI/vYN5Sx7YWNYbR4OebsE42PhXn4xOmjyGQAP8ypMmwfgwUY7BtT8BBgAXpFuv7psdYQAAAABJRU5ErkJggg=="},297:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUI4NzhGRUY3RDg1MTFFNzk3RkJEQUMxNzA3RTBGNkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUI4NzhGRjA3RDg1MTFFNzk3RkJEQUMxNzA3RTBGNkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQjg3OEZFRDdEODUxMUU3OTdGQkRBQzE3MDdFMEY2QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQjg3OEZFRTdEODUxMUU3OTdGQkRBQzE3MDdFMEY2QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkLvBjsAAAX2SURBVHja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"}}]);
//# sourceMappingURL=component---src-pages-index-js-c8ee83a7faccfc9a511d.js.map