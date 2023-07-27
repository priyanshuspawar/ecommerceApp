import { categories } from "../../constans"
import CategoryTile from "./CategoryTile"

const index = () => {
  return (
    <div className="w-full flex flex-col py-10">
        <p className="font-bold text-lg">Shop Our Top Categories</p>
        <div className="flex flex-row gap-12">
        {categories.map((e)=>{return(
            <CategoryTile title={e.title} backdrop={e.backdrop}/>
        )})}
        </div>
    </div>
  )
}

export default index