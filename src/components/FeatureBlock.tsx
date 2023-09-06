import Image from 'next/image'

export default function FeatureBlock({
  title,
  reverse,
  features,
  image
}: {
  title: string,
  reverse: boolean
  features: {id: string, Title: string, Description: string}[],
  image: {provider: string, url: string, alt: string}
}) {
  return (
    <section className="flex flex-col px-8 py-16 lg:py-24 gap-16">
      <h2 className="text-3xl lg:text-4xl font-semibold leading-9 lg:leading-10 text-gray-900 text-center">
        {title}
      </h2>
      <div className={`flex flex-col-reverse ${reverse ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16`}>
        <div className="flex-1 flex flex-col">
          {features && features.map((feature) => 
            <div
              key={feature.id}
              className="flex flex-col p-6 gap-2">
              <h3 className="text-lg font-semibold leading-7 text-gray-900">
                {feature.Title}
              </h3>
              <p className="text-base font-normal leading-6 text-gray-600">
                {feature.Description}
              </p>
            </div>
          )}
        </div>
        <div className="flex-1 relative rounded-3xl overflow-hidden w-full aspect-video lg:aspect-auto">
          <Image
            src={`${process.env["BACKEND_HOST"]}${image.url}`}
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
