export interface Card {
  title: string;
  blocks: {
    title: string;
    content: { title: string; link: string }[];
  }[];
  color: string;
}