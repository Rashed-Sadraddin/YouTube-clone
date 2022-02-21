import { NavLink } from "react-router-dom";
import { ReactComponent as Home } from "../Home.svg";
import { ReactComponent as Explore } from "../Explore.svg";
import { ReactComponent as Explore2 } from "../Explore2.svg";
import { ReactComponent as Shorts } from "../Shorts.svg";
import { ReactComponent as Shorts2 } from "../Shorts2.svg";
import { ReactComponent as Subscription } from "../Subscription.svg";
import { ReactComponent as Subscription2 } from "../Subscription2.svg";
import { ReactComponent as Library } from "../Library.svg";
import { ReactComponent as Library2 } from "../Library2.svg";

export const Links = () => {
  return (
    <div className="flex flex-col [557px] w-[70px] h-full bg-neutral-800">
      {/* <Link to={"/home"}>home</Link> */}

      <NavLink to="/" className="hover:bg-neutral-700">
        {({ isActive }) =>
          isActive ? (
            <div className="flex flex-col">
              <Home className=" fill-white stroke-white h-6  mx-auto mt-3.5" />
              <p className="mt-1 mb-5 mx-auto text-[10px] text-white">Home</p>
            </div>
          ) : (
            <div className="flex flex-col">
              <Home className="fill-transparent stroke-white stroke-1 h-6 mx-auto mt-3.5" />
              <p className="mt-1 mb-5 mx-auto text-[10px] text-white">Home</p>
            </div>
          )
        }
      </NavLink>
      <NavLink to="/Explore" className="hover:bg-neutral-700">
        {({ isActive }) =>
          isActive ? (
            <div className="flex flex-col">
              <Explore2 className="fill-white h-6  mt-2 mx-auto" />
              <p className="mt-1 mb-5 mx-auto text-[10px] text-white">
                Explore
              </p>
            </div>
          ) : (
            <div className="flex flex-col">
              <Explore className="fill-transparent stroke-white  h-6 mx-auto mt-2" />
              <p className="mt-1 mb-5 mx-auto text-[10px] text-white">
                Explore
              </p>
            </div>
          )
        }
      </NavLink>
      <NavLink to="/Shorts" className="hover:bg-neutral-700">
        {({ isActive }) =>
          isActive ? (
            <div className="flex flex-col">
              <Shorts2 className="fill-white  h-6 mx-auto mt-2" />
              <p className="mt-1 mb-5 mx-auto text-[10px] text-white">Shorts</p>
            </div>
          ) : (
            <div className="flex flex-col">
              <Shorts className="fill-transparent stroke-white stroke-1 h-6 mx-auto mt-2" />
              <p className="mt-1 mb-5 mx-auto text-[10px] text-white">Shorts</p>
            </div>
          )
        }
      </NavLink>
      <NavLink to="/Subscription" className="hover:bg-neutral-700">
        {({ isActive }) =>
          isActive ? (
            <div className="flex flex-col">
              <Subscription2 className="fill-white h-6 mx-auto mt-2" />
              <p className="mt-1 mb-5 mx-auto text-[10px] text-white">
                Subscriptions
              </p>
            </div>
          ) : (
            <div className="flex flex-col">
              <Subscription className="fill-transparent stroke-white stroke-1 h-6 mx-auto mt-2" />
              <p className="mt-1 mb-5 mx-auto text-[10px] text-white">
                Subscriptions
              </p>
            </div>
          )
        }
      </NavLink>
      <NavLink to="/Library" className="hover:bg-neutral-700">
        {({ isActive }) =>
          isActive ? (
            <div className="flex flex-col">
              <Library2 className="fill-white h-6 mx-auto mt-2" />
              <p className="mt-1 mb-5 mx-auto text-[10px] text-white">
                Library
              </p>
            </div>
          ) : (
            <div className="flex flex-col">
              <Library className="fill-transparent stroke-white stroke-1 h-6 mx-auto mt-2" />
              <p className="mt-1 mb-5 mx-auto text-[10px] text-white">
                Library
              </p>
            </div>
          )
        }
      </NavLink>
    </div>
  );
};
export default Links;
