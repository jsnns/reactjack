# ReactJack
Create React App based BlackJack state-machine

## Install
```json 
{
  "node": "v8.1.2"
}
```

`run npm install`
`run npm start`

Open `http://localhost:3000` in your browser.

Open `http://localhost:3000?debug` in your browser for debug mode.

## Structure
```
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── components
│   │   ├── Cards.js
│   │   ├── DebugLog.js
│   │   ├── GameControls.js
│   │   ├── GameStats.js
│   │   ├── InitialButtons.js
│   │   ├── typography.js
│   │   └── util.js
│   ├── config
│   │   └── deck.config.js
│   ├── data
│   │   ├── Card.js
│   │   ├── Deck.js
│   │   ├── Game.js
│   │   └── Hand.js
│   ├── scenes
│   │   ├── Init.js
│   │   └── Play.js
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── util.js
├── README.md
├── package-lock.json
├── package.json
└── yarn.lock
```

**Data**: Data models for Cards, Decks, Hands, and Games.
**Scenes**: Application views.
**Components**: Small component library.
**Config** Data model configuration.
