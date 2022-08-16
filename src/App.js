import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainTemplate from "./Template/MainTemplate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<Home />} />
        </Route>
      </Routes> 
    </>
  );
}

export default App;
