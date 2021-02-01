import React from "react";
import ReactDOM from "react-dom";
import { Container } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import "./index.css";
import Chat from "chat/Chat";
const App = () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan
      eros eget nunc porta, ornare feugiat risus tempus. Donec nunc leo,
      sagittis id mollis id, gravida ut augue.{" "}
    </p>
    <h1>Chat</h1>
    <Chat />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan
      eros eget nunc porta, ornare feugiat risus tempus. Donec nunc leo,
      sagittis id mollis id, gravida ut augue.{" "}
    </p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
