import { categories } from "../../constans"
import CategoryTile from "./CategoryTile"

const index = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-8">
        <p className="font-bold text-2xl mb-5 w-[90%] flex h-fit">Shop Our Top Categories</p>
        <div className="flex justify-center w-full">
        <div className="grid grid-cols-2  w-[90%] gap-7">
        {categories.map((e,index)=>{return(
          <div key={index}>
            <CategoryTile title={e.title} backdrop={e.backdrop}/>
            </div>
        )})}
        </div>
        </div>
    </div>
  )
}

export default index