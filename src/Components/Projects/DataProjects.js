//graffiti
import Graffiti from "../../Assets/Img/Websites/Siti/graffitibench.png";
import graffiti1 from "../../Assets/materiale/graffiti/1.png";
import graffiti2 from "../../Assets/materiale/graffiti/2.png";

//RADIO
import Radio from "../../Assets/materiale/radio/cover.png";
import radio1 from "../../Assets/materiale/radio/1.png";
import radio2 from "../../Assets/materiale/radio/2.png";

//EPIC ENERGY
import EpicEnergy from "../../Assets/materiale/epicenergy/cover.png";
import epic1 from "../../Assets/materiale/epicenergy/1.png";
import epic2 from "../../Assets/materiale/epicenergy/2.png";

//TRASPORTO PUBBLICO
import Trasporto from "../../Assets/materiale/trasporto/cover.png";
import trasporto1 from "../../Assets/materiale/trasporto/1.png";
import trasporto2 from "../../Assets/materiale/trasporto/2.png";

//LINKEDIN
import Linkedin from "../../Assets/materiale/linkedin/cover.png";
import linkedin1 from "../../Assets/materiale/linkedin/1.png";
import linkedin2 from "../../Assets/materiale/linkedin/2.png";
//spotify
import Spotify from "../../Assets/materiale/spotify/cover.png";
import spotify1 from "../../Assets/materiale/spotify/1.png";
import spotify2 from "../../Assets/materiale/spotify/2.png";
//QUIZ
import Quiz from "../../Assets/materiale/quiz/cover.png";
import quiz1 from "../../Assets/materiale/quiz/1.png";
import quiz2 from "../../Assets/materiale/quiz/2.png";
//Gestione Viaggi
import GestioneViaggi from "../../Assets/materiale/gestione-viaggi/cover.png";
import gestioneViaggi1 from "../../Assets/materiale/gestione-viaggi/1.png";
import gestioneViaggi2 from "../../Assets/materiale/gestione-viaggi/2.png";

//GESTIONE PRENOTAZIONE
import GestionePrenotazione from "../../Assets/materiale/gestione-prenotazioni/cover.png";
import gestionePrenotazione1 from "../../Assets/materiale/gestione-prenotazioni/1.png";
import gestionePrenotazione2 from "../../Assets/materiale/gestione-prenotazioni/2.png";

//METEO
import Meteo from "../../Assets/materiale/meteo/cover.png";
import meteo1 from "../../Assets/materiale/meteo/1.png";
import meteo2 from "../../Assets/materiale/meteo/2.png";

//NETFLIX
import Netflix from "../../Assets/materiale/netflix/cover.png";
import netflix1 from "../../Assets/materiale/netflix/1.png";

