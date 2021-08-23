import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="">
        <Router>
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route
              path="/product/:productId"
              exact
              component={ProductDetails}
            />
            <Route path="/404">Not Found</Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
