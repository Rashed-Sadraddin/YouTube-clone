import Video1 from "../b.mp4";
import Videos from "../Videos";
import { NavLink } from "react-router-dom";
import { CheckCircleFilled, EllipsisOutlined } from "@ant-design/icons";
import { ReactComponent as LIKE } from "./Video Tools/LIKE.svg";
import { ReactComponent as LIKE2 } from "./Video Tools/LIKE2.svg";
import { ReactComponent as DISLIKE } from "./Video Tools/DISLIKE.svg";
import { ReactComponent as DISLIKE2 } from "./Video Tools/DISLIKE2.svg";
import { ReactComponent as SHARE } from "./Video Tools/SHARE.svg";
import { ReactComponent as CLIP } from "./Video Tools/CLIP.svg";
import { ReactComponent as SAVE } from "./Video Tools/SAVE.svg";

import { useParams } from "react-router-dom";

const Video_one = () => {

  let param=useParams()
  
  const myvideo=Videos.filter((el)=>el.id===param.videoid)
  console.log(myvideo)
  return (
    <div className="flex flex-row justify-between  overflow-y-auto w[100%] px-14 pt-6">
      <div>
        <div className="w-[716px] h-[403px]">
         <video src={myvideo[0].video_link} controls className="w-[100%] h-[100%]" /> 
        </div>
        
        <h1 className="text-white mt-6">Title</h1>

        <div className="flex flex-row justify-between">
          <span className="text-neutral-400">view . time </span>

        <div className="flex flex-row">
        <button className="text-white mx-3 flex flex-row"><LIKE className="w-6 h-6 fill-white"/> &nbsp;LIKE</button>
        {/* <button className="w-3"><LIKE2 className="w-6 h-6 fill-white"/></button> */}
        <button className="text-white  mx-3 flex flex-row"><DISLIKE className="w-6 h-6 fill-white"/>&nbsp;DISLIKE</button>
        {/* <button className="w-3"><DISLIKE2 className="w-6 h-6 fill-white"/></button> */}
        <button className="text-white  mx-3 flex flex-row"><SHARE className="w-6 h-6 fill-white"/>&nbsp;SHARE</button>
        <button className="text-white mx-3 flex flex-row"><CLIP className="w-6 h-6 fill-white"/>&nbsp;CLIP</button>
        <button className="text-white  mx-3 flex flex-row"><SAVE className="w-6 h-6 fill-white"/>&nbsp;SAVE</button>
        <button className="text-white mx-3 text-2xl flex items-center"><EllipsisOutlined/></button>
          </div>
        </div>
        
      </div>

      <div className="flex flex-col pt-2 ml-6 w-[475px]">
        {Videos.map((props) => {
          return (
            <NavLink to={`/one/${props.id}`}>
              <div className="group flex flex-row mr-2 my-1 h-[94px] w-[401] ">
                <img className="w-[168px] pr-2" src={props.link}></img>
          <div className=" w-[200px] flex flex-col text-white">
          
          
            <h4 className="text-white">{props.title} </h4>
            <p className="text-neutral-400 mb-0">{props.pagename} <CheckCircleFilled className=""/></p>
            <span className="text-neutral-400">{props.view} views . {props.time} ago</span>
          </div>
          
          <div className="text-neutral-900 group-hover:text-white">
              <button>
          <EllipsisOutlined rotate={90} className=" text-lg h-4 w-4"/>
          </button>
          </div>

              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Video_one