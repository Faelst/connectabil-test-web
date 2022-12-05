import { Flex, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { Button } from '../components/Button';
import { FormCreateCompany } from '../components/FormCreateCompany';
import { defaultCompany } from '../helpers/default-values';
import { Company } from '../lib/interfaces';
import * as api from '../lib/api';
import { useRouter } from 'next/router';
import { CompaniesContext } from '../contexts/CompaniesContext';

export default function Singup() {
  const { companies, setCompanies, company, setCompany } =
    useContext(CompaniesContext);

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await api.createCompany(company);

      if (response.status === 201) {
        alert('Cadastrado com sucesso');
        setCompanies([...companies, response.data]);
      }

      router.push('/list');
    } catch (error) {
      alert('Erro ao cadastrar');
    } finally {
      setCompany(defaultCompany as Company);
    }
  };

  return (
    <Flex height="100vh">
      <Flex width="50%" bg="blue.500" />

      <Flex
        as="form"
        width="50%"
        bg="gray.100"
        pl={'113px'}
        pr={'247px'}
        py={8}
      >
        <Flex flex={1} flexDir="column" alignItems="flex-start" maxW={380}>
          <Heading
            fontWeight="bold"
            lineHeight={1.5}
            letterSpacing="unset"
            fontSize={40}
            color="gray.900"
            mb={10}
          >
            Nos conte um pouco sobre a sua empresa
          </Heading>

          <FormCreateCompany />

          <Button
            mt={8}
            label="FINALIZAR CADASTRO"
            _hover={{
              bg: 'blue.700',
            }}
            onClick={handleSubmit}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
