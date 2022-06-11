# Introduction
This is my portfolio and it is heavily inspired by [this project](https://github.com/nidorx/alexrodin.info).

## Usage
Visit the [live demo](https://helpme-pls.github.io/portfolio) and let curiosity be your guide.
<div align="center">
    <p align="center">
        <a href="https://helpme-pls.github.io/portfolio/">
            <img src="./docs/demo.gif" width="500" />
        </a>
    </p>
</div>

## Caveats
The page will play a song after your first click/touch on the screen, so be mindful of your volume before trying. By the way, it plays on repeat and I haven't yet developed a feature to pause/stop the song or adjust the volume. 

The visual effects may not look as smooth as expected if you're viewing the page on a low-end device.  

# Installation
In case you want to run the app locally, make sure to have the same environment as I do to get it working properly. Please download and install these 2 softwares (if you don't have them already):
1.  **nvm-setup.zip** from its [latest release](https://github.com/coreybutler/nvm-windows/releases)
2.  [Git](https://git-scm.com/downloads)

Then open up your terminal with **Admin privilege** and run the following commands:
1. `nvm install 12.18.3` 
2. `nvm use 12.18.3` 
3. `node -v` (the output should be `v12.18.3`)
4. Pick a folder of your choice, or create an empty folder and then `cd path-to-that-folder`
5. `git clone https://github.com/HelpMe-Pls/portfolio.git`
6. `cd portfolio`

To run in development mode:
```bash
npm install
npm start
```
Open http://localhost:9000 to view it in the browser.


To run the built version:
```bash
npm run-script build
cd dist
npm start
```
Open http://localhost:3060 to view it in the browser.

# Planned development
- Add more songs.
- Add the song's control panel (pause/stop, volume, skipping back and forth) and short keys bindings to show/hide it.
- Add light theme.
- Update `sass` to be compatible with the latest `node` version.

# Contributing
Pull requests are most welcome. For breaking changes suggestion, please open an issue first to discuss what you would like to change/improve.

[Contact me](https://www.facebook.com/messages/t/100005341874318) if you need further support.
