interface props{
    title: string;
    backdrop: string;
}



const CategoryTile = (props:props) => {
  return (
    
    <div className="flex group justify-center overflow-hidden rounded-xl">
       <p className="absolute z-10 text-white mt-6 text-2xl font-semibold">{props?.title}</p> 
       <img src={props?.backdrop} className="group-hover:scale-125 transition transform-gpu duration-100 ease-in "/>
    </div>
  )
}

export default CategoryTile