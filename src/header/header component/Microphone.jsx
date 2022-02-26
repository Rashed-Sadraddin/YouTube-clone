import React from 'react'

const Microphone = (props) => {
  return (
    <div onClick={props.microphone_fcn} className="box   absolute top-0 right-0 w-screen h-screen">
      <div className="mic_box w-[45%] h-[60%] text-white absolute top-2 inset-x-80">
        Microphone
      </div>
    </div>
  );
}

export default Microphone