import './App.css';
import AwardSection from './components/AwardSection';
import DevicesSection from './components/DevicesSection';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AwardSection />
      <DevicesSection />
      <Footer />
    </div>
  );
}

export default App;
