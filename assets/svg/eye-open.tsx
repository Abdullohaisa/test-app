import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EyeOpenIcon(props: any) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.77 12c0-.359-.194-.594-.582-1.066C18.768 9.21 15.636 6 12 6c-3.636 0-6.768 3.21-8.188 4.934-.388.472-.582.707-.582 1.066 0 .359.194.594.582 1.066C5.232 14.79 8.364 18 12 18c3.636 0 6.768-3.21 8.188-4.934.388-.472.582-.707.582-1.066zM12 15a3 3 0 100-6 3 3 0 000 6z"
        fill="#33363F"
      />
    </Svg>
  )
}

export default EyeOpenIcon
