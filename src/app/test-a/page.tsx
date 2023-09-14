import Container from '@/components/Container'
import Hero from '@/components/Hero'
import FeatureBlock from '@/components/FeatureBlock'
import Waterfall from '@/components/Waterfall'

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
    heroes (filters: { Page: { eq: "test-a" }}) {
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

const getFeatures = `
  query Features {
    featureBlocks (filters: { Page: { eq: "test-a" }}) {
      data {
        id
        attributes {
          Title
          Subtitle
          Feature{
            id
            Title
            Description
          }
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

const getSteps = `
  query Steps {
    stepsBlocks (filters: { Page: { eq: "test-a" }}) {
      data {
        id
        attributes {
          Title
          Step {
            id
            Title
            Description
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
  const features = await fetchAPI(getFeatures)
  const steps = await fetchAPI(getSteps)
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
      {features?.data?.featureBlocks?.data.map((
        item: {
          id: string,
          attributes: {
            Title: string,
            Subtitle: string,
            Feature: { id: string, Title: string, Description: string }[],
            Image: { data: { attributes: { provider: string, url: string, alternativeText: string } } }
          }
        },
        i: number) =>
        <FeatureBlock
          key={item?.id}
          title={item?.attributes?.Title}
          subtitle={item?.attributes?.Subtitle}
          reverse={Boolean(i%2)}
          features={item?.attributes?.Feature}
          image={{
            provider: item?.attributes?.Image?.data?.attributes?.provider,
            url: item?.attributes?.Image?.data?.attributes?.url,
            alt: item?.attributes?.Image?.data?.attributes?.alternativeText
          }}
        />
      )}
      {steps?.data?.stepsBlocks?.data.map((
        item: {
          id: string,
          attributes: {
            Title: string,
            Step: {
              id: string,
              Title: string,
              Description: string,
              Image: { data: { attributes: { provider: string, url: string, alternativeText: string } } }
            }[],
          }
        }) =>
        <Waterfall
          key={item?.id}
          title={item?.attributes?.Title}
          steps={item?.attributes?.Step}
          bigger={false}
        />
      )}
    </Container>

  )
}
