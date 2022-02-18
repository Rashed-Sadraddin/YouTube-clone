import "./App.css";
import Header from "./header/Header";
import Routers from "./routers/Routers";
import Links from "./sidebar/Link components/Links";


function App() {
  return (
    <>
      <Header />
      <div className="flex flex-row bg-neutral-900">
        <Links />
        <Routers />
      </div>
    </>
  );
}

export default App;
