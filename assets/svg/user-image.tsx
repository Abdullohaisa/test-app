import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function UserImage(props: any) {
  return (
    <Svg
      width={54}
      height={54}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={12}
        cy={12}
        r={10}
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M7.881 15.756c.493.427 1.142.735 1.842.937A8.308 8.308 0 0012 17c.786 0 1.57-.103 2.277-.307.7-.202 1.35-.51 1.842-.937"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Circle
        cx={9}
        cy={10}
        r={1.25}
        fill="#ffff"
        stroke="#ffff"
        strokeWidth={0.5}
        strokeLinecap="round"
      />
      <Circle
        cx={15}
        cy={10}
        r={1.25}
        fill="#ffff"
        stroke="#ffff"
        strokeWidth={0.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default UserImage;
