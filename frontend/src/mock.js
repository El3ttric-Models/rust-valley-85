// Mock data for Rust Valley 85's — graphics paths are editable in /public/assets/

export const BRAND = {
  name: "Rust Valley 85's",
  short: 'RV85',
  mainPhrase: "80's on FiveM",
  secondaryPhrase: "Ogni posto ha la sua storia. Questo ha la sua maledizione.",
  description:
    "Tra colline polverose e boschi arancioni, tutto qui arrugginisce: il ferro, le case, i ricordi\u2026 persino le persone. Chi la chiama Rust Valley sa che il passato vive in ogni pietra e che i segreti non restano mai sepolti. Dal ferro alle sparizioni, dalle miniere abbandonate alle ombre dei mormoni, ogni angolo racconta storie di sangue, coraggio e mistero. \u00c8 il 1985. La valle sembra viva pi\u00f9 che mai, con nuove facce e speranze\u2026 ma sotto l'asfalto e i campi, il passato osserva. Rust Valley non dimentica. Solo chi ha il coraggio di restare pu\u00f2 ascoltarla.",
  logoUrl: '/assets/logo.png',
  logoSecondaryUrl: '/assets/logo2.png',
};

export const IMAGES = {
  hero: '/assets/background.png',
  rules: '/assets/background.png',
  wiki: '/assets/background.png',
  character: '/assets/background2.png',
  valley: '/assets/background.png',
};

export const SOCIAL = {
  youtube: 'https://www.youtube.com/@RustValleyRolePlay',
  instagram: 'https://www.instagram.com/rustvalley85sroleplay/?next=%2F',
  tiktok: 'https://vm.tiktok.com/ZNRq4R9cx/',
  discord: 'https://discord.gg/AHcnRrm5VD',
};

export const HISTORICAL_GUIDE_URL =
  'https://drive.google.com/file/d/13nAe6Kg5qXM_c93u5poO2tmyqAphCNDS/view?usp=sharing';

// --- REGOLAMENTO ---
export const RULES_INTRO = {
  title: 'Introduzione',
  paragraphs: [
    "Il nostro server non è un classico server di FiveM: le dinamiche, l'ambientazione e le interazioni sono completamente personalizzate per immergervi nello stile country americano del 1985. Comprendere le regole non significa solo rispettare le norme, ma anche capire come vivere appieno l'esperienza, interagire con gli altri giocatori e con l'ambiente in modo coerente con il mondo che vi circonda.",
    "Ignorare il regolamento non è un semplice errore: può compromettere la vostra esperienza e quella degli altri. Ogni sezione di questo documento è stata pensata per guidarvi attraverso le regole di ruolo, comportamento, economia, housing e interazioni, così da garantire un'esperienza immersiva, equa e unica. Leggere, comprendere e rispettare il regolamento è il primo passo per entrare davvero a far parte di Rust Valley.",
  ],
  tip: "Immaginate di essere i protagonisti del vostro film. Ogni volta che state recitando il vostro personaggio chiedetevi: sto realizzando al meglio la scena? Sto coinvolgendo i presenti? Sto lasciando margine di improvvisazione agli altri? Siate gli attori del film che vorreste guardare.",
};

