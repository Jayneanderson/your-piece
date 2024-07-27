import { useEffect, useState } from 'react';
import { Box } from '../components/box/box';
import { Company } from '../components/company/company-item/company-item';
import { Dropdown } from '../components/dropdown/dropdown';
import { Input } from '../components/forms/input/input';
import { List } from '../components/list/list';
import { allCities, data } from '../data/data';
import { CompanyProps, Option } from '../types/types';
import './company-list.css';

export const CompanyList = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [filtered, setFiltered] = useState<CompanyProps[]>([]);

  useEffect(() => {
    applyFilter();
  }, [selectedCities, searchValue]);

  const applyFilter = () => {
    const filtered = hasFilter()
      ? data?.filter(
          (company) =>
            selectedCities.includes(company.city) &&
            company.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : data;

    setFiltered(filtered);
  };

  const hasFilter = (): boolean => {
    return !!searchValue || selectedCities.length > 0;
  };

  // TODO: refatorar para retirar O(n²)
  const getUniqueCities = (
    options: Option[],
    selecteds: string[]
  ): Option[] => {
    const citiesMap = new Map<Option['label'], Option['value']>();

    const result = options.reduce<Option[]>((acc, option, i) => {
      if (
        !citiesMap.has(option.label) &&
        !selecteds.find((selected) => selected === option.value)
      ) {
        citiesMap.set(option.label, option.value);
        acc.push(option);
      }

      return acc;
    }, []);

    return result;
  };

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setSearchValue(value);
  };

  return (
    <Box className="company-list-container">
      <Box className="company-list-agroup">
        <Dropdown
          options={getUniqueCities(allCities, selectedCities)}
          setOptions={setSelectedCities}
          selectdOptions={selectedCities}
          setSelectedOptions={setSelectedCities}
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
      </Box>
      <List listType="unordered" className="company-list">
        {filtered?.map((item, i) => <Company key={i} {...item}></Company>)}
      </List>
    </Box>
  );
};
