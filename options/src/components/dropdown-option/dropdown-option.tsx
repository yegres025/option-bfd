import './dropdown-option.css';

interface DropdownOptionProps {
  options: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  disabled?: boolean;
}

export default function DropdownOption({
  options,
  onChange,
  disabled,
}: DropdownOptionProps) {
  return (
    <select onChange={onChange} disabled={disabled} className='dropdown-option'>
      <option value=''>Выберите...</option>
      {options.map((select) => (
        <option key={select} value={select}>
          {select}
        </option>
      ))}
    </select>
  );
}
