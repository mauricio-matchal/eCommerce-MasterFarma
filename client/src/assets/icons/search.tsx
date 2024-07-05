import * as React from "react"

function SvgComponent() {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 24a11.001 11.001 0 100-22.002A11.001 11.001 0 0013 24zm13-11a13 13 0 11-26 0 13 13 0 0126 0z"
        fill="#053947"
      />
      <path
        d="M20.689 23.485c.058.08.123.156.195.23l7.7 7.7a2 2 0 102.83-2.828l-7.7-7.7a1.99 1.99 0 00-.23-.2 12.998 12.998 0 01-2.796 2.8v-.002z"
        fill="#053947"
      />
    </svg>
  )
}

export default SvgComponent
