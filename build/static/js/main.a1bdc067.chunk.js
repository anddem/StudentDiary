(this["webpackJsonpstudnt-diary"]=this["webpackJsonpstudnt-diary"]||[]).push([[0],{178:function(e,a,t){e.exports=t(274)},274:function(e,a,t){"use strict";t.r(a);t(179),t(205),t(207),t(208),t(210),t(211),t(212),t(213),t(214),t(215),t(216),t(217),t(219),t(220),t(221),t(222),t(223),t(224),t(225),t(226),t(227),t(228),t(230),t(231),t(232),t(233),t(234),t(235),t(236),t(237),t(238),t(239),t(240),t(241),t(242),t(243),t(244),t(245),t(246),t(247);var n=t(0),c=t.n(n),r=t(98),l=t.n(r),d=t(35),i=t.n(d),o=t(36),u=t(107),m=t.n(u),y=t(108),s=t.n(y),E=t(66),k=t.n(E),f=(t(255),t(99)),b=t.n(f),h=t(100),C=t.n(h),v=t(64),p=t.n(v),g=t(101),j=t.n(g),B=t(102),O=t.n(B),w=t(103),S=t.n(w),D=function(e){var a=e.id,t=new Date,r=Object(n.useState)("home"),l=Object(o.a)(r,2),d=l[0],i=(l[1],Object(n.useState)(["\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043f\u044f\u0442\u043d\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043e\u0442\u0430"][t.getDay()])),u=Object(o.a)(i,2),m=u[0];u[1];return c.a.createElement(p.a,{id:a,activePanel:d},c.a.createElement(j.a,{id:"home"},c.a.createElement(O.a,null,"\u0414\u043d\u0435\u0432\u043d\u0438\u043a \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430"),c.a.createElement(S.a,null,"\u0421\u0435\u0433\u043e\u0434\u043d\u044f ",m)))},x=t(23),I=t(106),J=t.n(I),P=["monday","tuesday","wednesday","thursday","friday","saturday"],T=["\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"],A=function(e){var a=e.go,t=T.map((function(e,t){return c.a.createElement(x.a,{before:c.a.createElement(K,{day:P[t]}),key:P[t],onClick:a,"data-to":P[t]},e)}));return c.a.createElement(x.b,{header:c.a.createElement(x.c,{mode:"secondary"},"\u0414\u043d\u0438 \u043d\u0435\u0434\u0435\u043b\u0438")},t)},K=function(e){var a=e.day,t=new Date;return a===P[t.getDay()+1]?c.a.createElement(J.a,null):null},V=function(e){var a=e.id,t=e.day,n=e.onBackClick;return c.a.createElement(x.d,{id:a},c.a.createElement(x.e,{left:c.a.createElement(x.f,{onClick:n,"data-to":"main"})},t),"\u0422\u0435\u043b\u043e \u043f\u0430\u043d\u0435\u043b\u0438 ",t)},W=function(e){var a=e.id,t=Object(n.useState)("main"),r=Object(o.a)(t,2),l=r[0],d=r[1],i=function(e){d(e.currentTarget.dataset.to)};return c.a.createElement(x.g,{id:a,activePanel:l},c.a.createElement(x.d,{id:"main"},c.a.createElement(x.e,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),c.a.createElement(A,{go:i})),c.a.createElement(V,{id:"monday",day:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",onBackClick:i}),c.a.createElement(V,{id:"tuesday",day:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a",onBackClick:i}),c.a.createElement(V,{id:"wednesday",day:"\u0421\u0440\u0435\u0434\u0430",onBackClick:i}),c.a.createElement(V,{id:"thursday",day:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433",onBackClick:i}),c.a.createElement(V,{id:"friday",day:"\u041f\u044f\u0442\u043d\u0438\u0446\u0430",onBackClick:i}),c.a.createElement(V,{id:"saturday",day:"\u0421\u0443\u0431\u0431\u043e\u0442\u0430",onBackClick:i}))},q=function(){var e=Object(n.useState)("today"),a=Object(o.a)(e,2),t=a[0],r=a[1],l=function(e){r(e.currentTarget.dataset.story)};return c.a.createElement(m.a,{activeStory:t,tabbar:c.a.createElement(s.a,null,c.a.createElement(k.a,{onClick:l,selected:"today"===t,"data-story":"today",text:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"},c.a.createElement(b.a,null)),c.a.createElement(k.a,{onClick:l,selected:"shedule"===t,"data-story":"shedule",text:"\u041d\u0435\u0434\u0435\u043b\u044f"},c.a.createElement(C.a,null)))},c.a.createElement(D,{id:"today"}),c.a.createElement(W,{id:"shedule"}))};i.a.send("VKWebAppInit"),l.a.render(c.a.createElement(q,null),document.getElementById("root"))}},[[178,1,2]]]);
//# sourceMappingURL=main.a1bdc067.chunk.js.map