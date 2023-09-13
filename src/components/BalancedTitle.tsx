'use client'

import { ComponentProps, ReactNode } from "react"
import Balancer from "react-wrap-balancer"
import { twMerge } from "tailwind-merge"

type BalancedTitleProps = ComponentProps<'h1'> & {
  children: ReactNode | string
}

export function BalancedTitle({ children, className }: BalancedTitleProps) {
  return (
    <h1 className={twMerge('text-3xl md:text-5xl lg:text-6xl text-neutral-50 font-extrabold', className)}>
      <Balancer className="inline-block">{children}</Balancer>
    </h1>
  )
}