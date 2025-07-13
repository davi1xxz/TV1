
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
        <section id="inicio" className="pt-24 pb-16">
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

        {/* Stats Section */}
        <section className="py-6 bg-gradient-to-r from-red-500 to-pink-500">
          <div className="max-w-5xl mx-auto flex items-center justify-center gap-12">
            {/* Google */}
            <svg width="90" height="32" viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="24" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="24" fill="white">Google</text>
            </svg>
            {/* YouTube */}
            <svg width="90" height="32" viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="24" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="24" fill="white">YouTube</text>
            </svg>
            {/* Spotify */}
            <svg width="90" height="32" viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="24" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="24" fill="white">Spotify</text>
            </svg>
            {/* Genérico */}
            <svg width="90" height="32" viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="24" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="24" fill="white">Patrocinio</text>
            </svg>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default Index;
