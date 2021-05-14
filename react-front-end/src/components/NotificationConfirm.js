import React, { useContext } from 'react';
import { stateContext } from '../contextProviders/stateContext';
import './Notifications.css';

export default function NotificationConfirm() {

  const { state } = useContext(stateContext);

  return (
      <div className="notificationHolder">
        <h3> Notifications for earthquakes occuring in {state.countryNotifications} with a magnitude at or over {state.magnitudeNotifications} will be sent to {state.user.email}</h3>
      </div>
  )
}
