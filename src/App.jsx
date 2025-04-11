import './index.css'
// router imports
import { 
  createBrowserRouter,
  Route,
  Routes,
  NavLink,
  Link
 } from 'react-router-dom'
// pages imports
import StaticPageDiv from './staticPage'
import HomePage from './Homepage/HomePage'
import AllOutfits from './All Outfits/AllOutfits'
import OutfitBreakdown from './Outfit Breakdown/OutfitBreakdown'
import OutfitsPayment from './OutfitPayment/OutfitPayment'
import ShoppingBag from './Bag/ShoppingBag'
import CheckoutPage from './Checkout/Checkout'
import ContactUs from './ContactUs/ContactUs'
import AddCard from './Checkout/AddCard'
import { AccountPage } from './Account/Account'
import MobileAccountMenu from './Account/MobileAccountMenu'
import SavedItems from './SavedItems/SavedItems'
import { ForgotPassword } from './SignIn-Up/ForgotPassword/ForgotPassword'
import SignUp from './SignIn-Up/signup'
function App() {

  return(
    <HomePage/>
  ) 
}

export default App
