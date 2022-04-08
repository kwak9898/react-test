import { BrowserRouter, Route } from "react-router-dom";
import ProductMain from "./pages/ProductMain";
import ProductView from "./pages/ProductView";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/item/:no" component={ProductView} />
        <Route exact path="/" component={ProductMain} />
      </BrowserRouter>
    </div>
  );
};

export default App;
