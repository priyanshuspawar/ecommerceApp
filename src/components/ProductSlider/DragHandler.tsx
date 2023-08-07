import { useState, RefObject, useEffect } from "react";

export function DragHandler(ref: RefObject<HTMLElement>,index: number) {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [refresh,setRefresh]=useState(false);
  useEffect(() => {
    if (!ref.current) return;
    
    const initialOffsetTop = ref.current?.offsetTop;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const left = ref.current?.getBoundingClientRect().left;
      
      if(left){
        const element = ref.current!;
        const x = clientX - left;
        const y = clientY - initialOffsetTop - element.offsetHeight / 2;
        setPoint({ x, y });

      }

    };

  
    ref.current?.addEventListener("pointermove", handlePointerMove);
    

    return () => {ref.current?.removeEventListener("pointermove", handlePointerMove)
    
    setPoint({x:0,y:0})
  };
  }, [ref,refresh]);

  return point;
}
