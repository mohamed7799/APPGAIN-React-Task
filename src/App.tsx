import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
