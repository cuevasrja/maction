import { useEffect } from "react"
import "./App.css"
import Register from "./components/Register"
import { useToggle } from "./hooks/useToggle"
import { ToggleButton } from "./components/ToggleButton"

function App() {
    const [darkMode, toggleMode] = useToggle()

    useEffect(() => {
        console.log(`darkMode: ${darkMode}`);
        document.documentElement.classList.toggle("dark")
        if (darkMode) {
            document.body.style.colorScheme = "dark"
        } else {
            document.body.style.colorScheme = "light"
        }
    }, [darkMode])

    return (
        <>
            <ToggleButton toggleMode={toggleMode} />
            <Register darkMode={darkMode} />
        </>
    )
}

export default App
