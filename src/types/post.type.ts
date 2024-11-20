export interface Post {
  id: number;
  image: string;
  date: string;
  time: string;
  title: string;
  tags?: string[];
  className?: string;
}
