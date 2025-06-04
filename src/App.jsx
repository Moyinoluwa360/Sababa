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
import HomePage from './pages/HomePage/HomePage'
import AllOutfits from './pages/allOutfits/AllOutfits'
import OutfitBreakdown from './pages/outfitBreakdown/OutfitBreakdown'
import ShoppingBag from './pages/Bag/ShoppingBag'
import ContactUs from './pages/ContactUs/ContactUs'
import { AccountPage } from './pages/Account/Account'
import MobileAccountMenu from './pages/Account/MobileAccountMenu'
import SavedItems from './pages/savedItems/SavedItems'
import GeneralLayout from './Layouts/GeneralLayout'
import { ProfileContent } from './pages/Account/Profile/ProfileContent'
import { Contact } from './pages/Account/Contact/Contact'
import { PaymentMethod } from './pages/Account/PaymentMethod/PaymentMethod'
import { Settings } from './pages/Account/Settings/Settings'
import { YourOrder } from './pages/Account/YourOrder/YourOrder'

// actions and loaders
import { contactAction } from './formActions'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<GeneralLayout/>} >
          <Route index element={<HomePage/>} /> 
          <Route path="contact" element={<ContactUs/>} action={contactAction} /> 
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
