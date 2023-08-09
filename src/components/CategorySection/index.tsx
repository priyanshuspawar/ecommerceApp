import { categories } from "../../constans"
import CategoryTile from "./CategoryTile"

const index = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-8">
        <p className="font-bold text-3xl mb-10 w-[85%] flex h-fit">Shop Our Top Categories</p>
        <div className="flex justify-center w-full">
        <div className="flex flex-row w-[85%] gap-x-7">
        {categories.map((e)=>{return(
            <CategoryTile title={e.title} backdrop={e.backdrop}/>
        )})}
        </div>
        </div>
    </div>
  )
}

export default index