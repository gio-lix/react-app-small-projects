import Hero from "./components/Hero";
import Aos from "aos"
import "aos/dist/aos.css"
import About from "./components/About";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
    Aos.init({
        duration: 1800,
        offset: 0
    })

    return (
        <main className="overflow-hidden">
            <Hero/>
            <About />
            <Features />
            <Testimonials />
            <CtaSection />
            <Footer />
        </main>
    );
}

export default App;
