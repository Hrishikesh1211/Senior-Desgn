import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Shield, ShieldAlert } from 'lucide-react';

const mockData = [
  { name: 'Last Hour', authorized: 145, unauthorized: 12 },
  { name: '2 Hours Ago', authorized: 132, unauthorized: 8 },
  { name: '3 Hours Ago', authorized: 156, unauthorized: 15 },
  { name: '4 Hours Ago', authorized: 123, unauthorized: 10 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Access Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <h3 className="text-lg font-medium text-green-800">Trusted Access</h3>
              <p className="text-3xl font-bold text-green-600">556</p>
            </div>
          </div>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <div className="flex items-center">
            <ShieldAlert className="w-8 h-8 text-red-600 mr-3" />
            <div>
              <h3 className="text-lg font-medium text-red-800">Unauthorized Attempts</h3>
              <p className="text-3xl font-bold text-red-600">45</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={mockData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="authorized" fill="#059669" name="Authorized Access" />
            <Bar dataKey="unauthorized" fill="#DC2626" name="Unauthorized Attempts" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};