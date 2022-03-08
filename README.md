# Maple
### This project is a work in progess. Expect many bugs and glitches.
#### View the test app @ https://mapletest.herokuapp.com

An all-in-one webapp for CPS students. Check your grades, attendance, bus times, and more. Built on Framework7 + React.
#### Features (tentative)
- Virtual ID system w/ scannable barcode
- Full Aspen Integration, which allows the ability to check
  - Grades, schedule, attendance, recent assignments, transcript, & more.
- Check CTA bus times 
- Access to school/CPS annoucements

#### Known Issues
- App does not work on CPS-issued Chromebooks or the CPS network due to the unique way the app makes requests to Aspen.

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

### HTTPS/SSL is required for proper REST requests to Aspen.
For running locally, make sure to add ``server.https`` in ``vite.config.js``, or provide your own SSL/HTTPS certificate.
</br>
For running on the cloud (Heroku, Azure, DigitalOcean, etc.), leave the config as is. Most likely, they will provide one for you.
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
