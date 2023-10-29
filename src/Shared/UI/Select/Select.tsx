import { useState } from "react";
import "./Select.scss";

interface ISelectProps {
  options: string[];
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLLIElement>) => void;
}

const Select: React.FC<ISelectProps> = ({ options, placeholder, onChange }) => {
  const [select, setSelect] = useState<string>(placeholder || "default");
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLLIElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className="select">
      <h5 onClick={() => setOpen(!open)}>{select}</h5>
      {open ? (
        <ul>
          {options.map((option) => (
            <li
              key={option}
              onChange={handleChange}
              onClick={() => {
                setSelect(option);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
