/* ============================================================
   VEDANT'S PORTFOLIO — SITE CONTENT
   ============================================================
   This is the ONLY file you need to edit to update the website.

   HOW TO UPDATE:
   • Text  — change any text between the quotes "..."
   • Links — replace the url between the quotes. Use "" to hide a link.
   • Photos — put the new photo in assets/images/ and write its
     filename here, e.g.  img: "assets/images/my-new-photo.jpg"
   • Add an achievement — copy one whole { ... } block in a list,
     paste it below, and edit it. Remove one by deleting its block.
     Keep the comma between blocks!

   After saving/committing, Cloudflare redeploys the site
   automatically in about a minute.
   ============================================================ */

window.SITE = {

  meta: {
    title: "Vedant Shetty — Chess Champion & Young Scientist | SVG",
    description: "Portfolio of Vedant Shetty, 10-year-old national chess champion and national science fair winner from Saint Vincent and the Grenadines."
  },

  hero: {
    kicker: "Calliaqua, Saint Vincent & the Grenadines",
    headline: "Hi, I'm Vedant —",
    highlight: "national chess champion",     // the yellow-highlighted words
    headlineEnd: "at 10 years old.",
    lead: "Three-time U18 champion, 2025 overall national champion, gold medallist across the Caribbean and the Americas — and a four-time national science fair winner. I also really like Legos, books, and Subway pizza.",
    photo: "assets/images/portrait.jpg",
    badges: [
      { text: "♛ National Champion 2026", style: "mango", position: "top-left" },
      { text: "2× CAC Gold",              style: "palm",  position: "right"    },
      { text: "Science fair ×4 🏆",       style: "white", position: "bottom-left" }
    ],
    buttons: [
      { text: "See the medals",            url: "#world",  style: "primary"   },
      { text: "▶ Watch my TVJ interview",  url: "https://www.youtube.com/watch?v=tqolHt7idCg", style: "secondary" }
    ]
  },

  /* Official profiles shown in the footer */
  profiles: [
    { text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines_Chess_Championship" },
    { text: "FIDE",      url: "https://ratings.fide.com/profile/36100196" },
    { text: "Chess.com", url: "https://www.chess.com/players/vedant-shetty" }
  ],

  /* ---------- SECTION: national chess record ---------- */
  chess: {
    heading: "The road to national champion",
    chip: "♟ Chess",
    intro: "Under-18 national champion of Saint Vincent and the Grenadines three years in a row — then winner of the open category in 2025 to become the overall national champion.",
    introLink: { text: "The record is on Wikipedia", url: "https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines_Chess_Championship" },
    years: [
      { year: "2022", emoji: "🏆",   text: "U18 National Champion" },
      { year: "2023", emoji: "🏆",   text: "U18 National Champion" },
      { year: "2024", emoji: "🏆🥈", text: "U18 Champion + 2nd in Adult Open" },
      { year: "2025", emoji: "👑",   text: "Overall National Champion (Open)" },
      { year: "2026", emoji: "🏆",   text: "Tyrone Jack Open Champion", link: { text: "news", url: "https://www.searchlight.vc/sports/2026/01/23/vedant-shetty-tops-chess-tournament/" } }
    ],
    polaroids: [
      { img: "assets/images/trophy-2022.jpg",   caption: "2022 — the first title, age 6",        rotate: -3   },
      { img: "assets/images/trophies-2025.jpg", caption: "2025 — “The game is just begin-ning”", rotate: 2    },
      { img: "assets/images/champion-2025.jpg", caption: "2025 — beating the grown-ups",          rotate: -1.5 }
    ]
  },

  /* ---------- SECTION: international medals ----------
     tag styles: "gold" | "silver" | "bronze" | "star"   */
  world: {
    heading: "Medals across the Americas",
    chip: "🌎 World stage",
    intro: "From Trinidad to Peru — podiums at the Central American & Caribbean Youth Chess Festival and the Pan-American Youth Championship.",
    cards: [
      {
        img: "assets/images/podium-elsalvador.jpg",
        tag: "🥇 Gold ×2 + CM", tagStyle: "gold",
        where: "El Salvador · 2024 · U8",
        title: "CAC Festival — double gold",
        text: "Gold absolute and gold blitz, plus a conditional Candidate Master title.",
        links: [{ text: "Read the news →", url: "https://www.searchlight.vc/sports/2024/08/09/player-returns-gold-for-svg-in-americas-chess-festival/" }]
      },
      {
        img: "assets/images/podium-puertorico.jpg",
        tag: "🥇 Blitz · 🥈 Classical", tagStyle: "gold",
        where: "Puerto Rico · 2025 · U10",
        title: "CAC Festival — gold & silver",
        text: "Top of the blitz podium and silver absolute in Dorado.",
        links: [{ text: "Read the news →", url: "https://www.stvincenttimes.com/st-vincent-chess-prodigy-vedant-shetty-central-american-caribbean-youth-chess-festival/" }]
      },
      {
        img: "assets/images/panam-lima.jpg",
        tag: "🥉 Rapid", tagStyle: "bronze",
        where: "Lima, Peru · 2025 · U10",
        title: "Pan-American — bronze",
        text: "3rd in rapid — the only Caribbean player to take home a trophy.",
        links: [{ text: "Read the news →", url: "https://www.searchlight.vc/sports/2025/08/08/svg-rep-podium-position-35th-pan-american-youth-chess-championship/" }]
      },
      {
        img: "assets/images/panam-orlando.jpg",
        tag: "★ Best in the Caribbean", tagStyle: "star",
        where: "Orlando, USA · 2024 · U8",
        title: "Pan-American — 8th place",
        text: "Highest scorer from the entire Caribbean region.",
        links: [{ text: "Barbados Today →", url: "https://barbadostoday.bb/2024/07/24/del-castilho-kinged-in-corbin-chess-open/" }]
      },
      {
        img: "assets/images/fedon.jpg",
        tag: "★ Captain · 5–0", tagStyle: "star",
        where: "SVG vs Grenada · 2024–26",
        title: "Bilateral team captain",
        text: "Led SVG to the Chatoyer and Fedon trophies, winning every single game — 5–0 in both Chatoyer editions.",
        links: [
          { text: "Fedon →",    url: "https://www.stvincenttimes.com/svg-clinch-inaugural-fedon-bilateral-chess-trophy/" },
          { text: "Chatoyer →", url: "https://www.searchlight.vc/sports/2026/03/20/svg-holds-bilateral-youth-chess-title/" }
        ]
      },
      {
        img: "assets/images/online-trophy.jpg",
        tag: "🥇 ×4 online", tagStyle: "gold",
        where: "Online · Romania & Caribbean",
        title: "Online circuit firsts",
        text: "First place at three Grand Prix Chesscraft Romania U8 stages, plus 2nd U1500 and best U1700 at the Heat Rapids Caribbean Open.",
        links: []   /* add the Tornello link here when you have it */
      }
    ]
  },

  /* ---------- SECTION: school chess club ---------- */
  club: {
    heading: "I started my school's chess club",
    chip: "♞ Giving back",
    intro: "With motivation from my principal, I founded the Calliaqua Anglican School Chess Club — building a teaching presentation that covers everything from how each piece moves to basic strategy. We meet every week in the school library, learning and playing under peer-led guidance.",
    polaroids: [
      { img: "assets/images/club-classroom.jpg", caption: "Teaching the fundamentals", rotate: -2.5 },
      { img: "assets/images/club-library-1.jpg", caption: "Weekly library sessions",   rotate: 1.5  },
      { img: "assets/images/club-library-2.jpg", caption: "Learning by playing",       rotate: -1   },
      { img: "assets/images/club-donation.jpg",  caption: "New boards for the club",   rotate: 2.5  }
    ]
  },

  /* ---------- SECTION: science & environment ---------- */
  science: {
    heading: "Scientist on weekdays",
    chip: "🔬 Science & environment",
    intro: "Best outstanding project at the national science fair four times — and a regional environmental science runner-up.",
    cards: [
      {
        img: "assets/images/science-potato.jpg",
        tag: "🏆 2022", tagStyle: "gold",
        where: "National science fair · Primary",
        title: "“Potato Battery”",
        text: "Best outstanding project.",
        links: []   /* add the online video link here when you have it */
      },
      {
        img: "assets/images/science-globalwarming.jpg",
        tag: "🏆 2023", tagStyle: "gold",
        where: "National science fair · Lower primary",
        title: "“Is Global Warming Real?”",
        text: "Best outstanding project.",
        links: []
      },
      {
        img: "assets/images/science-roof.jpg",
        tag: "🏆 2024", tagStyle: "gold",
        where: "National science fair · Higher primary",
        title: "“Which colour roof keeps the house coolest?”",
        text: "Best outstanding project. The 2026 project, “Hydrogen Car”, won again.",
        links: []
      },
      {
        img: "assets/images/science-yes.jpg",
        tag: "🥈 2025", tagStyle: "silver",
        where: "Macmillan Education · Regional",
        title: "Young Environmental Scientist",
        text: "2nd place, primary category, with the SVG Wildlife Warriors.",
        links: []
      },
      {
        img: "assets/images/eccb-stamp.jpg",
        tag: "🏆 Age 6", tagStyle: "gold",
        where: "Eastern Caribbean Central Bank",
        title: "40th anniversary stamp design",
        text: "Winner, 5–11 category.",
        links: []
      },
      {
        img: "assets/images/planet-video.jpg",
        tag: "🏆 Video", tagStyle: "gold",
        where: "Better Climate4MyHealth contest",
        title: "“A Planet in Peril and a Promise to Keep”",
        text: "Winning video entry.",
        links: []
      }
    ]
  },

  /* ---------- SECTION: media ---------- */
  media: {
    heading: "“Rising Island Genius”",
    chip: "📺 In the media",
    quote: "“From academic excellence to innovative projects and meaningful community impact, he's proving that age is no barrier to brilliance” — Smile Jamaica, Television Jamaica.",
    video: {
      img: "assets/images/tvj-interview.jpg",
      url: "https://www.youtube.com/watch?v=tqolHt7idCg"
    },
    links: [
      { text: "▶ TVJ Smile Jamaica — Young Star Rising (YouTube)", url: "https://www.youtube.com/watch?v=tqolHt7idCg" },
      { text: "Smile Jamaica #CaribbeanCheckIn post",              url: "https://www.facebook.com/smilejamtvj/posts/1355395396376284/" },
      { text: "St Vincent Times — double medal in Puerto Rico",    url: "https://www.stvincenttimes.com/st-vincent-chess-prodigy-vedant-shetty-central-american-caribbean-youth-chess-festival/" },
      { text: "Searchlight — Pan-American podium in Peru",         url: "https://www.searchlight.vc/sports/2025/08/08/svg-rep-podium-position-35th-pan-american-youth-chess-championship/" },
      { text: "Barbados Today — the region's top scorer",          url: "https://barbadostoday.bb/2024/07/24/del-castilho-kinged-in-corbin-chess-open/" },
      { text: "FIDE rating profile · 36100196",                    url: "https://ratings.fide.com/profile/36100196" },
      { text: "Chess.com player page",                             url: "https://www.chess.com/players/vedant-shetty" }
    ]
  },

  /* ---------- Closing banner ---------- */
  ferry: {
    img: "assets/images/ferry-terminal.jpg",
    text: "Catch me Saturday afternoons at the ferry terminal, playing with the SVG chess enthusiasts. ♟"
  },

  footer: {
    line: "Vedant Shetty · Calliaqua Anglican Primary School · Saint Vincent and the Grenadines"
  }
};
