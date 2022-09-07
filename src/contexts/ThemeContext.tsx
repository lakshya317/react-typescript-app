import React, { useState, useEffect, createContext, PropsWithChildren } from 'react';

export const ThemeContext = createContext<any>({ theme: 'light', setTheme: undefined });

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    type themeType = 'light' | 'dark';

    const [theme, setTheme] = useState<themeType>('dark');

    useEffect(() => {
        let localTheme: string | null = window.localStorage.getItem('theme');

        if (localTheme) {
            setTheme(localTheme as themeType);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
