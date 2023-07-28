interface props{
    title: string;
    backdrop: string;
}



const CategoryTile = (props:props) => {
  return (
    
    <div className="flex group justify-center overflow-hidden">
       <p className="absolute z-10">{props?.title}</p> 
       <img src={props?.backdrop} className="group-hover:scale-125 transition transform-gpu duration-100 ease-in "/>
    </div>
  )
}

export default CategoryTile