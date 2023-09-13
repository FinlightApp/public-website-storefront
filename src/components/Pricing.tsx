import Image from 'next/image'

export default function Pricing({
    title = 'Pricing',
  }: {
    title?: string,
  }) {
    return (
      <section className="flex flex-col items-center px-20 py-16 lg:py-24 gap-10">
        <h2 className="text-4xl font-semibold leading-10 text-gray-900 text-center">
            {title}
        </h2>
        <div className="table md:hidden w-full">
          <div className="table-header-group">
            <div className="table-row text-2xl font-semibold leading-tight text-gray-900">
              <div className="table-cell text-left px-6 pb-12" />
              <div className="table-cell text-center px-6 pb-12">Lux Soparfi</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 py-4">
                Ideal for
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                Small club deal among international sophisticated investors with institutional carry, KYC and AML requirements
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
              Domicile
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Lux</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Plus
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">EU regime and recognition</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                To take into account
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Luxembourg rigour</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Costs
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Set-up</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">10000</div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">On-going</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">0,2%</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center border-b border-gray-200 font-medium px-6 py-4">Min Bill</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center border-b border-gray-200 px-6 py-4">10000</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Included
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Tech Stack</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">KYC/AML</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Bank account</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Admin & audit</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Call & distribution</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">LP Accredition & reporting</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Directors (Lux)</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Market place listing  & secondary</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Multiple share classes</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Sophisticated carry</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Legal Personalisation</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium border-b border-gray-200 px-6 py-4">US Investors</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                <Image
                  src="./x-circle.svg"
                  alt="X"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="table md:hidden w-full">
          <div className="table-header-group">
            <div className="table-row text-2xl font-semibold leading-tight text-gray-900">
              <div className="table-cell text-left px-6 pb-12" />
              <div className="table-cell text-center px-6 pb-12">Note</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 py-4">
                Ideal for
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                Ideal to open upa fund to UHNWI via traditional banking and brokerage distribution channels
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
              Domicile
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Lux</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Plus
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Transferrable</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                To take into account
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Bonds-like</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Costs
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Set-up</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">15000</div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">On-going</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">0,15%</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center border-b border-gray-200 font-medium px-6 py-4">Min Bill</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center border-b border-gray-200 px-6 py-4">12500</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Included
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Tech Stack</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">KYC/AML</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Bank account</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Admin & audit</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Call & distribution</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">LP Accredition & reporting</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Directors (Lux)</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Market place listing  & secondary</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Multiple share classes</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Sophisticated carry</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Legal Personalisation</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium border-b border-gray-200 px-6 py-4">US Investors</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                <Image
                  src="./x-circle.svg"
                  alt="X"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="table md:hidden w-full">
          <div className="table-header-group">
            <div className="table-row text-2xl font-semibold leading-tight text-gray-900">
              <div className="table-cell text-left px-6 pb-12" />
              <div className="table-cell text-center px-6 pb-12">SCSp</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 py-4">
                Ideal for
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                Ideal to start and grow a fund, be it a feeder or master/parallel fund with EU passporting rights
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
              Domicile
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Lux</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Plus
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">All the institutional flexibility to create compartmenrts and different share classes</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                To take into account
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">More expensive for below under 20 million target</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Costs
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Set-up</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">25000</div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">On-going</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">0,3%</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center border-b border-gray-200 font-medium px-6 py-4">Min Bill</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center border-b border-gray-200 px-6 py-4">36500</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Included
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Tech Stack</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">KYC/AML</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Bank account</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Admin & audit</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Call & distribution</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">LP Accredition & reporting</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Directors (Lux)</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Market place listing  & secondary</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Multiple share classes</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Sophisticated carry</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Legal Personalisation</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                <Image
                  src="./check-circle.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium border-b border-gray-200 px-6 py-4">US Investors</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                <Image
                  src="./x-circle.svg"
                  alt="X"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="table md:hidden w-full">
          <div className="table-header-group">
            <div className="table-row text-2xl font-semibold leading-tight text-gray-900">
              <div className="table-cell text-left px-6 pb-12" />
              <div className="table-cell text-center px-6 pb-12">SCSp (Parallel)</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 py-4">
                Ideal for
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                Ideal for non-EU manager to rasie substantial money from EU & international LPs
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
              Domicile
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Lux/Ireland or DK</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Plus
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">All the institutional flexibility to create compartmenrts and different share classes</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                To take into account
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">More expensive for below under 20 million target</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Costs
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Set-up</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">50000</div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">On-going</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">0,3%</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center border-b border-gray-200 font-medium px-6 py-4">Min Bill</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center border-b border-gray-200 px-6 py-4">75000</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Included
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Tech Stack</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">KYC/AML</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Bank account</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Admin & audit</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Call & distribution</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">LP Accredition & reporting</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Directors (Lux)</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Market place listing  & secondary</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Multiple share classes</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Sophisticated carry</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Legal Personalisation</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                <Image
                  src="./check-circle.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium border-b border-gray-200 px-6 py-4">US Investors</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4 stroke-purple-700">
                <Image
                  src="./check-circle.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:hidden md:table w-full">
          <div className="table-header-group">
            <div className="table-row text-2xl font-semibold leading-tight text-gray-900">
              <div className="table-cell text-left px-6 pb-12" />
              <div className="table-cell text-center px-6 pb-12">Lux Soparfi</div>
              <div className="table-cell text-center px-6 pb-12">Note</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 py-4">
                Ideal for
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                Small club deal among international sophisticated investors with institutional carry, KYC and AML requirements
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                Ideal to open upa fund to UHNWI via traditional banking and brokerage distribution channels
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
              Domicile
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Lux</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Lux</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Plus
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">EU regime and recognition</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Transferrable</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                To take into account
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Luxembourg rigour</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Bonds-like</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Costs
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Set-up</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">10000</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">15000</div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">On-going</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">0,2%</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">0,15%</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center border-b border-gray-200 font-medium px-6 py-4">Min Bill</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center border-b border-gray-200 px-6 py-4">10000</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center border-b border-gray-200 px-6 py-4">12500</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Included
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Tech Stack</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">KYC/AML</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Bank account</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Admin & audit</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Call & distribution</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">LP Accredition & reporting</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Directors (Lux)</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Market place listing  & secondary</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Multiple share classes</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Sophisticated carry</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Legal Personalisation</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium border-b border-gray-200 px-6 py-4">US Investors</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                <Image
                  src="./x-circle.svg"
                  alt="X"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                <Image
                  src="./x-circle.svg"
                  alt="X"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:hidden md:table w-full">
          <div className="table-header-group">
            <div className="table-row text-2xl font-semibold leading-tight text-gray-900">
              <div className="table-cell text-left px-6 pb-12" />
              <div className="table-cell text-center px-6 pb-12">SCSp</div>
              <div className="table-cell text-center px-6 pb-12">SCSp (Parallel)</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 py-4">
                Ideal for
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                Ideal to start and grow a fund, be it a feeder or master/parallel fund with EU passporting rights
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                Ideal for non-EU manager to rasie substantial money from EU & international LPs
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
              Domicile
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Lux</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Lux/Ireland or DK</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Plus
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">All the institutional flexibility to create compartmenrts and different share classes</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">All the institutional flexibility to create compartmenrts and different share classes</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                To take into account
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">More expensive for below under 20 million target</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">More expensive for below under 20 million target</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Costs
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Set-up</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">25000</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">50000</div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">On-going</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">0,3%</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">0,3%</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center border-b border-gray-200 font-medium px-6 py-4">Min Bill</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center border-b border-gray-200 px-6 py-4">36500</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center border-b border-gray-200 px-6 py-4">75000</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Included
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Tech Stack</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">KYC/AML</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Bank account</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Admin & audit</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Call & distribution</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">LP Accredition & reporting</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Directors (Lux)</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Market place listing  & secondary</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Multiple share classes</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Sophisticated carry</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Legal Personalisation</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                <Image
                  src="./check-circle.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                <Image
                  src="./check-circle.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium border-b border-gray-200 px-6 py-4">US Investors</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                <Image
                  src="./x-circle.svg"
                  alt="X"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4 stroke-purple-700">
                <Image
                  src="./check-circle.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:table w-full">
          <div className="table-header-group">
            <div className="table-row text-2xl font-semibold leading-tight text-gray-900">
              <div className="table-cell text-left px-6 pb-12" />
              <div className="table-cell text-center px-6 pb-12">Lux Soparfi</div>
              <div className="table-cell text-center px-6 pb-12">Note</div>
              <div className="table-cell text-center px-6 pb-12">SCSp</div>
              <div className="table-cell text-center px-6 pb-12">SCSp (Parallel)</div>
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 py-4">
                Ideal for
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                Small club deal among international sophisticated investors with institutional carry, KYC and AML requirements
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                Ideal to open upa fund to UHNWI via traditional banking and brokerage distribution channels
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                Ideal to start and grow a fund, be it a feeder or master/parallel fund with EU passporting rights
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                Ideal for non-EU manager to rasie substantial money from EU & international LPs
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
              Domicile
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Lux</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Lux</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Lux</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Lux/Ireland or DK</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Plus
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">EU regime and recognition</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Transferrable</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">All the institutional flexibility to create compartmenrts and different share classes</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">All the institutional flexibility to create compartmenrts and different share classes</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                To take into account
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Luxembourg rigour</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">Bonds-like</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">More expensive for below under 20 million target</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">More expensive for below under 20 million target</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Costs
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Set-up</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">10000</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">15000</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">25000</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">50000</div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">On-going</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">0,2%</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">0,15%</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">0,3%</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">0,3%</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center border-b border-gray-200 font-medium px-6 py-4">Min Bill</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center border-b border-gray-200 px-6 py-4">10000</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center border-b border-gray-200 px-6 py-4">12500</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center border-b border-gray-200 px-6 py-4">36500</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center border-b border-gray-200 px-6 py-4">75000</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Included
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Tech Stack</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">KYC/AML</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Bank account</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Admin & audit</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Call & distribution</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">LP Accredition & reporting</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Directors (Lux)</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Market place listing  & secondary</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Multiple share classes</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Sophisticated carry</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">Legal Personalisation</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                <Image
                  src="./check-circle.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                <Image
                  src="./check-circle.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium border-b border-gray-200 px-6 py-4">US Investors</div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                <Image
                  src="./x-circle.svg"
                  alt="X"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                <Image
                  src="./x-circle.svg"
                  alt="X"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                <Image
                  src="./x-circle.svg"
                  alt="X"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4 stroke-purple-700">
                <Image
                  src="./check-circle.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  style={{marginRight: "auto", marginLeft: "auto"}}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  