import Link from "next/link"

export default function Hero({
  page,
  color,
  title,
  subtitle,
  cta,
  cta_content,
  cta_href,
}: {
  page: string,
  color?: string,
  title: string,
  subtitle: string,
  cta: boolean,
  cta_content?: string,
  cta_href?: string,
}) {

  return (
    <header
      className="
        relative
        pt-4 pb-12 md:py-8 px-8 md:px-0
      "
    >
      <div
        className={`
          flex
          flex-col
          justify-center items-center
          p-4 md:p-24
          gap-12
          rounded-3xl
        `}
      >
        { title &&
          <h1
            style={{color: color}}
            className={`
              text-4xl md:text-7xl font-bold leading-[2.75rem] md:leading-[5.625rem]
              text-center
            `}
          >
            {title}
          </h1>
        }
        {subtitle && 
          <p
            style={{color: color}}
            className={`
              text-xl font-normal leading-7 lg:leading-8
              text-center
            `}
          >
            {subtitle}
          </p>
        }
        {cta && page === "spotlight" &&
          <div className="flex flex-col  md:flex-row justify-center items-start gap-8">
            <label
              htmlFor=""
              className="
                flex flex-col
                gap-1
                text-sm font-normal leading-5 text-gray-500
              "
            >
              <input
                className="
                  px-3 py-2
                  text-base font-normal leading-6 text-gray-600
                  border border-gray-300 rounded-lg
                  drop-shadow-sm
                "
                placeholder="@"
                type="text"
              />
              We care about your data in our privacy policy.
            </label>
            <button
              type="button"
              className="
                w-full md:w-auto
                px-5 py-2
                text-base font-semibold leading-6 text-purple-50
                border border-purple-600 rounded-lg
                bg-purple-600
              "
            >
              Get started
            </button>
          </div>
        }
      </div>
      {cta && page !== "spotlight" &&
        <div
          className="
            absolute
            inset-x-0 bottom-0
            flex
            justify-center
            z-10
          "
        >
          <Link
            href={cta_href || ""}
            className="
              px-7 py-4
              rounded-lg
              text-lg font-semibold leading-7
              text-purple-50
              bg-purple-600
            "
          >
            {cta_content || "Button"}
          </Link>
        </div>
      }
    </header>
  )
}
