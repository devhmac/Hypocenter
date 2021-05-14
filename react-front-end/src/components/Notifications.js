import React, { useContext, useState } from 'react';
import { stateContext } from '../contextProviders/stateContext';
import './Notifications.css';
import EngageButton from './engageButton.js';
import axios from "axios";

export default function Notifications() {

  const { state, setState } = useContext(stateContext);
  const [country, setCountry] = useState("");
  const [magnitude, setMagnitude] = useState("");

  const save = () => {

    const notifications = {
      country: country,
      magnitude: magnitude,
      user_id: state.user.id
  };

    return axios.post('/api/notifications', notifications)
    .then(() => {
      setState(prev => {
        return {
          ...prev,
          mode: 'notificationconfirm',
          countryNotifications: country,
          magnitudeNotifications: magnitude
        }
      })
    });
  };

  const validate = function() {
  if (country === "" || magnitude === "") {
    alert("Field left blank")
    return;
  }

  save()
}

  return (
      <div className="notificationHolder">
      <h2> Create a New Notification </h2>
      <h4> Chose a country and a magnitude - we'll send you an email when an earthquake occurs based on your choices. </h4>
      <h5> Your notifications will be sent to {state.user.email} </h5>
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <p> Country: </p>
        <input
          className="notification-input"
          name="country"
          type="text"
          placeholder="Country to be notified of earthquakes ex. Canada"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
        <p> Magnitude: </p>
        <input
          className="magnitudeNote"
          name="magnitude"
          type="text"
          placeholder="Magnitude at or above which you will be notified of ex. 7.0"
          value={magnitude}
          onChange={(event) => setMagnitude(event.target.value)}
        />
        <EngageButton text="Save" onClick={() => validate()} />
        </form>
      </div>
  )
}
