//graffiti
import Graffiti from "../../Assets/Img/Websites/Siti/graffitibench.webp";
import graffiti1 from "../../Assets/Img/Projects/graffiti/1.webp";
import graffiti2 from "../../Assets/Img/Projects/graffiti/2.webp";

//RADIO
import Radio from "../../Assets/Img/Projects/radio/cover.webp";
import radio1 from "../../Assets/Img/Projects/radio/1.webp";
import radio2 from "../../Assets/Img/Projects/radio/2.webp";

//EPIC ENERGY
import EpicEnergy from "../../Assets/Img/Projects/epicenergy/cover.webp";
import epic1 from "../../Assets/Img/Projects/epicenergy/1.webp";
import epic2 from "../../Assets/Img/Projects/epicenergy/2.webp";

//TRASPORTO PUBBLICO
import Trasporto from "../../Assets/Img/Projects/trasporto/cover.webp";
import trasporto1 from "../../Assets/Img/Projects/trasporto/1.webp";
import trasporto2 from "../../Assets/Img/Projects/trasporto/2.webp";

//LINKEDIN
import Linkedin from "../../Assets/Img/Projects/linkedin/cover.webp";
import linkedin1 from "../../Assets/Img/Projects/linkedin/1.webp";
import linkedin2 from "../../Assets/Img/Projects/linkedin/2.webp";

//spotify
import Spotify from "../../Assets/Img/Projects/spotify/cover.webp";
import spotify1 from "../../Assets/Img/Projects/spotify/1.webp";
import spotify2 from "../../Assets/Img/Projects/spotify/2.webp";
//QUIZ
import Quiz from "../../Assets/Img/Projects/quiz/cover.webp";
import quiz1 from "../../Assets/Img/Projects/quiz/1.webp";
import quiz2 from "../../Assets/Img/Projects/quiz/2.webp";
//Gestione Viaggi
import GestioneViaggi from "../../Assets/Img/Projects/gestione-viaggi/cover.webp";
import gestioneViaggi1 from "../../Assets/Img/Projects/gestione-viaggi/1.webp";
import gestioneViaggi2 from "../../Assets/Img/Projects/gestione-viaggi/2.webp";

//GESTIONE PRENOTAZIONE
import GestionePrenotazione from "../../Assets/Img/Projects/gestione-prenotazioni/cover.webp";
import gestionePrenotazione1 from "../../Assets/Img/Projects/gestione-prenotazioni/1.webp";
import gestionePrenotazione2 from "../../Assets/Img/Projects/gestione-prenotazioni/2.webp";

//METEO
import Meteo from "../../Assets/Img/Projects/meteo/cover.webp";
import meteo1 from "../../Assets/Img/Projects/meteo/1.webp";
import meteo2 from "../../Assets/Img/Projects/meteo/2.webp";

//NETFLIX
import Netflix from "../../Assets/Img/Projects/netflix/cover.webp";
import netflix1 from "../../Assets/Img/Projects/netflix/1.webp";
import netflix2 from "../../Assets/Img/Projects/netflix/2.webp";

//NPM
import Npm from "../../Assets/Img/Projects/npm/cover.webp";
import npm1 from "../../Assets/Img/Projects/npm/1.webp";
import npm2 from "../../Assets/Img/Projects/npm/2.webp";

