import Image from 'next/image'
import Link from 'next/link'

import Container from '@/components/Container'
import Hero from '@/components/Hero'

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

const getPosts = `
  query Posts {
    posts (pagination: { limit: 100 }) {
    	data {
        id
        attributes {
          Slug
          Title
          Image {
            data {
              attributes {
                provider
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`

export default async function Home() {

  const hero = await fetchAPI(getHero)
  const posts = await fetchAPI(getPosts)

  return (
    <Container>
      <Hero
        page={hero?.data?.heroes?.data[0]?.attributes?.Page}
        version={hero?.data?.heroes?.data[0]?.attributes?.Version}
        title={hero?.data?.heroes?.data[0]?.attributes?.Title}
        subtitle={hero?.data?.heroes?.data[0]?.attributes?.Subtitle}
        cta={hero?.data?.heroes?.data[0]?.attributes?.CTA}
      />
      <div className='flex flex-row flex-wrap justify-center py-12 gap-8'>
        {posts?.data?.posts?.data.map((
          item: {
            id: string,
            attributes: {
              Slug: string,
              Title: string,
              Image: { data: { attributes: { provider: string, url: string, alternativeText: string } } }
              Content: string,
            }
          }) =>
          <Link
            key={item.id}
            href={`/spotlight/${item.attributes.Slug}`}
            className='flex flex-col rounded-lg overflow-hidden h-96 w-[20rem] drop-shadow-sm border border-gray-300'
          >
            <div className="flex-1 relative max-h-60">
              <Image
                src={`${process.env["BACKEND_HOST"]}${item.attributes.Image.data.attributes.url}`}
                alt={item.attributes.Image.data.attributes.alternativeText}
                style={{objectFit: "cover"}}
                fill
                loading="lazy"
              />
            </div>
            <div className='flex flex-col p-6 gap-2'>
              <h3 className='text-xl font-semibold leading-7 text-gray-900'>
                {item.attributes.Title}
              </h3>
            </div>
          </Link>
        )}
      </div>
    </Container>

  )
}
