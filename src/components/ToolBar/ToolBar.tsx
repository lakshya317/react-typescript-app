import React from 'react';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import Shell_Logo from '../../assets/images/Shell_Logo.png';
import "./ToolBar.scss"

export default function TooolBar() {
    return (
        <div className="toolbar">
            <div className='shell-logo-container'>
                <img className="shell-logo" src={Shell_Logo} alt="Shell Logo" />
            </div>
            <ThemeToggle />
        </div>
    );
}
