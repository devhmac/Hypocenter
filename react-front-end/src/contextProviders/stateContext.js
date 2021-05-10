import React, { createContext, useState } from 'react';



// export default function StateProvider(props) {
//   const [state, setState] = useState(initPins)

//   const quakeState = state
//   //can set this to take in a quakeID, to render that specific earthquake
//   const setQuakeState = (data) => {
//     setState(data)
//   };

//   return (
//     <stateContext.Provider value={{ quakeState, setQuakeState }}>
//       {props.children}
//     </stateContext.Provider>
//   )
// }

export const stateContext = createContext(null);