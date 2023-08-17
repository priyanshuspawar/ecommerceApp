
interface props {
  variants: { id: number; subTitle: string; color: string[]; image: string }[];
  onClick: (e: number) => void;

}

const ImageViewer = (props: props) => {
  return (
    <div className="lg:flex w-[94%] gap-x-4 hidden">
      {props.variants.map((variant, index) => {
        return (
          <div
            className="flex justify-center bg-[#F6F6F6] cursor-pointer"
            key={index}
            onClick={() => {
              
              props.onClick(index);
            }}
          >
            <img
              src={variant.image}
              width={"80%"}
              height={"80%"}
              className="object-contain"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageViewer;
