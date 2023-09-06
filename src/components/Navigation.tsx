import Link from 'next/link'

const links = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Team",
    href: "/team"
  },
  {
    label: "Spotlight",
    href: "/spotlight"
  },
]

export default function Navigation() {
  return (
    <nav
      className='
        flex
        justify-between items-center
        px-8
        h-20
      '
    >
      <div
        className='
          flex
          flex-row
          justify-start items-center
          gap-8
        '
      >
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className='
              text-base font-semibold leading-6
              text-gray-500
            '
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
