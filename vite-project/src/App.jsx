import Header from './components/Header';
import Links from './components/Links';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App(){
  return(
    <div className = "App">
      <Header />

      <main>
      <Links />
      <Projects />
      </main>

      <Footer />
    </div>
  );
}
export default App;