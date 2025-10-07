import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Portfolio from "./pages/Portfolio.js";
import Footer from "./components/Footer.js";
import CustomCursor from "./components/CustomCursor.js";
import "./styles/variables.css"; // чтобы подтянулись :root и [data-theme]

function App() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <>
            <CustomCursor />
            <Header theme={theme} setTheme={setTheme} />

            <main>
                <Home />
                <About />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
}

export default App;
