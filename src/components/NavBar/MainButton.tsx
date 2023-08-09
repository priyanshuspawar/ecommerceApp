
interface props{
    title: string;
    buttonImg: string;
}


const MainButton = (props:props) => {
  return (
    <div className={"flex gap-2 flex-row items-center cursor-pointer hover:text-[#FF5C4C]"}>
        
        <img src={props?.buttonImg} className="aspect-square h-6"/>
        <p className="text-xl font-medium">{props?.title}</p>
    </div>
  )
}

export default MainButton