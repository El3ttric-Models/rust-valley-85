// Mock data for Rust Valley 85's — all content here is placeholder and editable.

export const BRAND = {
  name: "Rust Valley 85's",
  short: 'RV85',
  tagline: "Where the '80s never died.",
  subtitle: "An immersive 80s-themed FiveM roleplay experience.",
  // Placeholder logo (text-based) — replace freely later in /public/logo.png
  logoUrl: null,
};

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1706466615917-e44750d177d7?w=1920&q=80',
  rules: 'https://images.unsplash.com/photo-1717703943629-9a6d04e7adbb?w=1920&q=80',
  wiki: 'https://images.pexels.com/photos/414136/pexels-photo-414136.jpeg?w=1920&q=80',
  city: 'https://images.unsplash.com/photo-1732704895089-ec0e78d7ce91?w=1920&q=80',
  valley: 'https://images.unsplash.com/photo-1694532573669-f611b17fe414?w=1920&q=80',
};

export const SOCIAL = {
  youtube: 'https://www.youtube.com/@RustValleyRolePlay',
  instagram: 'https://www.instagram.com/rustvalley85sroleplay/?next=%2F',
  tiktok: 'https://vm.tiktok.com/ZNRq4R9cx/',
  discord: 'https://discord.gg/AHcnRrm5VD',
};

export const HIGHLIGHTS = [
  { title: 'Ambientazione 1985', desc: 'Rust Valley vive nel cuore degli anni \'80: neon, cassette, muscle cars e radio FM.', icon: 'Radio' },
  { title: 'Roleplay Profondo', desc: 'Personaggi persistenti, economia reattiva e storie che si intrecciano ogni notte.', icon: 'Users' },
  { title: 'Staff Dedicato', desc: 'Un team attivo 24/7 per moderazione, eventi e supporto giocatori.', icon: 'Shield' },
  { title: 'Eventi Settimanali', desc: 'Drive-in, gare clandestine, concerti synth e molto altro.', icon: 'Calendar' },
];

export const STATS = [
  { value: '1985', label: 'Anno di Ambientazione' },
  { value: '300+', label: 'Cittadini Attivi' },
  { value: '24/7', label: 'Server Online' },
  { value: '50+', label: 'Eventi al Mese' },
];

export const RULES = [
  {
    id: 'generali',
    title: 'Regole Generali',
    items: [
      'Rispetta ogni membro della community, in gioco, in chat e in vocale.',
      "Ogni linguaggio d'odio, razzismo, sessismo o discriminazione è vietato.",
      "L'uso di cheat, exploit o software di terze parti comporta ban permanente.",
      'Non condividere informazioni personali tue o altrui.',
      "L'età minima per giocare è 16 anni. Potrà essere richiesto un controllo.",
    ],
  },
  {
    id: 'roleplay',
    title: 'Regole di Roleplay',
    items: [
      'Interpreta sempre il tuo personaggio con coerenza (no meta-gaming, no power-gaming).',
      "Rispetta il concetto di Fear RP: il tuo personaggio ha paura di morire.",
      "Il Random Death Match (RDM) e il Vehicle Death Match (VDM) non sono ammessi.",
      "L'OOC in chat IC è vietato. Usa i canali appropriati.",
      'Ogni azione deve avere una motivazione IC credibile e coerente con gli anni \'80.',
    ],
  },
  {
    id: 'ambientazione',
    title: "Ambientazione Anni '80",
    items: [
      'Nessun riferimento a tecnologia moderna: niente smartphone, social, internet.',
      "Linguaggio, musica e abbigliamento devono essere coerenti con il periodo 1980-1989.",
      "I veicoli autorizzati sono solo quelli d'epoca presenti nella lista whitelist.",
      'Le armi disponibili sono limitate al catalogo \'80: no armi automatiche moderne.',
      "I nomi dei personaggi devono suonare credibili per l'epoca.",
    ],
  },
  {
    id: 'criminalita',
    title: 'Criminalità & Conflitti',
    items: [
      "Il numero massimo di membri attivi in un gruppo criminale è 8.",
      "I sequestri devono durare almeno 20 minuti e avere motivo IC.",
      'Le rapine ai negozi richiedono almeno 4 agenti in servizio.',
      "Il New Life Rule si applica dopo ogni morte: perdi i ricordi degli ultimi 15 minuti.",
      'È vietato attaccare safe zones come ospedali, dipartimento di polizia e municipio.',
    ],
  },
  {
    id: 'sanzioni',
    title: 'Sanzioni',
    items: [
      'Warn verbale per infrazioni lievi di prima violazione.',
      'Kick dal server per infrazioni ripetute o medie.',
      'Ban temporaneo (1-30 giorni) per infrazioni gravi.',
      'Ban permanente per cheating, tossicità grave o reiterata.',
      "Ogni sanzione può essere appellata tramite ticket entro 48 ore.",
    ],
  },
];

