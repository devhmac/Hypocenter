import React, { Component, useContext } from "react";
import Pusher from "pusher-js";
import axios from "axios";
import "./ChatBox.css";
import CommentButton from "../Buttons/CommentButton";
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import { stateContext } from '../../contextProviders/stateContext'


export default function CommentBox(props) {
  const { state } = useContext(stateContext);


  return (
    <div style={{ background: 'white' }}>
      {state.user && <CommentInput />}
      <CommentList />
    </div>
  );
}