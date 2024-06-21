'use client';
import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/store/useStore';
import { ThemesOptions } from '@/utils/constants';

function ThemeOptions() {
  const setTheme = useTheme(state => state.setTheme);

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    document.querySelector('.selected')?.classList.remove('selected');
    e.currentTarget.classList.add('selected');
    setTheme(e.currentTarget.lastChild?.textContent);
  }

  return (
    <div className="grid grid-cols-3 gap-5">
      {ThemesOptions.map((theme, index) => {
        return (
          <div
            onClick={handleClick}
            key={index}
            className="cursor-pointer transition-all flex flex-col items-center gap-2 group"
          >
            <Image
              src={theme.imgUrl}
              alt="theme"
              className="rounded-lg group-hover:opacity-80"
            />
            <p className="font-semibold text-white">{theme.value}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ThemeOptions;
