import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Home from './pagina/home.jsx';
import Navbar from './comando/Navbar.jsx';
import Cadastrar from './pagina/cadastrar.jsx';
import Login from './pagina/login.jsx';

export default function App() {
  const location = useLocation();
  const hiddenNavbarRoutes = ['/login', '/cadastrar'];

  return (
    <>
      <AnimatePresence mode="wait">
        {!hiddenNavbarRoutes.includes(location.pathname.toLowerCase()) && (
          <motion.div
            key="navbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
