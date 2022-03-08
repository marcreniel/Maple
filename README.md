# Maple
### This project is a work in progess. Expect many bugs and glitches.
An all-in-one webapp for CPS students. Check your grades, attendance, bus times, and more. Built on Framework7 + React.

## Prerequisites
- Node.js w/ npm 

## Setup

First, clone the repo using git:
```
git clone https://github.com/imedra/Maple
```
Then, install the required dependencies.
```
npm install
```
For running locally, make sure to add ``server.https`` in ``vite.config.js``
</br>
For running on the cloud (Heroku, Azure, DigitalOcean, etc.), leave the config as is. 
</br>

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build` - build web app for production

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.

## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```

## Credits
- Created by [**Marc Bernardino**](https://github.com/imEdra)
- Backend code sourced from [**Kevin Gao/GradeTreeCPS**](https://github.com/gaojunxuan/GradeTreeCPS)

## License
This project is licenced via MIT.
