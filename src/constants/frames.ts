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
    desc: 'Capture the quiet magic of the season with this elegant, winter-themed frame. Adorned with delicate, shimmering snowflakes and a soft frosted finish, it perfectly preserves your favorite cold-weather memories. Its cool silver tones and crystalline accents bring a touch of woodland wonder to any room, making every snapshot feel like a cozy, timeless masterpiece.',
    src: '/Frame1.png',
  },
  {
    id: 1,
    label: 'Happy New Year!',
    desc: 'Capture the joy and excitement of the new year with this vibrant, festive frame. Featuring a rich background adorned with golden stripes, it adds a touch of celebration to any cherished moment. Perfect for marking the beginning of a fresh chapter, this frame brings warmth and optimism to your most treasured memories.',
    src: '/Frame2.png',
  },
];
