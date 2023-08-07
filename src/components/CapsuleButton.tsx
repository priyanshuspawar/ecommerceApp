interface props{
  borderEnable?:Boolean;
  
}
const CapsuleButton = ({borderEnable=false}:props) => {
  return (
    <div>
        <p className={"flex hover:bg-black   justify-center rounded-full  bg-[#003D29]  py-4 px-5  text-white  font-bold items-center w-44 text-lg "+`${borderEnable?"border-2 border-white hover:border-transparent":""}`}>Learn More</p>
    </div>
  )
}

export default CapsuleButton