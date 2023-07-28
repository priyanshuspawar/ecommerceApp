
interface props{
    title: string;
    buttonImg: string;
}


const MainButton = (props:props) => {
  return (
    <div className={"flex gap-2 flex-row items-center cursor-pointer"}>
        
        <img src={props?.buttonImg} className="aspect-square h-6"/>
        <p>{props?.title}</p>
    </div>
  )
}

export default MainButton