export const RULES = [
  {
    id: 'base-rp',
    title: "Regole di base dell'RP",
    items: [
      "VDM — È vietato investire un altro personaggio senza un valido motivo in RP. È consentita la collisione PG-veicolo solo a scopi di scena in RP quando strettamente necessario.",
      "RDM — È vietato uccidere un altro personaggio con un veicolo o senza una motivazione valida in Roleplay.",
      "Fail RP — Vietata qualsiasi azione forzata o irreale che non troverebbe riscontro nella vita reale. Il Roleplay deve mantenere coerenza con il contesto, il background del personaggio e la logica della vita reale dell'epoca.",
      "Powergame — Vietato sfruttare in modo irrealistico o scorretto le meccaniche di gioco per trarne vantaggio. Stile di guida irrealistico vietato anche su sterrato. Vietato usare radio in acqua, estrarre armi pesanti senza borsone, abbassarsi/alzarsi ripetutamente in sparatoria, salti o scalate irrealistiche con veicoli non adatti.",
      "Metagame — Vietato l'uso di informazioni ottenute fuori dal gioco se danneggia l'RP altrui. Consentito invece sfruttare in RP un'informazione IC. Vietato lo stream sniping.",
      "No Fear — Ogni personaggio deve mostrare timore in situazioni di pericolo (armi puntate, rapimenti, vita o morte). Può essere richiesto il permadeath con clip a supporto.",
      "Revenge Kill — Vietato vendicarsi del proprio assassino senza coerenza e giustificazione IC dopo il ritorno in gioco.",
      "Car Surf — Vietato posizionarsi sopra un veicolo in movimento senza essere seduti.",
      "Car Jack — Vietato rubare un veicolo senza un concreto scopo RP.",
      "Bunny Hop — Vietato saltare ripetutamente per muoversi più velocemente.",
      "Bug/Glitch Abuse — Severamente vietato sfruttare bug o glitch. Obbligo di segnalazione allo staff.",
      "Cheating e Citizen vietati — Vietato l'uso di programmi esterni (No Props, No Rolas, Rapid Fire, Damage Boost, Filter Keys, Bush 2D e simili).",
      "Cop Baiting — Vietato provocare immotivatamente le forze dell'ordine.",
      "Combat Logging — Vietato introdursi in un'azione RP iniziata prima del proprio collegamento.",
    ],
  },
  {
    id: 'dinamiche',
    title: 'Dinamiche di gioco',
    items: [
      "Loot — Consentito solo se coerente con il background del giocatore e con il coinvolgimento in un'azione RP. Vietato lootare un giocatore \"a terra\" senza coinvolgimento. Vietate rapine/rapimenti finalizzati al loot se il background non lo giustifica.",
      "Rapine e Furti — Consentita qualsiasi tipologia di rapina se il background giustifica il gesto. Nessun limite nell'uso di armi da fuoco o bianche. Vietato usare caschi per evitare l'uccisione durante le sparatorie.",
      "PED & NPC — Tutti gli NPC e i PED ruolati dallo staff per quest sono a tutti gli effetti dei player. L'uccisione di un NPC equivale a quella di un player.",
    ],
  },
  {
    id: 'specifiche',
    title: 'Regole specifiche',
    items: [
      "Ingaggio — Lo scontro a fuoco è l'ultima spiaggia. Prima dell'ingaggio fisico deve sempre esserci un ingaggio verbale. Durante l'azione, almeno inizialmente, non sparare in testa.",
      "Corruzione — Chi ricopre cariche pubbliche o elettive può scegliere una linea RP corrotta, a proprio rischio e pericolo.",
      "Prove — Gli spari lasciano bossoli e proiettili raccoglibili da tutti. Consentito raccoglierli per sviare indagini.",
      "Giocatori a terra — Con paramedici: memoria totale immediata. Respawn senza paramedici: memoria totale dopo 24 ore. Permadeath: perdita permanente della memoria.",
    ],
  },
  {
    id: 'lavori-items',
    title: 'Lavori & Items',
    items: [
      "Lavori in game — Sono presenti lavori No-WL. L'assunzione WL avviene solo in game tramite presentazione del \"Curriculum\" cartaceo al datore di lavoro.",
      "Attività esistenti — Per gestirne una esistente (es. Angel's Pub) aprire ticket Discord.",
      "Nuove attività — Piena libertà di crearle senza ticket.",
      "Utilizzo degli items — Gli oggetti devono essere posizionati fisicamente con il tasto \"Posiziona\". Vietato buttarli dall'inventario. Se illeciti e visti dalle forze dell'ordine comportano sanzioni IC.",
    ],
  },
  {
    id: 'condotta',
    title: 'Linguaggio, condotta e interpretazione',
    items: [
      "Severamente vietati termini discriminatori che violino le policy di Twitch e FiveM.",
      "L'ambientazione rurale degli anni '80 può portare a temi oggi considerati discriminatori: esplorazione consentita a fini narrativi, in modo maturo e contestualizzato.",
      "Vietati modificatori vocali che alterino la voce in modo innaturale.",
      "Non è consentito interpretare personaggi di età inferiore a 18 anni.",
      "Non è consentito ruolare personaggi del sesso opposto.",
    ],
  },
  {
    id: 'assistenze',
    title: 'Assistenze',
    items: [
      "Vietato entrare in assistenza Discord senza valida motivazione (bug o contestazione).",
      "Le contestazioni sono valide solo con prova video. Senza prova la contestazione è respinta e si riceve un WARN.",
      "Vietato scrivere in chat privata ai membri dello staff: ogni trasgressione comporta WARN.",
    ],
  },
  {
    id: 'permadeath',
    title: 'Permadeath',
    items: [
      "Richiesta permadeath consentita con almeno 5 motivi RP validi, dimostrabili via video, aprendo ticket Discord.",
      "Lo staff può valutare alcune azioni come motivo di permadeath.",
      "Casi standard di morte definitiva: esplosione di veicolo/velivolo; esplosione vicina; morte in acqua; animale feroce; investimento da treno; caduta da altitudine elevata; collisione molto grave (senza esplosione).",
    ],
  },
];

