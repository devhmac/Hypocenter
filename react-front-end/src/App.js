import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Pusher from "pusher-js";
import "./App.css";

import Splash from "./components/Splash";

import Globe from "./components/Globe";
import MainMap from "./components/MainMap";
import NavBar from "./components/NavBar";
import ToMapButton from './components/Buttons/ToMapButton'
import LiveList from './components/LiveList'

import { stateContext } from "./contextProviders/stateContext";
import { GlobeLoaderProvider } from "./contextProviders/globeLoaderContext";
import QuakePage from "./components/individualQuakePage/QuakePage";
import Notifications from "./components/Notifications.js";
import NotificationConfirm from "./components/NotificationConfirm.js";
import CommentButton from "./components/Buttons/CommentButton.jsx";
import DeleteButton from "./components/Buttons/DeleteButton.jsx";
import ChatBox from "./components/Chatbox/ChatBox";
import { ThemeProvider } from "./components/Darkmode/ThemeContext";
import "./components/Darkmode/Theme.css";

function App() {
  const { state, liveListUpdate, addNewLiveListItem, addNewEarthquakePin, earthquakePins } = useContext(stateContext);
  const [mapToggle, setMapToggle] = useState(false);

  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    //initial get request for eq's
    axios
      .get("/api/earthquakes")
      .then((response) => {
        console.log(response.data);
        earthquakePins(response.data)
        liveListUpdate(response.data);
      })
      .catch((error) => console.log(error));

    //pusher connection for new earthquakes
    const pusher = new Pusher("7a7e150b8cf104d8b9b9", {
      cluster: "us3",
      encrypted: true,
    });
    const channel = pusher.subscribe('quakes');
    channel.bind('new-earthquakes', (data) => {

      //updates state in contextProvider for livelist and pins
      addNewEarthquakePin(data.earthquakes);
      addNewLiveListItem(data.earthquakes);
    })
  }, []);



  useEffect(() => {
    if (state.mode === "main" || state.mode === "notifications") {
      document.body.classList.add('overflow-controller');
    } else {
      document.body.classList.remove('overflow-controller');
    }
  }, [state.mode])

  return (
    <div className="App">
      <ThemeProvider>
        <GlobeLoaderProvider>
          <NavBar />
          {state.mode === "main" && !mapToggle && <Globe />}
          <Splash />
          {state.mode === "main" && mapToggle && <MainMap />}
          {state.mode === "notifications" && <Notifications />}
          {state.mode === "notificationconfirm" && <NotificationConfirm />}
          {state.mode === "main" && <LiveList />}
          {state.mode === 'main' && <ToMapButton
            onClick={() => {
              setMapToggle((prev) => {
                return !prev;
              });
            }}
          >
            {!mapToggle ? 'To Map' : 'To Globe'}
          </ToMapButton>}

        </GlobeLoaderProvider>
        {state.mode === "earthquake" && (
          <>
            <QuakePage />
            <CommentButton />
            <DeleteButton />
            <ChatBox />
          </>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
