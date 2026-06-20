import { fetchHmPlan } from '@/lib/utils/fetchHM'

export default async function Page() {
  const html = await fetchHmPlan()

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html
      }}
    />
  )
}