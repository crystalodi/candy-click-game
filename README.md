# Candy Click

Candy Click Game is a app where a user is given a set of images, which they can click on. The object of the game is to score as many points by not clicking on the same image twice. Each time an image is clicked, all of the images are shuffled.

## Live version
Go [here](https://secure-headland-34688.herokuapp.com/) to view the app.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Install the following programs if they aren't on your local machine.

Node (LTS) - http://nodejs.org

Yarn Package Manager - https://yarnpkg.com/en/docs/install#windows-stable

GIT - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Installing

Clone [this](https://github.com/crystalodi/click-game.git) github repository to a folder on your computer using a command line program.

```
git clone https://github.com/crystalodi/click-game.git
```

Navigate to the folder the repository was cloned into and run yarn install to create the `node_modules` folder needed to run the application

```
cd click-game
yarn install
```

Start the server and application

```
yarn start
```

Your default web browser should open to this url http://localhost:3000.
![Home Page](https://i.imgur.com/h5LT4ZQ.jpg)

## About the Application

### Folder Structure

After following the steps in the Installation section, your folder should look like this:

```
├───node_modules
│
├───public
│       favicon.ico
│       index.html
│       manifest.json
│
└───src
    │   App.css
    │   App.js
    │   App.test.js
    │   images.json
    │   index.css
    │   index.js
    │   logo.svg
    │   registerServiceWorker.js
    │
    └───components
        ├───Container
        │       Container.js
        │       index.js
        │
        ├───HelperText
        │       HelperText.js
        │       index.js
        │
        ├───Image
        │       Image.css
        │       Image.js
        │       index.js
        │
        ├───Row
        │       index.js
        │       Row.js
        │
        ├───Stats
        │       index.js
        │       Stats.js
        │
        └───Title
                index.js
                Title.js
```

* `public/index.html` where game ui will be displayed.
* `src/App.css` Custom styling for the images in the game.
* `src/App.js` Contains logic that shuffles images around on page after an image is clicked, increments score, keeps track of highest score and changes the highest score if current score is bigger, and renders UI components from `components` folder.
* `src/images.json` Contains an array of the url to the image, alt text for image, id of image, and whether the image has been clicked, which is used for rendering images in `src/App.js` and keeping track of which images have been clicked.
* `src/components` Contains stateless components used to display game Images, Game Title, and Highest and Current Score.


## How To Play

To start the candy click game, click on any image
![Start](https://i.imgur.com/rqrCd9F.jpg)

Each time an image is clicked, the current score is incremented by one if the image has not been clicked already. Highest score is changed is current score from current and previous rounds is greater than highest score.
![High Score](https://i.imgur.com/U944CIa.jpg)


If an image has already been clicked during the round, the current score will reset to 0 and allow the user to play again.
![Restart](https://i.imgur.com/h5LT4ZQ.jpg)


## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [Bootstrap](https://materializecss.com/) - CSS Framework used to add styling to layout.

## Authors

* **Crystal Odi** - *Initial work* - [crystalodi](https://github.com/crystalodi)


## Acknowledgments

* React Documentation

