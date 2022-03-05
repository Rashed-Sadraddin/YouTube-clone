import Video1 from "../b.mp4";
import Videos from "../Videos";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CheckCircleFilled, EllipsisOutlined,BellOutlined ,BellFilled } from "@ant-design/icons";
import { ReactComponent as LIKE } from "./Video Tools/LIKE.svg";
import { ReactComponent as LIKE2 } from "./Video Tools/LIKE2.svg";
import { ReactComponent as DISLIKE } from "./Video Tools/DISLIKE.svg";
import { ReactComponent as DISLIKE2 } from "./Video Tools/DISLIKE2.svg";
import { ReactComponent as SHARE } from "./Video Tools/SHARE.svg";
import { ReactComponent as CLIP } from "./Video Tools/CLIP.svg";
import { ReactComponent as SAVE } from "./Video Tools/SAVE.svg";

import { useParams } from "react-router-dom";

const Video_one = () => {

const[a,b]=useState(true);
const change=()=>{b(!a);d(true)}

const[c,d]=useState(true);
const change2=()=>{d(!c)}


  let param=useParams()
  
  const myvideo=Videos.filter((el)=>el.id===param.videoid)
  console.log(myvideo)
  return (
    <div className="flex flex-row justify-between  overflow-y-auto w[100%] px-14 pt-6">
      <div>
        <div className="w-[716px] h-[403px]">
         <video src={myvideo[0].video_link} controls autoPlay className="w-[100%] h-[100%]" /> 
        </div>
        
        <h1 className="text-white mt-6">{myvideo[0].title}</h1>

        <div className="flex flex-row justify-between">
          <span className="text-neutral-400">{myvideo[0].view} views . {myvideo[0].time} ago </span>

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

        <div className="flex flex-row border-y-[1.5px] border-neutral-800 border-solid py-5 my-5 items-center justify-between">
          <div className="flex flex-row items-center"><img className="float-left w-12 h-12 rounded-full mr-4 " src={myvideo[0].pagepic}></img>
         <h1 className="text-white text-[15px] ">{myvideo[0].pagename} &nbsp; <CheckCircleFilled /></h1></div>
          <div className="flex flex-row items-center">
           <button className="flex flex-row items-center" onClick={change}>{a?<h1 className="bg-[#e40000] text-white py-1.5 px-4 rounded-sm float-right mx-3">SUBSCRIBE</h1>:
            <><h1 className="bg-neutral-800 text-white py-1.5 px-4 rounded-sm float-right mx-3">SUBSCRIBED</h1></>}</button> 
            {a?<></>:<button onClick={change2}>{c?<h1 className="text-white"><BellOutlined className="text-2xl"/></h1>:
            <h1 className="text-white"><BellFilled className="text-2xl"/></h1>}</button>}
          </div>
    
        </div>
      
      </div>

      

      <div className="flex flex-col pt-2 ml-6 w-[475px]">
        {Videos.map((props) => {
          return (
            <NavLink to={`/one/${props.id}`}>
              <div className="group flex flex-row mr-2 my-1 h-[94px] w-[401] ">
                <video className="w-[168px] pr-2" src={props.video_link}/>
          <div className=" w-[200px] flex flex-col text-white">
          
          
            <h4 className="text-white h-12 overflow-hidden">{props.title} </h4>
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