export const RULES_FOOTER =
  "Lo Staff si riserva il diritto di cambiare o aggiornare il regolamento in qualsiasi momento, dandone comunicazione a tutti i player.";

// --- BACKGROUND GUIDE ---
export const BACKGROUND_GUIDE = [
  {
    id: 'general',
    title: 'Linee guida generali',
    paragraphs: [
      "Il background (BG) serve a raccontare chi è il tuo personaggio, da dove proviene e perché si trova nella Rust Valley.",
      "L'età minima reale per entrare nel server è di 17 anni COMPIUTI.",
      "Non è necessario scrivere un romanzo, ma il testo deve essere coerente, dettagliato e credibile, rispettando l'ambientazione americana degli anni '80.",
    ],
    bullets: [
      'Data di nascita minima: 01/01/1905',
      'Data di nascita massima: 01/01/1967',
      "Età personaggio minima consentita all'ingresso nel server: 18 anni",
      "Età personaggio massima consentita all'ingresso nel server: 80 anni",
    ],
  },
  {
    id: 'ethnicities',
    title: "Etnie — Nate o integrate sul suolo americano",
    paragraphs: [
      "L'etnia definisce le origini culturali e sociali del tuo personaggio. Solo alcune etnie possono essere considerate native o radicate da più generazioni nella Rust Valley.",
    ],
    bullets: [
      'Americani',
      'Nativi Americani',
      'Afroamericani',
      'Italoamericani — ETNIA NON SELEZIONABILE',
      'Messicani di seconda generazione (o superiore)',
    ],
    note: "Queste etnie sono considerate parte integrante della comunità locale, nate e cresciute negli Stati Uniti, pienamente integrate nel tessuto sociale.",
  },
  {
    id: 'immigrants',
    title: 'Etnie immigrate (non nate negli USA)',
    paragraphs: [
      "I personaggi provenienti da altre etnie devono essere considerati immigrati. Non possono essere nati nella Rust Valley e devono motivare nel background il motivo della loro presenza negli Stati Uniti.",
    ],
    bullets: [
      'Legalmente presenti (visto, cittadinanza, matrimonio, rifugio politico)',
      'Illegalmente presenti (immigrazione clandestina o permanenza oltre il visto)',
      "Nel background dovranno essere chiaramente indicati: le modalità di arrivo negli USA, chi li ha aiutati o accolti, dove vivono e che tipo di lavoro svolgono, se nascondono la propria identità o hanno contatti nel sottobosco.",
    ],
  },
  {
    id: 'ethnicity-details',
    title: "Etnie coerenti con l'ambientazione (1985)",
    bullets: [
      'Americani: classe media o operaia, figli di veterani, meccanici, camionisti, commercianti.',
      'Nativi Americani: discendenti delle popolazioni originarie, spesso divisi tra tradizione e modernità.',
      'Afroamericani: parte viva della cultura USA, ma ancora vittime di discriminazioni; musicisti, ex militari, lavoratori o giovani in cerca di riscatto.',
      "Italoamericani: famiglie unite, spesso legate a comunità o attività commerciali, lecite o meno.",
      'Irlandesi: orgogliosi e combattivi, fortemente legati ai valori familiari.',
      'Messicani: nati negli USA (seconda generazione o superiore); se immigrati di prima generazione, specificare la condizione legale.',
      'Asiatici: Giappone, Cina, Corea o Filippine; integrazione difficile ma disciplina e spirito di adattamento.',
      'Paesi del Blocco Sovietico: URSS, Germania Est. Obbligatorio giustificare accuratamente il motivo di arrivo in America.',
      "Cubani: specificare la motivazione della fuga o dell'arrivo negli USA.",
    ],
  },
  {
    id: 'religion',
    title: 'Religione nella Rust Valley',
    paragraphs: [
      "La religione era un elemento centrale della vita americana, specialmente nelle comunità rurali come la Rust Valley.",
    ],
    groups: [
      {
        name: 'Protestantesimo (maggioranza assoluta)',
        desc: 'Religione dominante nelle campagne americane. Principali denominazioni: Battisti, Metodisti, Luterani, Presbiteriani, Episcopali, Pentecostali, Chiese di Cristo.',
      },
      {
        name: 'Cattolicesimo',
        desc: 'Diffuso soprattutto nelle aree con forte presenza di immigrati europei (italiani, irlandesi, polacchi) o ispanici.',
      },
      {
        name: 'Chiese Afroamericane',
        desc: 'African Methodist Episcopal (AME) Church, National Baptist Convention, Church of God in Christ. Ruolo religioso, culturale e politico.',
      },
      {
        name: 'Minoranze Religiose',
        desc: 'Mormoni, Testimoni di Geova, Avventisti del Settimo Giorno, Ebrei, Comunità Amish e Mennoniti.',
      },
      {
        name: 'Sette Religiose',
        desc: 'Se il tuo personaggio appartiene a una setta, indicarlo nel background e concordare preventivamente il ruolo con lo staff.',
      },
    ],
  },
  {
    id: 'personality',
    title: 'Carattere e Personalità',
    paragraphs: [
      "Descrivi il comportamento e l'indole del tuo personaggio: è impulsivo o calcolatore? Onesto o opportunista? Solitario o espansivo?",
      "Puoi elencare alcuni tratti caratteriali, come: testardo, ironico, malinconico, carismatico, paranoico, empatico, violento, leale, ecc.",
    ],
  },
  {
    id: 'aspirations',
    title: 'Aspirazioni del personaggio',
    paragraphs: [
      "Cosa sogna, desidera o teme il tuo personaggio? Nel 1985, l'America è la terra delle opportunità, ma anche della disillusione.",
    ],
    bullets: [
      'Sfondare come musicista, atleta o pilota',
      'Far rispettare la "legge" a qualunque costo',
      'Vivere una vita tranquilla dopo anni difficili',
      'Arricchirsi, con qualsiasi mezzo',
      'Fuggire da un passato oscuro o da qualcuno',
      'Ritrovare una persona cara o riscattare il nome della propria famiglia',
    ],
    note: 'Evita gli estremi o gli stereotipi: anche il personaggio più "duro" deve avere contraddizioni e debolezze.',
  },
  {
    id: 'presence',
    title: 'Motivo della presenza nella Rust Valley',
    paragraphs: [
      "Ogni personaggio deve avere un motivo concreto e logico per trovarsi in città.",
    ],
    bullets: [
      'Nuovo lavoro o opportunità economica',
      'Fuga dal passato o da qualcuno',
      'Ricerca di un familiare o di un luogo simbolico',
      'Eredità o legame con la città',
      'Missione, indagine o affari loschi',
    ],
  },
  {
    id: 'roles',
    title: 'Ruoli consigliati',
    paragraphs: [
      "Il ruolo scelto ed indicato nel BG non darà automaticamente il lavoro nel server, ma consentirà una strada più semplice nell'accesso alla carriera indicata.",
      "Riguardo ai ruoli di stile di vita, potete sceglierli liberamente anche con una carriera specifica, tenendo presente che nell'ambientazione molti ruoli sono considerati dalla società come \"sbagliati\".",
    ],
    bullets: [
      'Uomo di Fede',
      'Uomo di Legge',
      'Hippie',
      'Laureati in Medicina',
      'Redneck',
      'Biker',
      'Giornalista',
      'Allevatore (stile mandriano americano)',
      'Membro di una Setta (da concordare con lo staff tramite ticket)',
      'Spia Sovietica (da concordare con lo staff tramite ticket)',
      'Serial Killer (da concordare con lo staff tramite ticket)',
      'Laureati in Legge',
    ],
    note: "Lo staff si riserva la possibilità di variare i ruoli e le etnie disponibili.",
  },
  {
    id: 'story',
    title: 'Storia del personaggio',
    paragraphs: [
      "Racconta le principali tappe della vita del tuo personaggio: infanzia e famiglia, esperienze formative (scuola, lavoro, militare, carcere, strada), eventi che lo hanno segnato, cosa o chi lo ha spinto verso Rust Valley, obiettivi presenti e conflitti interiori.",
      "Una storia coerente e realistica renderà il tuo personaggio più credibile in gioco.",
    ],
  },
  {
    id: 'convictions',
    title: 'Condanne penali (opzionale)',
    paragraphs: [
      "Elencare eventuali condanne rilevanti che hanno segnato il passato del personaggio e che influenzano il suo presente. Tutte le informazioni sono note all'Ufficio dello Sceriffo e saranno quindi facilmente reperibili. Ogni condanna elencata deve essere integrata in modo coerente nella storia breve del personaggio.",
    ],
  },
];

