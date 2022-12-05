import {
  Divider,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { CompaniesContext } from '../contexts/CompaniesContext';
import { JobsContext } from '../contexts/JobsContext';
import { defaultCompany, defaultJob } from '../helpers/default-values';
import { Company, Job } from '../lib/interfaces';
import { Button } from './Button';
import { Modal } from './Modal';

type Props = {
  jobs: React.ReactNode[];
  companies: React.ReactNode[];
};

const selectedTab = {
  color: 'blue.500',
  borderBottomColor: 'blue.500',
};

export function Menu({ jobs, companies }: Props) {
  const { setCompany } = useContext(CompaniesContext);
  const { setJob } = useContext(JobsContext);

  const [selected, setSelected] = useState('jobs');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickMenuTab = (tab: string) => {
    setSelected(tab);
  };

  const handleCloseModal = () => {
    onClose();
    setCompany(defaultCompany as Company);
    setJob(defaultJob as Job);
  };

  return (
    <Tabs isFitted w={'100%'}>
      <TabList borderBottomColor="transparent">
        <Tab _selected={selectedTab} onClick={() => handleClickMenuTab('jobs')}>
          Vagas
        </Tab>
        <Tab
          _selected={selectedTab}
          onClick={() => handleClickMenuTab('companies')}
        >
          Empresas
        </Tab>
      </TabList>

      <HStack w="100%" justify="flex-end">
        <Button
          label={selected === 'jobs' ? 'CRIAR VAGA' : 'CRIAR EMPRESA'}
          width={140}
          height={9}
          mt={16}
          mb={5}
          onClick={onOpen}
          _hover={{
            bg: 'blue.600',
          }}
        />
      </HStack>

      <Modal
        handleClose={handleCloseModal}
        isOpen={isOpen}
        selected={selected}
      />

      <Divider borderColor="gray.700" borderWidth={0.5} w="100%" />

      <TabPanels mt={12}>
        <TabPanel p={0}>{jobs.map((job) => job)}</TabPanel>
        <TabPanel p={0}>{companies.map((company) => company)}</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