export const BACKGROUND_GUIDE = [
  {
    id: 'intro',
    title: 'Come scrivere un buon background',
    content:
      "Il background è la storia del tuo personaggio prima del suo arrivo a Rust Valley. Deve essere credibile, coerente con gli anni '80 e offrire ganci narrativi per altri giocatori. Evita poteri speciali, origini mitiche o storie troppo drammatiche: la semplicità è credibilità.",
  },
  {
    id: 'struttura',
    title: 'Struttura consigliata',
    content:
      "1. Infanzia e famiglia (dove sei nato, chi ti ha cresciuto). 2. Adolescenza e formazione (scuola, primi amori, prime scelte). 3. Vita adulta pre-Rust Valley (lavori, traumi, successi). 4. Motivo dell'arrivo a Rust Valley. 5. Aspirazioni e obiettivi presenti.",
  },
  {
    id: 'dos',
    title: 'Cosa fare',
    bullets: [
      "Ambientare la storia in luoghi reali degli anni '80.",
      'Inserire dettagli sensoriali (musiche, profumi, moda).',
      "Creare relazioni con NPC o altri personaggi.",
      "Lasciare zone d'ombra da riempire con il roleplay.",
      "Rileggere e correggere refusi e incongruenze.",
    ],
  },
  {
    id: 'donts',
    title: "Cosa evitare",
    bullets: [
      "Poteri sovrannaturali, origini aliene o storie fantasy.",
      "Parentele con personalità reali famose.",
      "Traumi eccessivi solo per fare scena.",
      'Riferimenti a tecnologie post-1989.',
      "Storie che rendono il personaggio immortale o invincibile.",
    ],
  },
  {
    id: 'esempio',
    title: 'Esempio breve',
    content:
      "Marcus Delaney è nato nel 1958 a Detroit. Figlio di un operaio Ford e di una cameriera, cresce tra le officine e i juke-box del quartiere. A 17 anni scappa di casa con una Pontiac Firebird rubata al padre. Dopo anni tra piccoli lavori e grandi guai, nel 1985 approda a Rust Valley cercando una seconda possibilità — o almeno una cassetta di Bruce Springsteen che funzioni nello stereo della sua auto.",
  },
];

export const HISTORICAL = [
  {
    id: 'fondazione',
    title: 'La Fondazione di Rust Valley',
    content:
      'Fondata nel 1887 come città mineraria ai piedi delle Blackrock Mountains, Rust Valley deve il suo nome al colore rossastro dei giacimenti di ferro che hanno segnato la sua prima economia. Con il declino delle miniere negli anni \'50, la città si reinventa come snodo commerciale lungo la leggendaria Route 85.',
  },
  {
    id: 'anni80',
    title: "L'Alba degli Anni '80",
    content:
      "Il 1980 porta a Rust Valley un'ondata di rinascita: il boom immobiliare, l'apertura del Neon Mall, l'inaugurazione della stazione radio K-RUST 98.5 FM. La città diventa terra di promesse per artisti, criminali, veterani e sognatori. I quartieri si riempiono di videoclub, sale giochi e fast food.",
  },
  {
    id: 'quartieri',
    title: 'I Quartieri Storici',
    content:
      "Downtown è il cuore amministrativo, con il municipio art déco e il Police Department. East Rust è il quartiere operaio, famoso per il Drive-In Starlite. Sunset Boulevard ospita ville, locali esclusivi e il celebre hotel Flamingo. North Heights, sulle colline, è il rifugio dei nuovi ricchi. South Flats, vicino al fiume, è il lato oscuro della città.",
  },
  {
    id: 'economia',
    title: "Economia e Società",
    content:
      'Il commercio su ruote è il motore dell\'economia: motel, diner e stazioni di servizio punteggiano la valle. Le gang controllano parte del mercato nero — automobili, sostanze, musica pirata su cassetta. La polizia combatte una guerra silenziosa contro la crescente criminalità, mentre la stampa locale alimenta i sogni di una città che vuole sentirsi viva, a ogni costo.',
  },
  {
    id: 'cultura',
    title: 'Cultura e Musica',
    content:
      "Rust Valley è colonna sonora di synth, rock e new wave. I nomi sulle marquee del Teatro Apollo cambiano ogni settimana: band locali, comici in tour, proiezioni di cult movie. Le radio trasmettono hit di Michael Jackson, Madonna, The Police. I ragazzi corrono su skateboard, le ragazze ballano al Roller Rink. Tutto è luminoso, tutto è veloce, tutto brucia in fretta.",
  },
];

