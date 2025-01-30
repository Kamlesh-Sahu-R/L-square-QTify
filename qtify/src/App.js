//import logo from './logo.svg';
import './App.css';
//import LogoQtify from './Logo/Logo';
//mport Button1 from './Button/Button';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
//import Card from './Card/Card';
import Section from './Section/Section';

//const url='https://qtify-backend-labs.crio.do/albums/top';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React By Kamlesh Sahu
    //     </a>
    //     <LogoQtify />
        
    //   </header>
    //   <Button1>Ram</Button1>
    //   <Navbar />
      
    // </div>

    

    <div className="App">
      <Navbar />
      <Hero />
      <Section  url={'https://qtify-backend-labs.crio.do/albums/top'} title={"Top Albums"}/>
      <Section  url={'https://qtify-backend-labs.crio.do/albums/new'} title={"New Albums"}/>
      
    </div>
  );
}

export default App;
