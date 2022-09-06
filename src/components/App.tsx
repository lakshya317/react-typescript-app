import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './App.scss';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const App: React.FC<{}> = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`App ${theme}`}>
            <h1>Hello World!</h1>
            <div className="toggle-container">
                <label htmlFor="theme-toggle">Light</label>
                <Toggle
                    checked={theme === 'light'}
                    id="theme-toggle"
                    value={theme}
                    onChange={toggleTheme}
                />
                <label htmlFor="theme-toggle">Dark</label>
            </div>
        </div>
    );
}

export default App;
