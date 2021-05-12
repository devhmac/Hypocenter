import React from 'react';

export default function EngageButton(props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}
