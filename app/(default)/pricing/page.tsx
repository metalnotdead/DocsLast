export const metadata = {
  title: 'Pricing - BlackGem AI',
  description: 'prices of blackgem ai product',
}

import PricingTables from '@/components/pricing-tables'
import Testimonials from '@/components/testimonials'

export default function Pricing() {
  return (
    <>
      <PricingTables />
      <Testimonials />
    </>
  )
}