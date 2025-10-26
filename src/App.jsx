import './index.css'
import { useState, useEffect, useMemo } from 'react'

// router imports
import {
  createBrowserRouter,
  Route,
  Navigate,
  createRoutesFromElements,
  RouterProvider,
  useLocation,
} from 'react-router-dom'

// pages imports
import HomePage from './pages/HomePage/HomePage';
import AllOutfits from './pages/allOutfits/AllOutfits'
import ContactUs from './pages/ContactUs/ContactUs'
import { AccountPage } from './pages/Account/Account'
import Wishlist from './pages/wishlist/Wishlist'
import GeneralLayout from './Layouts/GeneralLayout'
import { ProfileContent } from './pages/Account/Profile/ProfileContent'
import { Contact } from './pages/Account/Contact/Contact'
import {OutfitDetails} from './pages/OOTDBreakdown/OutfitDetails'
import {PasswordSection} from './pages/Account/Password/PasswordSection'
import SignUpSignInPage from './pages/signInUp/signUp-signIn';


// actions and loaders
import { contactAction } from './formActions'
// redux
import { useSelector } from 'react-redux'
// firebase imports
import { auth } from './firebase/firebase'
import { initAuthListener } from './firebase/auth'
// redux slices
import { fetchOutfits } from "./redux/slices/outfitsSlice";
// Redux store
import { store } from './redux/store';
//loading component
import { Loading } from './components/Loading';

// Component to handle post-login redirects
function PostLoginRedirect() {
  // const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  
  // If user is authenticated and we have a redirect path, navigate to it
  // if (user && location.state?.from) {
  //   return <Navigate to={location.state.from} replace />;
  // }
  
  // Default redirect to home if no specific destination
  if (user) {
    return <Navigate to="/home" replace />;
  }
  
  // If not authenticated, show the signin page
  return <SignUpSignInPage />;
}


// Route guard for protected routes
function RequireAuth({ children }) {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  
  if (!user) {
    // Store the intended destination in location state
    return <Navigate to="/auth" state={{ from: location.pathname }} replace />;
  }
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
    // Fetch outfits from the store
    store.dispatch(fetchOutfits());

    return () => unsubscribe();
  }, []);


  // Create router that updates when user state changes
  const router = useMemo(() => {
    return createBrowserRouter(
      createRoutesFromElements(
        <>
          {/* Public route: Home */}
          <Route
            path="/"
            element={<Navigate to="/home" replace />}
          />

          {/* Protected routes */}
          <Route
            path="/home"
            element={
              <GeneralLayout />
            }
          >
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactUs />} action={contactAction} />
            <Route path="alloutfits" element={<AllOutfits />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="alloutfits/:gender" element={<AllOutfits />} />
            <Route path="alloutfits/:gender/:id" element={<OutfitDetails />} />
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
            <Route path="password" element={<PasswordSection />} />
          </Route>

          {/* Public route: Sign in */}
          <Route
            path="/auth"
            element={<PostLoginRedirect />}
          />

          {/* 404 Not Found route */}
          <Route path="*" element={
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h1>404 - Page Not Found</h1>
              <p>My G the page u entered can't be found.</p>
              <p>Current user: {user ? 'Logged In' : 'Make sure you ar logged In'}</p>
  
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
        <Loading/>
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