import "./App.css";
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Cart from "./screens/Cart";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />

      <Route path="/login" component={Login} exact />

      <Route path="/register" component={Register} exact />

      {/* <Route path="/cart" component={Cart} exact /> */}

      {/* <Route render={() => <Redirect to="/login" />} /> */}

      <PrivateRoute path="/cart" component={Cart} />
    </Router>
  );
}

export default App;
