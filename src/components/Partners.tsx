import Link from 'next/link'
import Image from 'next/image'

export default function Partners({
    title,
    partners
  }: {
    title: string,
    partners: {
        attributes: {
            Name: string,
            Link: string,
            Logo: { data: { attributes: { provider: string, url: string, alternativeText: string } } }
        }
    }[]
  }) {
    return (
      <section className="flex flex-col px-8 py-16 lg:py-24 gap-16">
        <h2 className="font-medium leading-10 text-gray-600 text-center">
            {title}
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-8">
            {partners.map(partner => (
                <Link className="relative flex items-center flex-shrink-0 gap-3 h-12 w-40" href={partner.attributes.Link}>
                    <Image
                    src={`${process.env["BACKEND_HOST"] ?? ""}${partner.attributes.Logo.data.attributes.url}`}
                    alt={partner.attributes.Logo.data.attributes.alternativeText}
                    style={{objectFit: "contain"}}
                    fill
                    loading="lazy"
                    />
                </Link>
            ))}
        </div>
      </section>
    )
  }
  