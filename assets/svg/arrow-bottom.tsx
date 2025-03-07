import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowBottomIcon(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18 9l-6 6-6-6" stroke="#ffffff" />
    </Svg>
  );
}

export default ArrowBottomIcon;
