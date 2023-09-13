import Link from 'next/link'

const links = [
  {
    label: "Contact",
    href: "/contact"
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy"
  },
]

export default function Footer() {
  return (
    <footer
      className='
        flex flex-col
        justify-between items-center
        py-12 gap-2
      '
    >
      <div
        className='
          flex
          flex-row
          justify-center items-center
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
      <p>Ⓒ Dorhyo 2023</p>
    </footer>
  )
}
