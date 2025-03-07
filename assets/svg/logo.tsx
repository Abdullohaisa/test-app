import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LogoIcon(props: any) {
  return (
    <Svg
      style={{ alignSelf: "center" }}
      width={150}
      height={150}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7 14.333c0-1.246 0-1.869.268-2.333A2 2 0 018 11.268C8.464 11 9.087 11 10.333 11h3.334c1.246 0 1.869 0 2.333.268.304.175.556.428.732.732.268.464.268 1.087.268 2.333V16c0 .93 0 1.394-.077 1.78a4 4 0 01-3.143 3.143C13.394 21 12.93 21 12 21v0c-.93 0-1.394 0-1.78-.077a4 4 0 01-3.143-3.143C7 17.394 7 16.93 7 16v-1.667zM9 9c0-.932 0-1.398.152-1.765a2 2 0 011.083-1.083C10.602 6 11.068 6 12 6v0c.932 0 1.398 0 1.765.152a2 2 0 011.083 1.083C15 7.602 15 8.068 15 9v2H9V9zM12 11v4M15 3l-2 3M9 3l2 3M7 16H2M22 16h-5M20 9v1a3 3 0 01-3 3v0M20 22v0a3 3 0 00-3-3v0M4 9v1a3 3 0 003 3v0M4 22v0a3 3 0 013-3v0"
        stroke="#ffffff"
      />
    </Svg>
  );
}

export default LogoIcon;
