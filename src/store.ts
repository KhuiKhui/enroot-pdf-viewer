import { atom } from 'jotai';

interface FormValuesProps {
  name: string;
  quote: string;
  media1?: File;
  media2?: File;
  media3?: File;
  frameId: number;
}

export const formValuesAtom = atom<FormValuesProps>({
  name: '',
  quote: '',
  frameId: 0,
});

export const frameIdAtom = atom<number>(0);
