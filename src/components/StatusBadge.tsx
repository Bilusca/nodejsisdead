'use client'

import { twMerge } from "tailwind-merge"

export function StatusBadge({ status }: { status: string }) {
  const statuses: { [key: string]: string } = {
    none: 'bg-emerald-500 shadow shadow-emerald-500/80'
  }

  const className = Object.keys(statuses).includes(status) ? statuses[status] : 'bg-neutral-500 shadow shadow-neutral-500/80'

  return (
    <div className={twMerge("w-5 h-5 rounded-full inline-block mr-4", className)}>
    </div>
  )
}