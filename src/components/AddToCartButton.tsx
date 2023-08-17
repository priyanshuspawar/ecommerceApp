
interface props{
  width?:string;
  color?:string;
  hoverEnable?:Boolean;
}
const AddToCartButton = ({width:w,color,hoverEnable=true}:props) => {
  const isNonMobileScreen = window.innerWidth>=1024;
  const width=isNonMobileScreen?w:"90%";
  return (
    <div className={(hoverEnable?"group hover:bg-[#003D29] hover:border-transparent":"")+"bg-white border-[#231F1E] border-2  transition-colors transform-gpu duration-100 flex justify-center items-center cursor-pointer p-1 rounded-3xl"}
    style={{borderColor:color,width}}
    >
        <p className="font-semibold text-base group-hover:text-white text-[#231F1E]" style={{color:color}}>Add to cart</p>
    </div>
  )
}

export default AddToCartButton