const DataProjects = [
  //----CAPSTONE----

  {
    id: "Graffiti-bench",
    titolo: "Graffiti Bench",
    copertina: Graffiti,
    descrizioneBreve:
      "Progetto capstone sviluppato in 30 giorni: GraffitiPlatform è una web app per catalogare e preservare graffiti e street art. Permette agli utenti di registrarsi, caricare opere, esplorarle e gestirle. Stack: Java Spring Boot, React, PostgreSQL, Cloudinary.",
    descrizioneLunga:
      "GraffitiPlatform è una piattaforma web nata per catalogare e preservare l'arte urbana e i graffiti da tutto il mondo.\n\nRealizzato come progetto finale del corso Epicode per Web Developer, è stato interamente ideato, progettato e sviluppato in 30 giorni, partendo da zero.\n\nIl sito consente agli utenti di:\n• registrarsi in modo sicuro grazie all'autenticazione basata su JWT, tutelando la privacy;\n• caricare immagini di graffiti e street art;\n• visualizzare le opere in gallerie interattive tramite Swiper.js;\n• filtrare le opere per artista o anno di creazione.\n\nTecnologie principali utilizzate:\n• Backend: Java con Spring Boot\n• Frontend: React.js con Redux per la gestione dello stato\n• Database: PostgreSQL\n• Cloudinary per la gestione e l'hosting delle immagini\n\nÈ inoltre presente un pannello admin per:\n• la gestione completa dei contenuti\n• il controllo delle attività della piattaforma\n\nGraffitiPlatform è pensato per chi ama la creatività urbana e vuole contribuire a conservarla nel tempo, un clic alla volta.",
    img1: graffiti1,
    img2: graffiti2,
  },
  //----NPM----

  {
    id: "Npm-packages",
    titolo: "NPM packages",
    copertina: "",
    descrizioneBreve:
      "Tre pacchetti npm con oltre 3.000 download complessivi, dedicati a videoplayer customizzabili per React e web: Kunstom Player supporta video locali, sorgenti YouTube e tracce multiple audio, offrendo un'esperienza flessibile e facilmente integrabile in qualsiasi progetto frontend.",
    descrizioneLunga:
      "La famiglia di pacchetti Kunstom Player, composta da tre moduli pubblicati su npm con oltre 3.000 download complessivi, nasce per offrire una soluzione moderna, personalizzabile e modulare per la gestione di contenuti video sul web.  player-video-kunstom: versione base, leggera e semplice da integrare, pensata per chi vuole un videoplayer pulito e funzionale con API essenziali. player-video-kunstom-pro: versione avanzata con supporto a tracce audio multiple, gestione eventi dettagliata e interfaccia personalizzabile, ideale per progetti più strutturati. player-video-kunstom-youtube: pensato per integrare in modo coerente i video di YouTube, mantenendo la stessa UX degli altri player della suite. Tutti i pacchetti sono scritti in JavaScript, facilmente integrabili in ambienti React, Vue o Vanilla, con supporto a controlli dinamici, eventi custom, caricamento asincrono e UI componibile. Kunstom Player è una soluzione flessibile e già adottata da diversi progetti web per offrire un’esperienza video coerente, performante e personalizzata.",
  },

  //---RADIO---

  {
    id: "Radio",
    titolo: "Radio",
    copertina: Radio,
    descrizioneBreve:
      "Pizzamafia Radio è un’app React sviluppata su commissione, pensata per accompagnare dirette su YouTube e altre piattaforme. Offre un’esperienza musicale immersiva con visual dinamici, skit audio e interfaccia fullscreen, curata nei minimi dettagli per soddisfare le esigenze del committente in termini di UI e UX.",
    descrizioneLunga:
      "Pizzamafia Radio è una webapp React sviluppata su commissione, pensata per trasmettere in diretta su YouTube e altre piattaforme. Progettata con estrema attenzione alla UI/UX per rispecchiare le esigenze del committente, offre un’esperienza musicale interattiva e coinvolgente. Tra le principali funzionalità: Riproduzione musicale alternata a skit audio, con countdown e modalità fullscreen immersiva; Visual dinamici di titolo, artista, album, rating e hidden gem level, accompagnati da animazioni fluide; Sistema avanzato di coda virtuale con gestione fade e fine anticipata delle tracce; Caricamento personalizzato di tracce audio, archiviate in un database PostgreSQL, organizzato per album e artisti; Navigazione semplice e intuitiva tramite una navbar da cui è possibile accedere rapidamente alle sezioni: playlist, upload e database. La struttura modulare dell’app consente al committente di gestire contenuti e interfaccia in modo indipendente, rendendola perfetta per sessioni live, eventi tematici o format radiofonici online. Una soluzione completa, progettata per offrire controllo creativo e performance visiva durante le trasmissioni in diretta.",
    img1: radio1,
    img2: radio2,
  },

  //----EPICENERGY----
  {
    id: "EpicEnergy",
    titolo: "Epic Energy",
    copertina: EpicEnergy,
    descrizioneBreve:
      "Progetto backend sviluppato in team durante il corso Epicode, per un sistema CRM destinato a un'azienda energetica. L'applicazione, basata su Spring Boot e PostgreSQL, gestisce clienti business, fatture, anagrafiche territoriali e include un sistema di autenticazione e autorizzazione JWT con gestione dei ruoli.",
    descrizioneLunga:
      "Epic Energy Services è un progetto di gruppo realizzato durante il corso Epicode, in un team composto da 5 sviluppatori. L’obiettivo era creare il backend completo di un sistema CRM per un’azienda di energia, permettendo la gestione dei clienti business, delle fatture, degli indirizzi e dei dati anagrafici territoriali (comuni e province). Il sistema è stato realizzato interamente in Spring Boot, con un database PostgreSQL, e include: gestione completa dei clienti (dati fiscali, contatti, logo, sede legale e operativa); CRUD per fatture con stati dinamici; anagrafiche centralizzate per comuni e province, importabili tramite file CSV; sistema di autenticazione e autorizzazione con JWT, con ruoli USER e ADMIN; filtri e ordinamenti avanzati per clienti e fatture; gestione della paginazione e degli errori. Il progetto ha richiesto coordinamento, versionamento condiviso con Git, e forte collaborazione nel definire architettura, entità, controller e gestione delle eccezioni. Una vera esperienza di sviluppo backend collaborativo in ambiente enterprise.",
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
    descrizioneLunga:
      "Durante la Build Week del corso Epicode, in un team di 5 sviluppatori abbiamo realizzato un sistema backend in Java, con JPA e database PostgreSQL, per la simulazione completa della gestione di un’azienda di trasporto pubblico. Il progetto consente di: emettere biglietti e abbonamenti nominativi tramite rivenditori e distributori automatici; gestire la vidimazione dei titoli di viaggio, tracciando tempi e mezzi; monitorare la validità degli abbonamenti in base al numero di tessera; amministrare un parco mezzi (tram e autobus), distinguendo tra mezzi in servizio o in manutenzione; assegnare mezzi a tratte e calcolare il tempo medio effettivo di percorrenza. Il sistema è progettato con un modello ad oggetti completo, DAO, logica di business e scanner console-based, che simula il comportamento lato utente e lato amministratore. Questo progetto ha richiesto coordinazione di gruppo, uso avanzato della programmazione ad oggetti e capacità di modellazione realistica di un sistema gestionale complesso.",
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
    descrizioneLunga:
      "Durante la terza Build Week del corso Epicode, abbiamo sviluppato in un team da 3 sviluppatori un clone funzionale di LinkedIn, interamente frontend, realizzato in React con Redux per la gestione dello stato globale. Il progetto ha seguito un approccio iterativo su cinque giornate, con obiettivi assegnati quotidianamente: Giorno 1: struttura e rendering del profilo utente tramite chiamate alle API REST pubbliche, con salvataggio dei dati nel Redux Store. Giorno 2: sezione esperienze lavorative, con possibilità di aggiungere, modificare e cancellare esperienze associate all’utente. Giorno 2-B: upload immagini per profilo ed esperienze tramite FormData e endpoints dedicati. Giorno 3: implementazione della home feed con lista post, CRUD dei contenuti e rendering dinamico. Giorno 4: pagina dedicata agli annunci di lavoro, con ricerca tramite query e filtro per azienda o categoria. Giorno 5: sistema completo di commenti sui post, con autenticazione e gestione CRUD. L’interfaccia è stata progettata per ricalcare fedelmente l’estetica di LinkedIn. Tutte le funzionalità sono basate su API REST autenticate via Bearer Token, e le interazioni utente sono simulate per un’esperienza fluida e coerente.",
    img1: linkedin1,
    img2: linkedin2,
  },

  //-----SPOTIFY CLONE-----
  {
    id: "SpotifyClone",
    titolo: "Spotify Clone",
    copertina: Spotify,
    descrizioneBreve:
      "Clone dinamico di Spotify sviluppato in team da 3 persone, interamente in JavaScript, HTML e CSS. Il progetto consente la navigazione tra homepage, album, artisti e include un player dinamico, ricerca musicale e interazione con l’API Deezer. Completamente responsive e costruito in modo modulare.",
    descrizioneLunga:
      "Durante la seconda Build Week del corso Epicode, in un team da 3 sviluppatori abbiamo realizzato un clone dinamico di Spotify utilizzando JavaScript vanilla, HTML e CSS, con piena integrazione delle API di Deezer. L'applicazione include: Homepage dinamica con album selezionati; Pagina album generata automaticamente via query string, con dati ottenuti da API REST (/album/:id); Pagina artista, anch’essa dinamica, con top tracks e discografia completa (/artist/:id); Player interattivo in basso, che mostra i dettagli del brano selezionato; Funzione di ricerca basata sull’endpoint /search?q=, con risultati in tempo reale; Interfaccia totalmente responsive, realizzata seguendo le logiche di componentizzazione e riutilizzo del CSS. Il team ha lavorato in modo collaborativo, organizzando le attività tramite Trello, con attenzione alla divisione delle responsabilità, al versionamento continuo tramite Git e alla fedeltà grafica rispetto alla UI di Spotify.",
    img1: spotify1,
    img2: spotify2,
  },

  //------QUIZ-----
  {
    id: "Quiz",
    titolo: "Quiz",
    copertina: Quiz,
    descrizioneBreve:
      "Clone dinamico della piattaforma Benchmark di Epicode, sviluppato in team da 4 persone. Il progetto include un sistema quiz interattivo realizzato in JavaScript vanilla, con gestione DOM, eventi, logica di punteggio e layout responsive. Le pagine principali sono: Welcome, Quiz, Risultati e Feedback.",
    descrizioneLunga:
      "Durante la prima Build Week del corso Epicode, abbiamo realizzato in team da 4 sviluppatori un clone fedele della piattaforma Benchmark di Epicode, replicando sia la struttura grafica che le funzionalità interattive.\n\nIl progetto è costruito interamente con HTML, CSS e JavaScript vanilla, senza framework esterni, e include:\n• Welcome page con introduzione e pulsante di avvio quiz\n• Question page dinamica, che gestisce flusso domande/risposte, temporizzazione e interazioni utente tramite eventi JS\n• Results page con riepilogo del punteggio e grafica responsive\n• Feedback page per valutare l’esperienza e visualizzare i risultati\n\nLa logica del quiz è interamente basata su:\n• Manipolazione del DOM\n• Gestione degli eventi\n• Aggiornamento dello stato in tempo reale\n\nIl layout è responsive e coerente tra tutte le pagine.\n\nCoordinamento del team:\n• Trello per l’assegnazione dei task\n• Branch Git separati con merge frequenti\n• Comunicazione costante per evitare conflitti",
    img1: quiz1,
    img2: quiz2,
  },

  //------GESTIONE VIAGGI-----
  {
    id: "GestioneViaggi",
    titolo: "Gestione Viaggi",
    copertina: GestioneViaggi,
    descrizioneBreve:
      "Web service realizzato con Spring Boot e PostgreSQL per gestire viaggi aziendali. Permette la creazione di dipendenti, viaggi e prenotazioni, con validazione dati, gestione dello stato dei viaggi, assegnazione dei dipendenti e upload di immagini profilo. Progetto individuale focalizzato su CRUD REST e logica di business.",
    descrizioneLunga:
      "Gestione Viaggi Aziendali è un'applicazione backend sviluppata individualmente con Spring Boot e PostgreSQL, pensata per la gestione organizzata dei viaggi di lavoro all’interno di un’azienda. Il sistema include: CRUD completo per dipendenti e viaggi, con campi come destinazione, data e stato del viaggio; Creazione di prenotazioni per dipendenti, con verifica di disponibilità e prevenzione di doppie prenotazioni nello stesso giorno; Endpoint per modificare lo stato del viaggio (es. da “in programma” a “completato”); Validazione delle richieste, gestione errori con status code appropriati; Upload immagine profilo per i dipendenti; Progettazione delle entità con relazioni unidirezionali, come richiesto dal brief tecnico. Il progetto dimostra competenze nella modellazione relazionale, creazione di API REST robuste e attenzione alle regole di business.",
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
    descrizioneLunga:
      "Gestione Prenotazioni è un progetto backend sviluppato in autonomia con Spring Boot e Spring Data JPA, volto a simulare un sistema per la gestione delle postazioni aziendali e delle relative prenotazioni. Il sistema include: Modello dati completo: postazioni identificate da codice, tipo (privato, openspace, sala riunioni), edificio associato con nome, indirizzo e città; Prenotazioni per singola giornata, effettuabili solo se la postazione risulta libera per la data richiesta; Regole di business: un utente può avere più prenotazioni in corso, ma non può prenotare più postazioni per la stessa data; Funzionalità di ricerca delle postazioni per tipo e città; Persistenza gestita tramite JPA con mappatura delle entità e creazione dei repository; Gestione delle entità come Utente, Postazione, Prenotazione e Edificio, con relazioni ben definite. Il progetto si concentra su logica di business solida, gestione della disponibilità e struttura dati scalabile per ambienti enterprise.",
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
    descrizioneLunga:
      "App Meteo è un progetto frontend realizzato in autonomia con JavaScript, HTML5 e CSS3, che consente all’utente di ottenere informazioni aggiornate sulle condizioni meteorologiche di qualsiasi città nel mondo. Utilizzando le OpenWeather API, l’applicazione offre: Selezione libera della città da parte dell’utente; Visualizzazione del meteo attuale, inclusi temperatura, condizioni atmosferiche e probabilità di pioggia; Previsioni meteo per i giorni successivi con dettaglio sintetico; Layout responsive, ottimizzato per desktop e mobile. Lo stile dell’interfaccia è stato interamente progettato da zero, con attenzione alla chiarezza, alla leggibilità dei dati e all’estetica moderna. Il codice è organizzato in componenti riutilizzabili e modulari per facilitare la manutenzione e l’estensione futura del progetto.",
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
    descrizioneLunga:
      "Netflix Clone è un progetto front-end sviluppato in autonomia per replicare l'interfaccia grafica della piattaforma Netflix, utilizzando HTML5, CSS3 e il framework Bootstrap 5. L’obiettivo era ottenere un’interfaccia responsive e visivamente fedele al modello fornito. Sono state implementate: Homepage con navbar, sezioni filtrate, griglie di film e footer; Profile page con avatar utente, sezioni informative e azioni; Settings page opzionale; Griglie responsive basate su sistema Bootstrap, con attenzione a gutter, allineamenti, e struttura a componenti; Opzionalmente, integrazione di caroselli e animazioni. Il layout è stato costruito partendo da uno studio dei mockup e organizzato per riutilizzare il più possibile classi e strutture, con attenzione all’accessibilità e alla modularità del codice.",
    img1: netflix1,
  },
];

export default DataProjects;
