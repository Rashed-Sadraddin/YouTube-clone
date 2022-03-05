import React from 'react'
import Videos from '../../Videos/Videos';
const Notification = (props) => {
  return (
    <div
      onClick={props.notification_fcn}
      className="z-50 absolute top-[-10px] right-0 w-screen h-[600px] "
    >
      <div className=" flex flex-col bg-neutral-900 text-white border-x border-solid 
       border-neutral-600 absolute top-[6px] right-28 w-[500px] h-[100%] overflow-y-auto">
        Notification
        {Videos.map((props)=>{return(
        <div className='flex flex-row items-center'>
        <img className='w-14 h-14 rounded-full m-4' src={props.pagepic}></img>
        <div className='w-[250px] h-10 flex items-center'>{props.title}</div>
        <video className='w-20 h-20' src={props.video_link}/>
        </div>)})}
      </div>
    </div>
  );
}

export default Notification