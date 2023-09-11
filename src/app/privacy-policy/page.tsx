import Container from '@/components/Container'
import Hero from '@/components/Hero'
import ReactMarkdown from 'react-markdown'


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

const getContent = `
  query PrivacyPolicy {
    privacyPolicy (id:1) {
      data {
        attributes {
          Content
        }
      }
    }
  }
`

export default async function PrivacyPolicy() {

  const content = await fetchAPI(getContent)

  return (
    <Container>
      <Hero
        page="privacy"
        version="minimal"
        title="Privacy Policy"
        subtitle=""
        cta={false}
      />
      <div className="flex flex-row py-12">
        <div className="flex-2" />
        <div className="flex-8 flex flex-col gap-10">
          <ReactMarkdown
            className='text-lg text-gray-600 flex flex-col gap-8'
            components={{
              h2: ({node, ...props}) => <h2 className='text-3xl font-semibold leading-9 text-gray-900' {...props} />,
              h3: ({node, ...props}) => <h3 className='text-2xl font-semibold leading-9 text-gray-900' {...props} />,
              ol: ({node, ...props}) => <ol className='list-decimal list-inside px-4' {...props} />,
              ul: ({node, ...props}) => <ol className='list-disc list-inside px-4' {...props} />,
              li: ({node, ...props}) => <li className='pb-4' {...props} />,
            }}
          >
            {content?.data?.privacyPolicy?.data?.attributes?.Content}
          </ReactMarkdown>
        </div>
        <div className="flex-2" />
      </div>
    </Container>
  )
}
