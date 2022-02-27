import "./App.css";
import Header from "./header/Header";
import Routers from "./routers/Routers";
import Links from "./sidebar/Link components/Links/Links";
import video from "./Videos/a.mp4";
import Image from "./Videos/a.png";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-row bg-neutral-900 h-full">
        {/* <Links /> */}
        {/* <video
        id="v"
          src={video}
          className="w-80 h-80"
          // autoPlay="true"
          type="video/avi"
          controls
          loop
          poster={Image}
          preload="auto"
          // onplay={fcn()}
        /> */}

        <Routers />
      </div>
    </>
  );
}

export default App;
