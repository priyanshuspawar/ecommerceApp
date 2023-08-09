import { useState } from "react";

interface props {
  title: string;
  isClicked:Boolean;
  onClick:any;

}

const GenreButton = ({ title,isClicked,onClick }: props) => {
  
  console.log(isClicked);
  return (
    <div
      className={"border-[1px] border-slate-200 flex items-center justify-center text-base font-medium rounded-full px-4 py-4 cursor-pointer" } style={isClicked?{backgroundColor:"#003d29",color:"white"}:{backgroundColor:"white",color:"black"}}
            onClick={onClick}
    >
      <p>{title}</p>
    </div>
  );
};



export default GenreButton
