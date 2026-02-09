# YT Solo (no ads) - Firefox

🎥 Estensione Firefox per aprire YouTube in una finestra dedicata senza pubblicità.

## 📋 Caratteristiche

- **Finestra dedicata**: Apri YouTube in una finestra popup separata
- **Blocco annunci**: Rimuove automaticamente le pubblicità da YouTube
- **Skip automatico**: Salta automaticamente gli annunci video quando possibile
- **Accelerazione annunci**: Velocizza la riproduzione degli annunci non saltabili
- **Interfaccia pulita**: Nasconde overlay pubblicitari e banner

## 🚀 Installazione

### Metodo 1: Installazione temporanea (per test e sviluppo)

1. **Scarica l'estensione**
   ```bash
   git clone https://github.com/tuousername/yt-solo-firefox.git
   cd yt-solo-firefox
   ```

2. **Apri Firefox e vai alla pagina dei componenti aggiuntivi**
   - Digita `about:debugging` nella barra degli indirizzi
   - Oppure: Menu ☰ → Altri strumenti → Strumenti di sviluppo del browser

3. **Carica l'estensione**
   - Clicca su "Questo Firefox" nella barra laterale
   - Clicca su "Carica componente aggiuntivo temporaneo..."
   - Naviga nella cartella dell'estensione
   - Seleziona il file `manifest.json`

4. **L'estensione è installata!**
   - Vedrai l'icona dell'estensione nella barra degli strumenti
   - L'estensione rimarrà attiva fino alla chiusura di Firefox

> ⚠️ **Nota**: Con questo metodo, l'estensione viene rimossa ogni volta che chiudi Firefox e dovrai ricaricarla manualmente.

### Metodo 2: Installazione permanente (non firmata)

Per mantenere l'estensione anche dopo il riavvio di Firefox, devi modificare una configurazione:

1. **Abilita estensioni non firmate**
   - Digita `about:config` nella barra degli indirizzi
   - Accetta l'avviso se richiesto
   - Cerca `xpinstall.signatures.required`
   - Cambia il valore a `false` (doppio click)

2. **Crea un file .xpi**
   - Comprimi tutti i file dell'estensione in un archivio ZIP
   - Rinomina il file da `.zip` a `.xpi`
   - Assicurati che `manifest.json` sia nella root del file .xpi

3. **Installa il file .xpi**
   - Trascina il file `.xpi` in una finestra di Firefox
   - Clicca su "Aggiungi" quando richiesto

> ⚠️ **Attenzione**: Disabilitare la verifica delle firme riduce la sicurezza del browser. Usa questo metodo solo se capisci i rischi.

### Metodo 3: Versione Developer Edition o Nightly

Se usi **Firefox Developer Edition** o **Firefox Nightly**, puoi installare estensioni non firmate senza modificare `about:config`:

1. Segui gli stessi passaggi del Metodo 2
2. Non è necessario modificare `xpinstall.signatures.required`

## 🎯 Utilizzo

1. **Apri YouTube senza pubblicità**
   - Clicca sull'icona dell'estensione nella barra degli strumenti
   - Si aprirà una finestra popup dedicata con YouTube

2. **Naviga normalmente**
   - Le pubblicità verranno automaticamente bloccate
   - I video ads verranno saltati o velocizzati
   - Gli overlay pubblicitari verranno nascosti

## 🔧 Struttura del progetto

```
yt-solo-firefox/
├── manifest.json      # Configurazione dell'estensione
├── background.js      # Script di background per blocco richieste
├── content.js         # Script per manipolazione DOM
└── README.md         # Questa documentazione
```

## 📝 Come funziona

### Background Script
- Blocca le richieste a domini pubblicitari noti (doubleclick.net, googlesyndication.com, ecc.)
- Apre YouTube in una finestra popup dedicata al click dell'icona

### Content Script
- Monitora la pagina per rilevare annunci video
- Accelera la riproduzione degli annunci a 16x
- Clicca automaticamente i pulsanti "Salta annuncio"
- Nasconde overlay e banner pubblicitari
- Ripristina le impostazioni originali dopo l'annuncio

## ⚖️ Note legali

Questa estensione è sviluppata per scopi educativi e di ricerca. L'uso di ad-blocker è legale nella maggior parte delle giurisdizioni, inclusa l'Italia. Tuttavia:

- L'estensione modifica l'esperienza utente solo sul dispositivo locale
- Non ridistribuisce o modifica contenuti di terze parti
- Gli utenti sono responsabili dell'uso che ne fanno
- YouTube potrebbe limitare l'accesso ai contenuti se rileva l'uso di ad-blocker

## 🐛 Risoluzione problemi

### L'estensione non appare dopo l'installazione
- Verifica che tutti i file siano presenti nella cartella
- Controlla la console di Firefox per errori (F12 → Console)
- Assicurati di aver selezionato il file `manifest.json` corretto

### Gli annunci non vengono bloccati
- Ricarica la pagina di YouTube
- Verifica che l'estensione sia attiva in `about:addons`
- Controlla i permessi dell'estensione

### L'estensione scompare dopo il riavvio
- Questo è normale con l'installazione temporanea
- Usa il Metodo 2 o 3 per un'installazione permanente

## 🤝 Contribuire

I contributi sono benvenuti! 

1. Fai un fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/nuova-funzionalita`)
3. Committa le modifiche (`git commit -m 'Aggiunge nuova funzionalità'`)
4. Pusha il branch (`git push origin feature/nuova-funzionalita`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.

## ⚠️ Disclaimer

Questo software è fornito "così com'è", senza garanzie di alcun tipo. L'autore non è responsabile per eventuali danni derivanti dall'uso di questa estensione. L'utilizzo è a proprio rischio.

---

**Nota**: YouTube è un marchio registrato di Google LLC. Questa estensione non è affiliata, approvata o sponsorizzata da Google.
