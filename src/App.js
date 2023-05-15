import './App.css';
import FirstSection from './components/FirstSection';
import Footer from './components/Footer';
import FourthSection from './components/FourthSection';
import Header from './components/Header';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
}

export default App;
