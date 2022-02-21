import {ReactComponent as Main_logo } from "./main-logo.svg";
import { ReactComponent as Search_logo } from "./search-logo.svg";
import { NavLink } from "react-router-dom";
import { MenuOutlined, AudioFilled , BellOutlined ,AppstoreOutlined,VideoCameraAddOutlined} from "@ant-design/icons";
import "antd/dist/antd.css";


const Header=()=>{

    return (
      <div className="bg-neutral-800  w-full h-[10.3%] flex flex-row justify-between p-2">
        <div className="flex flex-row justify-around text-white mr-9">
          <MenuOutlined className="text-xl mx-4 my-auto text-white" />
          <NavLink className="pt-1.5" to="/">
            <Main_logo className=" w-[92px] h-8 mx-2  fill-white" />
          </NavLink>
        </div>
        <div className="flex flex-row justify-around w-[55%] h-10 text-white">
          <input
            type="text"
            o
            placeholder="Search"
            className="outline-none w-full h-full my-auto bg-neutral-900 text-neutral-400 text-base px-4 border-solid border-neutral-700 border"
          />
          <button>
            <Search_logo className=" w-16 h-full  text-2xl my-auto p-2 fill-white bg-neutral-700" />
          </button>
          <AudioFilled className="  text-xl mx-2 my-auto rounded-full p-2.5 bg-neutral-900" />
        </div>
        <div className="flex flex-row justify-around text-white mr-6">
          <VideoCameraAddOutlined className="  text-xl mx-4 my-auto" />
          <AppstoreOutlined className="  text-xl mx-4 my-auto" />
          <BellOutlined className="  text-2xl mx-4 my-auto" />
          {/* <TrademarkCircleOutlined className="  text-2xl mx-4 my-auto" /> */}
          <img id="img" 
          className=" text-2xl mx-4 my-auto rounded-full" alt="Avatar image" 
          height="32" 
          width="32" 
          src="https://yt3.ggpht.com/yti/APfAmoHzKRVkjvB5toXTAmxa4jFMbp_-T_jqqnN3GJJEbA=s88-c-k-c0x00ffffff-no-rj-mo">
          </img>
        </div>
      </div>
    );}

export default Header