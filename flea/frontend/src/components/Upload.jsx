import { React, useRef } from "react";
import reactLogo from '../assets/react.svg'

// import {ReactLogo} from '../assets/react.svg';

export const Upload = (props) => {
  const myRef = useRef(null);

  function handleClick() {
    myRef.current.click();
  }


  return (
    <div className="menu_box">
        <a className="btn btn_clMain_common btn_service_order" data-turbo="false" href="/seller">
        <img src={reactLogo} alt="React logo" />
            
            出品する
        </a>
    </div>
  );
};
