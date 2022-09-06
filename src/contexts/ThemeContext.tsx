import React, { useState, createContext, PropsWithChildren } from 'react';

export const ThemeContext = createContext<any>({ theme: 'light', setTheme: undefined });

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    type themeType = 'light' | 'dark';

    const [theme, setTheme] = useState<themeType>('light');

    const toggleTheme = () => {
        console.log('Toggling!');
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
