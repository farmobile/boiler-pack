# boiler-pack
An opinionated boilerplate starter project for creating React apps. It's based on the technologies/conventions that the [Farmobile](https://www.farmobile.com/) Web Team uses in their production stack. Our intention is to use this repo as a quick start for launching new projects/demos/prototypes. It will also serve as a teaching/onboarding tool for new developers.

If you're looking for something more bare bones (and less opinionated), use [create-react-app](https://github.com/facebookincubator/create-react-app) instead.

*_NOTE:_ This project is still under development, so it does not have everything yet (like production builds)...but we're working on it!*

### Features
* Hot module reloading (HMR)
* Redux state management + time travel debugging
* Automatic vendor bundle splitting
* Async bundle splitting (with 'prefetch' resource hinting)
* Code linting (ES6)

### Tools/Technologies:
* webpack2 + Tree Shaking
* babel
* react
* react-router (v4)
* redux + devtool extension
* eslint
* precss/postcss
* normalize.css
* autoprefixer + browserslist
* webpack-dashboard

### Prerequisites
First things first...be sure that you have `node` and `yarn` installed on your system. You can check to see if they're already installed by running the commands:
```bash
node -v
yarn --version
```
If needed, follow the directions for [installing Node](https://nodejs.org/en/download/package-manager/) or [installing Yarn](https://yarnpkg.com/en/docs/install).

### Getting Started
```bash
# after cloning/downloading the repo...
# navigate to the directory containing the package.json file
cd /path/to/files

# install the packages
yarn install

# start the development server (HMR)
yarn start
```
Happy hacking!!!

### Custom Dev Server Configuration
```bash
# run dev server on a different port (default is '8080')
yarn start -- --env.port:3000

# run dev server from a different host (default is 'localhost')
yarn start -- --env.host:0.0.0.0
```
