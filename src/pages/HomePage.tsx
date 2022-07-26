import { FC } from 'react';
import ImgGallery from '../components/ImgGallery';
import { Team } from '../components/Team';
import { Footer } from '../components/Footer';

export const HomePage = () => {
    return (
        <div className="absolute h-screen inset-0 homewrapper">
            <ImgGallery />
            <Team />
            <Footer />
        </div>
    );
};