
interface props{
    title:string;
}

const CapsuleButton2 = (props:props) => {
  return (
    <div className=" w-40 h-16 hover:bg-[#003D29] bg-black items-center justify-center font-bold text-xl text-white flex rounded-full">
        <p>{props.title}</p>
    </div>
  )
}

export default CapsuleButton2