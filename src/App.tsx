import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
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
