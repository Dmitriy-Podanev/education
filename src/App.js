import React from 'react';
import io from "socket.io-client";

import {Signin} from "./components/Signin";
const socket = io();
export const App = () => {
  return (
    <div>
      <Signin/>
    </div>
  );
};

