"use strict";(self.webpackChunk_heli_os_blog=self.webpackChunk_heli_os_blog||[]).push([[754],{1206:function(e,t,r){r.d(t,{e:function(){return d}});var n=r(2285),i=r(8447),s=r(3919),a=r(8778),o=(0,s.Z)("header",{target:"e4fpb9p2"})((function(e){var t=e.theme,r=e.underline;return(0,a.iv)(r&&(0,a.iv)("border-bottom:1px solid ",t.colors.PRIMARY.ACCENT_4,";"),";")}),";"),u=(0,s.Z)("div",{target:"e4fpb9p1"})(""),l=(0,s.Z)("a",{target:"e4fpb9p0"})("display:flex;justify-content:space-between;align-items:center;border:none!important;border-radius:6px;padding:0.625rem 1.5rem;margin:0 -1.5rem;",(function(e){var t=e.theme;return(0,a.iv)("color:",t.colors.PRIMARY.ACCENT_6,"!important;&:hover{background:",t.colors.PRIMARY.ACCENT_2,"!important;color:",t.colors.PRIMARY.FOREGROUND,"!important;}&>span:first-of-type{max-width:85%;}&>span:last-of-type{max-width:15%;white-space:nowrap;}&:last-of-type{color:",t.colors.PRIMARY.ACCENT_3,";}")}),";"),c=r(2322),d=function(e){var t=e.title,r=e.list,s=e.underline,a=void 0!==s&&s;return(0,c.jsxs)(n.W2,{children:[(0,c.jsx)(o,{underline:a,children:(0,c.jsx)(n.xv,{as:"h3",size:32,weight:800,children:t})}),(0,c.jsx)(n.LZ,{y:1}),(0,c.jsx)(u,{children:r.map((function(e){return(0,c.jsxs)(l,{onClick:function(){return t=e.slug,void(0,i.navigate)(t);var t},children:[(0,c.jsx)(n.xv,{as:"span",size:16,weight:600,children:e.name}),(0,c.jsx)(n.xv,{as:"span",size:14,weight:300,children:e.date})]},e.slug)}))})]})}},6692:function(e,t,r){r.r(t);var n=r(3919),i=r(2285),s=r(2784),a=r(1206),o=r(1803),u=r(2173),l=r(2322);var c=(0,n.Z)("section",{target:"enr8uz70"})({name:"167j9n6",styles:"margin:0 auto;width:100%;max-width:900px;padding:2rem"});t.default=function(e){var t=e.data.allMarkdownRemark.nodes,r=(0,s.useState)(""),n=r[0],d=r[1],m=(0,s.useMemo)((function(){return(0,u.IQ)(t).sort((function(e,t){var r=(0,u.ZU)(e.frontmatter.date);return(0,u.ZU)(t.frontmatter.date).getTime()-r.getTime()}))}),[t]),h=(0,s.useMemo)((function(){return m.map((function(e){var t=e.fields.slug,r=e.frontmatter,n=r.date,i=r.title,s=(0,u.hK)(n),a=s[1],o=s[2];return{time:(0,u.ZU)(n).getTime(),date:Number(a)+"월 "+Number(o)+"일",name:i,slug:t}}))}),[m]),p=(0,s.useMemo)((function(){var e=m.reduce((function(e,t){var r=t.fields.slug,n=t.frontmatter,i=n.date,s=n.title,a=(0,u.hK)(i),o=a[0],l=a[1],c=a[2];return e[o]||(e[o]=[]),e[o].push({name:s,date:Number(l)+"월 "+Number(c)+"일",slug:r}),e}),{}),t=Object.values(e);return Object.keys(e).map((function(e,r){return{year:e,posts:t[r]}})).sort((function(e,t){return Number(t.year)-Number(e.year)}))}),[t]),f=(0,s.useMemo)((function(){return h.filter((function(e){return e.name.toLocaleUpperCase().includes(n.toLocaleUpperCase())}))}),[h,n]),x=0!==n.length;return(0,l.jsxs)(i.W2,{children:[(0,l.jsx)(o.p,{name:"글 목록"}),(0,l.jsxs)(c,{children:[(0,l.jsxs)(i.W2,{children:[(0,l.jsx)("div",{children:(0,l.jsx)(i.Mj,{value:n,onChange:d,size:"large",placeholder:"검색할 텍스트를 입력하세요."})}),(0,l.jsx)(i.LZ,{y:2})]}),x?0===f.length?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.xv,{size:20,weight:600,children:"검색된 결과가 없어요 :("}),(0,l.jsx)(i.xv,{size:20,weight:600,children:"다른 결과를 검색해보시겠어요?"})]}):(0,l.jsx)(a.e,{underline:!0,title:"검색결과",list:f}):p.map((function(e){return(0,l.jsxs)(i.W2,{children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.e,{title:e.year,list:e.posts,underline:!0})}),(0,l.jsx)(i.LZ,{y:2})]},e.year)}))]})]})}}}]);
//# sourceMappingURL=component---src-pages-posts-tsx-3c4b240b94f18e5a6a06.js.map