import React from 'react';

export default function EngageButton(props) {
  return (
    <button className="engage" onClick={props.onClick}>
      {props.text}
    </button>
  );
}
