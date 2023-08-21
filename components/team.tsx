import Image from 'next/image'

import TeamImage01 from '@/public/images/testimonial-01.jpg'
import TeamImage02 from '@/public/images/testimonial-02.jpg'
import TeamImage03 from '@/public/images/testimonial-03.jpg'

export default function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our passionate team</h2>
            <p className="text-xl text-gray-400">Investing, trading and coding more than 10 years.</p>
          </div>

          {/* Team members */}
          <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>

            {/* 1st member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage01} width={120} height={120} alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Yasin Tezcan</h4>
                <div className="text-gray-500 mb-1">Founder & MBA-Frontend</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/yasin-tezcan/" target='_blank'>@mr.tzcn</a>
              </div>
            </div>

            {/* 2nd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage02} width={120} height={120} alt="Team member 02" />
                <h4 className="text-xl font-medium mb-1">Yusuf Tezcan</h4>
                <div className="text-gray-500 mb-1">Co-founder & Backend</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/yusuftezcan/" target='_blank'>@ysftzcn</a>
              </div>
            </div>

            {/* 3rd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage03} width={120} height={120} alt="Team member 03" />
                <h4 className="text-xl font-medium mb-1">M.M. Tezcan</h4>
                <div className="text-gray-500 mb-1">Co-founder & React Native</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/m-mucahit-tezcan/" target='_blank'>@wchttzcn</a>
              </div>
            </div>

            

          </div>

        </div>
      </div>
    </section>
  )
}
