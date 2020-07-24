import React from 'react';
import './App.css';
import tiger from "./pics/tiger.gif";
import q from "./pics/q.gif";
import useWebAnimations from "@wellyshen/use-web-animations";
import {Another} from "./Another" 

function App() {

    const { ref } = useWebAnimations({
      keyframes: [
       
        {transform: "translate(180px,220px)"},
        {transform: "translate(180px,220px)"},
  
      ],
      timing: {
       // delay: 500,
        duration: 1000, 
        iterations: Infinity, 
        direction: "alternate", 
        easing: "ease-in-out", 
      },
      // More useful options...
    });
    

   
  return (
    <div>  <Another/>
      <div className="distance" ref={ref}>
      <img src={q} alt="nothing found" className="abc"></img>
      <img src={tiger} alt="nothing found" className="ac" ></img>
      </div>
      </div>
   );
 }























// // function App() {
// //  const elem = useRef(null);
// //  useEffect(() => {
// //   elem.current.focus();
// //  }, [])
// //  return (
// //     <div >
// //       <h1>Hello World!</h1>
// //       <input type="text" ref={elem} />
// //       </div>
// //   );
// // }

 export default App;





