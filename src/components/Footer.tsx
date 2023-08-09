import { Payment, footer,Last } from "../constans";


const Footer=()=>{
    return(
        
        <div >
            
        <div className="flex flex-row  gap-20 mt-10   mx-36  border-y border-[#d1d4d4] py-16  mt-28">
            <div>
            <div>
            <div>
            <img src="src/assets/shopcart.png" className="mb-9" />
            {footer.ShopCart.map(e=>{
                return(
                    
                    
                    <p className="flex my-2  ">{e}</p> 
                )
            })
            }
            </div>
            <p className="font-bold text-xl mb-6 mt-10"> Accepted Payments</p>
            <div className="grid grid-cols-4 mr-36 gap-y-2" >           
            {Payment.map(e=>{
                return(
                    <div className="border border-[#d1d4d4]  rounded-md h-11 w-16 flex  items-center justify-center" >
                    <img src={e.Img} />
                    </div>
                )
            })
            }</div>
            </div>
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


             
            <div className="flex flex-row ml-36 mt-10 mb-10  ">
                <div className="flex mr-36 ">
                {Last.map(e=>{
                    return(
                        <div className=" hover:text-[#ff5c4c] flex flex-row mr-10  text-lg gap-2">
                        <img src={e.Img}  />
                        <p>{e.title}</p>
                        </div>
                    )
                })

                }
                </div>
                
                <div className="flex gap-10 mr-36 text-lg">
                    <p className="hover:text-[#ff5c4c]">Terms of Service</p>
                    <p className="hover:text-[#ff5c4c]">Privacy & Policy</p>
                </div>
                
                <p>All Right reserved by Musemind | 2022</p>
                
            </div>



           




            </div>
        
    )

}
export default Footer