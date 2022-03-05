import Videos from "../../Videos/Videos";
import {
  CheckCircleFilled,
  EllipsisOutlined,
  ClockCircleOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import Links from "../Link components/Links/Links";
import { NavLink } from "react-router-dom";
import "../../App.css";

const shorts = () => {
  return (
    <div className="">
      <div className="flex flex-row bg-neutral-900 h-full w-screen">
        <Links />

        <div className=" flex flex-col w-[100%]  h-[100%] overflow-y-auto  px-4 ml-[30%]">
          {Videos.map((props) => {
            return (
              <div key={props.id} className="static w-[285px] h-[280px]">
                <NavLink to={`/one/${props.id}`}>
                  <div className="hover:relative group  hover:bg-neutral-800 mx-2 my-6 h-[240px] w-[270px]  hover:duration-[0.5s] hover:delay-[1s]  overflow-hidden">
                    {/* <img controls autoPlay className=" mb-1.5 group-hover:mb-0 group-hover:w-0 group-hover:h-0  group-hover:delay-[1.8s]  w-[100%] h-[148px]" src={props.link}/> */}
                    <video
                      className="bg-black mb-1.5 group-hover:mb-0 group-hover:w-0 group-hover:h-0  group-hover:delay-[1.8s]  w-[100%] h-[152px]"
                      src={props.video_link}
                    />

                    <video
                      src={props.video_link}
                      className="bg-black w-[0] h-[0] group-hover:w-[100%] group-hover:h-[46.5%]  group-hover:delay-[1.8s] mb-3 mt-0 group-hover:mt-0"
                      loop
                      autoPlay
                      muted
                    />

                    <div className=" group-hover:pr-2 group-hover:pl-2 group-hover:delay-[1s] group-hover:duration-[0.5s] flex  text-white">
                     
                      <div className="float-left w-[70%] ">
               
                      </div>
                      <div className="">
                        
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default shorts;
