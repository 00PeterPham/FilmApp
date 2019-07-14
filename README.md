# FilmApp
## Introduction
This project was created to display a list of the current year's films from [The Movie Database](https://www.themoviedb.org) by release date (oldest to newest).

Films with a popularity value less than 10 is excluded from this list.

More information about a film can be seen by clicking a 'Film Card'. The following information will be displayed in a popup modal for that particular movie:
  - description
  - genres
  - tag line (if any)
  - runtime (if available)
  - cast

If a cast member is clicked, a list of other movies that they have appeared in will also appear in the modal.

## Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You will need the following to run this project:
  - check out this repository
  - npm 5.2+

## Running on your Mac
  1. Install node https://nodejs.org/en/download/
  2. Open your terminal and navigate to your local version of this repository
  3. Enter **npm install** to install dependencies

## To Run Development Server
  1. Enter **npm start**

The app automatically opens in a browser at [http://localhost:3000]

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## To Build For Production
  1. Open your terminal and navigate to your local version of this repository
  2. Enter **npm run build**

Builds the app for production to the `build` folder.