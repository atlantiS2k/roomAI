import { create } from 'zustand';

interface ImageStoreState {
  imageUrl?: string;
  setImageUrl: (url: string) => void;
}
interface RoomStoreState {
  room: string;
  setRoom: (room: string) => void;
}

interface ThemeStoreState {
  theme?: string | null;
  setTheme: (theme: string | null | undefined) => void;
}
interface LoadingStoreState {
  isLoading: boolean;
  setLoading: (opt: boolean) => void;
  isGenerating: boolean;
  setGenerating: (gen: boolean) => void;
}
interface OutputStoreState {
  output?: string;
  setOutput: (output: string) => void;
}
export const useImage = create<ImageStoreState>(set => ({
  imageUrl: undefined,
  setImageUrl: (url: string) => set({ imageUrl: url }),
}));
export const useRoom = create<RoomStoreState>(set => ({
  room: 'living room',
  setRoom: (room: string) => set({ room }),
}));
export const useTheme = create<ThemeStoreState>(set => ({
  Theme: undefined,
  setTheme: (theme: string | null | undefined) => set({ theme }),
}));
export const useOutput = create<OutputStoreState>(set => ({
  output: undefined,
  setOutput: (output: string) => set({ output }),
}));
export const useLoading = create<LoadingStoreState>(set => ({
  isLoading: true,
  setLoading: (opt: boolean) => set({ isLoading: opt }),
  isGenerating: false,
  setGenerating: (gen: boolean) => set({ isGenerating: gen }),
}));
