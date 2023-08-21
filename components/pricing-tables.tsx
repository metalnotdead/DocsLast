'use client'

import { useState } from 'react'

export default function PricingTables() {

  const [annual, setAnnual] = useState<boolean>(true)

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1 mb-4" data-aos="fade-up">Tailored to Your Investment Needs</h1>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Our plans are carefully crafted to empower you with the tools you need for successful investing.</p>
          </div>

          {/* Pricing tables */}
          <div>

            {/* Pricing toggle */}
            <div className="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="400">
              <div className="inline-flex items-center">
                <div className="text-gray-500 font-medium mr-3">Billed Monthly</div>
                <div className="form-switch">
                  <input type="checkbox" name="pricing-toggle" id="pricing-toggle" className="sr-only" checked={annual} onChange={() => setAnnual(!annual)} />
                  <label className="bg-gray-600" htmlFor="pricing-toggle">
                    <span className="bg-gray-200" aria-hidden="true"></span>
                    <span className="sr-only">Enable to see yearly prices</span>
                  </label>
                </div>
                <div className="text-gray-500 font-medium ml-3">Billed Annually</div>
              </div>
            </div>

            <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

              {/* Pricing table 1 */}
              <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="700">
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-purple-600 mb-1">One Month Membership</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">$</span>
                    <span className="h2">{annual ? '25' : '30'}</span>
                    <span className="font-medium text-gray-400">/mo</span>
                  </div>
                  <div className="text-gray-400">Experience the worth of BlackGem AI as your investments thrive with our advanced AI insights.</div>
                </div>
                <div className="font-medium mb-3">Features include:</div>
                <ul className="text-gray-400 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Forecast</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Pattern Recognition</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Predict Portfolio</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Financial AI Advisor</span>
                  </li>
                </ul>
                <div className="border border-gray-700 p-3 mt-6">
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0">Buy Now</a>
                </div>
              </div>

              {/* Pricing table 2 */}
              <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="600">
                <div className="absolute top-0 right-0 mr-6 -mt-4">
                  <div className="inline-flex text-sm font-semibold py-1 px-3 mt-px text-green-600 bg-green-200 rounded-full">Most Popular</div>
                </div>
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-purple-600 mb-1">One Year Membership</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">$</span>
                    <span className="h2">{annual ? '300' : '360'}</span>
                    <span className="font-medium text-gray-400">/mo</span>
                  </div>
                  <div className="text-gray-400">Experience the worth of BlackGem AI as your investments thrive with our advanced AI insights.</div>
                </div>
                <div className="font-medium mb-3">All features of Membership plus:</div>
                <ul className="text-gray-400 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>2 Months Free</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Premium Support</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>API Key</span>
                  </li>
                </ul>
                <div className="border border-gray-700 p-3 mt-6">
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0">Buy Now</a>
                </div>
              </div>

              {/* Pricing table 3 */}
              <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="800">
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-purple-600 mb-1">Customize</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">$</span>
                    <span className="h2">{annual ? 'Offer' : 'Offer'}</span>
                    <span className="font-medium text-gray-400">/mo</span>
                  </div>
                  <div className="text-gray-400">Experience the worth of BlackGem AI as your investments thrive with our advanced AI insights.</div>
                </div>
                <div className="font-medium mb-3">All features of Membership plus:</div>
                <ul className="text-gray-400 -mb-3 grow">
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Multiple Accounts</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>API Keys</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Team Collaboration</span>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Premium Support</span>
                  </li>
                </ul>
                <div className="border border-gray-700 p-3 mt-6">
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0">Contact Us</a>
                </div>
              </div>

            </div>

            {/* Bottom infobox */}
            {/* <div className="flex flex-col lg:flex-row justify-between items-center mt-12 lg:mt-6 lg:py-8 lg:border-t lg:border-b lg:border-gray-800">
              <div className="font-medium text-lg text-center lg:text-left mb-4 lg:mb-0">Expecting more than 1000 Active End Users?</div>
              <div>
                <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700" href="#0">Contact us</a>
              </div>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  )
}
