import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

export default function FeatureBlock({
  title,
  subtitle,
  reverse,
  features,
  image
}: {
  title: string,
  subtitle: string,
  reverse: boolean
  features: {id: string, Title: string, Description: string}[],
  image: {provider: string, url: string, alt: string}
}) {
  return (
    <section className="flex flex-col px-8 py-16 lg:py-24 gap-16">
      <h2 className="text-3xl lg:text-4xl font-semibold leading-9 lg:leading-10 text-gray-900 text-center">
        {title}
      </h2>
      {subtitle &&
        <ReactMarkdown
          className='text-base font-normal leading-6 text-gray-600 flex flex-col gap-4'
          components={{
              h2: ({node, ...props}) => <h2 className='text-3xl font-semibold leading-9 text-gray-900' {...props} />,
              h3: ({node, ...props}) => <h3 className='text-2xl font-semibold leading-9 text-gray-900' {...props} />,
              ol: ({node, ...props}) => <ol className='list-decimal list-inside px-4' {...props} />,
              ul: ({node, ...props}) => <ol className='list-disc list-inside px-4' {...props} />,
              li: ({node, ...props}) => <li className='pb-4' {...props} />,
              img: ({node, ...props}) => <Image alt={props.alt ?? ""} src={`${process.env["BACKEND_HOST"] ?? ""}${props.src}`} width={1800} height={1200} style={{objectFit: "cover",width: "80%",maxHeight:"25rem",marginRight: "auto",marginLeft: "auto",borderRadius: "1.5rem"}} loading="lazy" />,
          }}
        >
            {subtitle}
        </ReactMarkdown>
      }
      <div className={`flex flex-col-reverse ${reverse ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16`}>
        <div className="flex-1 flex flex-col">
          {features && features.map((feature) => 
            <div
              key={feature.id}
              className="flex flex-col p-6 gap-2">
              <h3 className="text-lg font-semibold leading-7 text-gray-900">
                {feature.Title}
              </h3>
              <ReactMarkdown
                className='text-base font-normal leading-6 text-gray-600 flex flex-col gap-8'
                components={{
                    h2: ({node, ...props}) => <h2 className='text-3xl font-semibold leading-9 text-gray-900' {...props} />,
                    h3: ({node, ...props}) => <h3 className='text-2xl font-semibold leading-9 text-gray-900' {...props} />,
                    ol: ({node, ...props}) => <ol className='list-decimal list-inside px-4' {...props} />,
                    ul: ({node, ...props}) => <ol className='list-disc list-inside px-4' {...props} />,
                    li: ({node, ...props}) => <li className='pb-4' {...props} />,
                    img: ({node, ...props}) => <Image alt={props.alt ?? ""} src={`${process.env["BACKEND_HOST"] ?? ""}${props.src}`} width={1800} height={1200} style={{objectFit: "cover",width: "80%",maxHeight:"25rem",marginRight: "auto",marginLeft: "auto",borderRadius: "1.5rem"}} loading="lazy" />,
                }}
            >
                {feature.Description}
            </ReactMarkdown>
            </div>
          )}
        </div>
        <div className="flex-1 relative rounded-3xl overflow-hidden w-full aspect-video lg:aspect-auto">
          <Image
            src={`${process.env["BACKEND_HOST"] ?? ""}${image.url}`}
            alt={image.alt}
            style={{objectFit: "cover"}}
            fill
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
