import { memo } from 'react';
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material';

interface ButtonProps extends MUIButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button = memo((props: ButtonProps) => {
  const { text, type = 'button', onClick, ...otherProps } = props;

  return (
    <MUIButton
      type={type}
      value="hello"
      onClick={onClick}
      {...otherProps}
    >
      {text}
    </MUIButton>
  );
});
