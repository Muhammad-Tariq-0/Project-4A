import React from 'react'
import "./App.css"

import useWebAnimations ,{bounce} from "@wellyshen/use-web-animations";
export const Another = () => {
    const { ref } = useWebAnimations(bounce);
     
    return (
        <div ref={ref}>
          <center>  <h1 className="txt">Loin chasing the Queen</h1></center>
         
        </div>
    )
}
