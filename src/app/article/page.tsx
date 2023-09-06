import { useRouter } from 'next/navigation'
import Container from '@/components/Container'



async function fetchAPI(query: string) {
  const host = process.env["GRAPHQL_HOST"] ?? ""
  const res = await fetch(host, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const getHero = `
  query Hero {
    heroes (filters: { Page: { eq: "spotlight" }}) {
      data {
        attributes {
          Page
          Version
          Title
          Subtitle
          CTA
        }
      }
    }
  }
`

export default async function Home() {

    const router = useRouter()
  const hero = await fetchAPI(getHero)

  return (
    <Container>
      <p>
        ici
      </p>
        {JSON.stringify(router.query.slug)}
    </Container>

  )
}
