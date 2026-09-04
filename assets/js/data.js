/* ==========================================================================
   Junoh Yu — site content (bilingual: ko / en)
   ========================================================================== */

window.SITE = (function () {
  "use strict";

  /* ---------------------------------------------------------------- UI  */

  var ui = {
    "site.name": { ko: "유준오", en: "Junoh Yu" },
    "site.role": { ko: "시각 및 설치 작가", en: "Visual & Installation Artist" },

    "nav.artist": { ko: "예술", en: "Artist" },
    "nav.virtualreality": { ko: "가상현실", en: "Virtual Reality" },

    "nav.interactive": { ko: "인터랙티브 미디어", en: "Interactive Media" },
    "nav.installation": { ko: "설치", en: "Installation" },
    "nav.performance": { ko: "퍼포먼스", en: "Performance" },
    "nav.vr": { ko: "VR 핫라인", en: "VR-Hotline" },
    "nav.arttech": { ko: "리브리드", en: "Rebreathe" },
    "nav.teaching": { ko: "교육", en: "Teaching" },
    "nav.teaching.overview": { ko: "교육 전체", en: "Teaching Overview" },
    "nav.school.skku": { ko: "성균관대학교", en: "Sungkyunkwan Univ." },
    "nav.school.cju": { ko: "청주대학교", en: "Cheongju Univ." },
    "nav.school.dyu": { ko: "동양대학교", en: "Dongyang Univ." },
    "nav.about": { ko: "소개", en: "About" },
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
      ko: "예술 실천에서 출발한 청소년·유소년 정신건강 및 자살예방 플랫폼.",
      en: "A youth mental-health and suicide-prevention platform grown from the practice."
    },

    "page.interactive.intro": {
      ko: "언리얼 엔진, 아두이노, 터치디자이너 등을 매개로 관객 또는 작가의 물리적 행위에 따라 변화하는 신체 및 바이오 데이터의 반응을 연구합니다. 여기서 기술을 도구가 아니라, 감정이 공명하고 공동체적 치유가 일어나는 장치가 됩니다.",
      en: "Installations built with Arduino and sensor arrays, Raspberry Pi, and Unreal Engine, responding to a visitor's breath, heartbeat, distance, and weight. Technology here is less a tool than an apparatus for emotional resonance and communal care."
    },
    "page.installation.intro": {
      ko: "물, 빛, 유리, 모래, 뼈 가루, 향초. 사라지는 재료들로 지어진 작은 구조물들은 기억이 머무르고 흩어지는 자리를 만듭니다.",
      en: "Water, light, glass, sand, bone ash, incense. Small structures built from disappearing materials, making a place where memory can settle and scatter."
    },
    "page.performance.intro": {
      ko: "다양한 형태의 의례의 형식을 통해서 수치심과 폭력에 대한 개인적 경험부터 커뮤니티 빌딩 그리고 집단적 치유까지 다양한 연구적 시도들을 작품화 합니다.",
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

    "arttech.link": { ko: "리브리드 소개 보기", en: "View the Rebreathe proposal" },

    "page.teaching.intro": {
      ko: "성균관대학교, 청주대학교, 동양대학교에서 진행한 강의 기록입니다. 학생들은 화면 안에서 끝나는 결과물 대신, 언리얼 엔진과 아두이노 센서, 프로젝션 매핑을 활용하여 실제 공간에서의 “경험”으로 만듭니다. 강의실에서 전시장까지의 과정을 팀별로 남겨두었습니다.",
      en: "A record of courses taught at Sungkyunkwan University, Cheongju University, and Dongyang University. Rather than screen-based deliverables, students build work that is installed in real space — Unreal Engine, Arduino sensors, and projection mapping. The archive follows each team from syllabus to gallery floor."
    },
    "teaching.eyebrow": { ko: "교육", en: "Teaching" },
    "teaching.stats.schools": { ko: "개 대학", en: "universities" },
    "teaching.stats.courses": { ko: "개 강좌", en: "courses" },
    "teaching.stats.teams": { ko: "개 팀", en: "student teams" },
    "teaching.courses": { ko: "강좌", en: "Courses" },
    "teaching.teams": { ko: "팀", en: "teams" },
    "teaching.exhibition.title": { ko: "제1회 N.I.M.A", en: "1st N.I.M.A" },
    "teaching.exhibition.sub": {
      ko: "New Interfaces for Moving Arts · 2026년 7월 4–5일",
      en: "New Interfaces for Moving Arts · 4–5 July 2026"
    },
    "teaching.exhibition.desc": {
      ko: "세 강좌에서 나온 인터랙티브 설치 10점을 모아 무료 공개 전시로 선보였습니다. 개막 7월 4일 19:00–21:00, 전시 7월 5일 11:00–17:00.",
      en: "Ten interactive installations from the three courses, shown as a free public exhibition. Opening 4 July, 19:00–21:00; exhibition 5 July, 11:00–17:00."
    },
    "teaching.ex.venue": { ko: "장소", en: "Venue" },
    "teaching.ex.curated": { ko: "기획", en: "Curated by" },
    "teaching.ex.support": { ko: "주최 · 지원", en: "Supported by" },
    "teaching.ex.scale": { ko: "규모", en: "Scale" },
    "teaching.ex.works": { ko: "출품작 10점", en: "Ten works" },
    "teaching.ex.source": {
      ko: "작품 정보는 각 팀이 제출한 발표 자료에서 옮긴 것입니다.",
      en: "Work details are drawn from each team’s own submitted presentation."
    },

    "teaching.photocap": {
      ko: "학생 작업 기록 · 사진을 클릭하면 다음 장으로 넘어갑니다",
      en: "Student work from the archive · click the photo for the next one"
    },
    "teaching.archive": { ko: "티칭 아카이브 전체 보기", en: "Open the full teaching archive" },
    "teaching.open": { ko: "이 학교의 강의 기록 보기", en: "Open this university’s record" },
    "teaching.back": { ko: "교육 전체로 돌아가기", en: "Back to teaching" },
    "teaching.courselist": { ko: "이 페이지의 강의", en: "On this page" },
    "teaching.source": {
      ko: "이 페이지의 내용과 이미지는 티칭 아카이브에서 옮겨 온 것입니다.",
      en: "The text and images on this page are carried over from the teaching archive."
    },
    "archive.now": { ko: "진행 중", en: "Now" },
    "teaching.cvnote": {
      ko: "한양대학교와 중앙대학교를 포함한 전체 강의 및 재직 이력은 소개 페이지의 이력 항목에 정리되어 있습니다.",
      en: "Full teaching and professional appointments — including Hanyang and Chung-Ang University — are listed under CV on the About page."
    },

    "about.eyebrow": { ko: "작가 소개", en: "About the artist" },
    "about.cta": { ko: "이력 보기", en: "View CV" },
    "about.sec.bio": { ko: "작가 소개", en: "About" },

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
    "lb.visit": { ko: "사이트 보기", en: "Visit site" },
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
    { id: "arttech", page: "art-tech.html", label: { ko: "리브리드", en: "Rebreathe" }, range: "2025—" }
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
      link: "https://jy3266.github.io/Rebreathe_Proposal/",
      linkLabel: { ko: "리브리드 소개 보기", en: "View the Rebreathe proposal" }
    }
  ];

  /* ----------------------------------------------------------- teaching  */

  var teaching = {
    archive: "https://jy3266.github.io/Teaching_Portfolio/",
    period: "2025—2026",

    statement: {
      label: { ko: "교육 철학", en: "Teaching Statement" },
      blocks: [
        { t: "lead",
          ko: "제가 처음 가르치는 일을 시작하게 된 이유는, 사실 교육자가 되고 싶다는 생각에서 출발한 것은 아니었습니다.",
          en: "I did not begin teaching because I wanted to be a teacher." },
        { t: "p",
          ko: "당시 저는 청년들의 정신건강을 위한 플랫폼 REBREATHE를 개발하고 있었습니다. 하지만 기술과 서비스를 만드는 것만으로는 제가 만나고자 하는 청년들이 실제로 무엇을 고민하고, 어떤 감정을 경험하며, 세상을 어떻게 바라보고 있는지를 충분히 이해하기 어렵다고 느꼈습니다. 그래서 저는 그들과 가장 가까운 거리에서 만나고 대화할 수 있는 방법으로 ‘가르치는 일’을 선택했습니다.",
          en: "At the time I was building REBREATHE, a mental-health platform for young adults. But building the technology and the service was never going to tell me enough — what the young people I wanted to reach actually worry about, what they feel, how they see the world. So I chose teaching as the way to meet them and talk with them at the closest possible range." },
        { t: "p",
          ko: "그러나 수업을 시작한 이후, 제가 예상하지 못했던 변화가 일어났습니다. 저는 학생들에게 무언가를 전달하기 위해 교실에 들어갔지만, 오히려 그들의 질문과 생각, 그리고 제가 예상하지 못했던 방식으로 문제를 해석하는 모습을 통해 더 많은 것을 배우기 시작했습니다.",
          en: "Once the classes began, something I had not anticipated happened. I walked into the room to pass something on, and instead started learning more than I gave — from their questions, their thinking, and the ways they read a problem that I would never have predicted." },
        { t: "p",
          ko: "그때부터 저에게 교육은 지식을 한 방향으로 전달하는 일이 아니라, 서로 다른 경험과 관점이 만나 새로운 질문을 만들어가는 공동의 탐구 과정이 되었습니다.",
          en: "From then on, teaching stopped being the one-way delivery of knowledge and became a shared enquiry — different experiences and points of view meeting, and making new questions out of the meeting." },
        { t: "p",
          ko: "제가 수업에서 가장 중요하게 생각하는 것 역시 이러한 대화(Dialogue)입니다.",
          en: "That dialogue is what I hold most important in a course." },
        { t: "p",
          ko: "특히 AI, Unreal Engine, VR, 피지컬 컴퓨팅, 프로젝션 매핑과 같은 기술을 다루는 수업에서는 새로운 도구를 빠르게 익히는 것도 중요하지만, 저는 그보다 학생들이 끊임없이 서로에게 질문하도록 만드는 것이 더 중요하다고 생각합니다.",
          en: "In courses that handle AI, Unreal Engine, VR, physical computing, and projection mapping, picking up a new tool quickly does matter — but I think it matters more that students keep putting questions to one another." },
        { t: "q",
          ko: ["왜 이 기술을 사용해야 하는가?",
               "이 경험을 통해 관객에게 무엇을 전달하고 싶은가?",
               "우리가 만드는 것이 누군가의 감정이나 삶에 어떤 영향을 줄 수 있는가?"],
          en: ["Why does this have to be made with this technology?",
               "What do I want the audience to carry away from this experience?",
               "How might what we are making touch someone’s feelings, or their life?"] },
        { t: "p",
          ko: "저는 기술을 목적이 아니라, 학생들이 자신이 가진 질문을 세상과 연결하기 위한 하나의 언어이자 매개체로 가르치고자 합니다.",
          en: "I teach technology not as an end but as a language and a medium — a way for students to connect the questions they already hold to the world." },
        { t: "p",
          ko: "이러한 생각은 제가 수업에서 ‘Healing’, ‘Nature’, ‘Memory’, ‘Time’, ‘Home’, ‘Connection’과 같은 주제를 지속적으로 제안하는 이유이기도 합니다.",
          en: "It is also why I keep proposing themes such as Healing, Nature, Memory, Time, Home, and Connection." },
        { t: "p",
          ko: "예를 들어 학생들에게 ‘힐링’과 ‘치유’라는 주제를 제시했을 때, 저는 그것이 어떤 모습이어야 하는지를 미리 정의하지 않습니다. 오히려 학생들이 자신의 경험과 기억을 돌아보고, 리서치와 대화를 통해 각자가 생각하는 치유의 의미를 발견하도록 합니다.",
          en: "When I set healing as a theme, for instance, I do not define in advance what it ought to look like. Students look back at their own experience and memory instead, and through research and conversation arrive at what healing means to each of them." },
        { t: "p",
          ko: "어떤 학생은 빛과 공간을 통해 이를 표현하고, 어떤 학생은 자연의 움직임을 가상환경으로 재구성하며, 또 다른 학생은 센서와 소리, 관객의 신체적 참여를 통해 치유를 이야기합니다.",
          en: "One works it out through light and space; another rebuilds the movement of nature inside a virtual environment; another speaks about healing through sensors, sound, and the audience’s own body." },
        { t: "p",
          ko: "같은 하나의 단어에서 출발했음에도 학생들은 서로 전혀 다른 해석과 방법론을 제안합니다. 그리고 저는 바로 이 순간이 교육에서 가장 흥미로운 순간이라고 생각합니다. 학생이 주어진 문제에 대한 ‘정답’을 찾는 것이 아니라, 자신만의 질문과 방법을 만들어가기 시작하는 순간이기 때문입니다.",
          en: "They set out from a single word and arrive at readings and methods that have nothing in common. That is the moment I find most interesting in teaching: not a student finding the “right answer” to a given problem, but a student beginning to build a question and a method of their own." },
        { t: "p",
          ko: "더욱 중요한 것은 이러한 과정이 학생 개인의 작업에서 끝나지 않는다는 점입니다.",
          en: "What matters more is that the process does not end with the student’s own work." },
        { t: "p",
          ko: "학생들이 만든 작품이 전시되고 관객과 만나면서, 그들이 탐구했던 감정과 질문은 다시 다른 사람에게 전달됩니다. 관객이 작품 앞에서 잠시 멈추거나, 자신의 경험을 떠올리거나, 위로나 공감을 느끼는 모습을 학생들이 직접 목격하게 됩니다.",
          en: "When the work is exhibited and meets an audience, the feelings and questions they explored are handed on to someone else. Students watch a visitor stop in front of the piece, or remember something of their own, or feel consoled or understood." },
        { t: "p",
          ko: "그 순간 학생들은 자신이 만든 작은 경험 하나가 누군가의 감정에 영향을 줄 수 있다는 사실을 발견합니다.",
          en: "In that moment they discover that one small experience they made can move what someone else feels." },
        { t: "p",
          ko: "저 역시 예술가로서 오랫동안 개인의 경험과 상처를 어떻게 다른 사람과 연결할 수 있을 것인가, 그리고 예술과 기술을 통해 어떻게 아주 작은 형태로나마 사회에 긍정적인 영향을 만들어낼 수 있을 것인가를 고민해왔습니다.",
          en: "As an artist I have asked for a long time how personal experience and injury can be connected to another person, and how art and technology might make some positive difference to society, however small its form." },
        { t: "p",
          ko: "저에게 교육은 이러한 질문의 또 다른 연장선에 있습니다.",
          en: "Teaching, for me, is another extension of that question." },
        { t: "p",
          ko: "한 사람의 학생이 자신의 경험을 탐구하고, 그것을 작품으로 표현하며, 그 작품이 다시 다른 사람에게 전달되는 과정은 결국 하나의 작은 연결을 만들어냅니다.",
          en: "A student examines their own experience, expresses it as work, and that work reaches another person — and what the process makes, in the end, is one small connection." },
        { t: "chain",
          ko: "Student → Work → Audience → Society",
          en: "Student → Work → Audience → Society" },
        { t: "p",
          ko: "저는 이러한 연결이 반복되면서 교육이 교실 밖의 세계에 작은 변화를 만들어낼 수 있다고 믿습니다.",
          en: "I believe that as that connection repeats, teaching can make a small change in the world outside the classroom." },
        { t: "p",
          ko: "그래서 저에게 가르치는 일은 학생들에게 제가 가진 지식을 전달하는 행위만을 의미하지 않습니다.",
          en: "So teaching, to me, does not only mean handing students what I know." },
        { t: "p",
          ko: "학생들이 자신이 무엇을 중요하게 생각하는 사람인지 발견하고, 기술과 예술을 이용해 자신의 질문을 표현하며, 그것을 다른 사람과 나눌 수 있도록 함께 방법을 찾아가는 일입니다.",
          en: "It is finding a way together — so that students discover what kind of person they are and what they hold important, express their questions through technology and art, and can share that with other people." },
        { t: "p",
          ko: "동시에 저 역시 그 과정에서 학생들로부터 배우고, 제가 가지고 있던 생각을 다시 질문하며 변화합니다.",
          en: "And in that same process I learn from them, put my own thinking back into question, and change." },
        { t: "p",
          ko: "결국 제가 만들고 싶은 교실은 정답을 배우는 공간이 아니라 질문을 발견하는 공간, 기술을 배우는 공간이 아니라 기술을 통해 자신의 생각을 실험하는 공간, 그리고 무엇보다도 서로의 경험을 통해 조금씩 변화할 수 있는 공간입니다.",
          en: "The classroom I want to make, in the end, is not a place for learning answers but for finding questions; not a place for learning technology but for testing your own thinking through it; and above all a place where we can each change a little through one another’s experience." },
        { t: "p",
          ko: "처음에는 청년들을 이해하기 위해 시작했던 교육이었지만, 지금 저는 가르치는 행위 자체가 제가 오래도록 찾고 있던 하나의 실천이라는 것을 깨닫고 있습니다.",
          en: "I started teaching in order to understand young people. I am now coming to see that the act of teaching is itself the practice I had been looking for all along." },
        { t: "p",
          ko: "예술가로서 작품을 통해 세상에 작은 긍정적인 영향을 만들고자 했던 것처럼, 교육자로서 저는 학생들이 자신의 질문과 창작을 통해 또 다른 사람에게 긍정적인 영향을 만들어낼 수 있도록 돕고 싶습니다.",
          en: "Just as I wanted my work as an artist to make some small positive difference in the world, as a teacher I want to help students make that difference for someone else, through their own questions and their own making." },
        { t: "p",
          ko: "그리고 어쩌면 그것이 제가 생각하는 교육의 가장 중요한 역할입니다.",
          en: "And perhaps that is the most important thing teaching does." },
        { t: "pull",
          ko: ["Teaching is not simply about transferring knowledge.",
               "It is about creating a space where one person’s question can become another person’s possibility."],
          en: ["Teaching is not simply about transferring knowledge.",
               "It is about creating a space where one person’s question can become another person’s possibility."] }
      ]
    },
    exhibitionPhotos: { slug: "nima", count: 6 },

    exhibition: {
      venue: {
        ko: "성균갤러리 1F, 성균관대학교 경영관 (서울 종로구 성균관로 25-2)",
        en: "Sungkyun Gallery, 1F, SKK Business School (25-2 Sungkyunkwan-ro, Jongno-gu, Seoul)"
      },
      curated: { ko: "유준오 · 황민협", en: "Junoh Yu · MinHyub Hwang" },
      support: {
        ko: "성균관대학교 영상학과",
        en: "Sungkyunkwan University, Dept. of Film, Television and Multimedia"
      },
      scale: { ko: "참여 작가 19명 · 출품작 10점", en: "19 artists · 10 works" },
      works: [
        { title: { ko: "숨", en: "Breath" },
          credit: { ko: "임예지 · 양호림 · 주이페이", en: "Lin Ruitian, Liang Haolin, Zhu Yifei" } },
        { title: { ko: "Whorl: A Meditation", en: "Whorl: A Meditation" },
          credit: { ko: "팽지현 · 정기찬 · 최성윤", en: "Paeng Jihyun, Chung Gichan, Choi Sungyun" } },
        { title: { ko: "비밀의 못", en: "Pond" },
          credit: { ko: "배주영 · 황민협", en: "Bae Jooyoung, Hwang Minhyub" } },
        { title: { ko: "집에 가는 길", en: "Way Back Home" },
          credit: { ko: "오세령 · 이용길", en: "Oh Seryung, Lee Yonggil" } },
        { title: { ko: "Will you walk with ____?", en: "Will you walk with ____?" },
          credit: { ko: "김윤서 · 조단비", en: "Kim Yunseo, Cho Danbi" } },
        { title: { ko: "Overlap", en: "Overlap" },
          credit: { ko: "팽지현 · 홍준서", en: "Paeng Jihyun, Hong Junseo" } },
        { title: { ko: "잔을 기울이면", en: "When You Tilt the Glass" },
          credit: { ko: "윤이나 · 한민택", en: "Yoon Yina, Han Mintaek" } },
        { title: { ko: "계절의 변곡점", en: "Inflection Point of Seasons" },
          credit: { ko: "박호윤", en: "Park Hoyoon" } },
        { title: { ko: "등", en: "Back to Back" },
          credit: { ko: "강윤경 · 오세령", en: "Kang Yunkyung, Oh Seryung" } },
        { title: { ko: "Josh", en: "Josh" },
          credit: { ko: "김민채", en: "Kim Min Chae" } }
      ]
    },
    schools: [
      {
        slug: "skku",
        page: "teaching-skku.html",
        name: { ko: "성균관대학교 영상학부 & 게임디자인학부", en: "Sungkyunkwan University — Film & Game Design" },
        role: { ko: "겸임교수", en: "Adjunct Professor" },
        since: "2026.03—",
        photos: { slug: "skku", count: 6 },
        courses: [
          { title: { ko: "캡스톤 디자인", en: "Capstone Design" }, teams: 5, tab: "capstone",
            note: { ko: "환경 디자인, 내러티브 시퀀싱, 센서 연동을 거쳐 설치 가능한 프로토타입까지 (15주 집중)",
                    en: "Environment design, narrative sequencing, and sensor integration, ending in an installable prototype (15 sessions)" } },
          { title: { ko: "몰입형 내러티브 & 인터랙션", en: "Immersive Narrative & Interaction" }, teams: 9, tab: "immersive",
            note: { ko: "이야기를 걸어 들어갈 수 있는 공간으로 옮기고, 아두이노와 프로젝션 매핑으로 확장",
                    en: "Moving stories into walkable space, extended with Arduino and projection mapping" } },
          { title: { ko: "AI 기반 인터랙티브 영상", en: "AI-Driven Interactive Video" }, teams: 7, tab: "ai",
            note: { ko: "학생을 ‘가상 건축가’로 두고, 가상 공간을 배경이 아닌 장소로 설계",
                    en: "Students as “virtual architects” — designing virtual space as a place, not a backdrop" } }
        ]
      },
      {
        slug: "cju",
        page: "teaching-cju.html",
        name: { ko: "청주대학교 예술학부 디지털미디어디자인학과", en: "Cheongju University — Digital Media Design" },
        role: { ko: "객원교수", en: "Visiting Professor" },
        since: "2025.08—",
        photos: { slug: "cju", count: 5 },
        courses: [
          { title: { ko: "인터랙션 디자인 (Q1 · Q2)", en: "Interaction Design (Q1 · Q2)" }, teams: 20, tab: "cju-q1",
            note: { ko: "감정표현불능증, 확증 편향, 제주 4·3, 그린워싱, 온라인 폭력 등 사회적 주제를 소리·촉각·움직임 기반 입력으로, 화면 밖의 인터페이스로 풀어낸 프로젝트 (Q1 9팀 · Q2 11팀)",
                    en: "Alexithymia, confirmation bias, Jeju 4·3, greenwashing, and online cruelty — worked out through audio, touch, and motion input, in interfaces beyond the screen (Q1 9 teams · Q2 11 teams)" } }
        ]
      },
      {
        slug: "dyu",
        page: "teaching-dyu.html",
        name: { ko: "동양대학교 웹툰애니메이션학과 & 게임학부", en: "Dongyang University — Webtoon & Animation / Game Studies" },
        role: { ko: "겸임교수", en: "Adjunct Professor" },
        since: "2025.03—",
        photos: { slug: "dyu", count: 5 },
        courses: [
          { title: { ko: "애니메이션 스튜디오", en: "Animation Studio" }, teams: 8, tab: "dyu-anim",
            note: { ko: "〈Reality Threshold〉 — 서로 독립된 두 공간을 통로가 아닌 ‘전환의 임계 공간’으로 잇는 작업. 거리 · 연결 · 서사 · 긴장감을 설계 변수로 두고 언리얼로 구축 (개인 과제 8명)",
                    en: "⟨Reality Threshold⟩ — joining two independent spaces with a threshold rather than a passage, built in Unreal around distance, connection, narrative, and tension (8 individual projects)" } },
          { title: { ko: "레벨 디자인", en: "Level Design" }, teams: 18, tab: "dyu-ld",
            note: { ko: "〈Simulated Experience〉 — 치유, 기다림, 숭고함, 향수, 어둠, 리듬, 환영, 정체성 중 하나를 골라, 설명 없이도 무엇을 해야 할지 알 수 있는 공간으로 최소 요소만 남겨 재구성 (이틀에 걸친 최종 크리틱 · 20명)",
                    en: "⟨Simulated Experience⟩ — healing, waiting, the sublime, nostalgia, darkness, rhythm, illusion, or identity, rebuilt from the fewest possible elements into a space a user can read without being told (two-day final critique · 20 students)" } }
        ]
      }
    ]
  };

  /* ---------------------------------------------------------------- bio  */

  var bio = {
    ko: [
      "작가는 의례, 치유, 기계적 매체를 융합하는 트랜스디서플리너리 시각·설치 작가이자 교육자이며 크리에이티브 테크놀로지스트이다.",
      "그의 작업은 어린 시절과 청소년기에 장기간 겪은 집단 괴롭힘으로부터 비롯된 심리적·신체적 고통을 출발점으로 삼지만, 동시에 한국 사회와 세계 곳곳에 존재하는 폭력, 차별, 역사적 상처의 구조까지 확장된다. 그러나 그는 고통의 어두움 자체에 머무르기보다, 그 안에서 드러나는 전환, 회복, 그리고 빛의 가능성에 주목한다.",
      "작가는 또한 억압되고 소외된 존재들의 경험을 작업의 중심에 놓으며, 명상적이고 영적인 의례적인 퍼포먼스와 설치 작업을 통해 관객이 함께 목격하고 감각하며 집단적 치유와 공동체 형성의 가능성에 접근할 수 있는 장을 만든다. 그의 작업은 공유된 경험을 통해 공간을 정화하고 새롭게 사유하는 실천이며, 트라우마와 생존, 회복의 이야기를 말할 수 있는 통로를 여는 데 목적이 있다.",
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
      { year: "2026.09—", what: { ko: "한양대학교 소프트웨어융합대학 ICT융합학부", en: "Hanyang University, ICT Convergence" }, note: { ko: "객원교수 (예정) — 인터랙티브 멀티미디어", en: "Visiting Professor (forthcoming) — Interactive Multimedia" }, where: { ko: "서울", en: "Seoul" } },
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
      { year: "2022.05", what: { ko: "석사 논문 — The Weight of Sigh / The Limitation of Time", en: "Master’s thesis — The Weight of Sigh / The Limitation of Time" }, note: { ko: "지도교수: Stephen Downs", en: "Advisor: Stephen Downs" }, where: { ko: "New York University", en: "New York University" },
        link: "https://itp.nyu.edu/thesis/2022/?junoh-yu",
        linkLabel: { ko: "NYU ITP 논문 페이지", en: "NYU ITP thesis page" } },
      { year: "2024.02", what: { ko: "특허 출원 — 액티브 시니어를 위한 마인드 테크 및 교육 플랫폼 개발", en: "Patent — Mind-tech and education platform for active seniors" }, note: { ko: "특허번호 10-2023-0169867", en: "Application no. 10-2023-0169867" }, where: { ko: "특허청", en: "KIPO" } },
      { year: "2025.07", what: { ko: "상표권 출원 — 리브리드", en: "Trademark — 리브리드" }, note: { ko: "출원번호 40-2025-0124304", en: "Application no. 40-2025-0124304" }, where: { ko: "특허청", en: "KIPO" } },
      { year: "2025.07", what: { ko: "상표권 출원 — REBREATHE", en: "Trademark — REBREATHE" }, note: { ko: "출원번호 40-2025-0124305", en: "Application no. 40-2025-0124305" }, where: { ko: "특허청", en: "KIPO" } }
    ]
  };

  return { ui: ui, categories: categories, works: works, teaching: teaching, bio: bio, cv: cv };
})();
