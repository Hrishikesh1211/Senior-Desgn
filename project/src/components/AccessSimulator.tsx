import React, { useState } from 'react';
import { User, Resource, NetworkCondition } from '../types';

export const AccessSimulator: React.FC = () => {
  const [user, setUser] = useState<User>('A');
  const [resource, setResource] = useState<Resource>('S3');
  const [network, setNetwork] = useState<NetworkCondition>('trusted');
  const [result, setResult] = useState<string | null>(null);

  const handleSimulate = () => {
    // Simulate access logic (mock)
    const allowed = network === 'trusted' && user !== 'D';
    setResult(
      allowed
        ? 'Access Granted: User authenticated from trusted network'
        : `Access Denied: ${network === 'untrusted' ? 'Untrusted Network' : 'Unauthorized User'}`
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Access Simulator</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">User</label>
          <select
            value={user}
            onChange={(e) => setUser(e.target.value as User)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {['A', 'B', 'C', 'D'].map((u) => (
              <option key={u} value={u}>
                User {u}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Resource</label>
          <select
            value={resource}
            onChange={(e) => setResource(e.target.value as Resource)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {['S3', 'EC2', 'VPC'].map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Network Condition</label>
          <select
            value={network}
            onChange={(e) => setNetwork(e.target.value as NetworkCondition)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="trusted">Trusted IP</option>
            <option value="untrusted">Untrusted IP</option>
          </select>
        </div>

        <button
          onClick={handleSimulate}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Simulate Access
        </button>

        {result && (
          <div
            className={`mt-4 p-4 rounded-md ${
              result.includes('Granted') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {result}
          </div>
        )}
      </div>
    </div>
  );
};