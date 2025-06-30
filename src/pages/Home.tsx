import React, { Suspense, lazy } from 'react';
import Hero from '../components/sections/Hero';

const Services = lazy(() => import('../components/sections/Services'));
const Doctors = lazy(() => import('../components/sections/Doctors'));
const Facilities = lazy(() => import('../components/sections/Facilities'));
const Testimonials = lazy(() => import('../components/sections/Testimonials'));
const Statistics = lazy(() => import('../components/sections/Statistics'));
const Contact = lazy(() => import('../components/sections/Contact'));

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-sky-500"></div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
        <Doctors />
        <Facilities />
        <Statistics />
        <Testimonials />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home; 