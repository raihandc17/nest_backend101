export interface Ticket {
  id: number;
  subject: string;
  description: string;
  priyority: 'low' | 'medium' | 'high';
  status: 'open' | 'closed';
  createAt: string;
}
