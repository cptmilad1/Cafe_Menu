import SiteHeader from '../share/components/SiteHeader'
import EntranceSection from '../entrance/components/EntranceSection'
import MenuSection from '../menu/components/MenuSection'
import OrderSection from '../order/components/OrderSection'
import BaristaSection from '../barista/components/BaristaSection'

const CustomerJourneyPage = () => (
  <div className="cafe-backdrop min-h-screen">
    <a
      href="#menu"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-caramel-400 focus:px-4 focus:py-2 focus:text-roast-950"
    >
      Skip to menu
    </a>
    <SiteHeader />
    <main>
      <EntranceSection />
      <MenuSection />
      <OrderSection />
      <BaristaSection />
    </main>
    <footer className="px-4 py-10 text-center text-sm text-crema-200">
      Sample menu and prices for design preview.
    </footer>
  </div>
)

export default CustomerJourneyPage
