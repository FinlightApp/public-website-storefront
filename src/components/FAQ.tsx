export default function FAQ({
    title,
    quiz
  }: {
    title: string,
    quiz: {id: string, Question: string, Response: string}[]
  }) {
    return (
      <section className="flex flex-col px-8 py-16 lg:py-24 gap-16">
        <h2 className="text-4xl font-semibold leading-10 text-gray-900 text-center">
            {title}
        </h2>
        <div className="flex flex-row">
            <div className="flex-none md:flex-2" />
            <div className="flex-8 flex flex-col gap-16">
                {quiz && quiz.map(item => (
                    <details key={item.id}>
                        <summary className="text-xl font-semibold leading-7 text-gray-900">
                            {item.Question}
                        </summary>
                        <p className="pt-6 text-base font-normal leading-6 text-gray-600">
                            {item.Response}
                        </p>
                    </details>
                ))}
            </div>
            <div className="flex-none md:flex-2" />
        </div>
      </section>
    )
  }
  