/* ==========================================================================
   Junoh Yu — site content (bilingual: ko / en)
   ========================================================================== */

window.SITE = (function () {
  "use strict";

  /* ---------------------------------------------------------------- UI  */

  var ui = {
    "site.name": { ko: "유준오", en: "Junoh Yu" },
    "site.role": { ko: "시각 및 설치 작가", en: "Visual & Installation Artist" },

    "nav.interactive": { ko: "인터랙티브 미디어", en: "Interactive Media" },
    "nav.installation": { ko: "설치", en: "Installation" },
    "nav.performance": { ko: "퍼포먼스", en: "Performance" },
    "nav.vr": { ko: "VR 핫라인", en: "VR-Hotline" },
    "nav.arttech": { ko: "아트 & 테크", en: "Art & Tech" },
    "nav.about": { ko: "작가 소개", en: "About" },
    "nav.cv": { ko: "이력", en: "CV" },
    "nav.contact": { ko: "연락처", en: "Contact" },

    "home.tagline": {
      ko: "의례와 치유, 그리고 기계적 매체를 잇는 트랜스디서플리너리 시각·설치 작가. 설치와 퍼포먼스, VR과 디지털 트윈을 넘나들며 고통이 빛으로 전환되는 순간을 만듭니다.",
      en: "A transdisciplinary visual and installation artist bridging ritual, healing, and computational media — working across installation, performance, VR, and digital twins to build spaces where pain can turn toward light."
    },
    "home.works.eyebrow": { ko: "작업", en: "Works" },
    "home.works.title": { ko: "작업 세계", en: "Bodies of Work" },
    "home.works.note": {
      ko: "2014년부터 이어온 설치·퍼포먼스 작업과 2021년 이후의 인터랙티브 미디어, 가상현실 작업입니다.",
      en: "Installation and performance work since 2014, alongside interactive media and virtual reality since 2021."
    },
    "home.selected.eyebrow": { ko: "주요 작업", en: "Selected" },
    "home.selected.title": { ko: "최근 작업", en: "Recent Work" },
    "home.selected.note": {
      ko: "2024년 이후 발표한 설치 및 인터랙티브 작업.",
      en: "Installations and interactive works presented since 2024."
    },
    "home.about.eyebrow": { ko: "작가 소개", en: "About" },
    "home.about.title": { ko: "유준오", en: "Junoh Yu" },
    "home.about.more": { ko: "전문 읽기", en: "Read the full statement" },
    "home.viewall": { ko: "모두 보기", en: "View all" },

    "cat.interactive.desc": {
      ko: "센서와 실시간 엔진으로 관객의 몸과 반응하는 설치. 2021년 이후.",
      en: "Sensor-driven installations that respond to the body in real time. Since 2021."
    },
    "cat.installation.desc": {
      ko: "물, 빛, 유리, 재를 매개로 기억과 애도를 다루는 조각적 설치. 2014년 이후.",
      en: "Sculptural installations of water, light, glass, and ash — on memory and mourning. Since 2014."
    },
    "cat.performance.desc": {
      ko: "의례적 신체와 집단적 목격을 통해 상처를 통과하는 퍼포먼스. 2014년 이후.",
      en: "Ritual bodies and collective witnessing as a way through injury. Since 2014."
    },
    "cat.vr.desc": {
      ko: "트라우마와 회복의 서사를 다루는 3부작 가상현실 프로젝트. 2021년 이후.",
      en: "A virtual reality trilogy on trauma, survival, and return. Since 2021."
    },
    "cat.arttech.desc": {
      ko: "예술 실천에서 출발한 정신건강 및 자살예방 플랫폼, 리브리드.",
      en: "Rebreathe — a mental-health and suicide-prevention platform grown from the practice."
    },

    "page.interactive.intro": {
      ko: "아두이노와 각종 센서, 라즈베리파이, 언리얼 엔진을 매개로 관객의 호흡과 심박, 거리와 무게에 반응하는 설치 작업입니다. 기술은 여기서 도구가 아니라, 감정이 공명하고 돌봄이 일어나는 장치가 됩니다.",
      en: "Installations built with Arduino and sensor arrays, Raspberry Pi, and Unreal Engine, responding to a visitor's breath, heartbeat, distance, and weight. Technology here is less a tool than an apparatus for emotional resonance and communal care."
    },
    "page.installation.intro": {
      ko: "물, 빛, 유리, 모래, 뼈 가루, 향초. 사라지는 재료들로 지어진 작은 구조물들은 기억이 머무르고 흩어지는 자리를 만듭니다.",
      en: "Water, light, glass, sand, bone ash, incense. Small structures built from disappearing materials, making a place where memory can settle and scatter."
    },
    "page.performance.intro": {
      ko: "금박과 검은 비닐, 물과 소음. 의례의 형식을 빌려 수치심과 폭력의 기억을 함께 통과하는 집단적 신체 작업입니다.",
      en: "Gold foil, black plastic, water, and noise. Collective bodily works that borrow the form of ritual to move through shame and remembered violence together."
    },
    "page.vr.intro": {
      ko: "VR 핫라인은 유년의 상처에서 출발해 회복과 귀환에 이르는 3부작 가상현실 프로젝트입니다. Ver.2 〈To-Gather〉는 뉴욕대학교 석사 논문 작업으로 발표되었습니다.",
      en: "VR-Hotline is a virtual reality trilogy moving from childhood injury toward recovery and return. Ver.2, To-Gather, was presented as the artist's master's thesis at New York University."
    },
    "page.arttech.intro": {
      ko: "리브리드(REBREATHE)는 예술 실천에서 출발해 청소년·유소년의 정신건강과 자살예방을 다루는 멀티모달 AI 기반 플랫폼으로 확장된 프로젝트입니다.",
      en: "REBREATHE began inside the artistic practice and grew into a multimodal, AI-based platform for youth mental health and suicide prevention."
    },

    "about.eyebrow": { ko: "작가 소개", en: "About the artist" },
    "about.cta": { ko: "이력 보기", en: "View CV" },

    "cv.eyebrow": { ko: "이력", en: "Curriculum Vitae" },
    "cv.download": { ko: "이력서 내려받기 (PDF)", en: "Download CV (PDF)" },
    "cv.portfolio": { ko: "포트폴리오 내려받기 (PDF)", en: "Download portfolio (PDF)" },
    "cv.education": { ko: "학력", en: "Education" },
    "cv.teaching": { ko: "교육 및 경력", en: "Teaching & Professional" },
    "cv.awards": { ko: "수상 및 선정", en: "Awards & Grants" },
    "cv.exhibitions": { ko: "전시", en: "Exhibitions" },
    "cv.publications": { ko: "논문 및 특허", en: "Thesis & Patents" },

    "contact.eyebrow": { ko: "연락처", en: "Contact" },
    "contact.intro": {
      ko: "전시, 커미션, 강의, 협업 문의를 환영합니다.",
      en: "Enquiries about exhibitions, commissions, teaching, and collaboration are welcome."
    },
    "contact.email": { ko: "이메일", en: "Email" },
    "contact.studio": { ko: "스튜디오", en: "Studio" },
    "contact.phone": { ko: "전화", en: "Phone" },
    "contact.web": { ko: "웹", en: "Web" },
    "contact.location": { ko: "대한민국 경기도 고양시", en: "Goyang, Gyeonggi-do, South Korea" },

    "lb.year": { ko: "연도", en: "Year" },
    "lb.venue": { ko: "전시", en: "Presented" },
    "lb.dimensions": { ko: "크기", en: "Dimensions" },
    "lb.materials": { ko: "재료", en: "Materials" },
    "lb.watch": { ko: "영상 보기", en: "Watch video" },
    "lb.close": { ko: "닫기", en: "Close" },
    "lb.prev": { ko: "이전", en: "Previous" },
    "lb.next": { ko: "다음", en: "Next" },

    "footer.rights": { ko: "모든 권리 보유.", en: "All rights reserved." },
    "footer.built": { ko: "유준오 · 시각 및 설치 작가", en: "Junoh Yu · Visual & Installation Artist" }
  };

  /* --------------------------------------------------------- categories  */

  var categories = [
    { id: "interactive", page: "interactive.html", label: { ko: "인터랙티브 미디어", en: "Interactive Media" }, range: "2021—" },
    { id: "installation", page: "installation.html", label: { ko: "설치", en: "Installation" }, range: "2014—" },
    { id: "performance", page: "performance.html", label: { ko: "퍼포먼스", en: "Performance" }, range: "2014—" },
    { id: "vr", page: "vr.html", label: { ko: "VR 핫라인", en: "VR-Hotline" }, range: "2021—" },
    { id: "arttech", page: "art-tech.html", label: { ko: "아트 & 테크", en: "Art & Tech" }, range: "2025—" }
  ];

  /* -------------------------------------------------------------- works  */
  /* images: n = number of files 01.jpg … n.jpg in assets/img/works/<slug>/ */

  var works = [
    /* ------------------------------------------- interactive media ---- */
    {
      slug: "a-weather-within",
      cat: "interactive",
      year: "2025",
      images: 2,
      cover: 2,
      title: { ko: "기후층 (氣候層)", en: "A Weather Within" },
      subtitle: { ko: "A Weather Within", en: "기후층 (氣候層)" },
      venue: { ko: "NEXT HI-LIGHT, 서울디자인재단 / DDP", en: "NEXT HI-LIGHT, Seoul Design Foundation / DDP" },
      dimensions: "100 × 100 × 220 cm",
      materials: {
        ko: "철제, 아크릴(검정), 미니 워터펌프, PC, 아두이노, 거리감지 센서, 투명 LED 스크린, 언리얼 엔진 및 풀스택 개발",
        en: "Steel, black acrylic, miniature water pumps, PC, Arduino, proximity sensors, transparent LED screen, Unreal Engine and full-stack development"
      },
      video: "https://youtu.be/ZCdgfG52UgY"
    },
    {
      slug: "breathe-again",
      cat: "interactive",
      year: "2025",
      images: 2,
      title: { ko: "다시, 숨", en: "Breathe Again" },
      venue: { ko: "랩들이 (Lab Coming Day), 아트코리아랩", en: "Lab Coming Day, Art Korea Lab" },
      dimensions: { ko: "200 × 300 × 140 cm (공간 전체 규격)", en: "200 × 300 × 140 cm (full spatial dimension)" },
      materials: {
        ko: "철재, 라즈베리파이, 심박 및 EGG 센서, 키넥트, 진동 기반 악기(공, 크리스탈 악기), 65인치 모니터",
        en: "Steel, Raspberry Pi, heart-rate and EGG sensors, Kinect, vibration-based instruments (gong, crystal bowls), 65-inch monitor"
      },
      video: "https://youtu.be/kjp_LeJVPIE"
    },
    {
      slug: "interspecies-water-talk",
      cat: "interactive",
      year: "2024",
      images: 6,
      title: { ko: "종간수화 (種間水話)", en: "Interspecies Water Talk" },
      venue: { ko: "제 6의 섬 (The Sixisles), 동빈창고 1969, 포항문화재단", en: "The Sixisles, Dongbin Warehouse 1969, Pohang Cultural Foundation" },
      dimensions: "2,900 × 5,800 × 2,680 cm",
      materials: {
        ko: "목재(죽은 양버즘나무), 레진, 아크릴, 피에조 및 무게감지 센서, 아두이노, ESP8266 모듈, 프로젝터 4대, 철제, 물, 언리얼 엔진",
        en: "Timber (dead sycamore), resin, acrylic, piezo and load sensors, Arduino, ESP8266 modules, four projectors, steel, water, Unreal Engine"
      }
    },
    {
      slug: "liberated-memory",
      cat: "interactive",
      year: "2024",
      images: 7,
      title: { ko: "해방된 기억", en: "Liberated Memory" },
      venue: { ko: "그래도, 낭만 (달성대구현대미술제), 강정보 디아크, 달성문화재단", en: "Still, Romance — Dalseong Daegu Contemporary Art Festival, The ARC, Dalseong Cultural Foundation" },
      dimensions: "2,900 × 5,800 × 2,680 cm",
      materials: {
        ko: "디지털 트윈(가상현실), 아두이노 및 센서, 프로젝터, 소지용 종이, 유리, 나무, 철제 구조, 초",
        en: "Digital twin (virtual reality), Arduino and sensors, projectors, burning paper, glass, wood, steel structure, candles"
      }
    },
    {
      slug: "the-last-hope",
      cat: "interactive",
      year: "2022",
      images: 2,
      title: { ko: "마지막 희망", en: "The Last Hope" },
      dimensions: "78 × 63 × 50 cm",
      materials: {
        ko: "나무, 풍선, 레진, 철, 펠티에 모듈, 아두이노, LED",
        en: "Wood, balloon, resin, steel, Peltier module, Arduino, LED"
      }
    },
    {
      slug: "limitation-of-time",
      cat: "interactive",
      year: "2022",
      images: 3,
      title: { ko: "시간의 한계", en: "The Limitation of Time" },
      dimensions: "101 × 101 × 38 cm",
      materials: {
        ko: "나무, 유리, 레진, 펌프, 잡초, 금속 기어, 기어 모터, 콘크리트, 아두이노, 휴대용 배터리",
        en: "Wood, glass, resin, pump, weeds, metal gears, gear motor, concrete, Arduino, portable battery"
      }
    },
    {
      slug: "holding-me",
      cat: "interactive",
      year: "2021",
      images: 3,
      title: { ko: "“Holding me..”", en: "“Holding me..”" },
      dimensions: "68 × 38 × 88 cm",
      materials: {
        ko: "나무, LED, 레진, 유리, 물, 펌프, 아두이노, p5.js, 컴퓨터 비전",
        en: "Wood, LED, resin, glass, water, pump, Arduino, p5.js, computer vision"
      }
    },

    /* ------------------------------------------------- installation ---- */
    {
      slug: "observation-of-time",
      cat: "installation",
      year: "2020",
      images: 2,
      title: { ko: "시간의 관찰", en: "Observation of Time" },
      dimensions: "83 × 63 × 116 cm",
      materials: { ko: "나무, 모래, 뼈 가루, 발열 전구", en: "Wood, sand, bone ash, heat lamp" }
    },
    {
      slug: "sound-of-memory",
      cat: "installation",
      year: "2020",
      images: 3,
      title: { ko: "기억의 소리", en: "The Sound of Memory" },
      dimensions: "60 × 50 × 105 cm",
      materials: {
        ko: "나무, 에폭시, 식물 램프, 플라스틱, 고목나무, 하모니카",
        en: "Wood, epoxy, grow lamp, plastic, old timber, harmonica"
      }
    },
    {
      slug: "bridge-beyond",
      cat: "installation",
      year: "2019",
      images: 3,
      title: { ko: "넘어선 다리", en: "The Bridge Beyond" },
      dimensions: "30 × 48 × 68 cm",
      materials: { ko: "나무, LED, 찰흙, 유리, 물, 플라스틱", en: "Wood, LED, clay, glass, water, plastic" }
    },
    {
      slug: "prayer-of-the-heart",
      cat: "installation",
      year: "2018",
      images: 2,
      cover: 2,
      title: { ko: "마음의 기도", en: "Prayer of the Heart" },
      venue: { ko: "InLight Exhibition, Virginia Museum of Fine Arts", en: "InLight Exhibition, Virginia Museum of Fine Arts" },
      dimensions: "259 × 259 × 213 cm",
      materials: { ko: "나무, LED, 물, 스티로폼, 향초", en: "Wood, LED, water, styrofoam, incense candles" }
    },
    {
      slug: "forgotten-child",
      cat: "installation",
      year: "2018",
      images: 2,
      title: { ko: "잊혀진 아이", en: "The Forgotten Child" },
      dimensions: "22 × 38 × 55 cm",
      materials: { ko: "나무, 유리, 향초, 전구, 물", en: "Wood, glass, incense candle, light bulb, water" }
    },
    {
      slug: "are-you-warm",
      cat: "installation",
      year: "2017",
      images: 2,
      title: { ko: "“따뜻하니?”", en: "“Are You Warm?”" },
      dimensions: "40 × 55 × 60 cm",
      materials: {
        ko: "나무, 미니 형광등, 에폭시, 유리, 물, 펌프, 타일",
        en: "Wood, miniature fluorescent tubes, epoxy, glass, water, pump, tile"
      }
    },
    {
      slug: "moment-of-overcoming",
      cat: "installation",
      year: "2017",
      images: 3,
      title: { ko: "이겨냄의 순간", en: "The Moment of Overcoming" },
      venue: { ko: "Reconnection (개인전), The Anderson Gallery", en: "Reconnection (solo), The Anderson Gallery" },
      dimensions: "53 × 76 × 45 cm",
      materials: {
        ko: "나무, 페인트, 에폭시, LED, 전구, 물, 유리, 스티로폼",
        en: "Wood, paint, epoxy, LED, light bulbs, water, glass, styrofoam"
      }
    },
    {
      slug: "last-station",
      cat: "installation",
      year: "2015",
      images: 3,
      title: { ko: "종착역", en: "The Last Station" },
      dimensions: "213 × 121 × 121 cm",
      materials: { ko: "철, 전구, 솜, 연무기", en: "Steel, light bulbs, cotton, fog machine" }
    },
    {
      slug: "warm-loneliness",
      cat: "installation",
      year: "2015",
      images: 1,
      title: { ko: "따스한 외로움", en: "Warm Loneliness" },
      dimensions: "187 × 144 × 187 cm",
      materials: { ko: "스티로폼, 형광등, 페인트", en: "Styrofoam, fluorescent tube, paint" }
    },
    {
      slug: "gateway-of-chaos",
      cat: "installation",
      year: "2014",
      images: 2,
      title: { ko: "혼돈의 출입구", en: "The Gateway of Chaos" },
      dimensions: "175 × 22 × 228 cm",
      materials: { ko: "나무, 전구, 페인트", en: "Wood, light bulbs, paint" }
    },

    /* -------------------------------------------------- performance ---- */
    {
      slug: "in-between",
      cat: "performance",
      year: "2017",
      images: 2,
      title: { ko: "사이", en: "In Between" },
      materials: {
        ko: "퍼포먼스 — 금박, 검정 비닐, 로프, 드럼, 참여자 다수",
        en: "Performance — gold foil, black plastic, rope, drums, multiple participants"
      },
      video: "https://vimeo.com/256894666"
    },
    {
      slug: "unattainable-desire",
      cat: "performance",
      year: "2017",
      images: 2,
      title: { ko: "가질 수 없는 욕심", en: "Unattainable Desire" },
      materials: {
        ko: "퍼포먼스 — 검정 비닐 의상, 매달린 과일, 물, 참여자 다수",
        en: "Performance — black plastic garments, suspended fruit, water, multiple participants"
      },
      video: "https://vimeo.com/256894623"
    },
    {
      slug: "hope",
      cat: "performance",
      year: "2016",
      images: 2,
      cover: 2,
      title: { ko: "희망", en: "Hope" },
      materials: {
        ko: "야외 퍼포먼스 — 목재 구조, 침대, 물, 무지개",
        en: "Outdoor performance — timber structure, bed, water, rainbow"
      },
      video: "https://vimeo.com/373846378/26f7d46704"
    },
    {
      slug: "a-rainy-day",
      cat: "performance",
      year: "2016",
      images: 2,
      title: { ko: "어느 비오는 날", en: "A Rainy Day" },
      dimensions: "190 × 121 × 396 cm",
      materials: { ko: "나무, 오일 페인트, 레진, 물, 펌프", en: "Wood, oil paint, resin, water, pump" },
      video: "https://vimeo.com/317351171/518657842b"
    },
    {
      slug: "child-trapped-in-shame",
      cat: "performance",
      year: "2019",
      images: 1,
      title: { ko: "수치심에 갇힌 아이", en: "The Child Trapped in Shame" },
      materials: { ko: "거리 퍼포먼스 — 플라스틱 통, 눈, 명동", en: "Street performance — plastic bucket, snow, Myeongdong, Seoul" }
    },

    /* ------------------------------------------------ virtual reality --- */
    {
      slug: "pinocchios-diary",
      cat: "vr",
      year: "2021",
      images: 8,
      cover: 2,
      title: { ko: "VR 핫라인 Ver.1 — “피노키오의 일기”", en: "VR-Hotline Ver.1 — “Pinocchio’s Diary”" },
      materials: {
        ko: "가상현실 — 언리얼 엔진, 3D 모델링, 실시간 렌더링",
        en: "Virtual reality — Unreal Engine, 3D modelling, real-time rendering"
      },
      video: "https://vimeo.com/664578259"
    },
    {
      slug: "to-gather",
      cat: "vr",
      year: "2022",
      images: 6,
      title: { ko: "VR 핫라인 Ver.2 — “To-Gather”", en: "VR-Hotline Ver.2 — “To-Gather”" },
      venue: { ko: "뉴욕대학교 (New York University) 석사 논문", en: "Master’s thesis, New York University" },
      materials: {
        ko: "가상현실 — 언리얼 엔진, 실시간 렌더링, 인터랙티브 서사",
        en: "Virtual reality — Unreal Engine, real-time rendering, interactive narrative"
      },
      video: "https://vimeo.com/748595859"
    },
    {
      slug: "experiential-cycle",
      cat: "vr",
      year: "2023",
      images: 5,
      title: { ko: "VR 핫라인 Ver.3 — “경험적 순환 / 골든타임”", en: "VR-Hotline Ver.3 — “Experiential Cycle / Golden Time”" },
      materials: {
        ko: "가상현실 — 언리얼 엔진, 실시간 렌더링, 다큐멘터리 영상",
        en: "Virtual reality — Unreal Engine, real-time rendering, documentary footage"
      }
    },

    /* ------------------------------------------------------ art & tech -- */
    {
      slug: "rebreathe-v1",
      cat: "arttech",
      year: "2025",
      images: 1,
      title: { ko: "리브리드 Ver.1 — “긴급모드”", en: "REBREATHE Ver.1 — “Emergency Mode”" },
      venue: {
        ko: "예비창업패키지 선정 (청년 정신건강 및 자살예방 플랫폼), 중소벤처기업부",
        en: "Selected, Pre-Startup Package (youth mental health & suicide prevention platform), Ministry of SMEs and Startups"
      },
      materials: { ko: "가상현실, 언리얼 엔진, 멀티모달 AI", en: "Virtual reality, Unreal Engine, multimodal AI" },
      video: "https://youtu.be/UfILlFEL2uc"
    },
    {
      slug: "rebreathe-v2",
      cat: "arttech",
      year: "2026",
      images: 3,
      title: { ko: "리브리드 Ver.2 — “대화모드 / 걷기모드”", en: "REBREATHE Ver.2 — “Talk Mode / Walk Mode”" },
      venue: {
        ko: "R&D 사업 (유소년 정신건강 및 자살예방 플랫폼)",
        en: "R&D programme (children’s mental health & suicide prevention platform)"
      },
      materials: {
        ko: "자녀 전용 앱 — 언리얼 엔진, 멀티모달 AI, 디지털 크리처",
        en: "Companion app for children — Unreal Engine, multimodal AI, digital creatures"
      },
      link: "https://www.rebreathe.net/"
    }
  ];

  /* ---------------------------------------------------------------- bio  */

  var bio = {
    ko: [
      "유준오는 의례, 치유, 기계적 매체를 융합하는 트랜스디서플리너리 시각·설치 작가이자 교육자이며 크리에이티브 테크놀로지스트이다.",
      "그의 작업은 어린 시절과 청소년기에 장기간 겪은 집단 괴롭힘으로부터 비롯된 심리적·신체적 고통을 출발점으로 삼지만, 동시에 한국 사회와 세계 곳곳에 존재하는 폭력, 차별, 역사적 상처의 구조까지 확장된다. 그러나 그는 고통의 어두움 자체에 머무르기보다, 그 안에서 드러나는 전환, 회복, 그리고 빛의 가능성에 주목한다.",
      "유준오는 억압되고 소외된 존재들의 경험을 작업의 중심에 놓으며, 명상적이고 영적이며 의례적인 퍼포먼스와 설치 작업을 통해 관객이 함께 목격하고 감각하며 치유의 가능성에 접근할 수 있는 장을 만든다. 그의 작업은 공유된 경험을 통해 공간을 정화하고 새롭게 사유하는 실천이며, 트라우마와 생존, 회복의 이야기를 말할 수 있는 통로를 여는 데 목적이 있다.",
      "설치, 퍼포먼스, VR, AR, 디지털 트윈, 게임 엔진, 피지컬 컴퓨팅을 넘나드는 그의 작업은 시공간의 물리적 한계를 넘어서는 몰입형 예술 경험을 구축한다. 그는 실시간 상호작용과 감각적 서사를 결합하여, 기술이 정서적 공명과 공동체적 돌봄, 감각적 전환을 위한 매개가 될 수 있는 가능성을 탐구한다.",
      "그는 Virginia Museum of Fine Arts, The Anderson Gallery, 고색뉴지엄, 아트코리아랩, 서울디자인재단, 포항문화재단, 충주문화재단, 달성대구현대미술제 등 한국과 미국의 다양한 기관에서 작품을 발표해왔다. Vermont Studio Center 펠로우로 선정되었으며, apexart와 Vermont Studio Center의 심사위원으로 참여했고, MIT Media Lab의 HackMIT에서는 멘토 및 심사 역할을 맡았다. 또한 Whitney Museum과 Bronx Museum에서 Guadalupe Maravilla의 퍼포먼스에 비디오그래퍼이자 퍼포머로 참여하였다.",
      "동시에 그는 ㈜리브리드와 ㈜스타그라운드의 창립자로 활동하고 있으며, ㈜프로눔에서 Chief Creative Officer를 역임했다. 또한 성균관대학교, 청주대학교, 중앙대학교, 동양대학교에서 인터랙티브 미디어, 언리얼 엔진, AI 기반 영상, 게임 관련 창작기술을 교육하고 멘토링하며 예술과 기술을 잇는 교육 실천을 이어가고 있다.",
      "Virginia Commonwealth University에서 Sculpture + Extended Media 전공으로 학사 학위를 받았고, New York University Interactive Telecommunications Program에서 전액 장학금으로 석사 학위를 취득했다."
    ],
    en: [
      "Junoh Yu is a transdisciplinary visual and installation artist, as well as educator and creative technologist whose practice bridges ritual, healing, and computational media.",
      "Drawing from experiences of psychological and physical pain shaped by prolonged bullying in childhood and adolescence, Yu’s work also engages broader structures of violence, discrimination, and historical trauma in Korea and beyond. Rather than remaining in darkness, he searches for moments of transformation, resilience, and light that can emerge through collective witnessing and embodied experience.",
      "Centering the voices and experiences of marginalized and subjugated communities, Yu creates meditative, spiritual, and ritual-based performances and installations that invite reflection, release, and healing. His practice seeks to purify and reimagine space through shared experience, while opening pathways for others to speak about trauma, survival, and recovery.",
      "Working across sculpture, performance, VR, AR, digital twins, game engines, and physical computing, Yu expands artistic practice beyond conventional spatial and temporal limits. His interdisciplinary approach combines immersive storytelling with real-time interaction, exploring how emerging technologies can become tools for emotional resonance, communal care, and sensory transformation.",
      "Yu has presented works in South Korea and the United States, including exhibitions at the Virginia Museum of Fine Arts, The Anderson Gallery, Gosaek Newseum, Art Korea Lab, Seoul Design Foundation, Pohang Cultural Foundation, Chungju Cultural Foundation, and the Dalseong Daegu Contemporary Art Festival. He was a fellow at the Vermont Studio Center and has served as a juror for programs including apexart and Vermont Studio Center, as well as a mentor and juror for HackMIT at the MIT Media Lab. He also participated in performances by Guadalupe Maravilla as both videographer and performer at major institutions including the Whitney Museum and the Bronx Museum.",
      "In parallel with his artistic practice, Yu is the founder of Rebreathe Inc and StarGround Inc, and previously served as Chief Creative Officer at Pronum Inc. He is also active as an educator, currently teaching and mentoring in interactive media, Unreal Engine, AI-based moving image, and game-related creative technologies at Sungkyunkwan University, Cheongju University, Chung-Ang University, and Dongyang University.",
      "Yu received a BFA in Sculpture and Extended Media from Virginia Commonwealth University and an MPS from the Interactive Telecommunications Program at New York University, where he studied on a full scholarship."
    ]
  };

  /* ----------------------------------------------------------------- cv  */

  var cv = {
    education: [
      {
        year: "2020—2022",
        what: { ko: "New York University — Interactive Telecommunications Program", en: "New York University — Interactive Telecommunications Program" },
        note: { ko: "공학 석사 (MPS), 전액 장학금", en: "MPS, full scholarship" },
        where: { ko: "미국 뉴욕", en: "New York, USA" }
      },
      {
        year: "2014—2017",
        what: { ko: "Virginia Commonwealth University — Sculpture + Extended Media", en: "Virginia Commonwealth University — Sculpture + Extended Media" },
        note: { ko: "예술 학사 (BFA), 조기 졸업 · 우등 졸업", en: "BFA, early graduation with honours" },
        where: { ko: "미국 리치먼드", en: "Richmond, USA" }
      },
      {
        year: "2017",
        what: { ko: "서울대학교 — 건축학과 (국제교류 프로그램)", en: "Seoul National University — Architecture (international exchange)" },
        note: { ko: "수료", en: "Completed" },
        where: { ko: "대한민국 서울", en: "Seoul, Korea" }
      }
    ],

    teaching: [
      { year: "2026.09—", what: { ko: "한양대학교 소프트웨어융합대학 ICT융합학부 — 인터랙티브 멀티미디어", en: "Hanyang University, ICT Convergence — Interactive Multimedia" }, note: { ko: "객원교수 (예정)", en: "Visiting Professor (forthcoming)" }, where: { ko: "서울", en: "Seoul" } },
      { year: "2026.03—", what: { ko: "성균관대학교 영상학부 & 게임디자인학부", en: "Sungkyunkwan University, Film & Game Design" }, note: { ko: "겸임교수 — AI 기반 인터랙티브 영상 및 아트 / 몰입형 내러티브 / 언리얼 기반 실감 콘텐츠 제작 / 캡스톤 디자인", en: "Adjunct Professor — AI-based interactive moving image, immersive narrative, Unreal-based experiential content, capstone design" }, where: { ko: "서울", en: "Seoul" } },
      { year: "2025.08—", what: { ko: "청주대학교 예술학부 디지털미디어디자인학과", en: "Cheongju University, Digital Media Design" }, note: { ko: "객원교수 — 인터랙션 디자인 / 디지털 조형 실습 I, II", en: "Visiting Professor — Interaction design, digital form studio I & II" }, where: { ko: "청주", en: "Cheongju" } },
      { year: "2025.08—", what: { ko: "중앙대학교 예술공학부", en: "Chung-Ang University, Art & Technology" }, note: { ko: "객원교수 (기술멘토) — 캡스톤 디자인 (언리얼 엔진 & 아두이노)", en: "Visiting Professor / technical mentor — capstone design (Unreal Engine & Arduino)" }, where: { ko: "서울", en: "Seoul" } },
      { year: "2025.03—", what: { ko: "동양대학교 게임학부", en: "Dongyang University, Game Studies" }, note: { ko: "겸임교수 — 게임애니메이션 스튜디오 / 레벨 & 배경 디자인", en: "Adjunct Professor — game animation studio, level & environment design" }, where: { ko: "동두천", en: "Dongducheon" } },
      { year: "2025.09—", what: { ko: "㈜스타그라운드 — 블록체인 기반 탄소배출권 관리 플랫폼", en: "StarGround Inc — blockchain-based carbon credit platform" }, note: { ko: "대표이사 — 디지털 트윈 개발 및 경영", en: "CEO — digital twin development and management" }, where: { ko: "서울", en: "Seoul" } },
      { year: "2025.06—", what: { ko: "㈜리브리드 — 멀티모달 AI 기반 정신건강 관리 플랫폼", en: "Rebreathe Inc — multimodal AI mental-health platform" }, note: { ko: "대표이사 — VR 개발 및 경영", en: "CEO — VR development and management" }, where: { ko: "서울", en: "Seoul" } },
      { year: "2024.09—2025.11", what: { ko: "㈜프로눔 / 케이클라비스 자산운용", en: "Pronum Inc / K-Clavis Asset Management" }, note: { ko: "Chief Creative Officer (본부장) — 융합 콘텐츠 제작 총괄", en: "Chief Creative Officer — head of convergent content production" }, where: { ko: "서울", en: "Seoul" } },
      { year: "2023.03—2024.04", what: { ko: "㈜프로눔 / 케이클라비스 자산운용", en: "Pronum Inc / K-Clavis Asset Management" }, note: { ko: "Creative Director (부장) — 언리얼 개발 및 아트 디렉팅", en: "Creative Director — Unreal development and art direction" }, where: { ko: "서울", en: "Seoul" } },
      { year: "2024.09", what: { ko: "MIT Media Lab — HackMIT", en: "MIT Media Lab — HackMIT" }, note: { ko: "기술 멘토 및 심사위원", en: "Technical mentor and juror" }, where: { ko: "미국 케임브리지", en: "Cambridge, USA" } },
      { year: "2022.06—2023.03", what: { ko: "Meta & Integer Group (TBWA)", en: "Meta & Integer Group (TBWA)" }, note: { ko: "Technical Artist (Associate Manager)", en: "Technical Artist (Associate Manager)" }, where: { ko: "미국", en: "USA" } },
      { year: "2022.02—2022.05", what: { ko: "apexart", en: "apexart" }, note: { ko: "펠로우십 심사위원", en: "Fellowship juror" }, where: { ko: "미국 뉴욕", en: "New York, USA" } },
      { year: "2022.01—2022.10", what: { ko: "Tien Art Company", en: "Tien Art Company" }, note: { ko: "미국 협력 운영 위원 / 소속 작가", en: "U.S. cooperative operations committee / associate artist" }, where: { ko: "미국", en: "USA" } },
      { year: "2021.09—2021.12", what: { ko: "Vermont Studio Center", en: "Vermont Studio Center" }, note: { ko: "펠로우십 및 심사위원", en: "Fellowship and juror" }, where: { ko: "미국 버몬트", en: "Vermont, USA" } },
      { year: "2017.12—2021.10", what: { ko: "Guadalupe Maravilla (작가)", en: "Guadalupe Maravilla (artist)" }, note: { ko: "작가 보조 — Whitney Museum, Bronx Museum 퍼포먼스 비디오그래퍼 및 퍼포머", en: "Artist assistant — videographer and performer, Whitney Museum and Bronx Museum" }, where: { ko: "미국 뉴욕", en: "New York, USA" } },
      { year: "2017.12—2018.12", what: { ko: "윤보현 (작가)", en: "Bohyun Yoon (artist)" }, note: { ko: "작가 보조 (풀타임)", en: "Full-time artist assistant" }, where: { ko: "미국", en: "USA" } }
    ],

    awards: [
      { year: "2026", what: { ko: "Ape Camp 후속 지원 선정 (₩10,000,000) / 팀", en: "Ape Camp follow-up grant (₩10,000,000) / team" }, where: { ko: "한국문화예술위원회", en: "Arts Council Korea" } },
      { year: "2026", what: { ko: "Ape Camp 참여 선정 (기술 및 예술가)", en: "Ape Camp selection (technologist & artist)" }, where: { ko: "한국문화예술위원회", en: "Arts Council Korea" } },
      { year: "2026", what: { ko: "초기창업패키지 선정 (₩100,000,000) / 리브리드", en: "Early Startup Package (₩100,000,000) / Rebreathe" }, where: { ko: "중소벤처기업부", en: "Ministry of SMEs and Startups" } },
      { year: "2026", what: { ko: "성균관대학교 RISE 사업 선정 — ARS ELECTRONICA 방문 및 작품 발표", en: "SKKU RISE programme — ARS ELECTRONICA visit and presentation" }, where: { ko: "성균관대학교 & ARS ELECTRONICA", en: "SKKU & ARS ELECTRONICA" } },
      { year: "2025", what: { ko: "2025 아트코리아랩 테스트베드 작가선정 — 사운드 디자인 랩 (₩7,500,000) / 개인", en: "Art Korea Lab Testbed — Sound Design Lab (₩7,500,000) / solo" }, where: { ko: "예술경영지원센터", en: "KAMS" } },
      { year: "2025", what: { ko: "예비창업패키지 선정 (₩60,000,000) / 리브리드", en: "Pre-Startup Package (₩60,000,000) / Rebreathe" }, where: { ko: "중소벤처기업부", en: "Ministry of SMEs and Startups" } },
      { year: "2025", what: { ko: "청년 창작자 양성사업 선정 작가 (₩5,000,000) / 개인", en: "Young Creator Development Programme (₩5,000,000) / solo" }, where: { ko: "서울디자인재단", en: "Seoul Design Foundation" } },
      { year: "2025", what: { ko: "Ape Camp 참여 선정 (기술 및 예술가)", en: "Ape Camp selection (technologist & artist)" }, where: { ko: "한국문화예술위원회", en: "Arts Council Korea" } },
      { year: "2024", what: { ko: "포항 융합예술 실험실 〈DNA Art Lab〉 작가선정 (₩10,000,000) / 팀", en: "Pohang Convergent Art Lab ⟨DNA Art Lab⟩ (₩10,000,000) / team" }, where: { ko: "포항문화재단", en: "Pohang Cultural Foundation" } },
      { year: "2024", what: { ko: "충주 융복합 문화 콘텐츠 창작 지원 〈예술과 공학의 장벽은 우리 마음속에만 존재한다〉 (₩5,000,000) / 개인", en: "Chungju Convergent Content Grant (₩5,000,000) / solo" }, where: { ko: "충주문화재단", en: "Chungju Cultural Foundation" } },
      { year: "2024", what: { ko: "달성대구현대미술제 연계프로그램 청년작가 선정 (₩5,000,000) / 개인", en: "Dalseong Daegu Contemporary Art Festival, young artist (₩5,000,000) / solo" }, where: { ko: "달성대구문화재단", en: "Dalseong Daegu Cultural Foundation" } },
      { year: "2024", what: { ko: "LG 아트센터 1주년 미디어 아티스트 파이널리스트 (500명 이상 지원자 중 12인)", en: "LG Arts Center Media Artist finalist (12 of 500+ applicants)" }, where: { ko: "한국메세나협회", en: "Korea Mecenat Association" } },
      { year: "2023", what: { ko: "2023 아트코리아랩 테스트베드 작가선정 — 인터렉티브 키네틱 랩 (₩7,500,000) / 개인", en: "Art Korea Lab Testbed — Interactive Kinetic Lab (₩7,500,000) / solo" }, where: { ko: "예술경영지원센터", en: "KAMS" } },
      { year: "2021", what: { ko: "아르코 청년 아티스트 어워드 (₩10,000,000) / 팀", en: "ARKO Young Artist Award (₩10,000,000) / team" }, where: { ko: "한국문화예술위원회", en: "Arts Council Korea" } },
      { year: "2020—2022", what: { ko: "TSOA 대학원 전액 장학금 ($120,000)", en: "TSOA graduate full scholarship ($120,000)" }, where: { ko: "New York University", en: "New York University" } },
      { year: "2019", what: { ko: "VSC June Brundage Cater 펠로우쉽 ($7,500)", en: "VSC June Brundage Cater Fellowship ($7,500)" }, where: { ko: "Vermont Studio Center", en: "Vermont Studio Center" } },
      { year: "2018", what: { ko: "InLight Artist’s Honorarium ($1,000)", en: "InLight Artist’s Honorarium ($1,000)" }, where: { ko: "Virginia Museum of Fine Arts & 1708 Gallery", en: "Virginia Museum of Fine Arts & 1708 Gallery" } },
      { year: "2017", what: { ko: "Faculty Achievement Award", en: "Faculty Achievement Award" }, where: { ko: "Virginia Commonwealth University", en: "Virginia Commonwealth University" } }
    ],

    exhibitions: [
      { year: "2027", what: { ko: "APE Camp 후속 지원 전시 / 그룹전 (예정)", en: "APE Camp follow-up exhibition / group (forthcoming)" }, where: { ko: "한국문화예술위원회, 서울", en: "Arts Council Korea, Seoul" } },
      { year: "2026", what: { ko: "닿지 않는 집 (A Home Beyond Reach) / 팀 전시 (예정)", en: "A Home Beyond Reach / team exhibition (forthcoming)" }, where: { ko: "Space55 (한국문화예술위원회), 서울", en: "Space55 (Arts Council Korea), Seoul" } },
      { year: "2025", what: { ko: "랩들이 (Lab Coming Day) / 그룹전", en: "Lab Coming Day / group" }, where: { ko: "아트코리아랩 (예술경영지원센터), 서울", en: "Art Korea Lab (KAMS), Seoul" } },
      { year: "2025", what: { ko: "NEXT HI-LIGHT (청년 창작자 양성사업 전시) / 그룹전", en: "NEXT HI-LIGHT / group" }, where: { ko: "동대문디자인플라자 DDP (서울디자인재단), 서울", en: "DDP (Seoul Design Foundation), Seoul" } },
      { year: "2024", what: { ko: "예술과 공학의 장벽은 우리 마음속에만 존재한다 / 그룹전", en: "The Wall Between Art and Engineering Exists Only in Our Minds / group" }, where: { ko: "조선식산은행 (충주문화재단), 충주", en: "Joseon Siksan Bank (Chungju Cultural Foundation), Chungju" } },
      { year: "2024", what: { ko: "그래도, 낭만 (달성대구현대미술제) / 야외 그룹전", en: "Still, Romance — Dalseong Daegu Contemporary Art Festival / outdoor group" }, where: { ko: "강정보 디아크 (달성문화재단), 대구", en: "The ARC (Dalseong Cultural Foundation), Daegu" } },
      { year: "2024", what: { ko: "The Sixisles (포항융합예술주간) / 그룹전", en: "The Sixisles — Pohang Convergent Art Week / group" }, where: { ko: "동빈창고 1969 (포항문화재단), 포항", en: "Dongbin Warehouse 1969 (Pohang Cultural Foundation), Pohang" } },
      { year: "2023", what: { ko: "랩들이 (Lab Coming Day) / 그룹전", en: "Lab Coming Day / group" }, where: { ko: "아트코리아랩 (예술경영지원센터), 서울", en: "Art Korea Lab (KAMS), Seoul" } },
      { year: "2023", what: { ko: "Kite Prize Awardee’s Exhibition / 온라인 그룹전", en: "Kite Prize Awardee’s Exhibition / online group" }, where: { ko: "Amie Potsic Art Advisory, 미국", en: "Amie Potsic Art Advisory, USA" } },
      { year: "2020", what: { ko: "청년터展 II / 그룹전", en: "Cheongnyeonteo II / group" }, where: { ko: "고색 뉴지엄 (티엔 아트 컴퍼니), 수원", en: "Gosaek Newseum (Tien Art Company), Suwon" } },
      { year: "2018", what: { ko: "InLight Exhibition / 야외 그룹전", en: "InLight Exhibition / outdoor group" }, where: { ko: "Virginia Museum of Fine Arts, 미국", en: "Virginia Museum of Fine Arts, USA" } },
      { year: "2017", what: { ko: "Reconnection / 개인전", en: "Reconnection / solo" }, where: { ko: "The Anderson Gallery, 미국", en: "The Anderson Gallery, USA" } }
    ],

    publications: [
      { year: "2022.05", what: { ko: "석사 논문 — The Weight of Sigh / The Limitation of Time", en: "Master’s thesis — The Weight of Sigh / The Limitation of Time" }, note: { ko: "지도교수: Stephen Downs", en: "Advisor: Stephen Downs" }, where: { ko: "New York University", en: "New York University" } },
      { year: "2024.02", what: { ko: "특허 출원 — 액티브 시니어를 위한 마인드 테크 및 교육 플랫폼 개발", en: "Patent — Mind-tech and education platform for active seniors" }, note: { ko: "특허번호 10-2023-0169867", en: "Application no. 10-2023-0169867" }, where: { ko: "특허청", en: "KIPO" } },
      { year: "2025.07", what: { ko: "상표권 출원 — 리브리드", en: "Trademark — 리브리드" }, note: { ko: "출원번호 40-2025-0124304", en: "Application no. 40-2025-0124304" }, where: { ko: "특허청", en: "KIPO" } },
      { year: "2025.07", what: { ko: "상표권 출원 — REBREATHE", en: "Trademark — REBREATHE" }, note: { ko: "출원번호 40-2025-0124305", en: "Application no. 40-2025-0124305" }, where: { ko: "특허청", en: "KIPO" } }
    ]
  };

  return { ui: ui, categories: categories, works: works, bio: bio, cv: cv };
})();
