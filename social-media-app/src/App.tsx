import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./App.css";
import { Home } from "./components";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
