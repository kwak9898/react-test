import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductMain from "./pages/ProductMain";
import ProductView from "./pages/ProductView";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/item/:no" element={<ProductView />} />
          <Route exact path="/" element={<ProductMain />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
