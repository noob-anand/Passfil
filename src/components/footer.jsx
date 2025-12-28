import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full mt-20">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="font-bold text-2xl flex items-center">
          <span>P@ss</span>
          <span className="text-purple-500">Fil~</span>
        </div>

        {/* Info */}
        <div className="text-center md:text-left text-sm text-gray-300">
          <p>
            Built with <span className="text-red-500">❤️</span> by Anand Sharma
          </p>
          <p className="text-purple-400">
            anandsharma@gmail.com
          </p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          © 2025 P@ssFil~. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;



