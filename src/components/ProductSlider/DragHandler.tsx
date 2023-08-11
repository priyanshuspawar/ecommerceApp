import { useState, RefObject, useEffect } from "react";

export function DragHandler(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (!ref.current) return;
    
    

    const handlePointerMove = ({ clientX,offsetY}: MouseEvent) => {
      
      const left = ref.current?.getBoundingClientRect().left;

      
      if(left){
        
        const x = clientX - left;
        const y = offsetY;
        setPoint({ x, y });
  
      }

    };



  
    // window.addEventListener("pointermove", handlePointerMove);
    ref.current?.addEventListener("pointermove", handlePointerMove);
    

    return () => {ref.current?.removeEventListener("pointermove", handlePointerMove)
    
    setPoint({x:0,y:0})
  };
  }, [ref]);

  return point;
}
