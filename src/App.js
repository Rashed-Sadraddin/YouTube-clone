import "./App.css";
import Header from "./header/Header";
import Routers from "./routers/Routers";
import Links from "./sidebar/Link components/Links";
import Links2 from "./sidebar/Link components/Links/Links2";


function App() {
  return (
    <>
      <Header />
      <div className="flex flex-row bg-neutral-900 h-full">
        <Links/>
        
        <Routers />
      </div>
    </>
  );
}

export default App;
