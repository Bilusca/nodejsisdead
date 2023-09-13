import Balancer from "react-wrap-balancer"
import { BunLogo } from "./BunLogo"

export function BalancedTitle() {
  return (
    <h1 className={'text-3xl md:text-5xl lg:text-6xl text-neutral-50 font-extrabold text-center leading-[1.35]'}>
      <Balancer className="inline-block">
        After the new
        <span className="text-[#f6dece] mx-4 relative inline-block underline-style">
          <BunLogo className="inline" />
          <span className="[text-shadow:5px_5px_0px_#000000]">BUN</span>
        </span>
        major release, this site will check if {' '}
        <span className="text-emerald-600 relative underline-style">Node.JS</span>
        {' '}is dead!
      </Balancer>
    </h1>
  )
}