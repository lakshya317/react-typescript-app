import React from 'react';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import Shell_Logo from '../../assets/images/Shell_Logo.png';
import './ToolBar.scss';

const TooolBar: React.FC<{}> = () => {
    return (
        <div className="toolbar">
            <div className="shell-logo-container" onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }}>
                <img className="shell-logo" src={Shell_Logo} alt="Shell Logo" />
            </div>
            <ThemeToggle />
        </div>
    );
}

export default TooolBar;