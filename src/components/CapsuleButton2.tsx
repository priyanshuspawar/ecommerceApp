interface props {
  title: string;
  className?: string;
}

const CapsuleButton2 = ({
  title,
  className = " w-40 h-16 hover:bg-[#003D29] bg-black items-center justify-center font-bold text-xl text-white flex rounded-full",
}: props) => {
  return (
    <div className={className}>
      <p>{title}</p>
    </div>
  );
};

export default CapsuleButton2;
