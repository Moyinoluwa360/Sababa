import './index.css'
// router imports
import { 
  createBrowserRouter,
  Route,
  Routes,
  NavLink,
  Link,
  createRoutesFromElements,
  RouterProvider
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
import GeneralLayout from './Layouts/GeneralLayout'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<GeneralLayout/>} >
        <Route index element={<HomePage/>} /> 
        <Route path="contact" element={<ContactUs/>} /> 
        <Route path="alloutfits" element={<AllOutfits/>} />
        <Route path='saveditems' element={<SavedItems/>} />
        <Route path='bag' element={<ShoppingBag/>} />
        <Route path='account' element={<AccountPage/>} />
        <Route path='Outfit of the day blah' element={<OutfitBreakdown/>} />
      </Route>
    )
  )
  return(
    <RouterProvider router = {router}/>
  ) 
}

export default App
