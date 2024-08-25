import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Hero from './components/static/Hero/Hero';
import Features from './components/static/Features/Features';
import About from './components/static/About/about';
import FAQ from './components/static/FAQ/faq';
import Error404 from './components/404/Error404';
import Header from './components/static/Header/navbar';
import Footer from './components/static/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

function Main() {

  return (
    <>
      {/* Render the appropriate header based on the route */}
      <Header />

      {/* Render the sidebar only within the dashboard section */}

      {/* Main content area */}

      <Routes>
        {/* Define routes for different components */}
        <Route index element={<> <Hero/> <About/> <Features/> <FAQ/></>} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
