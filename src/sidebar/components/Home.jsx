import Videos from "../../Videos/Videos";
import { CheckCircleFilled } from "@ant-design/icons";
const Home =()=>{return (
  <div className="  flex flex-row flex-wrap w-[94%] h-[100%] overflow-scroll px-4 ">
    {Videos.map((props) => {
      return (
        <div className=" mx-2 my-6  w-[270px] hover:scale-[1.15] hover:duration-[0.5s] hover:delay-[1s]">
          <img className="mb-3" src={props.link}></img>
          <img className="float-left w-10 h-10 rounded-full mr-3" src={props.pagepic}></img>
          <div className="float-left">
            <h4 className="text-white">{props.title}</h4>
            <p className="text-neutral-400 mb-0">{props.pagename} <CheckCircleFilled className=""/></p>
            <span className="text-neutral-400">{props.view} views . {props.time} ago</span>
            
          </div>
        </div>
      );
    })}
  </div>
);}
export default Home
