import Appbar from "./component/appbar/appbar";
import Home from "./component/home/home";
import Services from "./component/services/services";
import Pricing from './component/pricing/pricing'
import Contact from './component/contact/contact'
import Patners from './component/patners/patners'
import Footer from './component/footer/footer'
function App() {
  return (
    <div className="App">
      <Appbar />
      <Home />
      <Services />
      <Pricing/>
      <Patners/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
