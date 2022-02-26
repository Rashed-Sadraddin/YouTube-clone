import { NavLink } from "react-router-dom";
import { ReactComponent as Home } from "./sidebar/Home.svg";
import { ReactComponent as Explore } from "./sidebar/Explore.svg";
import { ReactComponent as Explore2 } from "./sidebar/Explore2.svg";
import { ReactComponent as Shorts } from "./sidebar/Shorts.svg";
import { ReactComponent as Shorts2 } from "./sidebar/Shorts2.svg";
import { ReactComponent as Subscription } from "./sidebar/Subscription.svg";
import { ReactComponent as Subscription2 } from "./sidebar/Subscription2.svg";
import { ReactComponent as Library } from "./sidebar/Library.svg";
import { ReactComponent as Library2 } from "./sidebar/Library2.svg";
import { ReactComponent as Main_logo } from "../main-logo.svg";
import {MenuOutlined} from "@ant-design/icons";


const Menu_bar = (props) => {
  return (
    <div
      onClick={props.menu_bar_fcn}
      className="menu   absolute top-0 right-0 w-screen h-screen"
    >
      <div className="bg-neutral-800 text-white absolute top-0 left-0 w-60 h-[100%]">
        <div className="flex flex-row justify-around text-white p-2 mb-4">
          <MenuOutlined className="text-xl ml-1 my-auto text-white" />
          <NavLink className="" to="/">
            <Main_logo className=" w-[92px] h-8 mr-12  fill-white " />
          </NavLink>
        </div>

        <div className="flex flex-col  w-[95%] h-[89.5%] bg-neutral-800 ">
          {/* <Link to={"/home"}>home</Link> */}

          <NavLink to="/" className="hover:bg-neutral-700">
            {({ isActive }) =>
              isActive ? (
                <div className="flex flex-row items-center p-2 bg-neutral-700">
                  <Home className=" fill-white stroke-white h-6 ml-4 mr-6 " />
                  <p className="font-bold  text-[13px] my-auto text-white ">
                    Home
                  </p>
                </div>
              ) : (
                <div className="flex flex-row items-center p-2">
                  <Home className="fill-transparent stroke-white stroke-1 h-6 ml-4 mr-6" />
                  <p className="font-bold  text-[13px] text-white my-auto">
                    Home
                  </p>
                </div>
              )
            }
          </NavLink>
          <NavLink to="/Explore" className="hover:bg-neutral-700">
            {({ isActive }) =>
              isActive ? (
                <div className="flex flex-row items-center  p-2 bg-neutral-700">
                  <Explore2 className="fill-white h-6  ml-4 mr-6" />
                  <p className="font-bold  text-[13px] my-auto text-white">
                    Explore
                  </p>
                </div>
              ) : (
                <div className="flex flex-row items-center  p-2">
                  <Explore className="fill-transparent stroke-white  h-6  ml-4 mr-6" />
                  <p className="font-bold  text-[13px] my-auto text-white">
                    Explore
                  </p>
                </div>
              )
            }
          </NavLink>
          <NavLink to="/Shorts" className="hover:bg-neutral-700">
            {({ isActive }) =>
              isActive ? (
                <div className="flex flex-row items-center  p-2 bg-neutral-700">
                  <Shorts2 className="fill-white  h-6 ml-4 mr-6" />
                  <p className="font-bold  text-[13px] my-auto text-white">
                    Shorts
                  </p>
                </div>
              ) : (
                <div className="flex flex-row items-center  p-2">
                  <Shorts className="fill-transparent stroke-white stroke-1 h-6  ml-4 mr-6" />
                  <p className="font-bold  text-[13px] my-auto text-white">
                    Shorts
                  </p>
                </div>
              )
            }
          </NavLink>
          <NavLink to="/Subscription" className="hover:bg-neutral-700">
            {({ isActive }) =>
              isActive ? (
                <div className="flex flex-row items-center  p-2 bg-neutral-700">
                  <Subscription2 className="fill-white h-6  ml-4 mr-6" />
                  <p className="font-bold  text-[13px] my-auto text-white">
                    Subscriptions
                  </p>
                </div>
              ) : (
                <div className="flex flex-row items-center  p-2">
                  <Subscription className="fill-transparent stroke-white stroke-1 h-6  ml-4 mr-6" />
                  <p className="font-bold  text-[13px] my-auto text-white">
                    Subscriptions
                  </p>
                </div>
              )
            }
          </NavLink>
          <div className="border-y-[1.5px] border-solid border-neutral-600 mt-3 pt-3">
            <NavLink to="/Library" className="hover:bg-neutral-700">
              {({ isActive }) =>
                isActive ? (
                  <div className="flex flex-row items-center  p-2 bg-neutral-700">
                    <Library2 className="fill-white h-6  ml-4 mr-6" />
                    <p className="font-bold  text-[13px] my-auto text-white">
                      Library
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-row items-center  p-2">
                    <Library className="fill-transparent stroke-white stroke-1 h-6  ml-4 mr-6" />
                    <p className="font-bold  text-[13px] my-auto text-white">
                      Library
                    </p>
                  </div>
                )
              }
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu_bar



