import React, { useContext } from 'react';
import UniversalButton from "./Buttons/universalButton";
import { stateContext } from '../contextProviders/stateContext';
import './Notifications.css';

export default function NotificationConfirm() {

  const { state, setState } = useContext(stateContext);

  const setModeToMain = () => {
    setState((prev) => {
      return { ...prev, mode: "main" };
    });
  };

  return (
      <div className="notificationHolder">
        <h3> Notifications for earthquakes occuring in {state.countryNotifications} with a magnitude at or over {state.magnitudeNotifications} will be sent to {state.user.email}</h3>
        <UniversalButton onClick={setModeToMain}>Back to Home</UniversalButton>
      </div>
  )
}
