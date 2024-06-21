import coastal from '@/assets/coastal.png';

import tribal from '@/assets/tribal.png';
import tropical from '@/assets/tropical.png';
import vintage from '@/assets/vintage.png';
import { StaticImageData } from 'next/image';

export const SelectInpOptions: { value: string; label: string }[] = [
  { value: 'living room', label: 'Living Room' },
  { value: 'bedroom', label: 'Bedroom' },
  { value: 'bathroom', label: 'Bathroom' },
  { value: 'kitchen', label: 'Kitchen' },
];

export const ThemesOptions: { value: string; imgUrl: StaticImageData }[] = [
  { value: 'coastal', imgUrl: coastal },
//   { value: 'modern', imgUrl: modern },
//   { value: 'professional', imgUrl: professional },
  { value: 'tribal', imgUrl: tribal },
  { value: 'tropical', imgUrl: tropical },
  { value: 'vintage', imgUrl: vintage },
];
