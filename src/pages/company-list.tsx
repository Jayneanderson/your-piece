import { useEffect, useState } from 'react';

import { Box } from '../components/box/box';
import { Company } from '../components/company/company-item/company-item';
import { Input } from '../components/forms/input/input';
import { List } from '../components/list/list';
import { SelectList } from '../components/select-list/select-list';

import {
  allCities,
  data,
  getUniqueCities as findUniqueCities,
} from '../data/data';
import { CompanyProps, Option } from '../types/types';

import './company-list.css';

export const CompanyList = () => {
  const [companyName, setCompanyName] = useState<string>('');
  const [selectedCities, setSelectedCities] = useState<Option[]>([]);
  const [filtered, setFiltered] = useState<CompanyProps[]>([]);

  useEffect(() => {
    applyFilter();
  }, [selectedCities, companyName, selectedCities]);

  const applyFilter = () => {
    const selectedValues = selectedCities.map((option) => option.value);

    const result = data?.filter((company) => {
      const matchesCity =
        selectedValues.length > 0
          ? selectedValues.includes(company.city)
          : true;
      const matchesName = companyName
        ? company.name.toLowerCase().includes(companyName.toLowerCase())
        : true;

      return matchesCity && matchesName;
    });

    setFiltered(result);
  };

  const handleCompanyNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setCompanyName(value);
  };

  return (
    <Box className="company-list-container">
      <p className="company-list-text">
        Encontre empresas e pessoas empreendedoras de <strong>Cachoeira</strong>
        . Algumas regiões próximas serão inclusas futuramente.
      </p>
      <Box className="company-list-agroup">
        <SelectList
          options={findUniqueCities(allCities)}
          selectedOptions={selectedCities}
          placeholderLabel="Cidade"
          setSelectedOptions={setSelectedCities}
        />
        <Box className="company-list-search-container">
          <Input
            id="company-list-input-search"
            placeholder="Nome da empresa"
            onChange={handleCompanyNameChange}
            value={companyName}
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