// --- Selectable options for the character sheet ---
export const ETHNICITIES = [
  'Americano',
  'Nativo Americano',
  'Afroamericano',
  'Messicano (2a generazione o superiore)',
  'Irlandese (immigrato)',
  'Asiatico (immigrato)',
  'Blocco Sovietico (immigrato)',
  'Cubano (immigrato)',
  'Altro / Da concordare con lo staff',
];

export const RELIGIONS = [
  'Protestante — Battista',
  'Protestante — Metodista',
  'Protestante — Luterano',
  'Protestante — Presbiteriano',
  'Protestante — Episcopale',
  'Protestante — Pentecostale',
  'Protestante — Chiese di Cristo',
  'Cattolico',
  'Chiesa Afroamericana (AME / National Baptist / Church of God in Christ)',
  'Mormone',
  'Testimone di Geova',
  'Avventista del Settimo Giorno',
  'Ebreo',
  'Amish / Mennonita',
  'Setta (da concordare con lo staff)',
  'Ateo',
];

export const ARCHETYPES = [
  'Uomo di Fede',
  'Uomo di Legge',
  'Hippie',
  'Criminale',
  'Laureato in Medicina',
  'Redneck',
  'Biker',
  'Giornalista',
  'Politico',
  'Veterano',
  'Allevatore (stile mandriano americano)',
  'Laureato in Legge',
  'Membro di una Setta (ticket Discord)',
  'Spia Sovietica (ticket Discord)',
  'Serial Killer (ticket Discord)',
];

