# MB.io - SINFO Frontend Challenge - Solution by João Dias

This project is my solution to the **Mercedes-Benz.io SINFO Frontend Challenge**. You can read the challenge [here](CHALLENGE.md).

In this challenge I'm using **Webpack** and its swiss army knife capabilities to build my development workflow.

I'm also using **Redux** to contain and maintain the application state.


## Setup your system

### node.js

To automatically serve the challenge's index.html page and for additional tasks you may need (section [Requirements](#requirements), steps 6. and 7.), we recommend you use [node.js](https://nodejs.org) v8.x but any other recent (>=6.0.0) version should be fine also. In case you want to manage several node versions on your machine, we recommend [nvm](https://github.com/creationix/nvm) for Mac/*nix and [nvm-windows](https://github.com/coreybutler/nvm-windows) for Windows.


### Install NPM packages and run dev

Once you have node.js installed, open up your OS's Terminal/Bash application, change into the root folder of the challenge (where the file `package.json` is located) and run `npm install`.

After all NPM packages installed successfully it will open a browser tab with src/index.html running in http://localhost:8080/ (if you can't see that tab in your browser try running `npm start` or `npm run dev`).


### Production ready

Whenever you want to build a production-ready image of the project, change into the root folder of the challenge (where the file `package.json` is located) and run `npm run build`.

The process will take a few seconds to complete, but when it does you should have a new `dist` folder which contains all the static assets that compose the project. These files are already opmitized for a production environment.
