import './index.css'
import { useState, useEffect, useMemo } from 'react'

// router imports
import {
  createBrowserRouter,
  Route,
  Navigate,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

// pages imports
import HomePage from './pages/HomePage/HomePage';
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
import SignInPage from './pages/signInUp/SignIn'

// actions and loaders
import { contactAction } from './formActions'
// redux
import { useSelector } from 'react-redux'
// firebase imports
import { auth } from './firebase/firebase'
import { initAuthListener } from './firebase/auth'

// Route guard for protected routes
function RequireAuth({ children }) {
  const { user } = useSelector((state) => state.auth);
  if (!user) return <Navigate to="/" replace />;
  return children;
}

function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const { user, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    initAuthListener(); // Start listening to auth changes

    // Wait for initial auth state to be determine
    const unsubscribe = auth.onAuthStateChanged(() => {
      setIsInitialized(true);
    });

    return () => unsubscribe();
  }, []);


  // Create router that updates when user state changes
  const router = useMemo(() => {
    return createBrowserRouter(
      createRoutesFromElements(
        <>
          {/* Public route: Sign in */}
          <Route
            path="/"
            element={user ? <Navigate to="/home" replace /> : <SignInPage />}
          />

          {/* Protected routes */}
          <Route
            path="/home"
            element={
              <RequireAuth>
                <GeneralLayout />
              </RequireAuth>
            }
          >
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactUs />} action={contactAction} />
            <Route path="alloutfits" element={<AllOutfits />} />
            <Route path="saveditems" element={<SavedItems />} />
            <Route path="bag" element={<ShoppingBag />} />
            <Route path="outfit-of-the-day" element={<OutfitBreakdown />} />
          </Route>

          <Route
            path="/account"
            element={
              <RequireAuth >
                <AccountPage />
              </RequireAuth>
            }
          >
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<ProfileContent />} />
            <Route path="contact" element={<Contact />} />
            <Route path="settings" element={<Settings />} />
            <Route path="payment-method" element={<PaymentMethod />} />
            <Route path="your-order" element={<YourOrder />} />
          </Route>

          {/* Mobile account menu (protected if needed) */}
          <Route
            path="accounts/:menuLabel"
            element={
              <RequireAuth >
                <MobileAccountMenu />
              </RequireAuth>
            }
          />

          {/* 404 Not Found route */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </>
      )
    );
  }, [user]); // Recreate router when user changes

  // Show loading spinner while auth is initializing
  if (!isInitialized || isLoading) {
    return (
      <div className="App">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;