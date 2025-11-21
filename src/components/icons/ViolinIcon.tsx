import * as React from "react"

export function ViolinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
        <path d="M7.5 10.5a2.5 2.5 0 0 0-5 0c0 1.667 1.667 3.333 2.5 4.167S6.25 18 7.5 18s1.667-2.5 2.5-3.333S12.5 12 12.5 10a2.5 2.5 0 0 0-5 0Z" />
        <path d="M12.5 10a2.5 2.5 0 0 1 5 0c0 1.667-1.667 3.333-2.5 4.167S13.75 18 12.5 18s-1.667-2.5-2.5-3.333S7.5 12 7.5 10" />
        <path d="M10 10c0-2.5 1.667-5 2.5-5 .833 0 2.5 2.5 2.5 5" />
        <path d="m11.5 15.5 8-8" />
        <path d="M13.833 3.333A2.5 2.5 0 0 1 12.5 2a2.5 2.5 0 0 1-1.333 1.333" />
        <path d="M19.5 7.5a2.5 2.5 0 0 1-1.333-1.333A2.5 2.5 0 0 1 19.5 7.5Z" />
        <path d="M11 19.5a1.667 1.667 0 0 1-1.667 1.667A1.667 1.667 0 0 1 7.667 19.5" />
    </svg>
  )
}