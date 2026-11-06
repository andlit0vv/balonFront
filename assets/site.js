/* BALON — shared chrome for every page: icon sprite, header, menu, footer, cookie banner.
   Each page has <header class="hdr wrap" id="hdr"></header> and <footer class="ft wrap" id="ft"></footer>
   and sets <body data-page="...">: "home" for the shop, otherwise the page slug. */
(()=>{
const page=document.body.dataset.page||"";
const home=page==="home";
/* on the shop page links are hash routes; from other pages they open the shop */
const shop=h=>home?`href="#${h}" data-go="${h}"`:`href="index.html#${h}"`;

const TG_CHANNEL="https://t.me/balon_moscow";
const TG_SUPPORT="https://t.me/balonmoscow";
const MAIL="balonmoscow@yandex.ru";
const PHONE="+7 (916) 087-00-50", PHONE_HREF="tel:+79160870050";

const DOCS=[
  {slug:"oferta",t:"Публичная оферта"},
  {slug:"privacy",t:"Политика обработки персональных данных"},
  {slug:"delivery",t:"Доставка, оплата и возврат"},
  {slug:"contacts",t:"Контакты"}
];

/* ---------- icons ---------- */
const sprite=document.createElement("div");
sprite.className="sprite";sprite.setAttribute("aria-hidden","true");
sprite.innerHTML=`<svg width="0" height="0">
  <symbol id="arr" viewBox="0 0 24 24"><path d="M3.5 12h16M13.5 5.5 20 12l-6.5 6.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></symbol>
  <symbol id="bag" viewBox="0 0 24 24"><path d="M4.5 8.5h15l-1.2 12h-12.6zM8.5 8.5V7a3.5 3.5 0 0 1 7 0v1.5" fill="none" stroke="currentColor" stroke-width="1.3"/></symbol>
  <symbol id="chat" viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M8 10.5h8" stroke="currentColor" stroke-width="1.3"/></symbol>
  <symbol id="tg" viewBox="0 0 24 24"><path fill="currentColor" d="M21.6 3.4 2.9 10.6c-1.3.5-1.3 1.2-.2 1.6l4.8 1.5 1.8 5.6c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8L23 4.9c.3-1.4-.5-2-1.4-1.5ZM8.4 13.3l9.8-6.2c.5-.3.9-.1.5.3l-8.1 7.3-.3 3.4z"/></symbol>
  <symbol id="info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 10.5v6M12 7.2v1.4" stroke="currentColor" stroke-width="1.6"/></symbol>
  <symbol id="bars" viewBox="0 0 24 24"><path d="M3.5 8.5h17M3.5 15.5h17" stroke="currentColor" stroke-width="1.4"/></symbol>
  <symbol id="close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.4"/></symbol>
  <symbol id="search" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="m15.5 15.5 5 5" stroke="currentColor" stroke-width="1.4"/></symbol>
  <symbol id="pin" viewBox="0 0 24 24"><path d="M12 21.5s-7-6.6-7-12a7 7 0 0 1 14 0c0 5.4-7 12-7 12Z" fill="currentColor"/><circle cx="12" cy="9.5" r="2.6" fill="#0A0B0A"/></symbol>
</svg>`;
document.body.prepend(sprite);

/* the logo uses a clipPath, so every copy needs its own id */
let lc=0;
const logo=()=>{return `<svg class="lgo" viewBox="0 0 1890 476" fill="currentColor" aria-hidden="true">
<g transform="translate(-136.135673,613.799343) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
<path d="M1610 6126 c-109 -31 -177 -86 -219 -176 l-26 -55 -3 -1435 c-2 -1002 0 -1465 8 -1533 14 -120 56 -275 109 -398 221 -512 696 -895 1315 -1059 229 -61 345 -74 631 -74 223 0 278 3 389 22 156 27 248 50 381 96 357 122 645 302 890 557 270 282 437 603 499 960 102 586 -139 1215 -619 1617 -241 203 -528 348 -844 427 -209 53 -553 71 -768 40 -246 -35 -466 -115 -683 -249 l-75 -47 -6 533 c-3 339 -9 544 -16 564 -31 88 -88 149 -182 193 l-56 26 -340 2 c-251 1 -352 -2 -385 -11z m2121 -1901 c216 -38 383 -126 539 -285 500 -510 261 -1343 -443 -1544 -463 -133 -950 78 -1153 499 -69 141 -87 224 -88 395 -1 122 3 157 22 223 122 426 508 722 948 726 50 1 129 -6 175 -14z"/>
<path d="M10754 6120 c-113 -37 -194 -131 -213 -250 -8 -45 -10 -698 -8 -2100 2 -1920 3 -2038 20 -2079 37 -93 109 -156 210 -186 47 -14 101 -16 359 -13 303 3 303 3 358 29 77 36 124 80 157 147 l28 57 0 2090 0 2090 -28 57 c-33 67 -80 111 -157 147 l-55 26 -305 2 c-280 2 -310 1 -366 -17z"/>
<path d="M13835 5134 c-228 -32 -370 -65 -533 -123 -297 -107 -520 -244 -740 -455 -221 -214 -364 -435 -475 -736 -172 -465 -120 -1007 137 -1444 194 -329 490 -602 838 -771 328 -160 682 -233 1063 -222 370 12 646 77 950 226 571 280 931 733 1067 1341 20 92 23 131 23 320 -1 199 -3 224 -29 340 -36 162 -92 314 -173 470 -82 159 -165 277 -292 412 -308 326 -700 532 -1181 619 -93 17 -164 22 -370 24 -140 2 -268 1 -285 -1z m452 -943 c376 -73 674 -337 775 -688 20 -66 23 -101 23 -233 0 -131 -4 -168 -23 -235 -66 -231 -211 -424 -423 -561 -361 -234 -880 -209 -1214 60 -171 137 -300 348 -339 555 -95 504 247 989 776 1100 125 26 296 27 425 2z"/>
<path d="M18385 5129 c-291 -30 -551 -138 -755 -313 -72 -62 -89 -59 -116 19 -39 113 -77 161 -164 206 -44 24 -49 24 -345 24 l-300 0 -55 -26 c-74 -34 -120 -76 -156 -141 l-29 -53 0 -1570 c0 -1520 1 -1571 19 -1605 38 -71 77 -109 144 -142 l67 -33 320 0 320 0 62 29 c64 29 128 88 157 144 33 63 36 153 36 1052 0 753 3 905 15 958 61 259 243 451 500 528 118 35 330 45 446 21 259 -54 433 -205 517 -452 l27 -80 5 -980 c5 -915 6 -983 23 -1027 26 -66 85 -129 153 -163 l59 -30 335 0 335 0 63 29 c80 37 146 108 167 179 23 76 22 1946 0 2119 -47 354 -183 638 -419 873 -249 248 -567 391 -968 434 -111 13 -345 12 -463 0z"/>
<path d="M7598 5115 c-484 -66 -895 -275 -1212 -617 -364 -392 -560 -950 -507 -1443 24 -220 78 -417 167 -603 181 -381 500 -698 881 -874 431 -199 995 -233 1443 -88 134 44 314 134 459 229 69 45 128 78 132 74 4 -5 14 -33 22 -63 23 -77 66 -141 123 -179 89 -59 119 -62 456 -59 289 3 306 4 360 26 62 25 136 92 163 148 8 18 20 57 25 87 7 34 9 594 8 1563 -3 1270 -5 1515 -17 1544 -39 97 -114 163 -220 194 -80 23 -583 23 -662 0 -125 -37 -216 -124 -234 -227 -4 -20 -11 -40 -16 -43 -6 -3 -51 21 -102 54 -251 162 -511 250 -836 282 -136 13 -313 11 -433 -5z m620 -919 c440 -122 742 -501 742 -931 0 -161 -50 -333 -141 -489 -55 -94 -229 -267 -323 -321 -362 -208 -827 -200 -1155 20 -286 192 -454 553 -413 883 54 424 368 757 803 852 135 29 354 23 487 -14z"/>
</g>
</svg>`;};
window.BALON_LOGO=logo;
const arr='<svg><use href="#arr"/></svg>';

/* ---------- header + menu ---------- */
const hdr=document.getElementById("hdr");
if(hdr){
  hdr.innerHTML=`
  <a class="logo" ${shop("shop")} aria-label="BALON, на главную">${logo()}</a>
  <nav>
    <a class="ico" href="${TG_SUPPORT}" target="_blank" rel="noopener" aria-label="Поддержка в Telegram"><svg><use href="#chat"/></svg></a>
    <a class="ico" ${shop("cart")} aria-label="Корзина"><svg><use href="#bag"/></svg><span class="cnt" id="cartCount"></span></a>
    <button class="ico burger" id="burger" aria-label="Меню" aria-expanded="false" aria-controls="menu"><svg class="bars"><use href="#bars"/></svg><svg class="x"><use href="#close"/></svg></button>
  </nav>`;
  const items=[
    {h:shop("shop"),t:`Каталог <span class="badge">Drop 01</span>`},
    {h:shop("cart"),t:"Корзина"},
    {h:'href="delivery.html"',t:"Доставка, оплата и возврат",cur:page==="delivery"},
    {h:'href="contacts.html"',t:"Контакты",cur:page==="contacts"}
  ];
  const menu=document.createElement("div");
  menu.className="menu";menu.id="menu";
  menu.innerHTML=`<div class="veil" data-close></div>
   <div class="panel wrap" role="dialog" aria-label="Меню">
    <div class="menu-top" style="display:flex;align-items:center;padding:12px 0 20px;border-bottom:1px solid var(--line);margin-bottom:16px"><a class="logo" ${shop("shop")} aria-label="BALON, на главную">${logo()}</a></div>
    <ul>${items.map(i=>`<li><a ${i.h}${i.cur?' aria-current="page"':''}><span class="t">${i.t}</span>${arr}</a></li>`).join("")}</ul>
    <a class="cta" href="${TG_CHANNEL}" target="_blank" rel="noopener"><svg><use href="#tg"/></svg>Наш Telegram-канал${arr}</a>
    <div class="legal"><a href="oferta.html">Публичная оферта</a><a href="privacy.html">Политика обработки персональных данных</a></div>
   </div>`;
  hdr.after(menu);
  const btn=document.getElementById("burger");
  const set=open=>{document.body.classList.toggle("menu-open",open);document.body.classList.toggle("lock",open);btn.setAttribute("aria-expanded",open);btn.setAttribute("aria-label",open?"Закрыть меню":"Меню")};
  btn.onclick=()=>set(!document.body.classList.contains("menu-open"));
  menu.addEventListener("click",e=>{if(e.target.closest("a,[data-close]"))set(false)});
  addEventListener("keydown",e=>{if(e.key==="Escape")set(false)});
  addEventListener("hashchange",()=>set(false));
  window.BALON_MENU=set;
}

/* ---------- footer ---------- */
const ft=document.getElementById("ft");
if(ft){
  ft.innerHTML=`
  <div class="footer-main">
    <div class="footer-brand">
      <a class="footer-logo" ${shop("drop")} aria-label="BALON — на первый экран">${logo()}</a>
      <p>Лимитированный дроп.<br>Свой цвет. Своя игра.</p>
      <a class="footer-social" href="${TG_CHANNEL}" target="_blank" rel="noopener">Telegram-канал <span aria-hidden="true">↗</span></a>
    </div>
    <nav class="footer-links" aria-label="Информация для покупателей">
      <h2>Покупателям</h2>
      <a href="delivery.html">Доставка, оплата и возврат</a>
      <a href="contacts.html">Контакты</a>
      <a href="oferta.html">Публичная оферта</a>
      <a href="privacy.html">Политика конфиденциальности</a>
    </nav>
    <div class="footer-contact">
      <h2>На связи</h2>
      <a href="${TG_SUPPORT}" target="_blank" rel="noopener">Написать в Telegram ↗</a>
      <a href="mailto:${MAIL}">${MAIL}</a>
      <a href="${PHONE_HREF}">${PHONE}</a>
      <p>Пн–пт, 11:00–19:00 МСК</p>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copyright">© 2026 BALON</span>
    <div class="footer-legal">
      <span>ИП Масько Всеволод Витальевич</span>
      <span>ИНН 504723262489 · ОГРНИП 326508100579929</span>
      <span>141402, г. Химки, улица Кирова, дом 10к1, кв. 119</span>
    </div>
  </div>`;
}

/* ---------- cart counter (the shop page keeps it in sync itself) ---------- */
try{const c=JSON.parse(localStorage.getItem("balon_cart")||"[]");const n=c.reduce((a,x)=>a+x.q,0);const el=document.getElementById("cartCount");if(el)el.textContent=n||""}catch(e){}

/* ---------- cookie banner, first visit only ---------- */
let seen=false;
try{seen=localStorage.getItem("balon_cookie")==="1"}catch(e){}
if(!seen){
  const c=document.createElement("div");
  c.className="cookie";c.setAttribute("role","region");c.setAttribute("aria-label","Уведомление о cookie");
  c.innerHTML=`<span>Мы используем файлы cookie и Яндекс.Метрику, чтобы сайт работал корректно и становился удобнее. Продолжая пользоваться сайтом, вы соглашаетесь с этим. Подробнее — в <a href="privacy.html">Политике обработки персональных данных</a>.</span><button type="button">Понятно</button>`;
  c.querySelector("button").onclick=()=>{try{localStorage.setItem("balon_cookie","1")}catch(e){};c.remove()};
  document.body.append(c);
}

/* ---------- table of contents on legal pages: highlight the section in view ---------- */
const toc=[...document.querySelectorAll(".toc a")];
if(toc.length&&"IntersectionObserver" in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)toc.forEach(a=>a.classList.toggle("on",a.hash==="#"+e.target.id))}),{rootMargin:"-20% 0px -70% 0px"});
  toc.forEach(a=>{const s=document.getElementById(a.hash.slice(1));if(s)io.observe(s)});
}
})();
