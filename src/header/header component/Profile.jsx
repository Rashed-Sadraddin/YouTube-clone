import profilpic from "./sidebar/profilpicture.jpg";

const Profile = (props) => {
  return (
    <div
      onClick={props.profile_fcn}
      className=" absolute top-[-10px] right-0 w-screen h-[600px] flex flex-col"
    >
      <div className="flex flex-row z-50 bg-neutral-900 text-white border-x-[1.5px] border-solid border-neutral-800 absolute top-[6px] right-16 w-80 h-96">
        <div className="p-4">
          <img id="img" className="w-10 h-10 text-xl  rounded-full" alt="Avatar image" src={profilpic}/>
        </div>
         <div className="flex flex-col">
          <h1 className="text-xl text-white mb-0 mt-3" >Reşîd .sedredîn</h1>
              <p className="text-blue-600">Manage your Google Account</p>
           </div>   
      </div>
    </div>
  );
};

export default Profile;
