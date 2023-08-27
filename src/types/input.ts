export interface InputProps {
  type?: any;
  name?: string;
  labelTitle?: string;
  placeholder?: any;
  isLoading?: boolean;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  isClear?: boolean;
  onClear?: () => void;
  hasError?: boolean;
  errorMessage?: string;
  testID?: string;
  ref?: any;
}
