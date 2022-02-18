import { Link, NavLink } from "react-router-dom";
import { StepBackwardOutlined, UpCircleFilled } from "@ant-design/icons";
import { ReactComponent as Home} from "./Home.svg";
import { ReactComponent as Explore } from "./Explore.svg";
import { ReactComponent as Shorts } from "./Shorts.svg";
import { ReactComponent as Subscription } from "./Subscription.svg";
import { ReactComponent as Library } from "./Library.svg";


export const Links = () => {
  return (
    <div className="flex flex-col h-full w-[70px] bg-neutral-800">
      <Link to={"/home"}>home</Link>

      <NavLink to="/2">
        {({ isActive }) =>
          isActive ? (
            <Home className=" fill-white stroke-white h-6" />
          ) : (
            <Home className="fill-transparent stroke-white stroke-1 h-6 " />
          )
        }
      </NavLink>
      <NavLink to="/2">
        {({ isActive }) =>
          isActive ? (
            <Explore className="fill-white stroke-neutral-800 h-6 bg-white rounded-full" />
          ) : (
            <Explore className="fill-transparent stroke-white stroke-1 h-6 " />
          )
        }
      </NavLink>
      <NavLink to="/2">
        {({ isActive }) =>
          isActive ? (
            <Shorts className="fill-white stroke-white h-6" />
          ) : (
            <Shorts className="fill-transparent stroke-white stroke-1 h-6 " />
          )
        }
      </NavLink>
      <NavLink to="/2">
        {({ isActive }) =>
          isActive ? (
            <Subscription className="fill-white stroke-white h-6" />
          ) : (
            <Subscription className="fill-transparent stroke-white stroke-1 h-6 " />
          )
        }
      </NavLink>
      <NavLink to="/2">
        {({ isActive }) =>
          isActive ? (
            <Library className="fill-white stroke-white h-6" />
          ) : (
            <Library className="fill-transparent stroke-white stroke-1 h-6 " />
          )
        }
      </NavLink>
    </div>
  );
};
export default Links;