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
import OutfitBreakdown from './pages/OutfitBreakdown/OutfitsDetails'
import ShoppingBag from './pages/Bag/ShoppingBag'
import ContactUs from './pages/ContactUs/ContactUs'
import { AccountPage } from './pages/Account/Account'
import MobileAccountMenu from './pages/Account/MobileAccountMenu'
import Wishlist from './pages/wishlist/Wishlist'
import GeneralLayout from './Layouts/GeneralLayout'
import { ProfileContent } from './pages/Account/Profile/ProfileContent'
import { Contact } from './pages/Account/Contact/Contact'
import { PaymentMethod } from './pages/Account/PaymentMethod/PaymentMethod'
import { Settings } from './pages/Account/Settings/Settings'
import { YourOrder } from './pages/Account/YourOrder/YourOrder'
import SignInPage from './pages/signInUp/SignIn'
import ProductList from './pages/Products/ProductList'
import {ProductSection} from './pages/productSection/ProductSection'
import ProductDetails from './pages/ProductDetails/ProductDetails'

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
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="bag" element={<ShoppingBag />} />
            <Route path="outfit-of-the-day" element={<OutfitBreakdown />} />
            <Route path="products" element={<ProductList />} />
            <Route path="product-section" element={<ProductSection />} />
            <Route path="product/:productId" element={<ProductDetails />} />
            <Route path="test-product" element={<div>Test Product Page - Routing is working!</div>} />
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
          <Route path="*" element={
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h1>404 - Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
              <p>Current user: {user ? 'Logged in' : 'Not logged in'}</p>
              <p>Available routes:</p>
              <ul style={{ textAlign: 'left', maxWidth: '300px', margin: '0 auto' }}>
                <li>/home - Home page</li>
                <li>/home/product/:productId - Product details</li>
                <li>/home/bag - Shopping bag</li>
                <li>/home/wishlist - Wishlist</li>
                <li>/account - Account page</li>
              </ul>
            </div>
          } />
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