// --- HISTORICAL ---
export const HISTORICAL = [
  {
    id: 'placeholder',
    title: "Introduzione all'ambientazione",
    content:
      "La guida completa all'ambientazione di Rust Valley è disponibile nel documento ufficiale. Al suo interno troverai la storia della valle, la geografia dei quartieri, le dinamiche sociali del 1985 e tutto ciò che ti serve per costruire un personaggio coerente con il mondo di gioco.",
  },
];

// --- Character sheet sections ---
export const CHARACTER_SECTIONS = [
  {
    id: 'anagrafica',
    title: 'Anagrafica',
    fields: [
      { key: 'fullName', label: 'Nome e Cognome', type: 'text', placeholder: 'Es. Marcus Delaney' },
      { key: 'nickname', label: 'Soprannome', type: 'text', placeholder: 'Es. Marc "The Kid"' },
      { key: 'birthDate', label: 'Data di nascita', type: 'date', hint: 'Min 01/01/1905 — Max 01/01/1967' },
      { key: 'birthPlace', label: 'Luogo di nascita', type: 'text', placeholder: 'Es. Detroit, MI' },
      { key: 'nationality', label: 'Nazionalità', type: 'text', placeholder: 'Es. Statunitense' },
      { key: 'gender', label: 'Genere', type: 'select', options: ['Maschio', 'Femmina', 'Altro'] },
    ],
  },
  {
    id: 'origini',
    title: 'Origini & Ruolo',
    fields: [
      { key: 'ethnicity', label: 'Etnia', type: 'select', options: ETHNICITIES, hint: "Italoamericani non selezionabili. Le etnie immigrate richiedono motivazione nel background." },
      { key: 'legalStatus', label: 'Condizione legale (se immigrato)', type: 'select', options: ['Nato negli USA', 'Legalmente presente', 'Illegalmente presente'] },
      { key: 'religion', label: 'Religione', type: 'select', options: RELIGIONS },
      { key: 'archetype', label: 'Prototipo / Ruolo', type: 'select', options: ARCHETYPES, hint: 'Alcuni ruoli richiedono ticket Discord con lo staff.' },
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
      { key: 'signs', label: 'Segni particolari', type: 'textarea', placeholder: 'Cicatrici, tatuaggi, nei...' },
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
      { key: 'traits', label: 'Tratti caratteriali', type: 'textarea', placeholder: 'Es. testardo, ironico, malinconico, carismatico, paranoico...' },
      { key: 'virtues', label: 'Pregi', type: 'textarea' },
      { key: 'flaws', label: 'Difetti', type: 'textarea' },
      { key: 'fears', label: 'Paure', type: 'textarea' },
      { key: 'goals', label: 'Obiettivi e aspirazioni', type: 'textarea' },
    ],
  },
  {
    id: 'background',
    title: 'Background Narrativo',
    fields: [
      { key: 'childhood', label: 'Infanzia', type: 'textarea', rows: 5, maxLength: 1000, hint: 'Massimo 1000 caratteri.' },
      { key: 'adolescence', label: 'Adolescenza', type: 'textarea', rows: 5, maxLength: 1000, hint: 'Massimo 1000 caratteri.' },
      { key: 'adulthood', label: 'Età adulta', type: 'textarea', rows: 5, maxLength: 1000, hint: 'Massimo 1000 caratteri.' },
      { key: 'arrival', label: "Arrivo a Rust Valley (motivo)", type: 'textarea', rows: 5, maxLength: 1000, hint: 'Massimo 1000 caratteri.' },
      { key: 'future', label: 'Prospettive future', type: 'textarea', rows: 4, maxLength: 1000, hint: 'Massimo 1000 caratteri.' },
      { key: 'convictions', label: 'Condanne penali (opzionale)', type: 'textarea', rows: 4, maxLength: 1000, hint: 'Massimo 1000 caratteri. Elenca condanne rilevanti del passato, se coerenti con la storia.' },
    ],
  },
];
