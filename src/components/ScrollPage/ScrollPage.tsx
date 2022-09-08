import * as React from 'react';
import React_TS from '../../assets/images/React_Typescript_Logo.png';
import './ScrollPage.scss';
import cartoonsData from '../../assets/data/cartoons.json';
import CartoonCard from '../CartoonCard/CartoonCard';

interface cartoonType {
    id: number;
    title: string;
    year: number;
    genre: Array<string>;
    image: string;
}

const ScrollPage: React.FC<{}> = () => {
    const cartoons: Array<cartoonType> = cartoonsData.map((cartoon) => {
        return {
            id: cartoon.id,
            title: cartoon.title,
            year: cartoon.year,
            genre: cartoon.genre,
            image: cartoon.image
        };
    });

    return (
        <div className="main-container">
            <div className="body-title-container">
                <img src={React_TS} alt="React Typescript" className="react-ts-logo" />
                <h1 className="body-title">Welcome to a React App made using TypeScript</h1>
            </div>
            <h2 className="body-title cartoon-body-header">My Favourite Cartoons:</h2>
            <div className="cartoon-cards">
                {cartoons.map((cartoon) => {
                    return <CartoonCard key={cartoon.id} cartoon={cartoon} />;
                })}
            </div>
        </div>
    );
};

export default ScrollPage;
