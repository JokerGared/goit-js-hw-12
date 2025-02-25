import{a as l,S as u,i as o}from"./assets/vendor-BDaiwwc1.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();l.defaults.baseURL="https://pixabay.com/";function h(t){const a="api/",i=new URLSearchParams({key:"16827506-9469cc67c3ec90b2828a9ad0f",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return l.get(`${a}?${i}`).then(r=>{if(n.spinner.classList.remove("is-pending"),!r.data.hits||r.data.hits.length===0)throw new Error;return r.data.hits})}const d=new u(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,animationSpeed:50,fadeSpeed:100,scrollZoom:!1});function g(t){const a=y(t);n.gallery.innerHTML=a,d.refresh()}function f({webformatURL:t,largeImageURL:a,tags:i,likes:r,views:e,comments:s,downloads:c}){const p=[...new Set(i.split(", ").map(m=>m.trim()))].join(", ");return`<li class="gallery-item">
      <a class="gallery-link" href="${a}">
        <img class="gallery-image" src="${t}" alt="${p}" width="360" height = "200"/>
        <ul class="characteristics">
          <li class="characteristics-box">
            <span class="characteristics-heading">Likes</span
            ><span class="characteristics-item">${r}</span>
          </li>
          <li class="characteristics-box">
            <span class="characteristics-heading">Views</span
            ><span class="characteristics-item">${e}</span>
          </li>
          <li class="characteristics-box">
            <span class="characteristics-heading">Comments</span
            ><span class="characteristics-item">${s}</span>
          </li>
          <li class="characteristics-box">
            <span class="characteristics-heading">Downloads</span
            ><span class="characteristics-item">${c}</span>
          </li>
        </ul>
      </a>
    </li>`}function y(t){return t.map(f).join("")}function L(){n.gallery.innerHTML=""}const n={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),spinner:document.querySelector(".loader")};n.form.addEventListener("submit",t=>{t.preventDefault();const a=t.target.elements.query.value;if(a.trim()===""){o.warning({position:"topRight",message:"Please, write something"});return}L(),n.spinner.classList.add("is-pending"),h(a).then(i=>{g(i)}).catch(()=>{o.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.spinner.classList.remove("is-pending")}),t.target.reset()});
//# sourceMappingURL=index.js.map
