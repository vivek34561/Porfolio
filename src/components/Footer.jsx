import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <p className="text-gray-300 text-sm flex items-center justify-center gap-2">
            Built with <Heart size={16} className="text-red-500" /> by Vivek
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
