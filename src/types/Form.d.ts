export interface Options<Label = string, Value = string> {
  id?: number;
  label: Label;
  value: Value;
}

export interface Option {
  value: string;
  label: string;
}
