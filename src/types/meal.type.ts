export interface Meal {
  id: number;
  image: string;
  type: 'Morning' | 'Lunch' | 'Dinner' | 'Snack';
  datedOn: string;
} 