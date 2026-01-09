import { atom } from 'jotai';

interface FormValuesProps {
  name: string;
  quote: string;
  media1?: File;
  media2?: File;
  media3?: File;
}

export const formValuesAtom = atom<FormValuesProps>({
  name: 'ROOTie',
  quote: 'Trailblazing a World by Design!!',
});
