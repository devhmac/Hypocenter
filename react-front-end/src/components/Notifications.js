import React, { useContext, useState } from 'react';
import { stateContext } from '../contextProviders/stateContext';
import './Notifications.css';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "none",
  },
  menuButton: {
    color: "white",
    marginRight: theme.spacing(1),
  },
  title: {
    color: "white",
    flexGrow: 1,
  },
  login: {
    color: "white",
    float: "right",
  },
  usergreeting: {
    color: "white",
    float: "right",
    button: "disabled"
  }
}));

export default function Notifications() {

  const classes = useStyles();
  const { state, setState } = useContext(stateContext);
  const [country, setCountry] = useState("");
  const [magnitude, setMagnitude] = useState("");

  const save = () => {

    return axios.put('/api/notifications', {
      country: country,
      magnitude: magnitude,
      user_id: state.user.id
  })
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
      <h5> Chose a country and a magnitude - we'll send you an email when an earthquake occurs based on your choices. </h5>
      <h6> Your notifications will be sent to {state.user.email} </h6>
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
        <p> Magnitude </p>
        <input
          className="notification-input"
          name="magnitude"
          type="text"
          placeholder="Magnitude at or above which you will be notified of ex. 7.0"
          value={magnitude}
          onChange={(event) => setMagnitude(event.target.value)}
        />
        <Button className={classes.login} onClick={() => validate()}>Save</Button>
        </form>
      </div>
  )
}
