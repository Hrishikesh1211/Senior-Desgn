import React from 'react';
import Editor from '@monaco-editor/react';
import { PolicyData } from '../types';

interface PolicyEditorProps {
  policy: PolicyData;
  onSave: (content: string) => void;
}

export const PolicyEditor: React.FC<PolicyEditorProps> = ({ policy, onSave }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Policy Editor - {policy.name}</h2>
      <div className="h-[400px] border rounded-md overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="json"
          defaultValue={policy.content}
          theme="vs-light"
          options={{
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            fontSize: 14,
          }}
          onChange={(value) => value && onSave(value)}
        />
      </div>
    </div>
  );
};