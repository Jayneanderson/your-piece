import { useState } from 'react';
import { isExistsValueInOptions } from '../../data/data';
import { Option } from '../../types/types';
import { Box } from '../box/box';
import { Input } from '../forms/input/input';
import './select-list.css';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  options: Array<Option>;
  selectedOptions: Array<Option>;
  placeholderLabel: string;
  setSelectedOptions: React.Dispatch<React.SetStateAction<Array<Option>>>;
}

export const SelectList = ({
  options,
  selectedOptions,
  placeholderLabel,
  setSelectedOptions,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSeachValue] = useState<string>('');

  const handleSelectList = (): void => {
    setIsOpen(!isOpen);
    setSeachValue('');
  };

  const hasItems = (options: Option[]): boolean => {
    return options && options.length > 0;
  };

  const addOrRemoveItemToSeletectOptions = (option: Option): void => {
    setSelectedOptions((prevSelectedOptions) => {
      const exists = prevSelectedOptions.some(
        (item) => item.value === option.value
      );

      return exists
        ? prevSelectedOptions.filter((item) => item.value !== option.value)
        : [...prevSelectedOptions, option];
    });
  };

  const getFilterOptions = (options: Option[]) => {
    const result = options.filter((option) =>
      option.value.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );

    return result;
  };

  const handleSearchValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setSeachValue(value);
  };

  return (
    <Box className="select-list-container">
      <Box className="select-list-content">
        <button
          type="button"
          className="select-list-button"
          onClick={handleSelectList}
        >
          <Box id="selectList" className="select-list-button-container">
            <Box className="select-list-button-label-content">
              <span className="select-list-button-label">
                {hasItems(selectedOptions)
                  ? selectedOptions.length > 1
                    ? `${selectedOptions.length} selecionadas`
                    : selectedOptions[0].label
                  : placeholderLabel}
              </span>
            </Box>
            <Box className="select-list-button-icon-content">
              <svg
                className="select-list-button-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7602 6.44463L22.5579 5.2424C22.3977 5.08185 22.2131 5.00183 22.0045 5.00183C21.7963 5.00183 21.6119 5.08185 21.4517 5.2424L12.0001 14.6934L2.54901 5.24265C2.38872 5.0821 2.20425 5.00208 1.99587 5.00208C1.78739 5.00208 1.60293 5.0821 1.44272 5.24265L0.240565 6.44497C0.0800199 6.60518 0 6.78965 0 6.99812C0 7.20642 0.0802726 7.39089 0.240565 7.5511L11.447 18.7578C11.6072 18.9181 11.7917 18.9982 12.0001 18.9982C12.2085 18.9982 12.3927 18.9181 12.5529 18.7578L23.7602 7.5511C23.9204 7.39081 24 7.20634 24 6.99812C24 6.78965 23.9204 6.60518 23.7602 6.44463Z"
                  fill="#5D6570"
                />
              </svg>
            </Box>
          </Box>
        </button>
      </Box>

      {isOpen && hasItems(options) && (
        <>
          <Box
            className="select-overlay"
            onClick={() => setIsOpen(false)}
          ></Box>
          <Box className="select-list-items-container">
            <Input
              className="select-list-search"
              placeholder="Filtrar"
              onChange={handleSearchValue}
            />
            <Box className="select-list-items-content">
              {getFilterOptions(options)?.map((item, i) => {
                return (
                  <Box className="select-list-item" key={i}>
                    <label
                      className="select-list-item-label"
                      htmlFor={item.label}
                    >
                      <Input
                        className="select-list-item-input"
                        type="checkbox"
                        readOnly
                        id={item.label}
                        value={item.value}
                        checked={isExistsValueInOptions(
                          selectedOptions,
                          item.value
                        )}
                        onClick={() => addOrRemoveItemToSeletectOptions(item)}
                      />
                      <span className="select-list-item-text">
                        {item.label}
                      </span>
                    </label>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};
