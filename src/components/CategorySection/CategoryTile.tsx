interface props{
    title: string;
    backdrop: string;
}



const CategoryTile = (props:props) => {
  return (
    
    <div className="flex overflow-hidden flex-grow rounded-2xl group justify-center relative">
       <p className="absolute z-10 text-white top-4 text-xl font-semibold">{props?.title}</p> 
       <img src={props?.backdrop} className="group-hover:scale-125 transition transform-gpu duration-200 ease-in object-fill"
       width={"100%"} height={"100%"} 
       />
    </div>
  )
}

export default CategoryTile