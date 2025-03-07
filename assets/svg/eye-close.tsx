import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EyeCloseIcon(props: any) {
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
        d="M18.237 15.116a19.456 19.456 0 001.951-2.05c.388-.472.582-.707.582-1.066 0-.359-.194-.594-.582-1.066C18.768 9.21 15.636 6 12 6c-.84 0-1.652.171-2.423.456l2.547 2.547a3 3 0 012.873 2.873l3.24 3.24zm-8.844-4.602a3 3 0 004.093 4.092l2.301 2.303C14.636 17.555 13.353 18 12 18c-3.636 0-6.768-3.21-8.188-4.934-.388-.472-.582-.707-.582-1.066 0-.359.194-.594.582-1.066.673-.817 1.732-1.97 3.046-2.954l2.535 2.534z"
        fill="#33363F"
      />
      <Path d="M5 2l16 16" stroke="#33363F" strokeWidth={2} />
    </Svg>
  )
}

export default EyeCloseIcon
