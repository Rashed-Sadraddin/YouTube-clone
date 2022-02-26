import React from 'react'

const Notification = (props) => {
  return (
    <div
      onClick={props.notification_fcn}
      className=" absolute top-[-10px] right-0 w-screen h-[600px] "
    >
      <div className="bg-neutral-900 text-white border-x border-solid  border-neutral-600 absolute top-[6px] right-28 w-96 h-96">
        Notification
      </div>
    </div>
  );
}

export default Notification