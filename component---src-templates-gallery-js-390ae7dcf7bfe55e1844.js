(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{341:function(e,a,t){"use strict";t.r(a);t(22);var r=t(0),n=t.n(r),c=t(334),i=t(333),s=t(329),o=t(388),l=t.n(o),m=t(377),d=t(378),u=t(375),p=t(374),g=t(376),h=t(108),E=t(380),y=t(335),v=t(39),w=function(e){var a=e.artPiece,t=a.artPieceId,r=a.name,c=a.description,i=a.media,o=a.widthInInches,m=a.heightInInches,w=a.galleryId,b=Object(E.a)(a,0,"LowRes"),f="/galleries/"+w+"/art-pieces/"+t;return n.a.createElement(d.a,{item:!0,xs:12,sm:6,md:4,lg:3},n.a.createElement(u.a,{className:l.a.galleryCard},n.a.createElement(h.a,{to:f},n.a.createElement(p.a,{className:l.a.media,image:b})),n.a.createElement(g.a,{className:l.a.cardContent},n.a.createElement(s.a,{gutterBottom:!0,variant:"h5",component:"h2"},r),n.a.createElement(s.a,{variant:"body2",color:"textSecondary",component:"p"},c,c&&" on ",i&&""+i,o&&m&&" "+o+'" x '+m+'"'),n.a.createElement(v.Location,null,function(e){var a=e.location;return n.a.createElement(y.a,{href:""+a.origin+f})}))))},b=function(e){var a=e.gallery,t=a.description,r=a.extraDescription,c=e.artPieces,i=void 0===c?[]:c;return n.a.createElement(m.a,{className:l.a.container},n.a.createElement(s.a,{variant:"h3",color:"primary",className:l.a.description},t),r&&n.a.createElement(s.a,{variant:"h5",color:"primary",className:l.a.description},r),n.a.createElement(d.a,{container:!0,spacing:2},i.map(function(e){return n.a.createElement(w,{artPiece:e,key:e.artPieceId})})))},f=t(336);a.default=function(e){var a=e.pageContext,t=a.gallery,r=a.artPieces,s=a.breadcrumbs;return n.a.createElement(c.a,{breadcrumbs:s},n.a.createElement(i.a,{title:t.name,description:t.description,image:Object(f.a)(t),pathname:e.location.pathname}),n.a.createElement(b,{gallery:t,artPieces:r}),n.a.createElement(y.a,{share:!0,includeMargin:!0}))}},380:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var r=function(e,a,t){void 0===t&&(t="LowRes");var r=e.galleryId,n=e.imageFiles,c=n[0],i=n[a]||c;switch(t){case"LowRes":default:return"http://images.sbentleyart.com/images/art-2.0/LowRes/"+r+"LowRes/"+i;case"MedRes":return"http://images.sbentleyart.com/images/art-2.0/MedRes/"+r+"/"+i;case"FullRes":return"http://images.sbentleyart.com/images/art-2.0/"+r+"/"+i}}}}]);
//# sourceMappingURL=component---src-templates-gallery-js-390ae7dcf7bfe55e1844.js.map