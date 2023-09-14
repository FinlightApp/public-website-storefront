import Container from '@/components/Container'
import Hero from '@/components/Hero'
import TeamCard from '@/components/TeamCard'

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
    heroes (filters: { Page: { eq: "team" }}) {
      data {
        attributes {
          Page
          Title
          Title_Font_Color
          Subtitle
          Subtitle_Font_Color
          CTA
        }
      }
    }
  }
`

const getTeam = `
  query Team {
    teamMembers {
      data {
        attributes {
          Member {
            id
            Order
            Name
            Role
            LinkedIn
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
  }
`

export default async function Home() {

  const hero = await fetchAPI(getHero)
  const team = await fetchAPI(getTeam)

  return (
    <Container>
      <Hero
        page={hero?.data?.heroes?.data[0]?.attributes?.Page}
        title={hero?.data?.heroes?.data[0]?.attributes?.Title}
        titleColor={hero?.data?.heroes?.data[0]?.attributes?.Title_Font_Color}
        subtitle={hero?.data?.heroes?.data[0]?.attributes?.Subtitle}
        subtitleColor={hero?.data?.heroes?.data[0]?.attributes?.Subtitle_Font_Color}
        cta={hero?.data?.heroes?.data[0]?.attributes?.CTA}
      />
      <div className='flex flex-wrap flex-row justify-center py-12 gap-8'>
        {team?.data?.teamMembers?.data.map((
          item: {
            attributes: {
              Member: {
                id: number,
                Order: number,
                Name: string,
                Role: string,
                LinkedIn: string,
                Image: { data: { attributes: { provider: string, url: string, alternativeText: string } } }
              }
            }
          }) =>
            <TeamCard
              key={item.attributes.Member.id}
              order={item.attributes.Member.Order}
              name={item.attributes.Member.Name}
              role={item.attributes.Member.Role}
              link={item.attributes.Member.LinkedIn}
              image={{
                provider: item?.attributes?.Member.Image?.data?.attributes?.provider,
                url: item?.attributes?.Member.Image?.data?.attributes?.url,
                alt: item?.attributes?.Member.Image?.data?.attributes?.alternativeText
              }}
            />
        )}
      </div>
    </Container>

  )
}
