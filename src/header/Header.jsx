import {ReactComponent as Main_logo } from "./main-logo.svg";
import { ReactComponent as Search_logo } from "./search-logo.svg";
import { NavLink } from "react-router-dom";
import { MenuOutlined, AudioFilled , BellOutlined ,AppstoreOutlined,VideoCameraAddOutlined} from "@ant-design/icons";
import "antd/dist/antd.css";
import { useState } from "react";
import Profile from "./header component/Profile";
import Notification from "./header component/Notification";
import TV from "./header component/TV";
import Upload from "./header component/Upload";
import Microphone from "./header component/Microphone";
import Menu_bar from "./header component/Menu_bar";


const Header=()=>{

const [profile,set_profile]=useState(false)
const profile_fcn =()=>{set_profile(!profile);
  set_menu_bar(false);set_microphone(false);
  set_notification(false);set_tv(false);set_upload(false)}

const [notification,set_notification]=useState(false)
const notification_fcn =()=>{set_notification(!notification);
set_menu_bar(false);set_microphone(false);set_profile(false);
set_tv(false);set_upload(false);}

const [tv,set_tv]=useState(false)
const tv_fcn =()=>{set_tv(!tv);
set_menu_bar(false);set_microphone(false);set_notification(false);
set_profile(false);set_upload(false);}

const [upload,set_upload]=useState(false)
const upload_fcn =()=>{set_upload(!upload);
set_menu_bar(false);set_microphone(false);
set_notification(false);set_tv(false);set_profile(false);}


const [microphone,set_microphone]=useState(false)
const microphone_fcn =()=>{set_microphone(!microphone);
set_menu_bar(false);set_profile(false);
set_notification(false);set_tv(false);set_upload(false);}

const [menu_bar,set_menu_bar]=useState(false)
const menu_bar_fcn =()=>{set_menu_bar(!menu_bar);
set_profile(false);set_microphone(false);
set_notification(false);set_tv(false);set_upload(false);}


    return (
      <div className="bg-neutral-800  w-full h-[10.3%] flex flex-row justify-between items-center p-2">
        <div className="flex flex-row justify-around text-white mr-9">
          <MenuOutlined onClick={menu_bar_fcn} className="text-xl mx-4 my-auto text-white" />
          <NavLink className="" to="/">
            <Main_logo className=" w-[92px] h-8 mx-2  fill-white" />
          </NavLink>
          {menu_bar && (<Menu_bar menu_bar_fcn={menu_bar_fcn}/>)}
        </div>
        <div className=" flex flex-row justify-around w-[55%] h-10 text-white">
          <input
            type="text"
            o
            placeholder="Search"
            className="outline-none w-full h-full my-auto bg-neutral-900 text-neutral-400 text-base px-4 border-solid border-neutral-700 border"
          />
          <button>
            <Search_logo className=" w-16 h-full  text-2xl my-auto p-2 fill-white bg-neutral-700" />
          </button>
          <AudioFilled onClick={microphone_fcn} className="  text-xl mx-2 my-auto rounded-full p-2.5 bg-neutral-900" />
          {microphone && (<Microphone microphone_fcn={microphone_fcn}/>)}
        </div>
        <div className="flex flex-row justify-around text-white mr-6 relative">
          <VideoCameraAddOutlined onClick={upload_fcn} className="  text-xl mx-4 my-auto" />
          <AppstoreOutlined onClick={tv_fcn} className="  text-xl mx-4 my-auto" />
          <BellOutlined onClick={notification_fcn} className="  text-2xl mx-4 my-auto" />
          {/* <TrademarkCircleOutlined className="  text-2xl mx-4 my-auto" /> */}
          <button onClick={profile_fcn}>
            <img
              id="img"
              className="w-9 h-8 text-xl mx-4 my-auto rounded-full"
              alt="Avatar image"
              src="https://pixfeeds.com/images/hair-care/men/1280-492496186-senior-business-man.jpg"
            ></img>
          </button>
          {profile && <Profile profile_fcn={profile_fcn}/>}
          {notification && <Notification notification_fcn={notification_fcn}/>}
          {tv && <TV />}
          {upload && <Upload />}
          
        </div>
      </div>
    );}

export default Header