import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SignUpDiv from './signup'
import StaticPageDiv from './staticPage'
import HomePage from './Homepage/HomePage'
import AllOutfits from './All Outfits/AllOutfits'
import OutfitBreakdown from './Outfit Breakdown/OutfitBreakdown'
import OutfitsPayment from './OutfitPayment/OutfitPayment'
import ShoppingBag from './Bag/ShoppingBag'
import CheckoutPage from './Checkout/Checkout'
import ContactUs from './ContactUs/ContactUs'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CheckoutPage/>
  </StrictMode>
)