import React from 'react';
import { StyledInput } from './Form.styles';

type TitleInputProps = {
  onSubmit: Function;
  placeholder?: string;
};

export const TitleInput = (props: TitleInputProps) => {
  const { onSubmit, placeholder = 'New Item' } = props;

  const [title, setTitle] = React.useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!title) return;
    onSubmit(title);
    setTitle('');
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      style={{ display: 'flex', margin: '0.1rem' }}
    >
      <StyledInput
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder={placeholder}
      />
    </form>
  );
};
