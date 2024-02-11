<div align="center">
  <span><img src="https://raw.githubusercontent.com/devhmac/Hypocenter/1dc649c3db201c5a4edd69787f2da23c114aa419/react-front-end/public/images/hypocenter.svg" height=300 ></span>

## Hypocenter

### Earthquake Data and Analysis

<!--## [Check it out live ](https://hypocenter.ca/)-->

_Front end Hosted on Netlify, API database hosted on Heroku_

_Built by [David Radvan](https://github.com/DavidRadvan), [Devin MacGillivray](https://github.com/devhmac),
[Farouk Alsajee](https://github.com/faroukalsajee)_

</div>
<br>

## Introduction

This was the final project for the Lighthouse Labs Web Development bootcamp, built by David Radvan, Devin MacGillivray, and Farouk Alsajee.

Hypocenter is a full-stack application that collects live earthquake data from the USGS API and displays it on an interactive 3d globe. A google maps mode is also included using the google maps API. Users can click on an individual earthquake to display in-depth data for that earthquake, with tooltips offered to educated users on earthquake data. Users can also post a comment on that earthquake. Additionally, users can sign up for notifications - an email will be sent to the user when an earthquake occurs that satisfies that conditions set by that user (country and minimum magnitude).

---

<img src='./readme-resources/homescreen.gif'>

### <ins> New Quake Popups </ins>

<img src='./readme-resources/quakepopup.gif'>

### <ins> See Earthquake Data </ins>

<img src='./readme-resources/toquake.gif'>

### <ins> Interact via comments </ins>

<img src='./readme-resources/comment.gif'>

## Details

Hypocenter utilizes the USGS live earthquake API, which delivers earthquake data the moment is is available. We chose to display all earthquakes that are 'human feel-able' (magnitude 4.5+) that occurred in the last month. We wanted Hypocenter to be a place for anyone impacted by an earthquake, even if they have minimal knowledge on how they work - we also wanted the site to be updated constantly, and completely different month to month.

We display data to users not only through the globe and map modes, but also through our unique livelist feature - the top five most recent earthquakes are displayed here. Do you think you just felt and earthquake and want to know for sure? Livelist has your back, making recent earthquakes easy to access and comment on. We also display an alert when a new earthquake occurs while the user is on the globe or map mode - a rare occurrence, but exciting when it happens.

We utilized Pusher (a websocket alternative) to ensure that earthquake data is live and as fast as possible. The API is refreshed every minute, and Hypocenter immediately updates with any new data - no refresh required. The data displayed on Hypocenter is cutting edge, straight from the seismometers to your screen - it is THE fastest earthquake data available. Since earthquake data is frequently revised as time goes on, we make sure that our earthquakes update with any new or updated data points.

Each earthquake we display has dynamic data displayed right on the page - helpful tooltips explain how the data was collected and calculated. Most of the data comes directly from the USGS API, with the exception of the energy generated by the earthquake - we derive that ourselves based on the magnitude.

Hypocenter also offers dark mode/light mode options, which completely change the look and feel of both the globe and map views. While just a cosmetic change, offering users a choice increases engagement and a feeling of personalization, while catering to different user needs.

## Stack Choices

Front-End: React

Back-End: Express, PostgreSQL

We made our stack choices based on both what made sense for a project like this, and what we were eager to work with. React is an incredibly powerful tool, and we all feel that it has a place in the industry for many years to come - we were enthusiastic about enhancing our React skillset. React turned out to be the perfect choice for this project - the various components and state management tools offered a simple logical solution for site navigation and conditional component rendering.

On the Back-End, our choices were based on pragmatism and reliability. We wanted a back-end stack that we were familiar with and would work seamlessly, allowing us to devote the majority of our efforts to learning the intricacies of React. Express was the perfect choice for routing and data management - we utilized Axios to control data flow from front-end to back-end, and Pusher to control live data flow. Our database management was based in PostgreSQL, which provided the perfect platform to handle earthquake and user data.

## Screenshots

## Local Installation

- Install all dependencies in both react-front-end and express-back-end folders with `npm install`.

- `npm start` in both directories to run the server and front-end.

### Other Links

[Hypocenter Planning Repo (contains ERD, site outlines, user stories, etc.)](https://github.com/DavidRadvan/Hypocenter-Planning)
