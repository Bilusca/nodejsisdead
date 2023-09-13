import { BalancedTitle } from "~/components/BalancedTitle";
import { BunLogo } from '~/components/BunLogo'
import { CheckStatus } from "./CheckStatus";



export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10 relative">
      <BalancedTitle className="text-center leading-[1.35]">
        After the new
        <span className="text-[#f6dece] mx-4 relative inline-block underline-style">
          <BunLogo className="inline" />
          <span className="[text-shadow:5px_5px_0px_#000000]">BUN</span>
        </span>
        major release, this site will check if {' '}
        <span className="text-emerald-600 relative underline-style">Node.JS</span>
        {' '}is dead!
      </BalancedTitle>

      <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral-50 font-extrabold">
        Is {' '}
        <span className="text-emerald-600">Node.JS</span> {' '}
        dead? {' '}
      </h2>

      <CheckStatus />

      <footer className="absolute bottom-0 text-lg flex py-10 items-center justify-center text-neutral-50">
        <span>created by{' '}<a className="text-emerald-500 hover:text-emerald-700 transition-colors" href="https://www.linkedin.com/in/lucas-assis-vieira/" target="_blank">Lucas Vieira</a></span>
      </footer>
    </main>
  )
}
