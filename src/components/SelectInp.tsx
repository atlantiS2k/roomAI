'use client';
import { useRoom } from '@/store/useStore';
import { SelectInpOptions } from '@/utils/constants';
import React from 'react';
import Select from 'react-select';
interface SelectOption {
  value: string;
  label: string;
}
function SelectInp() {
  const setRoom = useRoom(state => state.setRoom);
  function handleChange(e: SelectOption) {
    setRoom(e.value);
  }

  return (
    <div className="w-full">
      <Select
        onChange={handleChange}
        options={SelectInpOptions}
        defaultValue={SelectInpOptions[0]}
      />
    </div>
  );
}

export default SelectInp;
