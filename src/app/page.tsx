import { BalancedTitle } from "~/components/BalancedTitle";
import { BunLogo } from '~/components/BunLogo'
import { CheckStatus } from "./CheckStatus";
import { Provider } from "react-wrap-balancer";



export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10 relative">
      <BalancedTitle />

      <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral-50 font-extrabold text-center">
        Is {' '}
        <span className="text-emerald-600">Node.JS</span> {' '}
        dead? {' '}
      </h2>

      <CheckStatus />

      <footer className="absolute bottom-0 text-lg flex py-10 items-center justify-center text-neutral-50">
        <span>created by{' '}<a className="text-emerald-500 hover:text-emerald-700 transition-colors text-center" href="https://www.linkedin.com/in/lucas-assis-vieira/" target="_blank">Lucas Vieira</a></span>
      </footer>
    </main>
  )
}
