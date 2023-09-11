import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Waterfall from '@/components/Waterfall'
import FeatureBlock from '@/components/FeatureBlock'
import CTA from '@/components/CTA'


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

const getFeatures = `
  query Features {
    featureBlocks (filters: { Page: { eq: "general-partners" }}) {
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
    stepsBlocks (filters: { Page: { eq: "general-partners" }}) {
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

export default async function GeneralPartners() {

  const features = await fetchAPI(getFeatures)
  const steps = await fetchAPI(getSteps)
  console.log(steps)

  return (
    <Container>
      <Hero
        page="distributors"
        version="minimal"
        title="Fund Structuring Services & VC Fund Management Software for GPs"
        subtitle=""
        cta={false}
      />
      {features?.data?.featureBlocks?.data.slice(0,1).map((
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
      <CTA
        title='Open the door to US10bn+ in assets.'
      />

      {steps?.data?.stepsBlocks?.data.slice(1).map((
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
          bigger={true}
        />
      )}
      <CTA
        title='Ready to Dorhyo?'
      />
      {features?.data?.featureBlocks?.data.slice(0,-1).map((
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
          reverse={Boolean(i%2)}
          features={item?.attributes?.Feature}
          image={{
            provider: item?.attributes?.Image?.data?.attributes?.provider,
            url: item?.attributes?.Image?.data?.attributes?.url,
            alt: item?.attributes?.Image?.data?.attributes?.alternativeText
          }}
        />
      )}
      {steps?.data?.stepsBlocks?.data.slice(0,-1).map((
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
          bigger={true}
        />
      )}
      <CTA
        title='Ready to optimise your fund management?'
      />
      {features?.data?.featureBlocks?.data.slice(-1).map((
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
          reverse={Boolean(i%2)}
          features={item?.attributes?.Feature}
          image={{
            provider: item?.attributes?.Image?.data?.attributes?.provider,
            url: item?.attributes?.Image?.data?.attributes?.url,
            alt: item?.attributes?.Image?.data?.attributes?.alternativeText
          }}
        />
      )}
    </Container>
  )
}
