import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { ThemeProvider } from './contexts/ThemeContext';
import BackgroundVideo from './components/BackgroundVideo';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen flex flex-col justify-between">
          {isLoading ? (
            <LoadingScreen onLoaded={handleLoaded} />
          ) : (
            <>
              <BackgroundVideo />
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
