import React from 'react';

/* // функциональный стиль
function withRainbowFrame(colors) {
  return function(Component) {
    return props => {
      let myJSX = null;
      
      colors.forEach( elem => {
        if (myJSX == null) myJSX = <div style={{border:"solid 5px "+elem, padding:"10px"}}>
                                    <Component {...props} />
                                  </div>;
        else myJSX = <div style={{border:"solid 5px "+elem, padding:"10px"}}>{myJSX}</div>;
      });

      return myJSX;
    }
  }
}
*/

// стрелочная функция
let withRainbowFrame = colors => Component => props => {
  let myJSX = <Component {...props} />;
      
  colors.forEach( (elem, i) => {
    myJSX = <div key={i} style={{border:"solid 5px "+elem, padding:"5px"}}>
              {myJSX}
            </div>;
  });

  return myJSX;
};

export { withRainbowFrame };