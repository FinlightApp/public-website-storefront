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

const getSteps_1 = `
  query Steps {
    stepsBlock (id: 2) {
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

const getFeatures = `
  query Features {
    featureBlocks (filters: { Page: { eq: "distributors" }}) {
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

const getSteps_2 = `
  query Steps {
    stepsBlock (id: 3) {
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


export default async function PrivacyPolicy() {

  const features = await fetchAPI(getFeatures)
  const steps_1 = await fetchAPI(getSteps_1)
  const steps_2 = await fetchAPI(getSteps_2)

  return (
    <Container>
      <Hero
        page="distributors"
        title="Investment Platforms and Distributors"
        subtitle=""
        cta={false}
      />
      <Waterfall
        key={steps_1?.data?.stepsBlock?.data?.id}
        title={steps_1?.data?.stepsBlock?.data?.attributes?.Title}
        steps={steps_1?.data?.stepsBlock?.data?.attributes?.Step}
        bigger={true}
      />
      <CTA
        title='Grow revenue with a comprehensive range of VC opportunities that meet regulatory standards.'
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
      <Waterfall
        key={steps_2?.data?.stepsBlock?.data?.id}
        title={steps_2?.data?.stepsBlock?.data?.attributes?.Title}
        steps={steps_2?.data?.stepsBlock?.data?.attributes?.Step}
        bigger={true}
      />
    </Container>
  )
}
