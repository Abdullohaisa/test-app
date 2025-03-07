import * as React from "react";
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from "react-native-svg";

function HomeIcon(props: any) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor="#697cb2" />
          <Stop offset="100%" stopColor="#0040ff" />
        </LinearGradient>
      </Defs>

      <Path
        d="M5 14.059c0-1.01 0-1.514.222-1.945.221-.43.632-.724 1.453-1.31l4.163-2.974c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601l4.163 2.973c.821.587 1.232.88 1.453 1.311.222.43.222.935.222 1.944V19c0 .943 0 1.414-.293 1.707C18.414 21 17.943 21 17 21H7c-.943 0-1.414 0-1.707-.293C5 20.414 5 19.943 5 19v-4.941z"
        fill="url(#grad)" // Gradient ishlatilgan
        fillOpacity={0.9}
      />
      <Path
        d="M3 12.387c0 .266 0 .4.084.441.084.041.19-.04.4-.205l7.288-5.668c.59-.459.885-.688 1.228-.688.343 0 .638.23 1.228.688l7.288 5.668c.21.164.316.246.4.205.084-.041.084-.175.084-.441v-.409c0-.48 0-.72-.102-.928-.101-.208-.291-.356-.67-.65l-7-5.445c-.59-.459-.885-.688-1.228-.688-.343 0-.638.23-1.228.688l-7 5.444c-.379.295-.569.443-.67.65-.102.209-.102.449-.102.93v.408zM12.5 15h-1a2 2 0 00-2 2v3.85c0 .083.067.15.15.15h4.7a.15.15 0 00.15-.15V17a2 2 0 00-2-2z"
        fill="url(#grad)"
      />
    </Svg>
  );
}

export default HomeIcon;
