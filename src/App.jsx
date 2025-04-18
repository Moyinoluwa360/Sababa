import './index.css'
// router imports
import { 
  createBrowserRouter,
  Route,
  Routes,
  NavLink,
  Link,
  Navigate,
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
import { ProfileContent } from './Account/Profile/ProfileContent'
import { Contact } from './Account/Contact/Contact'
import { PaymentMethod } from './Account/PaymentMethod/PaymentMethod'
import { Settings } from './Account/Settings/Settings'
import { YourOrder } from './Account/YourOrder/YourOrder'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<GeneralLayout/>} >
          <Route index element={<HomePage/>} /> 
          <Route path="contact" element={<ContactUs/>} /> 
          <Route path="alloutfits" element={<AllOutfits/>} />
          <Route path='saveditems' element={<SavedItems/>} />
          <Route path='bag' element={<ShoppingBag/>} />
          <Route path='Outfit of the day blah' element={<OutfitBreakdown/>} />
        </Route>
        <Route path='account' element={<AccountPage/>}>
          <Route index element={<Navigate to="profile" replace />} />
          <Route path='profile' element={<ProfileContent/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='settings' element={<Settings/>} />
          <Route path='payment method' element={<PaymentMethod/>} />
          <Route path='your order' element={<YourOrder/>} />
        </Route>
        <Route path='accounts/:menuLabel' element={<MobileAccountMenu/>} />
      </>
    )
  )
  return(
    <RouterProvider router = {router}/>
  ) 
}

export default App
