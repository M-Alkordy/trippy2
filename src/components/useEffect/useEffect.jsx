import { useEffect, useRef, useState } from "react";
import ChangeCount from "../ChangeCount/ChangeCount";


const Effect = () => {
/* 
    useEffect(() => {
        console.log(count)
    }, []);
    const test = useRef()
    console.log(test.current)
    const x = useRef(0) */
    const [count, setcount] = useState(0);
  return (
    <div>
        <ChangeCount count = {setcount}  />
        <p>{count}</p>
    </div>
  )
}

export default Effect