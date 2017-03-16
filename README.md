# boiler-pack
An opinionated boilerplate starter project for creating React apps. It's based on the technologies/conventions that the Farmobile Web Team uses in their production stack. Our intention is to use this repo as a quick start for launching new projects/demos/prototypes. It will also serve as a teaching/onboarding tool for new developers.

If you're looking for something more bare bones (and less opinionated), use [create-react-app](https://github.com/facebookincubator/create-react-app) instead.

*_NOTE:_ This project is still under development, so it does not have everything yet (like production builds)...but we're working on it!*

### Features
* Hot module reloading (HMR)
* Automatic vendor bundle splitting
* Lazy-loaded bundle splitting (with 'prefetch' resource hinting)
* Code linting (ES6)

### Tools/Technologies:
* webpack (v2)
* babel
* react
* react-router (v4)
* eslint
* precss/postcss
* autoprefixer + browserslist
* webpack-dashboard

### Getting Started
First things first...be sure that you have `node` and `yarn` installed on your system. You can check to see if they're already installed by running the command `node -v` or `yarn --version`. If needed, follow these directions for [installing Node](https://nodejs.org/en/download/) or [installing Yarn](https://yarnpkg.com/en/docs/install).

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

#### Custom Dev Server Configuration
```bash
# run dev server on a different port (default is '8080')
yarn start -- --port:3000

# run dev server from a different host (default is 'localhost')
yarn start -- --host:0.0.0.0
```
