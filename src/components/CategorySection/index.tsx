import { categories } from "../../constans"
import CategoryTile from "./CategoryTile"

const index = () => {
  return (
    <div className="w-full flex flex-col py-10">
        <p className="font-bold text-3xl mb-10  mt-16 ml-28">Shop Our Top Categories</p>
        <div className="flex flex-row w-full justify-center items-center">
        {categories.map((e)=>{return(
            <CategoryTile title={e.title} backdrop={e.backdrop}/>
        )})}
        </div>
    </div>
  )
}

export default index