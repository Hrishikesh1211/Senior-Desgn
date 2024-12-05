import React from 'react';
import { Shield } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center">
        <Shield className="w-8 h-8 mr-3" />
        <h1 className="text-2xl font-bold">AWS Data Perimeter Dashboard</h1>
      </div>
    </header>
  );
};