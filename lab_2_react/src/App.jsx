import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-8 max-w-4xl mx-auto font-sans space-y-6">
      <Header />
      <About />
      <Experience />
      <Education />
      <Footer />
    </main>
  );
}

export default App;