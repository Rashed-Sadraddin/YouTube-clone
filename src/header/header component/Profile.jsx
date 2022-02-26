
const Profile = (props) => {
  return (
    <div onClick={props.profile_fcn} className=" absolute top-[-10px] right-0 w-screen h-[600px]">
      <div className="bg-neutral-900 text-white border-x-[1.5px] border-solid border-neutral-800 absolute top-[6px] right-16 w-60 h-96">
        profile
      </div>
    </div>
  );
}

export default Profile