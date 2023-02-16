import React from "react";

const rainbowColors = [
    /* colors here */
  ];
  const paletteSize = rainbowColors.length;
  
  const useRainbow = ({ intervalDelay = 2000 }) => {
    // Register all custom properties.
    // This only ever needs to be done once, so there are no dependencies.
    React.useEffect(() => {
      for (let i = 0; i < 3; i++) {
        try {
          CSS.registerProperty({
            name: `--magic-rainbow-color-${i}`,
            initialValue: rainbowColors[i],
            syntax: '<color>',
            inherits: false,
          });
        } catch (err) {
          console.log(err);
        }
      }
    }, []);
    // Get an ever-incrementing number from another custom hook*
    const intervalCount = useIncrementingNumber(intervalDelay);
    // Using that interval count, derive each current color value
    return {
      '--magic-rainbow-color-0': rainbowColors[(intervalCount + 1) % paletteSize],
      '--magic-rainbow-color-1': rainbowColors[(intervalCount + 2) % paletteSize],
      '--magic-rainbow-color-2': rainbowColors[(intervalCount + 3) % paletteSize],
    };
  };
  export default useRainbow;