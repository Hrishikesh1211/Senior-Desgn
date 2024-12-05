export type User = 'A' | 'B' | 'C' | 'D';
export type Resource = 'S3' | 'EC2' | 'VPC';
export type NetworkCondition = 'trusted' | 'untrusted';

export interface AccessAttempt {
  id: string;
  timestamp: Date;
  user: User;
  resource: Resource;
  network: NetworkCondition;
  success: boolean;
  reason: string;
}

export interface PolicyData {
  id: string;
  type: 'IAM' | 'Bucket' | 'Network';
  name: string;
  content: string;
}