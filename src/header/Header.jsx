import {ReactComponent as Main_logo } from "./main-logo.svg";
import { ReactComponent as Search_logo } from "./search-logo.svg";
import {TrademarkCircleOutlined, MenuOutlined, AudioOutlined, BellOutlined ,AppstoreOutlined,VideoCameraAddOutlined} from "@ant-design/icons";
import "antd/dist/antd.css";

const Header=()=>{

    return (
      <div className=" bg-slate-700 w-full h-full flex flex-row justify-between p-2">
        <div className="flex flex-row justify-around">
          <MenuOutlined className="text-xl mx-4 my-auto" />
          <Main_logo className=" w-[92px] h-8 mx-2 my-auto" />
        </div>
        <div className="flex flex-row justify-around w-3/6 h-10">
          <input type="text" className=" w-full h-full my-auto" />
          <button>
            <Search_logo className=" w-14 h-full border text-3xl my-auto p-1.5" />
          </button>
          <AudioOutlined className=" border text-2xl mx-2 my-auto rounded-full p-1.5" />
        </div>
        <div className="flex flex-row justify-around">
          <VideoCameraAddOutlined className="  text-2xl mx-4 my-auto" />
          <AppstoreOutlined className="  text-2xl mx-4 my-auto" />
          <BellOutlined className="  text-2xl mx-4 my-auto" />
          <TrademarkCircleOutlined className="  text-2xl mx-4 my-auto" />
        </div>
      </div>
    );}

export default Header