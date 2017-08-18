# Github Battle

A React project based on [React Fundamentals](https://github.com/tylermcginnis/react-fundamentals), but updated with ES6 arrow functions.

This project can be found at [Github Battler](https://github-battler.firebaseapp.com/).

### Prerequisites

* GitHub API Client ID and Secret Key.
* Firebase (for deployment)

### Installing Development

1. Install the required JavaScript dependances
```
yarn install
```

2. Add your secret keys to ```app/utils/api.js```.

3. Start the dev server
```
yarn run start
```

## Deployment
1. Login and initialize firebase project
```
yarn run firebase-init
```

2. Deploy to firebase
```
yarn run deploy
```

### Commands

```yarn install``` - Install required dependances
```yarn run start``` - Start the Webpack Dev Server
```yarn run build``` - Build production code
```yarn deploy``` - Build production code and deploy to firebase app
```yarn run firebase-init``` - login to firebase and create a firbase project (firebase init)

