import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t py-4 fixed bottom-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © 2024 Rádio Web Vibe Central. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 