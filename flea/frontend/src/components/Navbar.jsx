import React from "react";
import { Upload } from "./Upload";


export const Navbar = (props) => {
    const { moveHome , refresh} = props;

    return (
        <div className="navbar">
          <h1 className="navbar-header" onClick={moveHome("AllPhotos")}>
            おすすめ
          </h1>
          <Upload refresh={refresh}/>
        </div>
      );
 }