import{a as m,S as L,i as d}from"./assets/vendor-BDaiwwc1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();m.defaults.baseURL="https://pixabay.com/";async function g(t,r){const o="api/",i=new URLSearchParams({key:"16827506-9469cc67c3ec90b2828a9ad0f",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:h});try{const e=await m.get(`${o}?${i}`);if(s.spinner.classList.remove("is-pending"),!e.data.hits||e.data.hits.length===0)throw new Error("no data");return e.data}catch(e){throw s.spinner.classList.remove("is-pending"),console.error("Network error occured",e),new Error("Network problems")}}const w=new L(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,animationSpeed:50,fadeSpeed:100,scrollZoom:!1});function u(t){const r=v(t);s.gallery.insertAdjacentHTML("beforeend",r),w.refresh()}function b({webformatURL:t,largeImageURL:r,tags:o,likes:i,views:e,comments:a,downloads:n}){const f=[...new Set(o.split(", ").map(y=>y.trim()))].join(", ");return`<li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${t}" alt="${f}" width="360" height = "200"/>
        <ul class="characteristics">
          <li class="characteristics-box">
            <span class="characteristics-heading">Likes</span
            ><span class="characteristics-item">${i}</span>
          </li>
          <li class="characteristics-box">
            <span class="characteristics-heading">Views</span
            ><span class="characteristics-item">${e}</span>
          </li>
          <li class="characteristics-box">
            <span class="characteristics-heading">Comments</span
            ><span class="characteristics-item">${a}</span>
          </li>
          <li class="characteristics-box">
            <span class="characteristics-heading">Downloads</span
            ><span class="characteristics-item">${n}</span>
          </li>
        </ul>
      </a>
    </li>`}function v(t){return t.map(b).join("")}function S(){s.gallery.innerHTML=""}const s={form:document.querySelector(".form"),loadMoreBtn:document.querySelector(".load-more"),gallery:document.querySelector(".gallery"),spinner:document.querySelector(".loader")},h=40;let p,l="",c;function x(){const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}s.form.addEventListener("submit",async t=>{if(t.preventDefault(),s.loadMoreBtn.classList.remove("is-pending"),s.loadMoreBtn.textContent="Load more",c=1,l=t.target.elements.query.value.trim(),l===""){d.warning({position:"topRight",message:"Please, write something"});return}S(),s.spinner.classList.add("is-pending");try{const r=await g(l,c);u(r.hits),p=Math.ceil(r.totalHits/h),c<p&&s.loadMoreBtn.classList.add("is-pending")}catch{d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}t.target.reset()});s.loadMoreBtn.addEventListener("click",async()=>{s.loadMoreBtn.classList.remove("is-pending");const t=c+1;s.spinner.classList.add("is-pending");try{const r=await g(l,t);u(r.hits),x(),s.loadMoreBtn.textContent="Load more",t<p?(s.loadMoreBtn.classList.add("is-pending"),c+=1):d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch{d.error({position:"topRight",message:"Server stops responding"}),s.loadMoreBtn.classList.add("is-pending"),s.loadMoreBtn.textContent="Try again"}});
//# sourceMappingURL=index.js.map
