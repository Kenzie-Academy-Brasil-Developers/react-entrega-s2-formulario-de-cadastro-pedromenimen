import "./App.css";
import Form from "./components/form";
import { Switch, Route } from "react-router-dom";
import Success from "./pages/success";
import { useState } from "react";

function App() {
  const [name, setName] = useState("")
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Form name={name} setName={setName} className="form"></Form>
        </Route>
        <Route exact path={`/success/:name`}>
          <Success name={name}></Success>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
