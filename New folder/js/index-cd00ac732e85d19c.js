(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{75557:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(88078)}])},84387:function(e,a){"use strict";a.Z={src:"/_next/static/media/podcast-placeholder.bbaed1ba.webp",height:350,width:640,blurDataURL:"data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAQAAkA4JaACdAEf3TjuIAD+9+Bcvu2cEu7fibDA6g1hyzOFey//iHP62/7lMwAAAA==",blurWidth:8,blurHeight:4}},60850:function(e,a,t){"use strict";t.d(a,{Z:function(){return m}});var l=t(85893),s=t(91653),r=t(25675),i=t.n(r),d=t(9603),o=t(67294),c=t(84387);t(42543);let n=["bg-brown","bg-maroon","bg-grey/70","bg-orange","bg-black/70"];function m(e){let{data:a,index:t,setPlayer:r}=e;return(0,l.jsxs)("div",{className:"flex flex-col justify-between ".concat(n[t%n.length]," dark:bg-black"),"data-aos":"flip-left","data-aos-duration":300,children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"relative",children:[a.thumbnail?(0,l.jsx)(i(),{src:(0,s.Kj)(a.thumbnail.url),placeholder:"blur",blurDataURL:a.thumbnail.placeholder,width:640,height:350,alt:a.title,className:"w-full dark:grayscale",quality:100}):(0,l.jsx)(i(),{src:c.Z,placeholder:"blur",width:640,height:350,alt:a.title,className:"w-full dark:grayscale",quality:100}),(0,l.jsx)("div",{className:"absolute left-5 bottom-5 cursor-pointer",onClick:()=>r({show:!0,data:a}),children:(0,l.jsx)("div",{className:"bg-maroon dark:bg-black w-[40px] h-[35px] flex items-center",children:(0,l.jsx)(i(),{src:"/icons/play-button-white.svg",width:20,height:20,alt:"Play",className:"mx-auto",quality:100,id:a.title,title:a.title})})})]}),(0,l.jsxs)("div",{className:"p-5",children:[(0,l.jsx)("div",{className:"pb-2 text-2xl text-white leading-tight",children:a.title}),(0,l.jsx)("div",{className:"text-base pb-2 text-white/70",children:a.short_description}),(0,l.jsx)("div",{className:"text-base text-white",children:a.podcast_categories.map(e=>e.title).join(" | ")})]})]}),(0,l.jsx)("div",{className:"px-5 pb-5",children:(0,l.jsx)(e=>{let{url:a}=e,[t,r]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=document.createElement("audio");e.src=a,e.addEventListener("loadedmetadata",()=>{r((0,s.nH)(e.duration))},!1)},[a]),t?(0,l.jsxs)("div",{className:"text-base text-white/70 flex items-center",children:[(0,l.jsx)("span",{className:"mr-1",children:(0,l.jsx)(d.Z,{color:"alwaysWhite"})}),(0,l.jsx)("span",{children:t})]}):(0,l.jsx)(l.Fragment,{})},{url:(0,s.Kj)(a.file.url)})})]},t)}},42543:function(e,a,t){"use strict";var l=t(85893),s=t(11163),r=t(67294);a.Z=e=>{let{timestamp:a}=e,[t,i]=(0,r.useState)(""),{locale:d}=(0,s.useRouter)();return(0,r.useEffect)(()=>{a&&i(((e,a)=>{let t=new Date(e.includes("T")?e:"".concat(e,"T00:00:00.000Z")).toLocaleDateString(a,{year:"numeric",month:"long",day:"numeric"});if("en"!==a)return t;{let e=t.replace(",","").split(" ");return"".concat(e[1]," ").concat(e[0],", ").concat(e[2])}})(a,d))},[a,d]),(0,l.jsx)(l.Fragment,{children:t})}},58380:function(e,a,t){"use strict";t.d(a,{Z:function(){return s}});var l=t(85893);function s(e){let{classNames:a}=e;return(0,l.jsx)("div",{className:"".concat(a," h-[1px]")})}},9603:function(e,a,t){"use strict";t.d(a,{Z:function(){return i}});var l=t(85893),s=t(67294),r=t(1571);function i(e){let{color:a}=e,[t,i]=(0,s.useState)(!1),{resolvedTheme:d}=(0,r.F)();if((0,s.useEffect)(()=>{i(!0)},[]),!t)return null;let o={white:"light"===d?"/icons/clockWhite.svg":"/icons/clockGrey.svg",grey:"light"===d?"/icons/clockGrey.svg":"/icons/clockWhite.svg",alwaysWhite:"/icons/clockWhite.svg",alwaysGrey:"/icons/clockGrey.svg"};return(0,l.jsx)("img",{src:"".concat("white"===a?o.white:"alwaysWhite"===a?o.alwaysWhite:"alwaysGrey"===a?o.alwaysGrey:o.grey,"  "),width:"22",height:"22",alt:"clock"})}},88078:function(e,a,t){"use strict";t.r(a),t.d(a,{__N_SSG:function(){return ee},default:function(){return ea}});var l=t(85893),s=t(97155),r=t(67294),i=t(23436),d=t.n(i),o=t(25675),c=t.n(o),n=t(60419),m=t(91653),h=t(11163);function x(e){let{sectors:a}=e,{locale:t}=(0,h.useRouter)(),s=a.filter(e=>e.desktop_banner),[i,o]=(0,r.useState)(0),x=(0,n.h)(),[A,u]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=setInterval(()=>{document.hidden||o(e=>(e+1)%s.length)},2500);return()=>{clearInterval(e)}},[s.length,t]),(0,r.useEffect)(()=>{let e=setTimeout(function(){u(!0)},2500);return()=>{clearTimeout(e)}},[t]),(0,r.useEffect)(()=>{u(!1),o(0)},[t]),(0,l.jsxs)("div",{className:"w-full h-[100vh]",children:[(0,l.jsx)("div",{className:"w-full h-full bg-black/30 absolute top-0 z-[2]"}),s.map((e,a)=>(0,l.jsx)(c(),{src:(0,m.Kj)(e.desktop_banner.url),placeholder:"blur",blurDataURL:e.desktop_banner.placeholder,width:"1920",height:"1080",alt:e.title,className:"dark:grayscale ".concat(d().fadeImage," ").concat(i===a?d().fadeIn:d().fadeOut),priority:!a||1>=Math.abs(i-a)},a)),(0,l.jsx)("div",{className:"".concat(d().BannerContainer," w-full h-full z-[3]"),children:(0,l.jsx)("div",{className:"container mx-auto px-5 h-full w-full flex items-center justify-center",children:(0,l.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[(0,l.jsx)("div",{className:"w-full text-center lg:text-right text-white text-4xl xl:text-5xl uppercase font-[300] pb-3 lg:pb-0 lg:flex ".concat(d().title," tracking-wide"),children:(0,l.jsx)("span",{children:x("home:banner.title")})}),(0,l.jsx)("div",{className:"relative flex justify-center lg:justify-start",children:s.map((e,a)=>(0,l.jsx)("h1",{className:"".concat(i===a?d().slideAndFadeIn:d().slideAndFadeOut," text-white text-4xl xl:text-5xl font-[800] uppercase text-center lg:text-left tracking-wide"),children:0===a||A?e.title:""},a))})]})})})]})}var A=t(91715);function u(e){let{leaders:a}=e,t=(0,n.h)();return(0,l.jsxs)("div",{className:"pt-20 pb-20 lg:pb-0 bg-white dark:bg-grey",children:[(0,l.jsxs)("div",{className:"container mx-auto px-5 pb-10","data-aos":"fade-up","data-aos-duration":"300",children:[(0,l.jsx)("div",{className:"text-4xl font-[400] text-maroon dark:text-white",children:t("home:leadership.title")}),(0,l.jsx)("div",{className:"text-base text-black dark:text-white font-[400]",children:t("home:leadership.description")})]}),(0,l.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-0 gap-10 sm:gap-0",children:a.map((e,a)=>(0,l.jsxs)("div",{className:"relative","data-aos":"fade-up","data-aos-duration":"300",children:[(0,l.jsx)(c(),{src:(0,m.Kj)(e.image.url),placeholder:"blur",blurDataURL:e.image.placeholder,width:"960",height:"540",alt:e.caption,className:"dark:grayscale !w-full",quality:100}),(0,l.jsx)("div",{className:"sm:absolute sm:bottom-0 sm:w-full sm:h-full sm:bg-gradient-to-t sm:from-black dark:sm:from-black/90 sm:from-10% sm:via-black/60 sm:via-40% sm:to-black/0",children:(0,l.jsxs)("div",{className:"flex flex-col h-full justify-end pt-5 sm:p-10",children:[(0,l.jsx)("div",{className:"text-2xl sm:text-3xl text-black dark:text-white sm:text-white mb-5 leading-none",children:e.caption}),(0,l.jsxs)("div",{children:[(0,l.jsx)(A.default,{url:e.url,ctaText:t("common:read-more"),"aria-label":t("common:read-more"),classNames:"text-white dark:text-white hidden sm:inline-flex",color:"alwaysWhite"}),(0,l.jsx)(A.default,{url:e.url,ctaText:t("common:read-more"),"aria-label":t("common:read-more"),classNames:"text-maroon dark:text-white sm:hidden",color:"maroon"})]})]})})]},a))})]})}t(200),t(72988);var b=t(22961),g=t(18357);function f(e){let{sectors:a}=e,{ref:t,inView:s}=(0,g.YD)({triggerOnce:!0,fallbackInView:!0}),r=(0,n.h)();return(0,l.jsxs)("div",{className:"bg-white dark:bg-black pt-20",ref:t,children:[(0,l.jsx)("div",{className:"container mx-auto px-5",children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-start gap-5 pb-5 lg:pb-10",children:[(0,l.jsxs)("div",{className:"min-w-[300px]","data-aos":"fade-up","data-aos-duration":"300",children:[(0,l.jsx)("div",{className:"text-4xl font-[400] text-maroon dark:text-white",children:r("home:businesses.title")}),(0,l.jsx)("div",{className:"text-base font-[400] text-black dark:text-white",children:r("home:businesses.description")})]}),(0,l.jsx)("div",{className:"w-full",children:(0,l.jsxs)("div",{className:"md:max-w-[800px] md:ml-auto","data-aos":"fade-up","data-aos-duration":"300",children:[(0,l.jsx)("p",{className:"text-base leading-normal text-black dark:text-white",children:r("home:businesses.long-description")}),(0,l.jsx)(A.default,{url:"/businesses",ctaText:"".concat(r("common:view-all")," ").concat(r("menu:businesses")),classNames:"text-maroon dark:text-white mt-5 hidden md:inline-flex",color:"maroon"})]})})]})}),s?(0,l.jsx)(b.Z,{items:a,type:"sectors",pbClass:"pb-5"}):(0,l.jsx)(l.Fragment,{}),(0,l.jsx)("div",{className:"text-center",children:(0,l.jsx)(A.default,{url:"/businesses",ctaText:"".concat(r("common:view-all")," ").concat(r("menu:businesses")),classNames:"text-maroon dark:text-white mt-5 mb-20",color:"maroon"})})]})}var p={src:"/_next/static/media/a-force-for-good.1b9567af.webp",height:900,width:1920,blurDataURL:"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAQAAkA4JYwCdAEPBFNuwAD97SLXe8MSMDpXhC1vDA6NHbisetMaalXq8rgAAAA=",blurWidth:8,blurHeight:4};function w(){let e=(0,n.h)();return(0,l.jsxs)("div",{className:"relative bg-white dark:bg-black",children:[(0,l.jsx)("div",{className:"hidden sm:block absolute top-0 bg-black/40 w-full h-full z-[1]"}),(0,l.jsx)(c(),{src:p,placeholder:"blur",width:"1920",height:"900",alt:e("home:video.title"),className:"dark:grayscale w-full",quality:100}),(0,l.jsx)("div",{className:"sm:absolute top-0 w-full h-full z-[2]",children:(0,l.jsxs)("div",{className:"flex flex-col h-full w-full sm:items-center sm:justify-center pb-20 px-5 py-5",children:[(0,l.jsxs)("div",{className:"text-4xl sm:text-6xl font-[400] mb-3","data-aos":"fade-up","data-aos-duration":"300",children:[(0,l.jsxs)("span",{className:"text-maroon dark:text-white",children:[e("home:video.content")[0]," "]}),(0,l.jsx)("span",{className:"text-black sm:text-white dark:text-white",children:e("home:video.content")[1]})]}),(0,l.jsx)("div",{className:"hidden sm:block","data-aos":"fade-up","data-aos-duration":"300",children:(0,l.jsx)(A.default,{url:"/a-force-for-good",ctaText:e("common:read-more"),classNames:"text-white dark:text-white",color:"alwaysWhite","aria-label":e("common:read-more")})}),(0,l.jsx)("div",{className:"sm:hidden","data-aos":"fade-up","data-aos-duration":"300",children:(0,l.jsx)(A.default,{url:"/a-force-for-good",ctaText:e("common:read-more"),"aria-label":e("common:read-more"),classNames:"text-maroon dark:text-white",color:"maroon"})})]})})]})}function k(e){let{stories:a}=e,t=(0,n.h)();return(0,l.jsxs)("div",{className:"bg-white dark:bg-grey pt-20 pb-20 md:pb-0 overflow-hidden",children:[(0,l.jsx)("div",{className:"container mx-auto px-5",children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-start gap-5 pb-10",children:[(0,l.jsxs)("div",{className:"min-w-[350px]","data-aos":"fade-up","data-aos-duration":"300",children:[(0,l.jsx)("div",{className:"text-4xl font-[400] text-maroon dark:text-white",children:t("home:media.title")}),(0,l.jsx)("div",{className:"text-base font-[400] text-black dark:text-white",children:t("home:media.description")})]}),(0,l.jsx)("div",{className:"w-full",children:(0,l.jsxs)("div",{className:"md:max-w-[800px] md:ml-auto","data-aos":"fade-up","data-aos-duration":"300",children:[(0,l.jsx)("p",{className:"text-base leading-normal text-black dark:text-white",children:t("home:media.long-description")}),(0,l.jsx)(A.default,{url:"/media",ctaText:"".concat(t("common:visit")," ").concat(t("menu:media")),classNames:"text-maroon dark:text-white mt-5",color:"maroon"})]})})]})}),(0,l.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-0",children:a.map((e,a)=>(0,l.jsxs)("div",{className:"relative","data-aos":"flip-left","data-aos-duration":"300","data-aos-delay":"100",children:[(0,l.jsx)("div",{className:"hidden md:block absolute top-0 w-full h-full bg-gradient-to-t from-black/80 dark:from-black/90 from-10% to-black/0 z-[1]"}),(0,l.jsx)(c(),{src:(0,m.Kj)(e.thumbnail.url),placeholder:"blur",blurDataURL:e.thumbnail.placeholder,width:"1000",height:"700",alt:e.title,className:"dark:grayscale",quality:100}),(0,l.jsxs)("div",{className:"md:absolute bottom-0 z-[1] w-full p-5 md:p-10 pb-0 sm:pb-10 xl:pb-10",children:[(0,l.jsx)("div",{className:"text-2xl sm:text-3xl text-black dark:text-white md:text-white mb-2 md:mb-5",children:e.title}),(0,l.jsx)(A.default,{url:e.url,ctaText:t("common:read-more"),classNames:"text-maroon dark:text-white md:hidden","aria-label":t("common:read-more"),color:"maroon"}),(0,l.jsx)(A.default,{url:e.url,ctaText:t("common:read-more"),classNames:"text-white dark:text-white hidden md:inline-flex","aria-label":t("common:read-more"),color:"alwaysWhite"})]})]},a))})]})}function j(e){let{story:a}=e,{locale:t}=(0,h.useRouter)(),s=(0,n.h)();return(0,l.jsxs)("div",{className:"bg-white dark:bg-black pt-20 pb-20 lg:pb-0",children:[(0,l.jsx)("div",{className:"container mx-auto px-5",children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-start gap-5 pb-10",children:[(0,l.jsxs)("div",{className:"md:min-w-[350px]","data-aos":"fade-up","data-aos-duration":"300",children:[(0,l.jsx)("div",{className:"text-4xl font-[400] text-maroon dark:text-white",children:s("home:community.title")}),(0,l.jsx)("div",{className:"text-base font-[400] text-black dark:text-white",children:s("home:community.description")})]}),(0,l.jsx)("div",{className:"w-full",children:(0,l.jsxs)("div",{className:"md:max-w-[800px] md:ml-auto","data-aos":"fade-up","data-aos-duration":"300",children:[(0,l.jsx)("p",{className:"text-base leading-normal text-black dark:text-white",children:s("home:community.long-description")}),(0,l.jsx)(A.default,{url:"/community",ctaText:"".concat(s("common:visit")," ").concat(s("menu:community")),classNames:"text-maroon dark:text-white mt-5",color:"maroon"})]})})]})}),(0,l.jsxs)("div",{className:"relative","data-aos":"fade-up","data-aos-duration":"300",children:[(0,l.jsx)("div",{className:"hidden lg:block absolute w-full h-full top-0 bg-black/40"}),(0,l.jsx)(c(),{src:(0,m.Kj)(a.image.url),placeholder:"blur",blurDataURL:a.image.placeholder,width:"1920",height:"600",alt:s("home:community.title"),quality:100,className:"dark:grayscale",style:"ar"===t?{transform:"rotateY(180deg)"}:{}}),(0,l.jsx)("div",{className:"lg:absolute w-full h-full top-0",children:(0,l.jsxs)("div",{className:"container mx-auto px-5 pt-5 h-full flex flex-col justify-center",children:[(0,l.jsx)("div",{className:"lg:w-[30%] text-2xl sm:text-3xl text-black dark:text-white lg:text-white",children:a.title}),(0,l.jsx)("div",{className:"lg:w-[30%] text-base text-black dark:text-white lg:text-white pt-5",children:a.description}),(0,l.jsx)("div",{className:"lg:hidden",children:(0,l.jsx)(A.default,{url:a.url,ctaText:s("common:know-more"),"aria-label":s("common:know-more"),classNames:"text-maroon dark:text-white mt-5",color:"maroon"})}),(0,l.jsx)("div",{className:"hidden lg:block",children:(0,l.jsx)(A.default,{url:a.url,ctaText:s("common:know-more"),"aria-label":s("common:know-more"),classNames:"text-white dark:text-white mt-5",color:"alwaysWhite"})})]})})]})]})}var v=t(69968),N=t.n(v);function y(e){let{innovations:a}=e,{locale:s}=(0,h.useRouter)(),[i,d]=(0,r.useState)("ar"===s?"rtl":""),[o,x]=(0,r.useState)(null),u=(0,n.h)();return((0,r.useEffect)(()=>{(async()=>{try{let e=await t.e(2261).then(t.bind(t,2261)),a=e.Swiper,l=e.SwiperSlide,{Autoplay:s,Pagination:r,Navigation:i,Scrollbar:d}=await t.e(4135).then(t.bind(t,94135));x({Swiper:a,SwiperSlide:l,Autoplay:s,Pagination:r,Navigation:i,Scrollbar:d}),t(30889),t(54158),t(59087),t(21306)}catch(e){console.error("Error loading Swiper:",e)}})()},[]),(0,r.useEffect)(()=>{d("ar"===s?"rtl":"")},[s]),o)?(0,l.jsx)("div",{className:"bg-white dark:bg-grey py-20",children:(0,l.jsxs)("div",{className:"container mx-auto px-5",children:[(0,l.jsxs)("div",{className:"flex flex-col md:flex-row items-start gap-5",children:[(0,l.jsxs)("div",{className:"md:min-w-[350px]","data-aos":"fade-up","data-aos-duration":"300",children:[(0,l.jsx)("div",{className:"text-4xl font-[400] text-maroon dark:text-white",children:u("home:innovation.title")}),(0,l.jsx)("div",{className:"text-base font-[400] text-black dark:text-white",children:u("home:innovation.description")})]}),(0,l.jsx)("div",{className:"w-full",children:(0,l.jsxs)("div",{className:"md:max-w-[800px] md:ml-auto","data-aos":"fade-up","data-aos-duration":"300",children:[(0,l.jsx)("p",{className:"text-base leading-normal text-black dark:text-white",children:u("home:innovation.long-description")}),(0,l.jsx)(A.default,{url:"/businesses/innovation",ctaText:"".concat(u("common:visit")," ").concat(u("menu:innovation")),classNames:"text-maroon dark:text-white mt-5",color:"maroon"})]})})]}),(0,l.jsx)("div",{className:"innovationWithNav dark:innovationWithNav","data-aos":"fade-up","data-aos-duration":"300",children:(0,l.jsx)(o.Swiper,{dir:i,spaceBetween:15,scrollbar:!0,breakpoints:{0:{slidesPerView:1.2}},modules:[o.Pagination,o.Autoplay,o.Navigation,o.Scrollbar],navigation:!0,onPaginationRender:(e,a)=>{a.classList.add("".concat(N().customPagination))},autoplay:{delay:6e3,pauseOnMouseEnter:!0,disableOnInteraction:!1},children:a.map((e,a)=>(0,l.jsx)(o.SwiperSlide,{style:{height:"auto"},children:(0,l.jsxs)("div",{className:"py-10",children:[(0,l.jsx)(c(),{src:(0,m.Kj)(e.image.url),placeholder:"blur",blurDataURL:e.image.placeholder,width:"1200",height:"300",alt:u("home:community.title"),className:"dark:grayscale object-cover w-[100%] h-[150px] lg:h-[250px]",quality:100}),(0,l.jsxs)("div",{className:"py-5",children:[(0,l.jsx)("div",{className:"text-2xl sm:text-3xl mb-5",children:e.title}),(0,l.jsx)(A.default,{url:e.url,ctaText:u("common:read-more"),classNames:"text-maroon dark:text-white","aria-label":u("common:read-more"),color:"maroon"})]})]})},a))},i)})]})}):(0,l.jsx)(l.Fragment,{})}var D={src:"/_next/static/media/careers-gal-1.75139602.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAkA4JZwCdADyfvaAAP7ykv/e+9l2ZPZzKZTjnY1bRiE8tAdHRNCIQAAA",blurWidth:8,blurHeight:5},U={src:"/_next/static/media/careers-gal-2.c344b08d.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAkA4JZwCw7ED+yN4AAD+9BYYn1kJ8hJ/LugbderJHmfn5y8wdAxzeloAAAA=",blurWidth:8,blurHeight:5},R={src:"/_next/static/media/careers-gal-3.259b8247.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoIAAUAAkA4JZQCdADW0jEAAP70FeFxNdQ3XtQtUbHgij7nGsf/vQQP6hL7RH/2wAqhQWGvTeJcAA==",blurWidth:8,blurHeight:5},Q={src:"/_next/static/media/careers-gal-4.72824d4e.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoIAAUAAkA4JZwCxC8AFxNalmAA/vQWGJ28tEZf8vnfKxmwGNQX2LA8lzGm+SzRTs70AAAA",blurWidth:8,blurHeight:5},_={src:"/_next/static/media/careers-gal-5.987f2433.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoIAAUAAkA4JZQCdAED/TJ3oAD+921lb3mOIPn0Hd6PtpPvXtKDC7FRRR/f/ihBl+EsLPA029zlvkBIAAA=",blurWidth:8,blurHeight:5},I={src:"/_next/static/media/careers-gal-6.1af25e5e.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACwAQCdASoIAAUAAkA4JYgCdADyf/4wAP72fcTyPt3BZ43hHzr7Gspmv5Y5/wdYIMRS6OhAcnurFazdS0tnOCkWwAA=",blurWidth:8,blurHeight:5},C={src:"/_next/static/media/careers-gal-7.c4ab5768.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAkA4JZQC7AEf+8NxUAD+92ivl5DfcVF3r7HtpoKnEFMxUvPU9XZ+Y3Qr0HlLHPS5uYAAAA==",blurWidth:8,blurHeight:5},H={src:"/_next/static/media/careers-gal-8.fe0321c8.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAUAAkA4JZQCdAEf/uAYMAD+920E3mSXzft9TVW9AdFpw4TjFmx2Ghx4mZ1FXcf3nBQCQAA=",blurWidth:8,blurHeight:5},J={src:"/_next/static/media/careers-gal-9.4ae9dfe8.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAACwAQCdASoIAAUAAkA4JZgCdADx+IRAAP73bUHkfb/Eo93ln92g2StHkGriXZJIlMNCV35iHL93R788pQUpEFPP3ffbuYAA",blurWidth:8,blurHeight:5},L={src:"/_next/static/media/careers-gal-10.326e46d7.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAUAAkA4JYwCdAEf3U2u3AAA/vdpQWFcwKevISQRcNNYvSqL7atvEzPg/8vhh9APEdAWAAA=",blurWidth:8,blurHeight:5},S={src:"/_next/static/media/careers-gal-11.87101863.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAkA4JZwAAu1xD0aAAP73bUHZxqJozUEwndQwR8368nfrO3//Gx3vqH4raoHbGAAA",blurWidth:8,blurHeight:5},B={src:"/_next/static/media/careers-gal-12.b25e1e81.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAkA4JYwCw7ED/TOK8AD+9BbLmt0/vX6mqAhpTCKcLjDuMTB0yvh8r17+AAA=",blurWidth:8,blurHeight:5},E={src:"/_next/static/media/careers-gal-13.89ba6dd1.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAkA4JZwCdAEf9nrPAAD+9BYbFKJDm/7p69IzfFV7B5VtijMwMKvlKfUAAAA=",blurWidth:8,blurHeight:5},W={src:"/_next/static/media/careers-gal-14.2008df97.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAkA4JZwCdAEYH79a8AD+9Bbenwc64cnTQ9ho9esrBDzBFUFkkNGhHR9oAAA=",blurWidth:8,blurHeight:5},G={src:"/_next/static/media/careers-gal-15.de19072e.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAkA4JYwCdAED3+LgAP71YjbRzQ9+0kh6JJ2I7pIFZ3olRatodRjcWNEZLqAAAA==",blurWidth:8,blurHeight:5},Z={src:"/_next/static/media/careers-gal-16.c98d2241.webp",height:150,width:250,blurDataURL:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAkA4JZQCdADdNF4EAAD+9WEXy3hso+9WbIaKRRRlOQrbn2/+M16/sU+XBLy86d9lBDoQAA==",blurWidth:8,blurHeight:5};function T(){let e=(0,n.h)();return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"grid grid-cols-4 lg:grid-cols-8 bg-grey/5 dark:bg-black/90",children:[D,U,R,Q,_,I,C,H].map((a,t)=>(0,l.jsx)("div",{"data-aos":"flip-left","data-aos-duration":"300","data-aos-delay":50*t,children:(0,l.jsx)(c(),{src:a,placeholder:"blur",width:"250",height:"150",alt:e("home:careers.title"),className:"dark:grayscale w-full",quality:100})},t))}),(0,l.jsx)("div",{className:"bg-grey/5 dark:bg-black/90 py-10 md:py-20",children:(0,l.jsx)("div",{className:"container px-5 mx-auto",children:(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10",children:[(0,l.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"300",children:[(0,l.jsx)("div",{className:"text-4xl font-[400] text-maroon dark:text-white mb-5",children:e("home:careers.title")}),(0,l.jsx)("div",{className:"text-base leading-normal text-black dark:text-white mb-5",children:e("home:careers.description")}),(0,l.jsx)("div",{children:(0,l.jsx)(A.default,{url:"https://careers.adityabirla.com/",ctaText:e("common:explore-now"),classNames:"text-maroon dark:text-white","aria-label":e("common:explore-now"),color:"maroon",type:"external",target:"_blank"})})]}),(0,l.jsx)("div",{className:"flex flex-col justify-center md:items-end","data-aos":"fade-up","data-aos-duration":"300",children:e("home:careers.links").map((e,a)=>(0,l.jsx)("div",{className:"md:w-[360px] md:text-right py-3 border-b border-b-maroon dark:border-b-white/40 last:border-none",children:(0,l.jsx)(A.default,{url:e.url,ctaText:e.ctaText,classNames:"text-maroon dark:text-white leading-tight !text-[15px]","aria-label":e.ctaText,color:"maroon",type:"external",target:"_blank"})},a))})]})})}),(0,l.jsx)("div",{className:"hidden lg:grid grid-cols-4 lg:grid-cols-8 bg-grey/5 dark:bg-black/90",children:[J,L,S,B,E,W,G,Z].map((a,t)=>(0,l.jsx)("div",{"data-aos":"flip-left","data-aos-duration":"100","data-aos-delay":50*t,children:(0,l.jsx)(c(),{src:a,placeholder:"blur",width:"250",height:"150",alt:e("home:careers.title"),className:"dark:grayscale w-full",quality:100})},t))})]})}var X=t(58380),F={src:"/_next/static/media/fours-for-good.a58033d0.webp",height:900,width:1920,blurDataURL:"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAQAAkA4JaACdADx4pEAAP5byh6c86pr75SCdcG091v6regfkuJPieQFGWOAAAA=",blurWidth:8,blurHeight:4},P={src:"/_next/static/media/fours-for-good-mob.4f3646f2.webp",height:900,width:1920,blurDataURL:"data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAQAAkA4JbAC7AEOjizbAAD+8BqOH1/gHUvwOR4NZVAjv1D8Ue+hXnH5+/g307dAAA==",blurWidth:8,blurHeight:4},Y={src:"/_next/static/media/fours-for-good-logo.30c404a4.webp",height:207,width:250,blurDataURL:"data:image/webp;base64,UklGRr4AAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAAAAAF++vAAAAAACe+LAIAAAANuig8/6bAAC6z/b///gYF5Gr0fD0i3l2fHt4jQAAAF6AT4qJlDkAVlA4IF4AAADQAQCdASoIAAcAAkA4JbACdAD0RxSyAAD+5DGAqYd+pBQ4oiRe1vh+BUXuF0qHYi1WiZLy5Jkw3R9rjl7bdSDz52y2cAsY9Rf6S0D9z/1/+v/NLxCG/aDz2N5IAAAA",blurWidth:8,blurHeight:7};function V(){let e=(0,n.h)();return(0,l.jsxs)("section",{children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(c(),{src:F,placeholder:"blur",width:"1920",height:"900",alt:e("fours-for-good:fours-for-good.title")[0],className:"dark:grayscale w-full hidden md:block",quality:100}),(0,l.jsx)("div",{className:"absolute w-[100%] h-full top-0 hidden md:block",children:(0,l.jsx)("div",{className:"container mx-auto h-full",children:(0,l.jsxs)("div",{className:"flex flex-col h-full justify-center text-4xl lg:text-5xl xl:text-6xl text-white font-[500] p-5",children:[(0,l.jsx)("div",{"data-aos":"fade-up","data-aos-duration":"300",children:(0,l.jsx)(c(),{src:Y,placeholder:"blur",width:"180",height:"149",alt:e("fours-for-good:fours-for-good.title")[0],className:"dark:grayscale mb-10 hidden md:block",quality:100})}),(0,l.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"300",children:[(0,l.jsx)("span",{className:"block",children:e("fours-for-good:fours-for-good.title")[1]}),(0,l.jsx)("span",{className:"block",children:e("fours-for-good:fours-for-good.title")[2]})]}),(0,l.jsx)("div",{"data-aos":"fade-up","data-aos-duration":"300",children:(0,l.jsx)(A.default,{ctaText:e("common:read-more"),href:"https://foursforgood.in/",classNames:"text-white",type:"external",color:"alwaysWhite",target:"_blank"})})]})})})]}),(0,l.jsx)(c(),{src:P,placeholder:"blur",width:"1920",height:"900",alt:e("fours-for-good:fours-for-good.title")[0],className:"dark:grayscale w-full md:hidden",quality:100}),(0,l.jsx)("div",{className:"md:hidden pb-20 bg-white dark:bg-black",children:(0,l.jsxs)("div",{className:"flex flex-col h-full w-full md:items-center md:justify-center px-5 pt-5",children:[(0,l.jsxs)("div",{className:"text-4xl md:text-6xl font-[400] mb-3 text-grey dark:text-white md:text-white","data-aos":"fade-up","data-aos-duration":"300",children:[(0,l.jsx)("span",{className:"block",children:e("fours-for-good:fours-for-good.title")[1]}),(0,l.jsx)("span",{className:"block",children:e("fours-for-good:fours-for-good.title")[2]})]}),(0,l.jsx)("div",{className:"md:hidden","data-aos":"fade-up","data-aos-duration":"300",children:(0,l.jsx)(A.default,{ctaText:e("common:read-more"),href:"https://foursforgood.in/",classNames:"text-maroon dark:text-white",type:"external",color:"maroon",target:"_blank"})})]})})]})}var z=t(5152),q=t.n(z),O=t(60850);function M(e){let{podcasts:{data:a,meta:t},setPlayer:s}=e,{locale:r}=(0,h.useRouter)(),i=(0,n.h)();return(0,l.jsxs)("div",{className:"py-20 dark:bg-grey ".concat(t?"bg-white":"bg-grey/5 addToNav"),children:[(0,l.jsxs)("div",{className:"container mx-auto px-5",children:[(0,l.jsx)("div",{className:"text-4xl font-[400] text-maroon dark:text-white","data-aos":"fade-up","data-aos-duration":300,children:i("podcast:banner.title")}),(0,l.jsx)("div",{className:"text-base font-[400] text-black dark:text-white mb-10",children:i("podcast:banner.description")})]}),(0,l.jsx)("div",{className:"container mx-auto px-5",children:a.length?(0,l.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mb-10",children:a.map((e,a)=>(0,l.jsx)(O.Z,{data:e,index:a,setPlayer:s},a))}):(0,l.jsx)("div",{className:"text-grey/70 dark:text-white/70 text-base text-center",children:i("common:no-data")})})]})}var K=t(10428);let $=q()(()=>Promise.all([t.e(4),t.e(3028),t.e(3757),t.e(2823)]).then(t.bind(t,82823)),{loadableGenerated:{webpack:()=>[82823]},loading:()=>(0,l.jsx)(K.Z,{}),ssr:!1});var ee=!0;function ea(e){let{sectors:a,leaders:t,innovations:i,story:d,featuredStories:o,meta:c,podcasts:m}=e;(0,n.h)();let[h,A]=(0,r.useState)({show:!1,data:null});return(0,l.jsxs)(s.Z,{pageMeta:c,children:[(0,l.jsx)(x,{sectors:a}),(0,l.jsx)(X.Z,{classNames:"h-[25px] bg-white dark:bg-black"}),(0,l.jsx)(w,{}),(0,l.jsx)(X.Z,{classNames:"bg-grey/20 dark:bg-grey/80 dark:hidden sm:hidden"}),(0,l.jsx)(u,{leaders:t}),(0,l.jsx)(X.Z,{classNames:"bg-grey/20 dark:bg-grey/80 dark:hidden lg:hidden"}),(0,l.jsx)(f,{sectors:a.slice(0,12)}),(0,l.jsx)(X.Z,{classNames:"bg-grey/20 dark:bg-grey/80 dark:hidden sm:hidden"}),(0,l.jsx)(V,{}),(0,l.jsx)(X.Z,{classNames:"bg-grey/20 dark:bg-grey/80 md:hidden"}),(0,l.jsx)(k,{stories:o}),(0,l.jsx)(X.Z,{classNames:"bg-grey/20 dark:bg-grey/80 dark:hidden md:hidden"}),(0,l.jsx)(j,{story:d}),(0,l.jsx)(X.Z,{classNames:"bg-grey/20 dark:bg-grey/80 dark:hidden lg:hidden"}),(0,l.jsx)(y,{innovations:i}),(0,l.jsx)(T,{}),(0,l.jsx)(M,{podcasts:m,setPlayer:A}),h.show?(0,l.jsx)($,{player:h,setPlayer:A}):(0,l.jsx)(l.Fragment,{})]})}},23436:function(e){e.exports={title:"HomeBanner_title__e2TBA",fadeImage:"HomeBanner_fadeImage___6TXY",fadeIn:"HomeBanner_fadeIn__k05YE",fadeOut:"HomeBanner_fadeOut__2fI13",BannerContainer:"HomeBanner_BannerContainer__DuMbh",slideAndFadeOut:"HomeBanner_slideAndFadeOut__GNYjU",slideAndFadeIn:"HomeBanner_slideAndFadeIn__GrMRJ"}},69968:function(e){e.exports={customPagination:"HomeInnovations_customPagination__LiM61"}},200:function(e){e.exports={cardsContainer:"HomeLeadership_cardsContainer__DUOXp",card:"HomeLeadership_card__ablbY",thumbnail:"HomeLeadership_thumbnail__Ux8I8",play:"HomeLeadership_play__PFbLL",overlay:"HomeLeadership_overlay__5RNM8",content:"HomeLeadership_content__pE_6Q"}},21306:function(){},59087:function(){},54158:function(){},30889:function(){}},function(e){e.O(0,[9814,3766,9746,9297,2888,9774,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);