// Mock data for Rust Valley 85's — graphics paths are editable in /public/assets/

export const BRAND = {
  name: "Rust Valley 85's",
  short: 'RV85',
  tagline: "Country America, 1985.",
  subtitle: "Un server FiveM Roleplay ambientato nella provincia americana degli anni '80.",
  logoUrl: '/assets/logo.png',
};

export const IMAGES = {
  hero: '/assets/background.png',
  rules: '/assets/background.png',
  wiki: '/assets/background.png',
  city: '/assets/background.png',
  valley: '/assets/background.png',
};

export const SOCIAL = {
  youtube: 'https://www.youtube.com/@RustValleyRolePlay',
  instagram: 'https://www.instagram.com/rustvalley85sroleplay/?next=%2F',
  tiktok: 'https://vm.tiktok.com/ZNRq4R9cx/',
  discord: 'https://discord.gg/AHcnRrm5VD',
};

// --- REGOLAMENTO (testo fornito dall'utente, suddiviso in sezioni) ---
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
      "Powergame — Vietato sfruttare in modo irrealistico o scorretto le meccaniche di gioco per trarne vantaggio. Stile di guida irrealistico vietato anche su sterrato (dove non ci sono limiti di velocità). Vietato usare radio in acqua, estrarre armi pesanti senza borsone, abbassarsi/alzarsi ripetutamente in sparatoria, salti o scalate irrealistiche con veicoli non adatti.",
      "Metagame — Vietato l'uso di informazioni ottenute fuori dal gioco se danneggia l'RP altrui (es. localizzare un rapito tramite una live). Consentito invece sfruttare in RP un'informazione IC (es. morte avvenuta in RP). Vietato lo stream sniping.",
      "No Fear — Ogni personaggio deve mostrare timore in situazioni di pericolo (armi puntate, rapimenti, vita o morte). In caso di azioni forzate può essere richiesto il permadeath con clip a supporto.",
      "Revenge Kill — Vietato vendicarsi del proprio assassino senza coerenza e giustificazione IC dopo il ritorno in gioco.",
      "Car Surf — Vietato posizionarsi sopra un veicolo in movimento senza essere seduti.",
      "Car Jack — Vietato rubare un veicolo senza un concreto scopo RP.",
      "Bunny Hop — Vietato saltare ripetutamente per muoversi più velocemente: comportamento irrealistico e scorretto.",
      "Bug/Glitch Abuse — Severamente vietato sfruttare bug o glitch. Obbligo di segnalazione allo staff.",
      "Cheating e Citizen vietati — Vietato l'uso di citizen o programmi esterni che conferiscano vantaggi (No Props, No Rolas, Rapid Fire, Damage Boost, Filter Keys, Bush 2D e simili).",
      "Cop Baiting — Vietato provocare immotivatamente le forze dell'ordine per forzare un'azione RP.",
      "Combat Logging — Vietato introdursi in un'azione RP iniziata prima del proprio collegamento in game.",
    ],
  },
  {
    id: 'dinamiche',
    title: "Dinamiche di gioco",
    items: [
      "Loot — Consentito solo se coerente con il background del giocatore e con il coinvolgimento in un'azione RP. Vietato lootare un giocatore \"a terra\" senza essere stati coinvolti in un'azione con lui. Vietato ingaggiare rapine o rapimenti finalizzati al loot se il background non giustifica tale comportamento.",
      "Rapine e Furti — Consentita qualsiasi tipologia di rapina (negozietti, banche, locali, giocatori, veicoli) se il background giustifica il gesto. Nessun limite nell'uso di armi da fuoco o bianche. Severamente vietato usare caschi per evitare l'uccisione durante le sparatorie.",
      "PED & NPC — Tutti gli NPC e i PED ruolati dallo staff per quest sono a tutti gli effetti dei player. L'uccisione di un NPC equivale a quella di un player. Verso i PED dello staff ci si deve comportare normalmente.",
    ],
  },
  {
    id: 'specifiche',
    title: 'Regole specifiche',
    items: [
      "Ingaggio — Lo scontro a fuoco è l'ultima spiaggia. Prima dell'ingaggio fisico deve sempre esserci un ingaggio verbale. Durante l'azione, almeno inizialmente, non sparare in testa: l'obiettivo è avere sparatorie più realistiche e durature.",
      "Corruzione — Chi ricopre cariche pubbliche o elettive può liberamente scegliere una linea RP corrotta, a proprio rischio e pericolo e consapevole delle conseguenze IC.",
      "Prove — Gli spari lasciano bossoli e proiettili raccoglibili da tutti i giocatori. È consentito raccogliere prove per sviare le indagini; in caso contrario la polizia può raccoglierle e usarle nelle investigazioni.",
      "Giocatori a terra — Con rianimazione dai paramedici: memoria totale immediata. Respawn senza paramedici: memoria totale dopo 24 ore dal respawn. Permadeath: perdita della memoria permanente.",
    ],
  },
  {
    id: 'lavori-items',
    title: 'Lavori & Items',
    items: [
      "Lavori in game — Sono presenti lavori No-WL per nuovi arrivati. L'assunzione WL avviene solo in game, tramite presentazione del \"Curriculum\" cartaceo al datore di lavoro (generalità + competenze).",
      "Attività esistenti — Per prendere in mano un'attività già esistente (es. Angel's Pub) aprire ticket Discord con domanda job.",
      "Nuove attività — Per crearne una nuova (es. raccolta items per crafting) c'è piena libertà, senza ticket.",
      "Utilizzo degli items — Gli oggetti devono essere posizionati fisicamente a terra con il tasto \"Posiziona\". Vietato \"buttarli\" dall'inventario. Gli oggetti posizionati sono visibili a tutti: se illeciti e visti dalle forze dell'ordine comportano sanzioni IC.",
    ],
  },
  {
    id: 'condotta',
    title: "Linguaggio, condotta e interpretazione",
    items: [
      "Sono severamente vietati termini discriminatori che violino le policy di Twitch e FiveM.",
      "L'ambientazione rurale e conservatrice degli anni '80 può portare a temi oggi considerati discriminatori: lo staff ne consente l'esplorazione solo a fini narrativi, in modo maturo, rispettoso e contestualizzato.",
      "Severamente vietati modificatori vocali che alterino la voce in modo innaturale o irrealistico.",
      "Non è consentito interpretare personaggi di età inferiore a 18 anni.",
      "Non è consentito ruolare personaggi del sesso opposto.",
    ],
  },
  {
    id: 'assistenze',
    title: 'Assistenze',
    items: [
      "Severamente vietato entrare in assistenza Discord senza valida motivazione (bug o contestazione).",
      "Le contestazioni sono valide solo se accompagnate da prova video a supporto. Senza prova la contestazione viene respinta e si riceve un WARN.",
      "Vietato scrivere in chat privata ai membri dello staff: ogni trasgressione comporta WARN.",
    ],
  },
  {
    id: 'permadeath',
    title: 'Permadeath',
    items: [
      "La richiesta di Permadeath è consentita con almeno 5 motivi RP validi e dimostrabili tramite prove video, aprendo ticket Discord.",
      "In assistenza sarà chiesta la condivisione delle prove video a supporto.",
      "Lo staff può valutare alcune azioni come motivo di permadeath in determinati contesti.",
      "Casi standard di morte definitiva: esplosione di veicolo/velivolo; esplosione nelle immediate vicinanze; morte in acqua; animale feroce; investimento da treno; caduta da altitudine elevata; collisione molto grave che giustifichi morte certa (senza esplosione).",
    ],
  },
];

export const RULES_FOOTER =
  "Lo Staff si riserva il diritto di cambiare o aggiornare il regolamento in qualsiasi momento, dandone comunicazione a tutti i player.";

// --- WIKI placeholders (saranno modificati dall'utente) ---
export const BACKGROUND_GUIDE = [
  { id: 'placeholder', title: 'Contenuto in aggiornamento', content: 'La guida al background verrà pubblicata a breve. Torna più tardi per scoprire come scrivere il tuo personaggio a Rust Valley.' },
];

export const HISTORICAL = [
  { id: 'placeholder', title: 'Contenuto in aggiornamento', content: "L'introduzione storica verrà pubblicata a breve. Resta collegato per scoprire la storia di Rust Valley." },
];

// --- Character sheet sections ---
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
