export interface FrameType {
  id: number;
  label: string;
  desc: string;
  src: string;
}

export const frames: FrameType[] = [
  {
    id: 0,
    label: 'Winter Memories',
    desc: 'How was your winter break?',
    src: '/Frame1.png',
  },
  {
    id: 1,
    label: 'Happy New Year',
    desc: 'Goodbye 2025',
    src: '/Frame2.png',
  },
  {
    id: 2,
    label: 'MADE IN HEAVEN',
    desc: '2 3 5 7 11 13 17 19',
    src: '/temp3.jpg',
  },
];
