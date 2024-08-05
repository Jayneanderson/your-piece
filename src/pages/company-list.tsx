import { useEffect, useState } from 'react';

import { Box } from '../components/box/box';
import { Company } from '../components/company/company-item/company-item';
import { Input } from '../components/forms/input/input';
import { List } from '../components/list/list';
import { SelectList } from '../components/select-list/select-list';

import { allCities, data, getUniqueOptions } from '../data/data';
import { CompanyProps, Option } from '../types/types';

import './company-list.css';
import { Banner } from '../components/banner/banner';
import { Title } from '../components/titles/title';

export const CompanyList = () => {
  const [companyName, setCompanyName] = useState<string>('');
  const [selectedCities, setSelectedCities] = useState<Option[]>([]);
  const [companyTypesSelected, setCompanyTypesSelected] = useState<Option[]>(
    []
  );
  const [filtered, setFiltered] = useState<CompanyProps[]>([]);

  useEffect(() => {
    applyFilter();
  }, [selectedCities, companyName, companyTypesSelected]);

  const applyFilter = () => {
    const selectedValues = selectedCities.map((option) => option.value);
    const selectedTypes = companyTypesSelected.map((option) => option.value);

    const result = data?.filter((company) => {
      const matchesCity =
        selectedValues.length > 0
          ? selectedValues.includes(company.city)
          : true;
      const matchesName = companyName
        ? company.name.toLowerCase().includes(companyName.toLowerCase())
        : true;

      const matchTypes =
        selectedTypes.length > 0 ? selectedTypes.includes(company.type) : true;

      return matchesCity && matchesName && matchTypes;
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
    <>
      <Banner />
      <section className="company-list-container">
        <Title className="company-section-title" size="1">
          Pessoas e empresas
        </Title>
        <Box className="company-list-agroup">
          <SelectList
            options={getUniqueOptions(
              data.map((company) => {
                return {
                  value: company.type,
                  label: company.type,
                };
              })
            )}
            selectedOptions={companyTypesSelected}
            placeholderLabel="Tipo. Exemplo: Assistência"
            setSelectedOptions={setCompanyTypesSelected}
          />

          <SelectList
            id="selectListCity"
            options={getUniqueOptions(allCities)}
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
      </section>
    </>
  );
};
