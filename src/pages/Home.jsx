import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import { Services } from "../components/Services";

import Why from "../components/Why";
import Who from "../components/Who";
import Portfolio from "../components/Portfolio";
import SlideNav from "../components/SlideNav";
import { Divider, Pattern2 } from "../components/patterns/Pattern1";

function Home() {

  return (
    <div className="Home" >

        <Landing />

        <SlideNav />

        <Divider classn="divider" />
        <Who />

        <Divider classn="divider-left" />
        <Why />

        <Divider classn="divider" />
        <Services />

        <Divider classn="divider-left" />
        <Portfolio header={true} />

        {/* <Gallery_merge />  */}
        
        <Divider classn="divider" />
        <Clients />

        <Divider classn="divider-left" />
        <Contact />

        <Divider classn="divider" />
        <Blog />

        {/* <Divider classn="divider-left" /> */}
        
        <Footer />
        </div>
  );
}

export default Home;