const DataProjects = [
  //----CAPSTONE----

  {
    id: "Graffiti-bench",
    titolo: "Graffiti Bench",
    copertina: Graffiti,
    descrizioneBreve:
      "Progetto capstone sviluppato in 30 giorni: GraffitiPlatform è una web app per catalogare e preservare graffiti e street art. Permette agli utenti di registrarsi, caricare opere, esplorarle e gestirle. Stack: Java Spring Boot, React, PostgreSQL, Cloudinary.",
    descrizioneLunga: `
  <span class="span-custom">
    GraffitiPlatform </span> è una piattaforma web nata per catalogare e preservare l'arte urbana e i graffiti da tutto il mondo.
  <br/><br/>
  Realizzato come progetto finale del corso Epicode per Web Developer, è stato interamente ideato, progettato e sviluppato in 30 giorni, partendo da zero.<br/><br/>
   <span class="span-custom">Il sito consente agli utenti di:<br/> </span>
  • Registrarsi in modo sicuro grazie all'autenticazione basata su JWT, tutelando la privacy;<br/>
  • Caricare immagini di graffiti e street art;<br/>
  • Visualizzare le opere in gallerie interattive tramite Swiper.js;<br/>
  • Filtrare le opere per artista o anno di creazione.<br/><br/>
  <span class="span-custom">Tecnologie principali utilizzate:<br/> </span>
  • Backend: Java con Spring Boot<br/>
  • Frontend: React.js con Redux per la gestione dello stato<br/>
  • Database: PostgreSQL<br/>
  • Cloudinary per la gestione e l'hosting delle immagini<br/><br/>
  <span class="span-custom">È inoltre presente un pannello admin per:<br/></span>
  • La gestione completa dei contenuti<br/>
  • Il controllo delle attività della piattaforma<br/><br/>
  GraffitiPlatform è pensato per chi ama la creatività urbana e vuole contribuire a conservarla nel tempo, un clic alla volta.
`,

    img1: graffiti1,
    img2: graffiti2,
    videoUrl:
      "https://res.cloudinary.com/ddcmcwpr0/video/upload/videoGraf_glmymw.mp4",
  },
  //---RADIO---

  {
    id: "Radio",
    titolo: "Radio",
    copertina: Radio,
    descrizioneBreve:
      "Pizzamafia Radio è un’app React sviluppata su commissione, pensata per accompagnare dirette su YouTube e altre piattaforme. Offre un’esperienza musicale immersiva con visual dinamici, skit audio e interfaccia fullscreen, curata nei minimi dettagli per soddisfare le esigenze del committente in termini di UI e UX.",
    descrizioneLunga: `
  <span class="span-custom">Pizzamafia Radio</span> è una webapp React sviluppata su commissione, pensata per trasmettere in diretta su YouTube e altre piattaforme.<br/><br/>
  <span class="span-custom">Progettata con estrema attenzione alla UI/UX</span> per rispecchiare le esigenze del committente, offre un’esperienza musicale interattiva e coinvolgente.<br/><br/>
  <span class="span-custom">Tra le principali funzionalità:</span><br/>
  • Riproduzione musicale alternata a skit audio, con countdown e modalità fullscreen immersiva;<br/>
  • Visual dinamici di titolo, artista, album, rating e hidden gem level, accompagnati da animazioni fluide;<br/>
  • Sistema avanzato di coda virtuale con gestione fade e fine anticipata delle tracce;<br/>
  • Caricamento personalizzato di tracce audio, archiviate in un database PostgreSQL, organizzato per album e artisti;<br/>
  • Navigazione semplice e intuitiva tramite una navbar da cui è possibile accedere rapidamente alle sezioni: playlist, upload e database.<br/><br/>
  <span class="span-custom">La struttura modulare dell’app</span> consente al committente di gestire contenuti e interfaccia in modo indipendente, rendendola perfetta per sessioni live, eventi tematici o format radiofonici online.<br/><br/>
  <span class="span-custom">Una soluzione completa</span>, progettata per offrire controllo creativo e performance visiva durante le trasmissioni in diretta.
`,

    img1: radio1,
    img2: radio2,
    videoUrl:
      "https://res.cloudinary.com/ddcmcwpr0/video/upload/videoRadio_fa2dy7.mp4",
  },
  //----NPM----

  {
    id: "Npm-packages",
    titolo: "NPM packages",
    copertina: Npm,
    descrizioneBreve:
      "Tre pacchetti npm con oltre 1.000 download complessivi, dedicati a videoplayer customizzabili per React e web: Kunstom Player supporta video locali, sorgenti YouTube e tracce multiple audio, offrendo un'esperienza flessibile e facilmente integrabile in qualsiasi progetto frontend.",
    descrizioneLunga: `
  La famiglia di pacchetti <span class="span-custom">Kunstom Player</span>, pubblicati su npm con oltre 1.000 download complessivi, nasce per offrire una soluzione moderna, personalizzabile e modulare per la gestione di contenuti video sul web.<br/><br/>

  
  <span class="span-custom">I tre moduli principali:</span><br/><br/>
  • <span class="span-custom"> <strong>VERSIONE BASE</strong>: </span> versione base, leggera e facile da integrare, con API essenziali e UI minimale; <br/> -puoi trovarlo qui: <span class="span-custom"><a class="link-underline" href="https://www.npmjs.com/package/player-video-kunstom" target="_blank">npm player-video-kunstom</a></span><br/> <br/>
 <span class="span-custom"><strong>VERSIONE PRO</strong>:</span> versione avanzata basata su Video.js, con supporto a più qualità video, miniplayer, interfaccia configurabile e numerose props extra;<br/>- puoi trovarlo qui: <span class="span-custom"><a class="link-underline" href="https://www.npmjs.com/package/player-video-kunstom-pro" target="_blank">npm player-video-kunstom-pro</a></span><br/><br/>

  •<span class="span-custom"><strong>VERSIONE YOUTUBE</strong>:</span> ispirato al design del player YouTube, con attenzione ai dettagli grafici, supporto multilingua e funzionalità avanzate come miniplayer, cinema mode e autoplay;<br/>
-puoi trovarlo qui: <span class="span-custom"><a class="link-underline" href="https://www.npmjs.com/package/player-video-kunstom-youtube" target="_blank">npm player-video-kunstom-youtube</a></span><br/><br/>


  <span class="span-custom">Tutti i pacchetti sono sviluppati in JavaScript</span> e facilmente integrabili in progetti React, Vue o Vanilla JS, con supporto a controlli dinamici, caricamento asincrono ed eventi personalizzati.<br/><br/>

  <span class="span-custom">Kunstom Player</span> è pensato per offrire un'esperienza video flessibile, coerente e performante, già adottata in diversi progetti per gestire contenuti multimediali in modo professionale.
`,

    img1: npm1,
    img2: npm2,
  },

  //----EPICENERGY----
  {
    id: "EpicEnergy",
    titolo: "Epic Energy",
    copertina: EpicEnergy,
    descrizioneBreve:
      "Progetto backend sviluppato in team durante il corso Epicode, per un sistema CRM destinato a un'azienda energetica. L'applicazione, basata su Spring Boot e PostgreSQL, gestisce clienti business, fatture, anagrafiche territoriali e include un sistema di autenticazione e autorizzazione JWT con gestione dei ruoli.",
    descrizioneLunga: `
  <span class="span-custom">Epic Energy Services</span> è un progetto di gruppo realizzato durante il corso Epicode, in un team composto da 5 sviluppatori.<br/><br/>
  <span class="span-custom">L’obiettivo era creare il backend completo</span> di un sistema CRM per un’azienda di energia, permettendo la gestione dei clienti business, delle fatture, degli indirizzi e dei dati anagrafici territoriali (comuni e province).<br/><br/>
  Il sistema è stato realizzato interamente in <span class="span-custom">Spring Boot</span>, con un database <span class="span-custom">PostgreSQL</span>, e include:<br/>
  • Gestione completa dei clienti (dati fiscali, contatti, logo, sede legale e operativa);<br/>
  • CRUD per fatture con stati dinamici;<br/>
  • Anagrafiche centralizzate per comuni e province, importabili tramite file CSV;<br/>
  • Sistema di autenticazione e autorizzazione con JWT, con ruoli USER e ADMIN;<br/>
  • Filtri e ordinamenti avanzati per clienti e fatture;<br/>
  • Gestione della paginazione e degli errori.<br/><br/>
  <span class="span-custom">Il progetto ha richiesto</span> coordinamento, versionamento condiviso con Git, e forte collaborazione nel definire architettura, entità, controller e gestione delle eccezioni.<br/><br/>
  <span class="span-custom">Una vera esperienza di sviluppo backend collaborativo in ambiente enterprise.</span>
`,

    img1: epic1,
    img2: epic2,
  },
  //-----TRASPORTO PUBBLICO
  {
    id: "TrasportoPublico",
    titolo: "Trasporto Publico",
    copertina: Trasporto,
    descrizioneBreve:
      "Progetto backend Java sviluppato in team da 5 sviluppatori durante il corso Epicode. Il sistema, basato su JPA e PostgreSQL, simula la gestione di una compagnia di trasporto pubblico: biglietti, abbonamenti, mezzi, tratte e verifica titoli, con interfaccia a riga di comando per test e simulazioni.",
    descrizioneLunga: `
  <span class="span-custom">Durante la Build Week del corso Epicode</span>, in un team di 5 sviluppatori abbiamo realizzato un sistema backend in Java, con JPA e database PostgreSQL, per la simulazione completa della gestione di un’azienda di trasporto pubblico.<br/><br/>
  <span class="span-custom">Il progetto consente di:</span><br/>
  • Emettere biglietti e abbonamenti nominativi tramite rivenditori e distributori automatici;<br/>
  • Gestire la vidimazione dei titoli di viaggio, tracciando tempi e mezzi;<br/>
  • Monitorare la validità degli abbonamenti in base al numero di tessera;<br/>
  • Amministrare un parco mezzi (tram e autobus), distinguendo tra mezzi in servizio o in manutenzione;<br/>
  • Assegnare mezzi a tratte e calcolare il tempo medio effettivo di percorrenza.<br/><br/>
  Il sistema è progettato con un <span class="span-custom">modello ad oggetti completo</span>, DAO, logica di business e scanner console-based, che simula il comportamento lato utente e lato amministratore.<br/><br/>
  <span class="span-custom">Questo progetto ha richiesto</span> coordinazione di gruppo, uso avanzato della programmazione ad oggetti e capacità di modellazione realistica di un sistema gestionale complesso.
`,

    img1: trasporto1,
    img2: trasporto2,
  },
  //-----LINKEDIN CLONE------
  {
    id: "LinkedinClone",
    titolo: "Linkedin Clone",
    copertina: Linkedin,
    descrizioneBreve:
      "Clone funzionale di LinkedIn, sviluppato in team da 3 persone durante la Build Week del corso Epicode. Il progetto, realizzato in React e Redux, integra le principali funzionalità della piattaforma originale: profili, esperienze lavorative, post, commenti, immagini e sezione offerte di lavoro, il tutto attraverso interazioni con API REST autenticate tramite token.",
    descrizioneLunga: `
  <span class="span-custom">Durante la terza Build Week del corso Epicode</span>, abbiamo sviluppato in un team da 3 sviluppatori un clone funzionale di LinkedIn, interamente frontend, realizzato in <span class="span-custom">React</span> con <span class="span-custom">Redux</span> per la gestione dello stato globale.<br/><br/>
  Il progetto ha seguito un <span class="span-custom">approccio iterativo su cinque giornate</span>, con obiettivi assegnati quotidianamente:<br/><br/>
  • <span class="span-custom">Giorno 1:</span> struttura e rendering del profilo utente tramite chiamate alle API REST pubbliche, con salvataggio dei dati nel Redux Store.<br/>
  • <span class="span-custom">Giorno 2:</span> sezione esperienze lavorative, con possibilità di aggiungere, modificare e cancellare esperienze associate all’utente.<br/>
  • <span class="span-custom">Giorno 2-b:</span> upload immagini per profilo ed esperienze tramite FormData e endpoints dedicati.<br/>
  • <span class="span-custom">Giorno 3:</span> implementazione della home feed con lista post, CRUD dei contenuti e rendering dinamico.<br/>
  • <span class="span-custom">Giorno 4:</span> pagina dedicata agli annunci di lavoro, con ricerca tramite query e filtro per azienda o categoria.<br/>
  • <span class="span-custom">Giorno 5:</span>:sistema completo di commenti sui post, con autenticazione e gestione CRUD.<br/><br/>
  L’interfaccia è stata progettata per <span class="span-custom">ricalcare fedelmente l’estetica di LinkedIn</span>.<br/><br/>
  Tutte le funzionalità sono basate su <span class="span-custom">API REST autenticate via Bearer Token</span>, e le interazioni utente sono simulate per un’esperienza fluida e coerente.
`,

    img1: linkedin1,
    img2: linkedin2,
    videoUrl:
      "https://res.cloudinary.com/ddcmcwpr0/video/upload/videoLinkd_aix3sk.mp4",
  },

  //-----SPOTIFY CLONE-----
  {
    id: "SpotifyClone",
    titolo: "Spotify Clone",
    copertina: Spotify,
    descrizioneBreve:
      "Clone dinamico di Spotify sviluppato in team da 3 persone, interamente in JavaScript, HTML e CSS. Il progetto consente la navigazione tra homepage, album, artisti e include un player dinamico, ricerca musicale e interazione con l’API Deezer. Completamente responsive e costruito in modo modulare.",
    descrizioneLunga: `
  <span class="span-custom">Durante la seconda Build Week del corso Epicode</span>, in un team da 3 sviluppatori abbiamo realizzato un clone dinamico di Spotify utilizzando <span class="span-custom">JavaScript vanilla, HTML e CSS</span>, con piena integrazione delle <span class="span-custom">API di Deezer</span>.<br/><br/>
  L'applicazione include:<br/>
  • Homepage dinamica con album selezionati;<br/>
  • Pagina album generata automaticamente via query string, con dati ottenuti da API REST (/album/:id);<br/>
  • Pagina artista con top tracks e discografia completa (/artist/:id);<br/>
  • Player interattivo in basso con dettagli del brano selezionato;<br/>
  • Funzione di ricerca basata sull’endpoint /search?q=, con risultati in tempo reale;<br/>
  • Interfaccia totalmente responsive, realizzata seguendo logiche di componentizzazione e riutilizzo del CSS.<br/><br/>
  Il team ha lavorato in modo collaborativo, organizzando le attività tramite <span class="span-custom">Trello</span>, con attenzione alla divisione delle responsabilità, al versionamento continuo tramite <span class="span-custom">Git</span> e alla fedeltà grafica rispetto alla UI di Spotify.
`,

    img1: spotify1,
    img2: spotify2,
    videoUrl:
      "https://res.cloudinary.com/ddcmcwpr0/video/upload/videoSpoty_ney75y.mp4",
  },

  //------QUIZ-----
  {
    id: "Quiz",
    titolo: "Quiz",
    copertina: Quiz,
    descrizioneBreve:
      "Clone dinamico della piattaforma Benchmark di Epicode, sviluppato in team da 4 persone. Il progetto include un sistema quiz interattivo realizzato in JavaScript vanilla, con gestione DOM, eventi, logica di punteggio e layout responsive. Le pagine principali sono: Welcome, Quiz, Risultati e Feedback.",
    descrizioneLunga: `
  Durante la <span class="span-custom">prima Build Week del corso Epicode</span>, abbiamo realizzato in team da 4 sviluppatori un clone fedele della piattaforma Benchmark di Epicode, replicando sia la struttura grafica che le funzionalità interattive.<br/><br/>
  Il progetto è costruito interamente con <span class="span-custom">HTML, CSS e JavaScript vanilla</span>, senza framework esterni, e include:<br/>
  • <span class="span-custom">Welcome page</span> con introduzione e pulsante di avvio quiz<br/>
  • <span class="span-custom">Question page</span> dinamica, che gestisce flusso domande/risposte, temporizzazione e interazioni utente tramite eventi JS<br/>
  • <span class="span-custom">Results page</span> con riepilogo del punteggio e grafica responsive<br/>
  • <span class="span-custom">Feedback page</span> per valutare l’esperienza e visualizzare i risultati<br/><br/>
  <span class="span-custom">La logica del quiz</span> è interamente basata su:<br/>
  • Manipolazione del DOM<br/>
  • Gestione degli eventi<br/>
  • Aggiornamento dello stato in tempo reale<br/><br/>
  Il layout è responsive e coerente tra tutte le pagine.<br/><br/>
  <span class="span-custom">Coordinamento del team:</span><br/>
  • Trello per l’assegnazione dei task<br/>
  • Branch Git separati con merge frequenti<br/>
  • Comunicazione costante per evitare conflitti
`,

    img1: quiz1,
    img2: quiz2,
    videoUrl:
      "https://res.cloudinary.com/ddcmcwpr0/video/upload/videoQuiz_cyhxzc.mp4",
  },

  //------GESTIONE VIAGGI-----
  {
    id: "GestioneViaggi",
    titolo: "Gestione Viaggi",
    copertina: GestioneViaggi,
    descrizioneBreve:
      "Web service realizzato con Spring Boot e PostgreSQL per gestire viaggi aziendali. Permette la creazione di dipendenti, viaggi e prenotazioni, con validazione dati, gestione dello stato dei viaggi, assegnazione dei dipendenti e upload di immagini profilo. Progetto individuale focalizzato su CRUD REST e logica di business.",
    descrizioneLunga: `
  <span class="span-custom">Gestione Viaggi Aziendali</span> è un'applicazione backend sviluppata individualmente con <span class="span-custom">Spring Boot</span> e <span class="span-custom">PostgreSQL</span>, pensata per la gestione organizzata dei viaggi di lavoro all’interno di un’azienda.<br/><br/>
  Il sistema include:<br/>
  • <span class="span-custom">CRUD completo</span> per dipendenti e viaggi, con campi come destinazione, data e stato del viaggio;<br/>
  • Creazione di prenotazioni per dipendenti, con verifica di disponibilità e prevenzione di doppie prenotazioni nello stesso giorno;<br/>
  • Endpoint per modificare lo stato del viaggio (es. da “in programma” a “completato”);<br/>
  • Validazione delle richieste, gestione errori con status code appropriati;<br/>
  • Upload immagine profilo per i dipendenti;<br/>
  • Progettazione delle entità con <span class="span-custom">relazioni unidirezionali</span>, come richiesto dal brief tecnico.<br/><br/>
  Il progetto dimostra competenze nella <span class="span-custom">modellazione relazionale</span>, creazione di <span class="span-custom">API REST robuste</span> e attenzione alle regole di business.
`,

    img1: gestioneViaggi1,
    img2: gestioneViaggi2,
  },
  //--------GESTIONE PRENOTAZIONI------
  {
    id: "GestionePrenotazioni",
    titolo: "Gestione Prenotazioni",
    copertina: GestionePrenotazione,
    descrizioneBreve:
      "Applicativo backend sviluppato con Spring Boot per la gestione delle prenotazioni di postazioni aziendali. Ogni postazione può essere prenotata per un solo giorno, con regole di disponibilità e filtro per città e tipo. Persistenza gestita con Spring Data JPA e database relazionale.",
    descrizioneLunga: `
  <span class="span-custom">Gestione Prenotazioni</span> è un progetto backend sviluppato in autonomia con <span class="span-custom">Spring Boot</span> e <span class="span-custom">Spring Data JPA</span>, volto a simulare un sistema per la gestione delle postazioni aziendali e delle relative prenotazioni.<br/><br/>
  Il sistema include:<br/>
  • <span class="span-custom">Modello dati completo</span>: postazioni identificate da codice, tipo (privato, openspace, sala riunioni), edificio associato con nome, indirizzo e città;<br/>
  • Prenotazioni per singola giornata, effettuabili solo se la postazione risulta libera per la data richiesta;<br/>
  • <span class="span-custom">Regole di business</span>: un utente può avere più prenotazioni in corso, ma non può prenotare più postazioni per la stessa data;<br/>
  • Funzionalità di ricerca delle postazioni per tipo e città;<br/>
  • Persistenza gestita tramite JPA con mappatura delle entità e creazione dei repository;<br/>
  • Gestione delle entità come Utente, Postazione, Prenotazione e Edificio, con <span class="span-custom">relazioni ben definite</span>.<br/><br/>
  Il progetto si concentra su <span class="span-custom">logica di business solida</span>, gestione della disponibilità e struttura dati scalabile per ambienti enterprise.
`,

    img1: gestionePrenotazione1,
    img2: gestionePrenotazione2,
  },

  //-----APP METEO---
  {
    id: "AppMeteo",
    titolo: "App Meteo",
    copertina: Meteo,
    descrizioneBreve:
      "Applicazione meteo sviluppata in JavaScript, HTML e CSS, con dati ottenuti dalle OpenWeather API. L’utente può selezionare una città e visualizzare il meteo attuale, le previsioni, la temperatura e le condizioni atmosferiche. Interfaccia completamente personalizzata e responsive.",
    descrizioneLunga: `
  <span class="span-custom">App Meteo</span> è un progetto frontend realizzato in autonomia con <span class="span-custom">JavaScript, HTML5 e CSS3</span>, che consente all’utente di ottenere informazioni aggiornate sulle condizioni meteorologiche di qualsiasi città nel mondo.<br/><br/>
  Utilizzando le <span class="span-custom">OpenWeather API</span>, l’applicazione offre:<br/>
  • Selezione libera della città da parte dell’utente;<br/>
  • Visualizzazione del meteo attuale, inclusi temperatura, condizioni atmosferiche e probabilità di pioggia;<br/>
  • Previsioni meteo per i giorni successivi con dettaglio sintetico;<br/>
  • Layout responsive, ottimizzato per desktop e mobile.<br/><br/>
  Lo stile dell’interfaccia è stato interamente progettato da zero, con attenzione alla chiarezza, alla leggibilità dei dati e all’estetica moderna.<br/><br/>
  Il codice è organizzato in <span class="span-custom">componenti riutilizzabili e modulari</span> per facilitare la manutenzione e l’estensione futura del progetto.
`,

    img1: meteo1,
    img2: meteo2,
  },

  //------NETFLIX CLONE------
  {
    id: "NetflixClone",
    titolo: "Netflix Clone",
    copertina: Netflix,
    descrizioneBreve:
      "Replica front-end della UI di Netflix, realizzata con HTML, CSS e Bootstrap. Il progetto riproduce fedelmente homepage, profilo utente e impostazioni, con particolare attenzione a griglie, allineamenti, componenti riutilizzabili e design responsive.",
    descrizioneLunga: `
<span class="span-custom">Netflix Clone</span> è un progetto front-end sviluppato in autonomia per replicare l'interfaccia grafica della piattaforma Netflix, utilizzando <span class="span-custom">HTML5, SCSS/CSS3</span> e il framework <span class="span-custom">Bootstrap 5</span>.<br/><br/>
L’obiettivo era ottenere un’interfaccia <span class="span-custom">responsive</span> e visivamente fedele al modello fornito.<br/><br/>
Sono state implementate:<br/>
• Homepage con navbar, sezioni filtrate, griglie di film e footer;<br/>
• Profile page con avatar utente, sezioni informative e azioni;<br/>
• Settings page opzionale;<br/>
• Griglie responsive basate su sistema Bootstrap, con attenzione a gutter, allineamenti e struttura a componenti;<br/>
• Codice <span class="span-custom">SCSS modulare</span> per una gestione avanzata degli stili, con utilizzo di variabili, mixin e partials;<br/>
• Opzionalmente, integrazione di caroselli e animazioni.<br/><br/>
Il layout è stato costruito partendo da uno <span class="span-custom">studio dei mockup</span> e organizzato per riutilizzare il più possibile classi e strutture, con attenzione all’<span class="span-custom">accessibilità</span> e alla <span class="span-custom">manutenibilità del codice</span>.

`,

    img1: netflix1,
    img2: netflix2,
  },
];

export default DataProjects;
