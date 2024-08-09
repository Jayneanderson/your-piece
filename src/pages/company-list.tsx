import { useEffect, useState } from 'react';

import { Box } from '../components/box/box';
import { Company } from '../components/company/company-item/company-item';
import { Input } from '../components/forms/input/input';
import { List } from '../components/list/list';
import { SelectList } from '../components/select-list/select-list';

import { data, getUniqueOptionsByAttribute } from '../data/data';
import { CompanyProps, ListType, Option } from '../types/types';

import { Banner } from '../components/banner/banner';
import { Title } from '../components/titles/title';
import { orderBy } from '../utils/order-by';
import { ListTypeBar } from '../components/list/list-type-bar/list-type-bar';
import './company-list.css';

export const CompanyList = () => {
  const [companyName, setCompanyName] = useState<string>('');
  const [selectedCities, setSelectedCities] = useState<Option[]>([]);
  const [companyTypesSelected, setCompanyTypesSelected] = useState<Option[]>(
    []
  );
  const [filtered, setFiltered] = useState<CompanyProps[]>([]);
  // const [orderByCompanies, setOrderByCompanies] = useState<OrderBy | null>(
  //   null
  // );
  const [listType, setListType] = useState<ListType['type']>('card');

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

    setFiltered(orderBy({ data: result, attribute: 'name', order: null }));
  };

  const handleCompanyNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;
    setCompanyName(value);
  };

  const updateListType = (newType: ListType['type']) => {
    setListType(newType);
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
            options={getUniqueOptionsByAttribute({
              data,
              attribute: 'type',
              orderBy: 'asc',
            })}
            selectedOptions={companyTypesSelected}
            placeholderLabel="Tipo. Exemplo: Assistência"
            setSelectedOptions={setCompanyTypesSelected}
          />

          <SelectList
            id="selectListCity"
            options={getUniqueOptionsByAttribute({
              data,
              attribute: 'city',
              orderBy: 'asc',
            })}
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
        <ListTypeBar onListTypeClick={updateListType} listType={listType} />
        <List
          listtype="unordered"
          className="company-list"
          id={listType === 'card' ? 'card' : 'row'}
        >
          {filtered?.map((item, i) => (
            <Company
              id={listType === 'card' ? 'companyCard' : 'companyRow'}
              company={item}
              key={i}
            ></Company>
          ))}
        </List>
      </section>
    </>
  );
};
