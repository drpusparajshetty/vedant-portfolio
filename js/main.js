/* Renders the page from window.SITE (js/content.js).
   You should not need to edit this file to update content. */
(function () {
  const S = window.SITE;
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const link = (l, cls = "") => l && l.url ? `<a class="${cls}" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.text)}</a>` : "";

  document.title = S.meta.title;
  const md = document.createElement("meta");
  md.name = "description"; md.content = S.meta.description;
  document.head.appendChild(md);

  /* hero */
  $("#kicker-text").textContent = S.hero.kicker;
  $("#headline").innerHTML =
    `${esc(S.hero.headline)} <span class="hl">${esc(S.hero.highlight)}</span> ${esc(S.hero.headlineEnd)}`;
  $("#lead").textContent = S.hero.lead;
  $("#hero-img").src = S.hero.photo;
  $("#hero-img").alt = "Vedant Shetty";
  $("#cta").innerHTML = S.hero.buttons.map(b => {
    const ext = b.url.startsWith("#") ? "" : ' target="_blank" rel="noopener"';
    return `<a class="btn ${esc(b.style)}" href="${esc(b.url)}"${ext}>${esc(b.text)}</a>`;
  }).join("");
  $("#badges").innerHTML = S.hero.badges.map(b =>
    `<span class="badge ${esc(b.style)} pos-${esc(b.position)}">${esc(b.text)}</span>`
  ).join("");

  const polaroids = (list) => `<div class="polwall">` + list.map(p =>
    `<figure class="pol" style="--r:${Number(p.rotate) || 0}deg">
       <img src="${esc(p.img)}" alt="${esc(p.caption)}" loading="lazy">
       <figcaption>${esc(p.caption)}</figcaption>
     </figure>`).join("") + `</div>`;

  const cards = (list) => `<div class="medals">` + list.map(c =>
    `<article class="mcard">
       <div class="im">
         ${c.tag ? `<span class="medal ${esc(c.tagStyle || "gold")}">${esc(c.tag)}</span>` : ""}
         <img src="${esc(c.img)}" alt="${esc(c.title)}" loading="lazy">
       </div>
       <div class="bd">
         <span class="where">${esc(c.where)}</span>
         <h3>${esc(c.title)}</h3>
         <p>${esc(c.text)}</p>
         <span>${(c.links || []).map(l => link(l, "lk")).join("")}</span>
       </div>
     </article>`).join("") + `</div>`;

  const head = (o) => `<div class="sec-h"><h2>${esc(o.heading)}</h2><span class="chip">${esc(o.chip)}</span></div>`;

  /* chess */
  $("#chess").innerHTML = `<div class="wrap">
    ${head(S.chess)}
    <p class="sub">${esc(S.chess.intro)} ${link(S.chess.introLink)}.</p>
    <div class="years">${S.chess.years.map(y =>
      `<div class="yr"><span class="c">${esc(y.emoji)}</span><b>${esc(y.year)}</b>
       <span>${esc(y.text)}${y.link ? " · " + link(y.link) : ""}</span></div>`).join("")}
    </div>
    ${polaroids(S.chess.polaroids)}
  </div>`;

  /* world */
  $("#world").innerHTML = `<div class="wrap">
    ${head(S.world)}<p class="sub">${esc(S.world.intro)}</p>${cards(S.world.cards)}
  </div>`;

  /* club */
  $("#club").innerHTML = `<div class="wrap">
    ${head(S.club)}<p class="sub">${esc(S.club.intro)}</p>${polaroids(S.club.polaroids)}
  </div>`;

  /* science */
  $("#science").innerHTML = `<div class="wrap">
    ${head(S.science)}<p class="sub">${esc(S.science.intro)}</p>${cards(S.science.cards)}
  </div>`;

  /* media */
  $("#media").innerHTML = `<div class="wrap">
    ${head(S.media)}
    <div class="mediarow">
      <a class="tvframe" href="${esc(S.media.video.url)}" target="_blank" rel="noopener" aria-label="Watch the interview">
        <img src="${esc(S.media.video.img)}" alt="TV interview">
        <span class="play"><i>▶</i></span>
      </a>
      <div>
        <p class="sub" style="margin-bottom:18px">${esc(S.media.quote)}</p>
        <div class="linklist">${S.media.links.map(l => link(l)).join("")}</div>
      </div>
    </div>
  </div>`;

  /* ferry + footer */
  $("#ferry").style.backgroundImage = `url('${S.ferry.img}')`;
  $("#ferry-text").textContent = S.ferry.text;
  $("#footer-line").textContent = S.footer.line;
  $("#footer-links").innerHTML = S.profiles.map(l => link(l)).join(" · ");
})();
