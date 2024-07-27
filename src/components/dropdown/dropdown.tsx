import { useState } from 'react';
import './dropdown.css';
import { Input } from '../forms/input/input';
import { Box } from '../box/box';
import { Option } from '../../types/types';

export interface SelectProps {
  selectdOptions: Array<string>;
  options: Array<Option>;
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

interface SelectListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}

const Dropdown = ({
  options,
  selectdOptions,
  setOptions,
  setSelectedOptions,
}: SelectProps) => {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // const getUniqueCities = (
  //   options: Option[],
  //   selecteds: string[]
  // ): Option[] | null => {
  //   const citiesMap = new Map<Option['label'], Option['value']>();

  //   const result = options.reduce<Option[]>((acc, option, i) => {
  //     // if (!citiesMap.has(option.label) && !selectedItemsMap.has(selecteds[i])) {
  //     if (
  //       !citiesMap.has(option.label) &&
  //       !selecteds.find((selected) => selected === option.value)
  //     ) {
  //       citiesMap.set(option.label, option.value);
  //       acc.push(option);
  //     }

  //     return acc;
  //   }, []);

  //   return result;
  // };

  const handleInputClick = (): void => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.currentTarget.value;
    setInputValue(value);
    setIsOpen(true);
  };

  const handleAddSelectedItem = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void => {
    const value = event.currentTarget.getAttribute('value');

    const item = selectdOptions?.find((i) => i === value);

    if (!item) {
      setOptions([...selectdOptions, value as string]);
    }
  };

  const handleRemoveSelectedItem = (item: string): void => {
    setOptions(selectdOptions.filter((i) => i !== item));
    setIsOpen(false);
  };

  const hasMenuOptions = (options: Option[]): boolean => {
    return options && options.length > 0;
  };

  const hasSelectedOptions = (seleteds: string[]): boolean => {
    return !!seleteds.length;
  };

  const handleRemoveAllSelected = (): void => {
    setSelectedOptions([]);
  };

  // window.onclick = (event: Reac): void => {
  //   event.preventDefault();
  //   console.log(event.target?.name);
  //   if (!event.currentTarget.id?.includes('dropdown') && isOpen) {
  //     setIsOpen(false);
  //   }
  //   if (event.currentTarget.id?.includes('dropdown') && !isOpen) {
  //     setIsOpen(true);
  //   }
  // };

  /* 
  [v] - preciso definir um position absolute para a lista 
  [v] - ao clicar no botão de busca, a listagem deve aparecer;
  [v] - ao selecionar o item, a lista deve aparecer;
  [] - deve ter um botão para limpar o campo e deixar sem valor
  [] - se a lista estiver aberta e eu clicar fora do input, a lista deve ser fechada
 */

  return (
    <Box className="dropdown">
      <Box className="dropdown-container" onClick={handleInputClick} id="">
        <Box
          className={`dropdown-selected-container${isOpen ? ' selected' : ''}`}
        >
          <Box className="selected-multi-container">
            {selectdOptions?.map((item, i) => {
              return (
                <Box className="selected-multi-value" key={i}>
                  <Box id="selectedValue" className="selected-value">
                    {item}
                  </Box>
                  <Box
                    className="selected-value-remove"
                    onClick={() => handleRemoveSelectedItem(item)}
                  >
                    <svg
                      className="selected-value-remove-icon"
                      height="14"
                      width="14"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                    </svg>
                  </Box>
                </Box>
              );
            })}
            <Input
              className="dropdown-search"
              type="text"
              id="dropdown"
              name="teste"
              value={inputValue as string}
              onChange={handleInputChange}
            />
          </Box>

          <Box className="dropdown-utils">
            {hasSelectedOptions(selectdOptions) && (
              <Box
                className="dropdown-utils-remove"
                onClick={handleRemoveAllSelected}
              >
                <svg
                  className="dropdown-utils-remove-icon"
                  height="14"
                  width="14"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
                    fill="#5D6570"
                  ></path>
                </svg>
              </Box>
            )}

            <Box className="dropdown-utils-select">
              <svg
                className="dropdown-utils-select-icon"
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
        </Box>
      </Box>

      {isOpen && hasMenuOptions(options) && (
        <ul className="select-list">
          {options?.map((item, i) => {
            return (
              <SelectListItem
                className={`select-list-item`}
                key={i}
                id={String(i)}
                onClick={handleAddSelectedItem}
                value={item.value}
              >
                {item.label}
              </SelectListItem>
            );
          })}
        </ul>
      )}
    </Box>
  );
};

const SelectListItem = (props: SelectListItemProps) => {
  return <li {...props}></li>;
};

export { Dropdown };
