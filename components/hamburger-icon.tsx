"use client"

interface HamburgerIconProps {
  checked: boolean
}

const HamburgerIcon = ({ checked }: HamburgerIconProps) => {
  return (
    <div className="relative w-10 h-[30px] bg-transparent block">
      {/* Top line */}
      <span
        className={`
          block absolute h-1 w-full bg-white rounded-full left-0 origin-left
          transition-all duration-250 ease-in-out
          ${checked ? "rotate-45 top-[14px] left-[5px]" : "top-0"}
        `}
      />
      {/* Middle line */}
      <span
        className={`
          block absolute h-1 w-full bg-white rounded-full left-0 origin-left
          transition-all duration-250 ease-in-out
          ${checked ? "w-0 opacity-0" : "top-1/2 -translate-y-1/2"}
        `}
      />
      {/* Bottom line */}
      <span
        className={`
          block absolute h-1 w-full bg-white rounded-full left-0 origin-left
          transition-all duration-250 ease-in-out
          ${checked ? "-rotate-45 top-[14px] left-[5px]" : "bottom-0"}
        `}
      />
    </div>
  )
}

export default HamburgerIcon
