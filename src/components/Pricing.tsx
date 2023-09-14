import Image from 'next/image'

function splitArrayChunks<T>(array: T[], n: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += n) {
    result.push(array.slice(i, i + n));
  }
  return(result);
}

async function fetchAPI(query: string) {
  const host = process.env["GRAPHQL_HOST"] ?? ""
  const res = await fetch(host, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const getContent = `
  query Pricing {
    pricings {
      data {
        attributes {
          Title
          Profile {
            id
            Profile
            Ideal_for
            Domicile
            Plus
            To_take_into_account
            Costs {
              Set_up
              On_going
              Min_Bill
            }
            Included {
              Tech_Stack
              KYC_AML
              Bank_account
              Admin_and_audit
              Call_and_distribution
              LP_Accredition_and_reporting
              Directors_Lux
              Market_place_listing_and_secondary
              Multiple_share_classes
              Sophisticated_carry
              Legal_Personalisation
              US_Investors
            }
          }
        }
      }
    }
  }
`

export default async function Pricing() {

    const content = await fetchAPI(getContent)
    const content_by_two = splitArrayChunks(content?.data?.pricings?.data[0]?.attributes?.Profile, 2)
    const content_by_four = splitArrayChunks(content?.data?.pricings?.data[0]?.attributes?.Profile, 4)

    return (
      <section className="flex flex-col items-center px-20 py-16 lg:py-24 gap-10">
        <h2 className="text-4xl font-semibold leading-10 text-gray-900 text-center">
            {content?.data?.pricings?.data[0]?.attributes?.Title}
        </h2>
        {content?.data?.pricings?.data[0]?.attributes?.Profile.map((
          item: {
            id: string,
            Profile: string,
            Ideal_for: string,
            Domicile: string,
            Plus: string,
            To_take_into_account: string,
            Costs: {Set_up: string, On_going: string, Min_Bill: string},
            Included: {
              Tech_Stack: boolean, KYC_AML: boolean, Bank_account: boolean,
              Admin_and_audit: boolean, Call_and_distribution: boolean, LP_Accredition_and_reporting: boolean,
              Directors_Lux: boolean, Market_place_listing_and_secondary: boolean, Multiple_share_classes: boolean,
              Sophisticated_carry: boolean, Legal_Personalisation: boolean, US_Investors: boolean,
            }
          }) =>
          <div className="table md:hidden w-full" key={item.id}>
          <div className="table-header-group">
            <div className="table-row text-2xl font-semibold leading-tight text-gray-900">
              <div className="table-cell text-left px-6 pb-12" />
              <div className="table-cell text-center px-6 pb-12">
                {item.Profile}
              </div>
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
                {item.Ideal_for}
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
              Domicile
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                {item.Domicile}
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Plus
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                {item.Plus}
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                To take into account
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell border-b border-gray-200" />
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                {item.To_take_into_account}
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Costs
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                Set-up
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">
                {item.Costs.Set_up}
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                On-going
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">
                {item.Costs.On_going}
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center border-b border-gray-200 font-medium px-6 py-4">
                Min Bill
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center border-b border-gray-200 px-6 py-4">
                {item.Costs.Min_Bill}
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                Included
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                Tech Stack
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                {item.Included.Tech_Stack ?
                  <Image
                    src="./check-circle.svg"
                    alt="Check"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
                  :
                  <Image
                    src="./x-circle.svg"
                    alt="X"
                    width={24}
                    height={24}
                    style={{marginRight: "auto", marginLeft: "auto"}}
                    loading="lazy"
                  />
                }
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                KYC/AML
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                {item.Included.KYC_AML ?
                    <Image
                      src="./check-circle.svg"
                      alt="Check"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                    :
                    <Image
                      src="./x-circle.svg"
                      alt="X"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                  }
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                Bank account
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                {item.Included.Bank_account ?
                    <Image
                      src="./check-circle.svg"
                      alt="Check"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                    :
                    <Image
                      src="./x-circle.svg"
                      alt="X"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                  }
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                Admin & audit
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                {item.Included.Admin_and_audit ?
                    <Image
                      src="./check-circle.svg"
                      alt="Check"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                    :
                    <Image
                      src="./x-circle.svg"
                      alt="X"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                  }
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                Call & distribution
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                {item.Included.Call_and_distribution ?
                    <Image
                      src="./check-circle.svg"
                      alt="Check"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                    :
                    <Image
                      src="./x-circle.svg"
                      alt="X"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                  }
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                LP Accredition & reporting
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                {item.Included.LP_Accredition_and_reporting ?
                    <Image
                      src="./check-circle.svg"
                      alt="Check"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                    :
                    <Image
                      src="./x-circle.svg"
                      alt="X"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                  }
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                Directors (Lux)
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                {item.Included.Directors_Lux ?
                    <Image
                      src="./check-circle.svg"
                      alt="Check"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                    :
                    <Image
                      src="./x-circle.svg"
                      alt="X"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                  }
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                Market place listing  & secondary
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                {item.Included.Market_place_listing_and_secondary ?
                    <Image
                      src="./check-circle.svg"
                      alt="Check"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                    :
                    <Image
                      src="./x-circle.svg"
                      alt="X"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                  }
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                Multiple share classes
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                {item.Included.Multiple_share_classes ?
                    <Image
                      src="./check-circle.svg"
                      alt="Check"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                    :
                    <Image
                      src="./x-circle.svg"
                      alt="X"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                  }
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                Sophisticated carry
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                {item.Included.Sophisticated_carry ?
                    <Image
                      src="./check-circle.svg"
                      alt="Check"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                    :
                    <Image
                      src="./x-circle.svg"
                      alt="X"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                  }
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                Legal Personalisation
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                {item.Included.Legal_Personalisation ?
                    <Image
                      src="./check-circle.svg"
                      alt="Check"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                    :
                    <Image
                      src="./x-circle.svg"
                      alt="X"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                  }
              </div>
            </div>
            <div className="table-row bg-purple-50">
              <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium border-b border-gray-200 px-6 py-4">
                US Investors
              </div>
              <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle border-b border-gray-200 px-6 py-4">
                {item.Included.US_Investors ?
                    <Image
                      src="./check-circle.svg"
                      alt="Check"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                    :
                    <Image
                      src="./x-circle.svg"
                      alt="X"
                      width={24}
                      height={24}
                      style={{marginRight: "auto", marginLeft: "auto"}}
                      loading="lazy"
                    />
                  }
              </div>
            </div>
          </div>
        </div>
        )}
        {content_by_two.map((
          item: any
          ) =>
          <div className="hidden lg:hidden md:table w-full">
            <div className="table-header-group">
              <div className="table-row text-2xl font-semibold leading-tight text-gray-900">
                <div className="table-cell text-left px-6 pb-12" />
                {item.map((jtem: any) =>
                  <div className="table-cell text-center px-6 pb-12">
                    {jtem.Profile}
                  </div>
                )}
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
                  {item.map((jtem: any) =>
                    <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                      {jtem.Ideal_for}
                    </div>
                  )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                  Domicile
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell border-b border-gray-200" />
                  {item.map((jtem: any) =>
                    <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                      {jtem.Domicile}
                    </div>
                  )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                  Plus
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell border-b border-gray-200" />
                  {item.map((jtem: any) =>
                    <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                      {jtem.Plus}
                    </div>
                  )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                  To take into account
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell border-b border-gray-200" />
                  {item.map((jtem: any) =>
                    <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                      {jtem.To_take_into_account}
                    </div>
                  )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                  Costs
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Set-up
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">
                    {jtem.Costs.Set_up}
                  </div>
                )}
              </div>
              <div className="table-row bg-purple-50">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  On-going
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">
                    {jtem.Costs.On_going}
                  </div>
                )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center border-b border-gray-200 font-medium px-6 py-4">
                  Min Bill
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center border-b border-gray-200 px-6 py-4">
                    {jtem.Costs.Min_Bill}
                  </div>
                )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                  Included
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Tech Stack
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Tech_Stack ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row bg-purple-50">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  KYC/AML
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.KYC_AML ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Bank account
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Bank_account ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row bg-purple-50">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Admin & audit
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Admin_and_audit ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Call & distribution
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Call_and_distribution ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row bg-purple-50">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  LP Accredition & reporting
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.LP_Accredition_and_reporting ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Directors (Lux)
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Directors_Lux ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row bg-purple-50">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Market place listing & secondary
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Market_place_listing_and_secondary ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Multiple share classes
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Multiple_share_classes ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row bg-purple-50">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Sophisticated carry
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Sophisticated_carry ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Legal Personalisation
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Legal_Personalisation ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row bg-purple-50">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  US Investors
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.US_Investors ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {content_by_four.map((
          item: any
          ) =>
          <div className="hidden lg:table w-full">
            <div className="table-header-group">
              <div className="table-row text-2xl font-semibold leading-tight text-gray-900">
                <div className="table-cell text-left px-6 pb-12" />
                {item.map((jtem: any) =>
                  <div className="table-cell text-center px-6 pb-12">
                    {jtem.Profile}
                  </div>
                )}
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
                  {item.map((jtem: any) =>
                    <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                      {jtem.Ideal_for}
                    </div>
                  )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                  Domicile
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell border-b border-gray-200" />
                  {item.map((jtem: any) =>
                    <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                      {jtem.Domicile}
                    </div>
                  )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                  Plus
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell border-b border-gray-200" />
                  {item.map((jtem: any) =>
                    <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                      {jtem.Plus}
                    </div>
                  )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                  To take into account
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell border-b border-gray-200" />
                  {item.map((jtem: any) =>
                    <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4 border-b border-gray-200">
                      {jtem.To_take_into_account}
                    </div>
                  )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                  Costs
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Set-up
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">
                    {jtem.Costs.Set_up}
                  </div>
                )}
              </div>
              <div className="table-row bg-purple-50">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  On-going
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center px-6 py-4">
                    {jtem.Costs.On_going}
                  </div>
                )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center border-b border-gray-200 font-medium px-6 py-4">
                  Min Bill
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center border-b border-gray-200 px-6 py-4">
                    {jtem.Costs.Min_Bill}
                  </div>
                )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm font-semibold leading-5 text-purple-700 text-left px-6 pb-4 pt-10">
                  Included
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Tech Stack
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Tech_Stack ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row bg-purple-50">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  KYC/AML
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.KYC_AML ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Bank account
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Bank_account ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row bg-purple-50">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Admin & audit
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Admin_and_audit ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Call & distribution
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Call_and_distribution ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row bg-purple-50">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  LP Accredition & reporting
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.LP_Accredition_and_reporting ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Directors (Lux)
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Directors_Lux ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row bg-purple-50">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Market place listing & secondary
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Market_place_listing_and_secondary ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Multiple share classes
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Multiple_share_classes ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row bg-purple-50">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Sophisticated carry
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Sophisticated_carry ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  Legal Personalisation
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.Legal_Personalisation ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
              <div className="table-row bg-purple-50">
                <div className="table-cell text-sm leading-5 text-gray-90 text-center font-medium px-6 py-4">
                  US Investors
                </div>
                {item.map((jtem: any) =>
                  <div className="table-cell text-sm leading-5 text-gray-600 text-center align-middle px-6 py-4">
                    {jtem.Included.US_Investors ?
                      <Image
                        src="./check-circle.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                      :
                      <Image
                        src="./x-circle.svg"
                        alt="X"
                        width={24}
                        height={24}
                        style={{marginRight: "auto", marginLeft: "auto"}}
                        loading="lazy"
                      />
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    )
  }
  