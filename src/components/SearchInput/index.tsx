import React, { useState } from 'react';
import { Input } from './styles';

function SearchInput() {
  const [value, setValue] = useState('');

  const handleChange = (e: string) => {
    setValue(e);
  };

  return (
    <>
      <Input
        id='task'
        list='task-suggestions'
        placeholder='Pesquisar'
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <datalist id='task-suggestions'>
        <option value='Desenvolver um app' />
        <option value='Desenvolver um site' />
        <option value='Desenvolver um game' />
        <option value='Desenvolver um software' />
      </datalist>
    </>
  );
}

export { SearchInput };
