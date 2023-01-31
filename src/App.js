import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

// configure routing here bc it is the root component
function App() {
  return (
    <>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<ListEmployeeComponent />}></Route>
              <Route path="/employees" element={<ListEmployeeComponent />}></Route>
              <Route path="/add-employee" element={<CreateEmployeeComponent />}></Route>
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </>
  );
}

export default App;