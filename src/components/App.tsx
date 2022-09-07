import React, { useContext } from 'react';
import './App.scss';
import { ThemeContext } from '../contexts/ThemeContext';
import TooolBar from './ToolBar/ToolBar';
import ScrollPage from './ScrollPage/ScrollPage';

const App: React.FC<{}> = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`App ${theme}`}>
            <TooolBar />
            <div className="app-body">
                <ScrollPage />
            </div>
        </div>
    );
};

export default App;
