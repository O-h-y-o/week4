import React from "react";
import { Route, Switch } from "react-router-dom";

import styled from "styled-components";
import Cards from "./components/Cards";
import Link from "./components/link";
import makeCard from "./components/makeCard";

function App() {
  return (
    <Wrap>
      <Switch>
        <Route path="/components/makeCard" component={makeCard} />
        <Route exact path="/" component={Link} />
      </Switch>
      <Route exact path="/" component={Cards} />
    </Wrap>
  );
}

const Wrap = styled.div``;

export default App;
