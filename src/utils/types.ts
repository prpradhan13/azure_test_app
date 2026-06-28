import type { FieldElementProps } from '@formisch/react';

export interface TextInputProps extends FieldElementProps {
  type: 'text' | 'email' | 'tel' | 'password' | 'url' | 'date';
  label?: string;
  placeholder?: string;
  input: string | undefined;
  errors: [string, ...string[]] | null;
  required?: boolean;
}