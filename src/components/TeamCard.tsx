import Image from 'next/image'
import Link from 'next/link'

export default function TeamCard({
    name, role, link, image
  }: {
    name: string,
    role: string,
    link: string,
    image: {provider: string, url: string, alt: string}
  }) {
  return (

    <div className="max-w-xs w-full lg:max-w-fit lg:flex bg-purple-50 p-6 rounded-lg">
      <div className="relative aspect-square mx-auto h-40 lg:h-auto lg:w-40 rounded-full overflow-hidden">
        <Image
          src={`${process.env["BACKEND_HOST"] ?? ""}${image.url}`}
          alt={image.alt || ""}
          style={{objectFit: "cover"}}
          fill
          loading="lazy"
        />
      </div>
      <div className=" p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-lg font-semibold leading-7 text-center lg:text-left text-gray-900">
            {name}
          </div>
          <p className="text-base font-normal leading-6 text-center lg:text-left text-purple-700">
            {role}
          </p>
        </div>
        <Link
          href={link}
          className="relative flex h-10 fill-purple-700"
        >
          <Image
            src="/linkedin.svg"
            alt="LinkedIn Logo"
            style={{objectFit: "contain"}}
            fill
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  )
}
