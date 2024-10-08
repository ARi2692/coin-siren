import React from 'react';
import Header from '../molecules/Nav';
import Footer from '../organisms/Footer';

type MainTemplateProps = {
  children: React.ReactNode;
};

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow mt-8"> 
      {children}
    </main>
    <Footer />
  </div>
);

export default MainTemplate;
