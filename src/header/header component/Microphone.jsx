import React from 'react'
import { AudioFilled, CloseOutlined } from "@ant-design/icons";

const Microphone = (props) => {
  return (
    <div
      onClick={props.microphone_fcn}
      className="box   fixed z-40 top-0 right-0 w-screen h-screen"
    >
      <div className="z-50 mic_box w-[45%] h-[60%] text-white absolute top-2 inset-x-80 px-8 py-4">
        <button>
          <h1 className="text-white text-xl ml-[32rem]">
            <CloseOutlined />
          </h1>
        </button>
        <h1 className="text-white text-2xl">Search with your voice</h1>
        <h3 className="text-white">
          To search by voice, go to your browser settings and allow access to
          microphone
        </h3>
        
          <button className="rounded-full bg-neutral-600 p-3 text-white text-3xl w-16 h-16 flex items-center justify-center mx-auto mt-36">
            <AudioFilled />
          </button>
        
      </div>
    </div>
  );
}

export default Microphone