// Character sheet sections
export const CHARACTER_SECTIONS = [
  {
    id: 'anagrafica',
    title: 'Anagrafica',
    fields: [
      { key: 'fullName', label: 'Nome e Cognome', type: 'text', placeholder: 'Es. Marcus Delaney' },
      { key: 'nickname', label: 'Soprannome', type: 'text', placeholder: 'Es. Marc "The Kid"' },
      { key: 'birthDate', label: 'Data di nascita', type: 'date' },
      { key: 'birthPlace', label: 'Luogo di nascita', type: 'text', placeholder: 'Es. Detroit, MI' },
      { key: 'nationality', label: 'Nazionalità', type: 'text', placeholder: 'Es. Statunitense' },
      { key: 'gender', label: 'Genere', type: 'select', options: ['Maschio', 'Femmina', 'Altro'] },
    ],
  },
  {
    id: 'aspetto',
    title: 'Aspetto Fisico',
    fields: [
      { key: 'height', label: 'Altezza (cm)', type: 'number', placeholder: '180' },
      { key: 'weight', label: 'Peso (kg)', type: 'number', placeholder: '75' },
      { key: 'eyes', label: 'Colore occhi', type: 'text', placeholder: 'Castani' },
      { key: 'hair', label: 'Colore capelli', type: 'text', placeholder: 'Biondi' },
      { key: 'signs', label: 'Segni particolari', type: 'textarea', placeholder: 'Cicatrici, tatuaggi, neo...' },
    ],
  },
  {
    id: 'famiglia',
    title: 'Famiglia & Contesto',
    fields: [
      { key: 'father', label: 'Padre', type: 'text' },
      { key: 'mother', label: 'Madre', type: 'text' },
      { key: 'siblings', label: 'Fratelli/Sorelle', type: 'textarea' },
      { key: 'socialClass', label: 'Classe sociale di origine', type: 'select', options: ['Bassa', 'Media bassa', 'Media', 'Media alta', 'Alta'] },
    ],
  },
  {
    id: 'formazione',
    title: 'Formazione & Lavoro',
    fields: [
      { key: 'education', label: "Livello d'istruzione", type: 'select', options: ['Nessuno', 'Elementare', 'High School', 'Diploma', 'College', 'Laurea'] },
      { key: 'jobs', label: 'Lavori svolti', type: 'textarea' },
      { key: 'skills', label: 'Abilità principali', type: 'textarea' },
    ],
  },
  {
    id: 'personalita',
    title: 'Personalità',
    fields: [
      { key: 'traits', label: 'Tratti caratteriali', type: 'textarea' },
      { key: 'virtues', label: 'Pregi', type: 'textarea' },
      { key: 'flaws', label: 'Difetti', type: 'textarea' },
      { key: 'fears', label: 'Paure', type: 'textarea' },
      { key: 'goals', label: 'Obiettivi', type: 'textarea' },
    ],
  },
  {
    id: 'background',
    title: 'Background Narrativo',
    fields: [
      { key: 'childhood', label: 'Infanzia', type: 'textarea', rows: 5 },
      { key: 'adolescence', label: 'Adolescenza', type: 'textarea', rows: 5 },
      { key: 'adulthood', label: 'Età adulta', type: 'textarea', rows: 5 },
      { key: 'arrival', label: "Arrivo a Rust Valley", type: 'textarea', rows: 5 },
      { key: 'future', label: 'Prospettive future', type: 'textarea', rows: 4 },
    ],
  },
];
