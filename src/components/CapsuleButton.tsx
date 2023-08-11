interface props{
  borderEnable?:Boolean;
  width?:string;
  height?:string;
}
const CapsuleButton = ({borderEnable=false,width="45%",height}:props) => {
  return (
    <div>
        <p className={"flex hover:bg-black py-2   justify-center rounded-full  bg-[#003D29]   text-white  font-semibold items-center text-base "+`${borderEnable?"border-[1px] border-white hover:border-transparent":""}`}
        
          style={{width:width,height:height}}
        >Learn More</p>
    </div>
  )
}

export default CapsuleButton