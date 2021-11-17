import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Homepage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
