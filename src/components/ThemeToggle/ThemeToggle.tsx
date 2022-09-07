import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Toggle from 'react-toggle';
import Day from '../../assets/icons/sun.png';
import Night from '../../assets/icons/moon.png';
import 'react-toggle/style.css';
import './ThemeToggle.scss';

export function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="toggle-container">
            <Toggle
                checked={theme === 'light'}
                id="theme-toggle"
                value={theme}
                onChange={toggleTheme}
                className="custom-toggle"
                icons={{
                    checked: <img src={Day} alt="Day" className="toggle-icon-sun" />,
                    unchecked: <img src={Night} alt="Night" className="toggle-icon-moon" />
                }}
            />
        </div>
    );
}
