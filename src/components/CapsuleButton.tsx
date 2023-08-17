interface props{
  borderEnable?:Boolean;
  title?:string;
  width?:string;
  height?:string;
}
const CapsuleButton = ({title="Learn More",borderEnable=false,width="45%",height}:props) => {
  return (
    <div>
        <p className={"flex hover:bg-black py-2 cursor-pointer  justify-center rounded-full  bg-[#003D29]   text-white  font-semibold items-center text-base "+`${borderEnable?"border-[1px] border-white hover:border-transparent":""}`}
        
          style={{width:width,height:height}}
        >{title}</p>
    </div>
  )
}

export default CapsuleButton