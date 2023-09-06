import Image from 'next/image'

export default function TeamCard({
    name, role, image
  }: {
    name: string,
    role: string,
    image: {provider: string, url: string, alt: string}
  }) {
  return (
    <div
        className='
            flex flex-col
            justify-center items-center
            p-6 gap-5
            w-72
            border border-gray-50 rounded-lg
            drop-shadow-sm
        '
    >
      <div className="w-24 h-24 relative rounded-full overflow-hidden">
        <Image
          src={`${process.env["BACKEND_HOST"]}${image.url}`}
          alt={image.alt}
          style={{objectFit: "cover"}}
          fill
          loading="lazy"
        />
      </div>
      <p
        className='
            text-lg font-semibold leading-7 text-center text-gray-900
        '
    >
        {name}
      </p>
      <p
        className='
            text-base font-normal leading-6 text-center text-purple-700
        '
    >
        {role}
      </p>
    </div>
  )
}
