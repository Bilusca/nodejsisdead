import { StatusBadge } from "~/components/StatusBadge";

async function useNodeStatus() {
  const response = await fetch('https://status.nodejs.org/api/v2/status.json', { cache: 'no-cache' });
  const data = await response.json()

  return data
}

export async function CheckStatus() {
  const data = await useNodeStatus()

  return (
    <h3 className="text-2xl font-bold text-neutral-50">
      <StatusBadge status={data.status.indicator} />
      {data.status.description}
    </h3>
  )
}