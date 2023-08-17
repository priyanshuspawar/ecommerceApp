import HeadBar from "../../components/HeadBar";
import ImageSlider from "../../components/ImageSlider";
import RatingStars from "../../components/RatingStars";
import { productsDetails } from "../../constans";
import { useEffect, useRef, useState } from "react";
import ProductSlider from "../../components/ProductSlider";
import {
  TruckIcon,
  ArrowPathIcon,
  PlusSmallIcon,
  MinusSmallIcon,
} from "@heroicons/react/24/outline";
import ProductScreenNavBar from "../../components/ProductScreenNavBar";
import NavBar from "../../components/NavBar";
import ImageViewer from "../../components/ImageViewer";
import CapsuleButton from "../../components/CapsuleButton";
import AddToCartButton from "../../components/AddToCartButton";
const index = () => {
  const product = productsDetails[0];
  const [counter, setCounter] = useState(1);
  const isNonMobileScreen = useState(window.innerWidth > 800)[0];
  const ref = useRef<HTMLDivElement>(null);
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const GeneralSpecs = product.Specifications.General;

  const initialState = product.variants.map((_v, i) => {
    if (i === 0) return { id: i, active: true };
    return { id: i, active: false };
  });
  const [activeVariant, setActiveVariant] = useState(initialState);

  const setRef = (e: any) => {
    setSwiperRef(e);
  };
  useEffect(() => {}, []);

  const onClickPlus = () => {
    setCounter(counter + 1);
  };
  const onClickMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
 
  return (
    <div ref={ref} className="w-screen overflow-x-hidden">
      <HeadBar />
      <ProductScreenNavBar />
      {isNonMobileScreen && <NavBar onClick={() => {}} />}
      <div className="w-screen flex-col items-center my-2 hidden lg:flex">
        <div className="flex w-[88%] font-normal text-xs text-slate-900 whitespace-break-spaces">
          <p className="">Electronics / Audio / Headphones /</p>
          <p className="font-bold"> Airpods Max</p>
        </div>
      </div>
      {/* image and details */}
      <div>
      <div className="flex flex-col items-center ">
        <div className="flex flex-col lg:w-[95%] lg:flex-row justify-evenly">
          <div className="flex flex-col lg:w-[45%]  flex-shrink-0 overflow-hidden w-screen mb-2">
            <ImageSlider setRef={setRef} />
            <ImageViewer variants={product.variants} onClick={(e:number)=>{swiperRef.slideTo(e)}}/>
          </div>
          {/* product description, rating and price */}
          <div className="w-screen flex flex-col items-center lg:w-[45%] xl:justify-evenly">
            <div className="w-[95%] gap-y-4 flex flex-col mb-2 lg:w-[100%]">
              <p className="text-2xl font-semibold xl:text-3xl xl:mb-1">{product.title}</p>
              <div className="flex flex-col gap-y-1 xl:mb-6">
                <p className="text-xs xl:text-sm line-clamp-3 lg:line-clamp-none my-2 font-medium">
                  {product.description}
                </p>
                <RatingStars ratedUsers={500} rating={4.5} />
              </div>
              <div className="flex flex-col xl:gap-y-1">
                <p className="font-semibold text-xl xl:text-2xl"> {product.price} </p>
                <p className="font-light text-[9px] xl:text-xs">
                  {" "}
                  Suggested Payment with 6 months special financing{" "}
                </p>
              </div>
            </div>

            {/* colours and vairants */}
            <div className="w-full flex flex-col items-center my-4">
              <p className="mobileSectionTitle mb-2 lg:w-[100%]">Choose a color</p>
              <div className="grid grid-cols-2 gap-3 w-[95%] lg:flex lg:w-[100%]">
                {product.variants.map((vairant, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        let newArr = product.variants.map((_e, i) => {
                          if (i == index) {
                            return { id: i, active: true };
                          }
                          return { id: i, active: false };
                        });

                        setActiveVariant(newArr);
                        swiperRef.slideTo(index);
                      }}
                      className={
                        "p-4 flex flex-col justify-center items-center border-[1px] gap-y-2 rounded-xl lg:rounded-full overflow-hidden lg:p-1 cursor-pointer"
                      }
                      style={
                        activeVariant[index].active
                          ? { borderColor: "#003D29" }
                          : {
                              borderColor: isNonMobileScreen
                                ? "transparent"
                                : "#8B8B8B",
                            }
                      }
                    >
                      <div className="flex flex-col w-10 h-10 rounded-full overflow-hidden">
                        <div
                          className="w-full flex flex-grow"
                          style={{ backgroundColor: vairant.color[0] }}
                        />
                        <div
                          className="w-full flex flex-grow"
                          style={{ backgroundColor: vairant.color[1] }}
                        />
                      </div>
                      <p className="text-xs lg:hidden">{vairant.subTitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* perks */}
            <div className="w-screen lg:w-[100%] flex flex-col items-center my-4">
              <div className="w-[95%] border-2 border-gray-100 p-4 gap-y-3 flex flex-col lg:w-[100%]">
                <div className="flex items-center gap-2">
                  <TruckIcon className="text-[#E3A073] w-4 h-4" />
                  <div>
                    <p className="text-base font-medium">Free Delivery</p>
                    <p className="text-xs underline font-light">
                      Enter your postal code for delivery availability
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <ArrowPathIcon className="text-[#E3A073] w-4 h-4" />
                  <div>
                    <p className="text-base font-medium">Easy Returns</p>
                    <div className="flex gap-x-1">
                      <p className="text-xs font-light">
                        Free 30 Days Returns.
                      </p>
                      <p className="text-xs font-light underline">Details</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* buy now and add to cart desktop */}
            <div className="w-[95%] gap-y-4 lg:flex flex-col hidden">
              <div className="hidden lg:flex w-[95%] gap-x-8 items-center">
                <div className="bg-[#F9F9F9] flex gap-x-4 rounded-full items-center px-5 py-2">
                  <PlusSmallIcon
                    className="w-6 h-6 text-[#003D29] cursor-pointer"
                    onClick={onClickPlus}
                  />
                  <p className="text-[#003D29] font-medium text-xl select-none">
                    {counter}
                  </p>
                  <MinusSmallIcon
                    className="w-6 h-6 text-[#003D29] cursor-pointer"
                    onClick={onClickMinus}
                  />
                </div>
                <div className="text-xs">
                  <div className="flex">
                    <p className=" whitespace-break-spaces">Only </p>
                    <p className="text-orange-300 font-bold">
                      {12 + " items left!"}
                    </p>
                  </div>
                  Don't miss it
                </div>
              </div>
              <div className="flex gap-x-7 xl:my-4 lg:my-2">
                <CapsuleButton title="Buy Now" width="150px" />
                <AddToCartButton
                  width="150px"
                  color="#003D29"
                  hoverEnable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*specs  */}
      <div className="w-screen flex flex-col items-center gap-y-5 my-4">
        <p className="font-bold text-lg w-[95%] lg:w-[88%]">
          {product.title} Full Specifications
        </p>
        <div className="w-[95%] grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-[88%]">
          <div className="bg-gray-200 flex flex-col rounded-md overflow-hidden">
            <div className="flex flex-col w-full p-4 gap-y-2">
              <p className="text-base font-semibold">General</p>
              <div className="flex flex-col w-full gap-y-4 ">
                {Object.keys(product.Specifications.General).map((key, i) => (
                  <div
                    key={i}
                    className="flex bg-white rounded-md px-3 py-1 items-center w-full justify-between"
                  >
                    <p className="text-sm font-medium">{key}</p>
                    <p className="text-xs">
                      {GeneralSpecs[key as keyof typeof GeneralSpecs]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gray-200 flex flex-col rounded-md overflow-hidden">
            <div className="flex flex-col w-full p-4 gap-y-2">
              <p className="text-base font-semibold">Product Detials</p>
              <div className="flex flex-col w-full gap-y-4 ">
                {Object.keys(product.Specifications.ProductDetails).map(
                  (key, i) => (
                    <div
                      key={i}
                      className="flex bg-white rounded-md px-3 py-1 items-center w-full justify-between"
                    >
                      <p className="text-sm font-medium">{key}</p>
                      <p className="text-xs">
                        {
                          product.Specifications.ProductDetails[
                            key as keyof typeof product.Specifications.ProductDetails
                          ]
                        }
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-screen lg:flex flex-col items-center">
      <div className="lg:w-[88%] w-screen">
        <ProductSlider title="Similar items you might like" />
      </div>
      </div>
</div>
      {/* buy now and add to card */}
      <div className="mt-20" />
      <div className="flex lg:hidden border-none z-50 fixed bottom-0 w-screen bg-[#F6F6F6] h-[8%]">
        <p className="flex flex-grow text-base font-semibold justify-center items-center">
          Add to cart
        </p>
        <p
          className="flex flex-grow justify-center items-center
            bg-[#003D29] text-white text-base font-semibold
            "
        >
          Buy Now
        </p>
      </div>
    </div>
  );
};

export default index;
