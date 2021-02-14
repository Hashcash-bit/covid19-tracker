---
## Inspiration

- __[Frontline Workers](https://www.frontlinehealthworkers.org/who-they-are)__ - The front-line workers have inspired us greatly with their sacrifice and heroic nature.
- __[The COVID-19 Response](https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/canadas-reponse.html)__ - The COVID-19 response managed to decrease the spread of the virus, but due to the recent lockdown lift the spread has increased

I want to spread awareness to change that!

---
## What it does
Watch Together is an API based Covid tracker tool that allows users to virtually travel the globe and get live updates on the Covid Situation around the world. This means they don't have to visit news outlets or read articles to get educated on the Covid situation around them and relatives from other nations/countries. This Responsive Site asks for user input on which country they would like to select and navigate to; therefore, with my responsive map, one-click prompts up a pop up that educates the user on the **Number of Cases**, **Number of Recoveries** and **Deaths**.

```Luckily, the doctors and frontline workers have gotten some control over the virus and the drop in cases is transpiring.```

## How I built it
To construct **Watch Together**, I used 3 different tools:
- Firebase: I used the firebase hosting feature to host my web app live for everyone and anyone to see.
- Leaflet API:
- Disease.ch Doc:
We used IBM Db to store all pricing data. A webscraper automatically updates this data every 24 hours. A backend server running in Python has access to the database and it provides the data to our front end through an API endpoint. The frontend is built with Jekyll and hosted on GitHub Pages.

## Challenges we ran into

This was our time using IBM Db, so we had some trouble figuring out how to set it up. The docs were extremely helpful and we were able to use them to solve our problems.

## Accomplishments that we're proud of

We're proud of the fact that we were able to finish the project within the 24 hours. The project seemed daunting at first but we worked together exceptionally well as a team. We split the tasks up into small chunks of work and that's how we were able to accomplish what we did.

## What we learned
1. How to use IBM Db in our project
2. How to create an API endpoint in Python using Flask
3. How to create a (PWA) Progressive Web App
4. How to scrape data

## What's next for 1StopShop

- Expand our database to include pricing data from local businesses.
- Filter grocery stores depending on the user's location.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Launch the WEB APP
https://covid-tracker-1e491.web.app
