
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navbar from '../components/Navbar';
import VideoPlayer from '../components/VideoPlayer';
import { Waves, Users, Radio, Headphones } from 'lucide-react';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-300">
        <Navbar />
        
        {/* Hero Section */}
        <section id="inicio" className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Sua Rádio Online
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Transmitindo música, notícias e entretenimento 24 horas por dia. 
                Conectando você com o que há de melhor na região.
              </p>
            </div>

            {/* Video Player */}
            <div className="mb-20">
              <video controls width="100%" style={{background: '#222', borderRadius: '12px'}}>
                <source src="/sample.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default Index;
