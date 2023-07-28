import staples from "../assets/staples.png";


const ChooseBrand = () => {
    const brand = {
        brandImg: staples,
        title:"Staples",
        description:"Delivery within 24 hours"
    }
  return (
    <div>
        <img src={brand.brandImg}/>
        <p>{brand.title}</p>
    </div>
  )
}

export default ChooseBrand