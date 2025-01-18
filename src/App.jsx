import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
import './App.css';
import Navigation from './components/navigation/Navigation';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('./pages/home-page/HomePage'));
const Catalog = lazy(() => import('./pages/catalog/Catalog'));
const View = lazy(() => import('./pages/view/View'));
const NotFound = lazy(() => import('./pages/not-found/NotFound'));
const Features = lazy(() => import('./components/features/Features'));
const Reviews = lazy(() => import('./components/reviews/Reviews'));

function App() {
  return (
    <>
      <Navigation />

      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/catalog" element={<Catalog />} />

          <Route path="/catalog/:id" element={<View />}>
            <Route index element={<Features />} />

            <Route path="reviews" element={<Reviews />} />

            <Route path="*" element={<Features />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce} />
    </>
  )
}

export default App
