export default function CTA({
    title,
  }: {
    title: string,
  }) {
    return (
      <section className="flex flex-col items-center px-20 py-16 lg:py-24 gap-10 bg-purple-50 rounded-lg">
        <h2 className="text-4xl font-semibold leading-10 text-gray-900 text-center">
            {title}
        </h2>
        <button className="inline-flex items-center px-6 py-3 rounded-lg text-lg font-semibold leading-7 text-purple-50 bg-purple-600 w-full lg:w-auto justify-center">
            Apply Now
         </button>
      </section>
    )
  }
  