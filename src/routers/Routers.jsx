import { Route, Routes } from "react-router-dom";
import Home from "../sidebar/components/Home";
import Explore from "../sidebar/components/Explore";
import Shorts from "../sidebar/components/Shorts";
import Subscription from "../sidebar/components/Subscription";
import Library from "../sidebar/components/Library";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Explore" element={<Explore />}></Route>
      <Route path="/Shorts" element={<Shorts />}></Route>
      <Route path="/Subscription" element={<Subscription />}></Route>
      <Route path="/Library" element={<Library />}></Route>
    </Routes>
  );
};

export default Routers;
