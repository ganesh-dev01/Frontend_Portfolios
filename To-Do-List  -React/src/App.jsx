import React, { useState, useEffect } from 'react';
import To_Do from './To_Do';

const App = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDarkMode ? 'dark' : 'light');

        document.body.className = theme;
    }, [theme]);

    return (
        <div className="App">
            <To_Do />
        </div>
    );
}

export default App;
