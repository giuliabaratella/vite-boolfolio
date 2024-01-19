# API url

```bash

API_URL='http://127.0.0.1:8000/api'
```

# Installazione vue/vite

```bash
# 1. Crea repo su git (senza opzioni se non pubblico)
# 2. Clonare la repo e apri la cartella su vs code e aprire terminale
# 3. digitare:

npm create vue@latest

# 4. per creare il progetto nella directory corrente mettere solo un  punto
# 5. nome package lo stesso della cartella poi lasciare tutto come sta
# 6. dire si all'opzione vue router

npm install
npm run dev
npm install bootstrap axios @fortawesome/fontawesome-free sass

# eventualmente facciamo vedere fontsource: https://fontsource.org/fonts/montserrat
npm install @fontsource/montserrat

# copiamo la cartella webfonts da fontawesome in node-modules in assets

#cancellare i components(ma lasciare cartella)
#cancellare il contenuto di App.vue
#creare la cartella style e images dentro assets
#creare cartella partials dentro style
#aggiornare il file main.css in scss, cambiare percorso in main.js
#creare la cartella partials e il file variables.scss

#dentro main.scss
@use '/src/assets/style/partials/variables.scss' as *;

$fa-font-path: '../webfonts';
@import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
@import '@fortawesome/fontawesome-free/scss/solid.scss';
@import '@fortawesome/fontawesome-free/scss/regular.scss';
@import '@fortawesome/fontawesome-free/scss/brands.scss';

@import 'bootstrap/scss/bootstrap';

#in src creare cartella data e il file store.js
#aggiungere cartella img a public



# inizialmente commentiamo l'importazione e l'uso del router di view dal main js
# eliminiamo i file inutili al termine le cartelle dovrebbero essere così:

npm run dev -- --port 5174

```
