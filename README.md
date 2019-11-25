# gpstrack

REQUIREMENTS

- nodemon
```npm install -g nodemon```
- ngrok
https://ngrok.com 
- Xcode (for iOS run)
- React Native CLI
```npm install -g react-native-cli```
- Node 
```npm install node --save```

# Open the project and install all the packages
```npm install```

# Run node js server

```cd backend```

```npm nodemon index.js```

# Run ngrok to host the app on a public url

```cd [location you installed ngrok]```

```./ngrok http 4000```

You get an url from the terminal. Paste this url in the app.js file in the socket variable

# Run metro server for react-native

```npm run start```

# Run the simulator

```react-native run-ios```




