export interface PickerItem {
  value: string|number;
  label: string;
}

export interface PickerProps {
  children?: PickerItem[];
  pure?: boolean;
  disabled?: boolean;
  selectedValue?: any;
  onValueChange?: (value: any) => void;
  /** web only */
  prefixCls?: string;
  indicatorStyle?: any;
  className?: string;
  /** web only */
  defaultSelectedValue?: any;
  itemStyle?: any;
}