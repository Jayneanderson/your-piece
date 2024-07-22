import { useState } from 'react';
import { Box } from '../components/box/box';
import { Company } from '../components/company/company-item/company-item';
import { Input } from '../components/forms/input/input';
import { List } from '../components/list/list';
import { data } from '../data/data';
import './company-list.css';
import { Dropdown } from '../components/dropdown/dropdown';

export const CompanyList = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    console.log(value);
    setSearchValue(value);
  };

  const filtered =
    searchValue.length > 0
      ? data?.filter((company) =>
          company.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : data;

  return (
    <Box className="company-list-container">
      <Dropdown
        options={data.map((item) => {
          return {
            label: item.city,
            value: item.city,
          };
        })}
      />
      <Box className="company-list-search-container">
        <Input
          id="company-list-input-search"
          placeholder="Nome da empresa"
          onChange={handleSearchChange}
          value={searchValue}
          className="company-list-search"
        />
      </Box>
      <List listType="unordered" className="company-list">
        {filtered?.map((item, i) => <Company key={i} {...item}></Company>)}
      </List>
    </Box>
  );
};
