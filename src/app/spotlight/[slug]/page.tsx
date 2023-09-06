import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import CSS from 'csstype'

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

export default async function Page({ params }: { params: { slug: string } }) {

  const imageStyle: CSS.Properties = {
      objectFit: "cover",
      width: "80%",
      maxHeight:"25rem",
      marginRight: "auto",
      marginLeft: "auto",
      borderRadius: "1.5rem"
  }

  const getPost = `
    query Post {
      posts (filters: {Slug : { eq: "${params.slug}" }}) {
          data {
          attributes {
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
            Content
          }
        }
      }
    }
  `

  const post = await fetchAPI(getPost)
  const title = post?.data?.posts?.data[0]?.attributes.Title
  const image = {
      provider: post?.data?.posts?.data[0]?.attributes.Image?.data?.attributes?.provider,
      url: post?.data?.posts?.data[0]?.attributes.Image?.data?.attributes?.url,
      alt: post?.data?.posts?.data[0]?.attributes.Image?.data?.attributes?.alternativeText,
  }
  const content = post?.data?.posts?.data[0]?.attributes.Content

    return(
        <Container>
            <header
            className="
                relative
                pt-8 pb-80
            "
            >
            <div
                className={`
                flex
                flex-col
                justify-center items-center
                p-24
                gap-12
                rounded-3xl
                bg-purple-700
                `}
            >
                {title &&
                <h1
                    className={`
                    text-7xl font-bold leading-[5.625rem]
                    text-center
                    text-purple-50
                    `}
                >
                    {title}
                </h1>
                }
            </div>
                <div
                className="
                    absolute
                    inset-x-0 bottom-0
                    flex
                    justify-center
                    z-10
                "
                >
                    <div className="w-8/12 h-96 relative rounded-3xl overflow-hidden">
                        <Image
                            src={`${process.env["BACKEND_HOST"] ?? ""}${image.url}`}
                            alt={image.alt}
                            style={{objectFit: "cover"}}
                            fill
                            loading="lazy"
                        />
                    </div>
                </div>
            </header>
            <div className="flex flex-row py-12">
                <div className="flex-2" />
                <div className="flex-8 flex flex-col gap-10">
                    {title && 
                        <h2 className='text-3xl font-semibold leading-9 text-gray-900'>
                            {title}
                        </h2>
                    }
                    <ReactMarkdown
                        className='text-lg text-gray-600 flex flex-col gap-8'
                        components={{
                            h2: ({node, ...props}) => <h2 className='text-3xl font-semibold leading-9 text-gray-900' {...props} />,
                            h3: ({node, ...props}) => <h3 className='text-2xl font-semibold leading-9 text-gray-900' {...props} />,
                            ol: ({node, ...props}) => <ol className='list-decimal list-inside px-4' {...props} />,
                            ul: ({node, ...props}) => <ol className='list-disc list-inside px-4' {...props} />,
                            li: ({node, ...props}) => <li className='pb-4' {...props} />,
                            img: ({node, ...props}) => <Image alt={props.alt} src={`${process.env["BACKEND_HOST"] ?? ""}${props.src}`} width={1800} height={1200} style={{objectFit: "cover",width: "80%",maxHeight:"25rem",marginRight: "auto",marginLeft: "auto",borderRadius: "1.5rem"}} loading="lazy" />,
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
                <div className="flex-2" />
            </div>
        </Container>
    )
}