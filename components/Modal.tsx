import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { CompaniesContext } from '../contexts/CompaniesContext';
import { JobsContext } from '../contexts/JobsContext';
import { Company, Job } from '../lib/interfaces';
import { Button } from './Button';
import { FormCreateCompany } from './FormCreateCompany';
import { FormCreateJob } from './FormCreateJob';
import * as api from '../lib/api';
import { defaultCompany, defaultJob } from '../helpers/default-values';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  selected: string;
};

export function Modal({ isOpen, handleClose, selected }: Props) {
  const { companies, setCompanies, company, setCompany } =
    useContext(CompaniesContext);
  const { jobs, setJobs, job, setJob } = useContext(JobsContext);

  const createCompany = async () => {
    try {
      const response = await api.createCompany(company);

      if (response.status === 201) {
        alert('Cadastrado com sucesso');
        setCompanies([...companies, response.data]);
      }
    } catch (error) {
      alert('Erro ao cadastrar');
    } finally {
      setCompany(defaultCompany as Company);
      handleClose();
    }
  };

  const createJob = async () => {
    try {
      const response = await api.createJob(job);

      if (response.status === 201) {
        alert('Cadastrado com sucesso');
        setJobs([...jobs, response.data]);
      }
    } catch (error) {
      alert('Erro ao cadastrar');
    } finally {
      setJob(defaultJob as Job);
      handleClose();
    }
  };

  const handleSubmit = () => {
    if (selected !== 'jobs') {
      createCompany();
    } else {
      createJob();
    }
  };

  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={handleClose} isCentered size="xl">
        <ModalOverlay backgroundColor="rgba(0, 0, 0, 0.85)" />
        <ModalContent bg="white" px={12} py={10} borderRadius="3xl">
          <ModalCloseButton mt={14} mr={14} color="blue.500" size="lg" />
          <ModalHeader>
            {selected === 'jobs' ? (
              <Text fontSize={40}>Criar Vaga</Text>
            ) : (
              <Text fontSize={40}>Criar Empresa</Text>
            )}
          </ModalHeader>
          <ModalBody mt={2}>
            {selected === 'jobs' ? <FormCreateJob /> : <FormCreateCompany />}
          </ModalBody>

          <ModalFooter>
            <Button
              label={selected === 'jobs' ? 'CRIAR VAGA' : 'CRIAR EMPRESA'}
              onClick={handleSubmit}
            />
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
}
