import { Payment, footer } from "../constans";


const Footer=()=>{
    return(
        
        <div>
            
        <div className="flex flex-row  gap-20 mt-10   mx-36">
            <div>
            <img src="src/assets/shopcart.png" className="mb-9" />
            {footer.ShopCart.map(e=>{
                return(
                    
                    
                    <p className="flex my-2  hover:text-[#ff5c4c]  hover:translate-x-4 transition transform-gpu duratin-300 ease-in">{e}</p> 
                )
            })
            }
            </div>
            <div>
            <p className="font-bold text-xl mb-6"> Department</p>
            {footer.Department.map(e=>{
                return(
                    <p className="flex my-2  hover:text-[#ff5c4c]  hover:translate-x-4 transition transform-gpu duratin-300 ease-in">{e}</p> 
                )
            })
            }
            </div>
            <div>
            <p className="font-bold text-xl mb-6"> About Us</p>
            {footer["About Us"].map(e=>{
                return(
                    <p className="flex my-2  hover:text-[#ff5c4c]  hover:translate-x-4 transition transform-gpu duratin-300 ease-in">{e}</p> 
                )
            })
            }
            </div>
            <div>
            <p className="font-bold text-xl mb-6"> Services</p>
            {footer.Services.map(e=>{
                return(
                    <p className="flex my-2 hover:text-[#ff5c4c]  hover:translate-x-4 transition transform-gpu duratin-300 ease-in">{e}</p> 
                )
            })
            }
            </div>
            <div>
            <p className="font-bold text-xl mb-6"> Help</p>
            {footer.Help.map(e=>{
                return(
                    <p className="flex my-2 hover:text-[#ff5c4c]  hover:translate-x-4 transition transform-gpu duratin-300 ease-in">{e}</p> 
                )
            })
            }
            </div>
            </div>



            <div>
            <p className="font-bold text-xl mb-6"> Accepted Payments</p>
            <div className="grid grid-cols-4 " >           
            {Payment.map(e=>{
                return(
                    
                    <img src={e.Img} className="border border-[#d1d4d4]  rounded" height="50px" />
                    
                )
            })
            }</div>
            </div>




            </div>
        
    )

}
export default Footer