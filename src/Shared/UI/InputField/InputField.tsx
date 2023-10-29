import "./InputField.scss";

interface IInputProps {
  required?: boolean;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}

const InputField: React.FC<IInputProps> = ({
  required,
  placeholder,
  onChange,
  value,
}: IInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className="ui-input">
      <input value={value} onChange={handleInputChange} type="text" />
      <label>
        {value !== "" ? (
          ""
        ) : required ? (
          <>
            <span>*</span> {placeholder}
          </>
        ) : (
          placeholder
        )}
      </label>
    </div>
  );
};

export default InputField;
