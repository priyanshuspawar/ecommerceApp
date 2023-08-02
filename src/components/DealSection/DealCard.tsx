
interface props{
    title:string;
    discount:string;
    currency:string;
    imgPath:string;
    bgColor:string;
    textColor:string;

}



const DealCard = (props:props) => {
  return (
    <div className="w-96 h-[475px] flex flex-col group rounded-xl overflow-hidden">

        <div className="h-[50%] p-10" style={{backgroundColor:props.bgColor}}>
            <p className="font-bold text-[#333333] mb-2 text-2xl">Save</p>
                <div className="flex gap-1 mb-4" style={{color:props.textColor}}>
                    <p className="font-bold text-4xl">$</p>
                    <p className="font-bold text-6xl">{props.discount}</p>
                </div>
                <p className="font-medium text-lg" >{props.title}</p>
                </div>
        <div className="h-[50%] overflow-hidden">
            <img src={props.imgPath} className="group-hover:scale-125 transition transform-gpu  duration-[130] delay-75 ease-linear" width={"100%"} height={"100%"}/>

        </div>
    </div>
  )
}

export default DealCard