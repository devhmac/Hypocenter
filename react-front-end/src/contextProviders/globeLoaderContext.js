import React, { createContext, useState } from 'react';

export const globeLoaderContext = createContext(null);

export function GlobeLoaderProvider(props) {

  const [globeLoaded, setGlobeLoaded] = useState(false);
  const [startSite, setStartSite] = useState(false);

  return (
    <globeLoaderContext.Provider value={{ globeLoaded, setGlobeLoaded, startSite, setStartSite }}>
      {props.children}
    </globeLoaderContext.Provider>
  );
};
