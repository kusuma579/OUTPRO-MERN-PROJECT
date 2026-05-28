import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";

function Home() {

    return (

        <div className="bg-[#050816] overflow-hidden">

            {/* NAVBAR */}

            <Navbar />

            {/* HERO SECTION */}

            <section id="home">

                <Hero />

            </section>

            {/* SERVICES */}

            <section id="services">

                <Services />

            </section>

            {/* PORTFOLIO */}

            <section id="portfolio">

                <Portfolio />

            </section>

            {/* STATS */}

            <section id="stats">

                <Stats />

            </section>

            {/* TESTIMONIALS */}

            <section id="testimonials">

                <Testimonials />

            </section>

            {/* ABOUT */}

            <section id="about">

                <About />

            </section>

            {/* CONTACT */}

            <section id="contact">

                <Contact />

            </section>

            {/* FOOTER */}

            <Footer />

        </div>
    );
}

export default Home;