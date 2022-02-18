import { Route, Routes } from "react-router-dom";
import Home from "../sidebar/components/Home";

const Routers = () => {
  return (
    
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    
  );
};

export default Routers;
