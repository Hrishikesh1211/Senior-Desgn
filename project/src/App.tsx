import React from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { AccessSimulator } from './components/AccessSimulator';
import { PolicyEditor } from './components/PolicyEditor';

const mockPolicy = {
  id: '1',
  type: 'IAM' as const,
  name: 'S3 Bucket Policy',
  content: JSON.stringify({
    Version: '2012-10-17',
    Statement: [
      {
        Effect: 'Allow',
        Principal: '*',
        Action: 's3:GetObject',
        Resource: 'arn:aws:s3:::example-bucket/*',
        Condition: {
          IpAddress: {
            'aws:SourceIp': ['192.0.2.0/24', '198.51.100.0/24']
          }
        }
      }
    ]
  }, null, 2)
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Dashboard />
            <AccessSimulator />
          </div>
          <div>
            <PolicyEditor 
              policy={mockPolicy}
              onSave={(content) => console.log('Policy updated:', content)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;