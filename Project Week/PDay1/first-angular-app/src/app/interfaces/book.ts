export interface Book {
  _id: string;
  title: string;
  nbOfPages: number;
  author: string;
  image?: string; //Optional property
}