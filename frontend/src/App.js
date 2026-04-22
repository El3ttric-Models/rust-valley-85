import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';
import WikiIndex from './pages/WikiIndex';
import WikiBackgroundGuide from './pages/WikiBackgroundGuide';
import WikiHistorical from './pages/WikiHistorical';
import CharacterSheet from './pages/CharacterSheet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function Layout({ children }) {
  return (
    <div className="App min-h-screen flex flex-col" style={{ background: '#022623' }}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/wiki" element={<WikiIndex />} />
          <Route path="/wiki/background-guide" element={<WikiBackgroundGuide />} />
          <Route path="/wiki/historical" element={<WikiHistorical />} />
          <Route path="/character-sheet" element={<CharacterSheet />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
