'use client';
import {
  useImage,
  useLoading,
  useOutput,
  useRoom,
  useTheme,
} from '@/store/useStore';
import React from 'react';

function GenerateBtn() {
  const imageUrl = useImage(state => state.imageUrl);
  const theme = useTheme(state => state.theme);
  const room = useRoom(state => state.room);
  const setOutput = useOutput(state => state.setOutput);
  const setLoading = useLoading(state => state.setLoading);
  const setGenerating = useLoading(state => state.setGenerating);

  async function handleClick() {
    if (imageUrl && theme) {
      setLoading(true);
      setGenerating(true);
      const res = await fetch('/api/dream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          theme,
          room,
          imageUrl,
        }),
      });

      const newPhoto = await res.json();
      setLoading(false);
      setOutput(newPhoto[1]);
    }
  }
  return (
    <button
      onClick={handleClick}
      className={`${
        imageUrl && theme ? '' : 'cursor-not-allowed'
      } p-5 w-full bg-blue-700 text-white rounded-lg hover:opacity-90 active:scale-[.98] transition`}
    >
      Generate Room
    </button>
  );
}

export default GenerateBtn;
