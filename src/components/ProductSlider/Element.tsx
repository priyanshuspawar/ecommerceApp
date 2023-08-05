


import { useEffect, useRef } from "react";

interface props{
    i:number
    change:(event:MouseEvent)=>void
    changeEnter:()=>void
}

const Element = () => {
    const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref}
      className="border-2 cursor-none w-80 bg-slate-600 h-64 overflow-hidden self-center flex-shrink-0"
    >
      <p>jj</p>
    </div>
  )
}

export default Element