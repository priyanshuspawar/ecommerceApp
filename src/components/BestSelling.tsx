import staples from "../assets/staples.png";
import desimg from "../assets/desimg.png";
import bag from "../assets/bag.png";

const BestSelling = () => {
    const store = {
        bag:bag,
        storeImg:staples,
        title:"Staples",
        category:" Bag • Perfume",
        desImg:desimg,
        description:"Delivery within 24 hours"
    }
    return(
        <div className="   w-80  rounded-xl flex flex-col relative p-2 group ">
            <img src={store.storeImg} className="mx-5 absolute top-[58%] z-10 border-2 border-white rounded-full"/>
            <div className="flex overflow-hidden rounded-xl mb-12 ">
            <img src={store.bag} className="  w-full rounded-xl  group-hover:rotate-3 transition transform-gpu  duration-300 group-hover:scale-125 ease-in "/>
            </div>
            <p className="font-bold text-lg mx-5">{store.title}</p>
            <p className="mx-5 text-[#4D4D4D] text-sm ">{store.category}</p>
            <div className="flex flex-row mx-5 my-2">
                <img src={store.desImg} className="h-3 w-3 my-1"/>
                <p className="mx-2 text-[#CE689A] text-xs">{store.description}</p>
            </div>
        </div>
    )

}
export default BestSelling