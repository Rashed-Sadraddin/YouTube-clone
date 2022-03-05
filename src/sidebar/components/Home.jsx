import Videos from "../../Videos/Videos";
import { CheckCircleFilled, EllipsisOutlined ,
  ClockCircleOutlined,MenuUnfoldOutlined} from "@ant-design/icons";
import Links from "../Link components/Links/Links";
import { NavLink } from "react-router-dom";
import "../../App.css";

const Home =()=>{return (
  <div className="">
    
      <div className="flex flex-row bg-neutral-900 h-full">
        <Links /> 
        
  <div className=" flex flex-row flex-wrap w-[94%] h-[100%] overflow-y-auto  px-4 ">
    {Videos.map((props) => {
      return (
        <div key={props.id} className="static w-[285px] h-[280px]">
          
        <NavLink  to={`/one/${props.id}`}>
        <div 
        className="hover:relative group  hover:bg-neutral-800 mx-2 my-6 h-[240px] w-[270px] hover:scale-[1.15] hover:duration-[0.5s] hover:delay-[1s]  hover:h-[330px] overflow-hidden">
          {/* <img controls autoPlay className=" mb-1.5 group-hover:mb-0 group-hover:w-0 group-hover:h-0  group-hover:delay-[1.8s]  w-[100%] h-[148px]" src={props.link}/> */}
          <video   className="bg-black mb-1.5 group-hover:mb-0 group-hover:w-0 group-hover:h-0  group-hover:delay-[1.8s]  w-[100%] h-[152px]" src={props.video_link}/>

           <video src={props.video_link} className="bg-black w-[0] h-[0] group-hover:w-[100%] group-hover:h-[46.5%]  group-hover:delay-[1.8s] mb-3 mt-0 group-hover:mt-0" loop autoPlay muted/>

          <div className=" group-hover:pr-2 group-hover:pl-2 group-hover:delay-[1s] group-hover:duration-[0.5s] flex  text-white">
          <img className="float-left w-10 h-10 rounded-full mr-3" src={props.pagepic}></img>
          <div className="float-left w-[70%] ">
            <h4 className="text-white w-[166px] h-5 overflow-hidden float-left">{props.title} </h4>
            <p className="text-neutral-400 mb-0">{props.pagename} <CheckCircleFilled className=""/></p>
            <span className="text-neutral-400">{props.view} views . {props.time} ago</span>
            </div>
            <div className="">
              <button>
          <EllipsisOutlined rotate={90} className=" text-lg h-4 w-4 float-right"/>
          </button>
          </div>
          </div>
          <button className="text-white bg-neutral-700 rounded-[2px] flex justify-center items-center w-[95%] p-2 mx-auto my-1">
            <ClockCircleOutlined className="text-[20px]" /> &nbsp; WATCH LATER
            </button>
            <button className="text-white bg-neutral-700 flex justify-center rounded-[2px] w-[95%] p-2 mx-auto">
              <MenuUnfoldOutlined className="text-[20px]"/>&nbsp;ADD TO QUEUE
              </button>
          
        </div></NavLink></div>
      );
    })}
  </div>
  </div>
  </div>
);}
export default Home
