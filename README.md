Sito web responsive per la presentazione dei corsi di Formazione Futura con sezioni istituzionali, numeri chiave e form di contatto con validazione in tempo reale lato client.

✨ Funzionalità principali

Layout responsive con Bootstrap + media query personalizzate.

Navbar con dropdown e voci “i Nostri Corsi” / “Sedi”.

Hero con titolo, claim e immagine di apertura.

Ticker/Slogan animato (testo scorrevole).

Carosello corsi (Bootstrap Carousel) con overlay testuale.

Testimonianze studenti.

Form di contatto con:

Validazione live di nome, cognome, email, numero (10 cifre), età (≥ 18), genere (radio).

Messaggi di errore e di campo valido.

Messaggio di conferma “Messaggio inviato con successo!” alla validazione completa.

Reset automatico dei campi dopo l’invio simulato.

Animazioni on scroll con libreria AOS.

🧠 Validazione (JavaScript)

Regex:

caratteri per lettere e spazi (supporta accenti): ^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$

emailValidità per formato email: ^[^\s@]+@[^\s@]+\.[^\s@]+$

regexNumero per telefono: ^\d{10}$

Regole:

Nome: minimo 5 caratteri alfabetici.

Cognome: minimo 5 caratteri alfabetici.

Email: formato valido.

Numero: 10 cifre.

Età: ≥ 18.

Genere: uno tra maschio/femmina selezionato.

UX:

Messaggi di errore mostrati/nascosti dinamicamente.

Messaggio di conferma nascosto quando l’utente entra (focus) in un qualsiasi campo per modificare dati.
