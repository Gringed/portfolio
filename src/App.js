import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";


function App() {
  return (
    <div style={{scrollBehavior: 'smooth'}}>
      <Header />
      <Main />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div> 
  );
}

export default App;
