import { Flex } from '@chakra-ui/react';
import { ChangeEvent, useContext } from 'react';
import { InputGroup } from './InputGroup';
import { CompaniesContext } from '../contexts/CompaniesContext';
import * as api from '../lib/api';

type Props = {};

export function FormCreateCompany({}: Props) {
  const { company, handleChangeCompanyFormText } = useContext(CompaniesContext);

  const fetchAddressByZipCode = async (zipCode: string) => {
    try {
      const { data } = await api.fetchAddress(zipCode);

      const { logradouro, bairro, localidade, uf } = data;

      [
        { name: 'address', value: logradouro },
        { name: 'neighborhood', value: bairro },
        { name: 'city', value: localidade },
        { name: 'state', value: uf },
      ].forEach((item) => {
        handleChangeCompanyFormText({
          target: {
            name: item.name,
            value: item.value,
          },
        } as ChangeEvent<HTMLInputElement>);
      });
    } catch (error) {
      alert('Erro ao buscar endereço');
      console.log(error);
    }
  };

  return (
    <>
      <InputGroup
        label="Nome Fantia"
        inputProps={{
          value: company.name,
          name: 'name',
          placeholder: 'Qual o nome fantasia da sua empresa?',
          onChange: handleChangeCompanyFormText,
        }}
      />

      <InputGroup
        label="CEP"
        inputProps={{
          value: company.zip,
          name: 'zip',
          placeholder: 'Qual o CEP da sua empresa?',
          onChange: handleChangeCompanyFormText,
          onBlur: (e) => fetchAddressByZipCode(e.target.value),
        }}
      />

      <InputGroup
        label="Estado"
        inputProps={{
          value: company.address,
          name: 'address',
          placeholder: 'Qual o estado?',
          onChange: handleChangeCompanyFormText,
        }}
      />

      <InputGroup
        label="Cidade"
        inputProps={{
          value: company.city,
          name: 'city',
          placeholder: 'Qual a cidade?',
          onChange: handleChangeCompanyFormText,
        }}
      />

      <InputGroup
        label="Bairro"
        inputProps={{
          value: company.neighborhood,
          name: 'neighborhood',
          placeholder: 'Qual o bairro?',
          onChange: handleChangeCompanyFormText,
        }}
      />

      <Flex flexDir="row">
        <Flex flexDir="column">
          <InputGroup
            label="Logradouro"
            inputProps={{
              value: company.address,
              name: 'address',
              mr: '130px',
              placeholder: 'Qual o logradouro?',
              onChange: handleChangeCompanyFormText,
            }}
          />
        </Flex>
        <Flex flexDir="column" alignItems="flex-start" ml={5} maxW={75}>
          <InputGroup
            label="Numero"
            inputProps={{
              value: company.number,
              name: 'number',
              placeholder: 'N',
              onChange: handleChangeCompanyFormText,
            }}
          />
        </Flex>
      </Flex>
    </>
  );
}
