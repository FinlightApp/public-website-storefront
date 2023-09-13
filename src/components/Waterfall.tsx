import Image from 'next/image'

const sizes: {[key: number]: string} = {
  0: 'md:flex-none',
  1: 'md:flex-1',
  2: 'md:flex-2',
  3: 'md:flex-3',
  4: 'md:flex-4',
  5: 'md:flex-5',
  6: 'md:flex-6',
  7: 'md:flex-7',
  8: 'md:flex-8',
  9: 'md:flex-9',
  10: 'md:flex-10',
}

export default function Waterfall({
  title,
  steps,
  bigger
}: {
  title: string,
  steps: {
    id: string,
    Title: string,
    Description: string,
    Image: { data: { attributes: { provider: string, url: string, alternativeText: string } } }
  }[],
  bigger: boolean
}) {
    return (
      <section className="flex flex-col px-8 py-16 lg:py-24 gap-16">
        {title &&
          <h2 className="text-4xl font-semibold leading-10 text-gray-900 text-center">
            {title}
          </h2>
        }
        <div className="flex flex-col gap-8">
          {steps.map((step, i) => {
            const itemSize: number = steps.length - (bigger ? 0 : 1)
            const leftItemSize: number = i
            const rightItemSize: number = steps.length - 1 - i
            return (
              <div
                key={step.id}
                className="flex-1 flex flex-row"
              >
                <div className={`invisible md:visible ${sizes[leftItemSize]}`} />
                <div className={`flex-1 ${sizes[itemSize]} flex ${bigger ? "flex-col md:flex-row" : "flex-row"} p-6 gap-8`}>
                  <div className={`shrink-0 ${bigger ? "w-24 h-24" : "w-12 h-12"} relative rounded-lg overflow-hidden`}>
                    <Image
                      src={`${process.env["BACKEND_HOST"] ?? ""}${step.Image?.data?.attributes?.url}`}
                      alt={step.Image?.data?.attributes?.alternativeText || ""}
                      style={{objectFit: "cover"}}
                      fill
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      {step.Title}
                    </h3>
                    <p className="text-base font-normal leading-6 text-gray-600">
                      {step.Description}
                    </p>
                  </div>
                </div>
                <div className={`invisible md:visible ${sizes[rightItemSize]}`} />
                
              </div>
          )})}
        </div>
      </section>
    )
  }
  