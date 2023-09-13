import Container from '@/components/Container'
import Hero from '@/components/Hero'
import FeatureBlock from '@/components/FeatureBlock'
import Waterfall from '@/components/Waterfall'
import FAQ from '@/components/FAQ'
import Partners from '@/components/Partners'
import Pricing from '@/components/Pricing'


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
    heroes (filters: { Page: { eq: "home" }}) {
      data {
        attributes {
          Page
          FontColor
          Title
          Subtitle
          CTA
          CTA_Text
          CTA_Link
        }
      }
    }
  }
`

const getFeatures = `
  query Features {
    featureBlocks (filters: { Page: { eq: "home" }}) {
      data {
        id
        attributes {
          Title
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
    stepsBlocks (filters: { Page: { eq: "home" }}) {
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

const getFAQ = `
  query FAQ {
    faqBlocks {
      data {
        id
        attributes {
          Title
          QuestionResponse {
            id
            Question
            Response
          }
        }
      }
    }
  }
`

const getPartners = `
  query Partners {
    partners {
      data {
        attributes {
          Name
          Link
          Logo {
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
  const features = await fetchAPI(getFeatures)
  const faq = await fetchAPI(getFAQ)
  const steps = await fetchAPI(getSteps)
  const partners = await fetchAPI(getPartners)

  return (
    <Container>
      <Hero
        page={hero?.data?.heroes?.data[0]?.attributes?.Page}
        color={hero?.data?.heroes?.data[0]?.attributes?.FontColor}
        title={hero?.data?.heroes?.data[0]?.attributes?.Title}
        subtitle={hero?.data?.heroes?.data[0]?.attributes?.Subtitle}
        cta={hero?.data?.heroes?.data[0]?.attributes?.CTA}
        cta_content={hero?.data?.heroes?.data[0]?.attributes?.CTA_Text}
        cta_href={hero?.data?.heroes?.data[0]?.attributes?.CTA_Link}
      />
      {features?.data?.featureBlocks?.data.map((
        item: {
          id: string,
          attributes: {
            Title: string,
            Feature: { id: string, Title: string, Description: string }[],
            Image: { data: { attributes: { provider: string, url: string, alternativeText: string } } }
          }
        },
        i: number) =>
        <FeatureBlock
          key={item?.id}
          title={item?.attributes?.Title}
          subtitle=''
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
      <Pricing />
      {faq?.data?.faqBlocks?.data.map((
        item: {
          id: string,
          attributes: {
            Title: string,
            QuestionResponse: { id: string, Question: string, Response: string }[],
          }
        }) =>
        <FAQ
          key={item?.id}
          title={item?.attributes?.Title}
          quiz={item?.attributes?.QuestionResponse}
        />
      )}
      <Partners
        title="Our Partners"
        partners={partners?.data.partners.data}
      />
    </Container>

  )
}
