import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { JobsContext } from '../contexts/JobsContext';
import { InputGroup } from './InputGroup';

type Props = {};

export function FormCreateJob({}: Props) {
  const { job, setJob, handleChangeJobFormText } = useContext(JobsContext);

  return (
    <>
      <InputGroup
        label="Nome da Vaga"
        inputProps={{
          name: 'title',
          value: job.title,
          placeholder: 'Qual o nome da sua vaga?',
          onChange: handleChangeJobFormText,
        }}
      />

      <InputGroup
        label="Descrição da Vaga"
        textAreaProps={{
          name: 'description',
          value: job.description,
          placeholder: 'Descreva brevemente a vaga',
          rows: 10,
          onChange: (e) => handleChangeJobFormText(e as any),
        }}
        textArea
      />

      <Text textTransform="uppercase" fontWeight="bold" fontSize={16} mt={5}>
        tipo de contratação
      </Text>
      <RadioGroup defaultValue="1" mt={2} value={job.type}>
        <Stack>
          <Radio
            borderColor="gray.700"
            borderWidth={2}
            value="MISTO"
            onClick={() => setJob({ ...job, type: 'MISTO' })}
          >
            Misto
          </Radio>
          <Radio
            borderColor="gray.700"
            borderWidth={2}
            value="PRESENCIAL"
            onClick={() => setJob({ ...job, type: 'PRESENCIAL' })}
          >
            Presencial
          </Radio>
          <Radio
            borderColor="gray.700"
            borderWidth={2}
            value="REMOTO"
            onClick={() => setJob({ ...job, type: 'REMOTO' })}
          >
            Remoto
          </Radio>
        </Stack>
      </RadioGroup>

      <Menu>
        <MenuButton
          w={'100%'}
          h={12}
          transition="all 0.2s"
          borderRadius={16}
          borderWidth="1px"
          borderColor="gray.700"
          pr={48}
          mt={5}
        >
          <Text>
            Associar a uma empresa <ChevronDownIcon alignSelf="end" />
          </Text>
        </MenuButton>
        <MenuList bg="gray.100" borderWidth={0}>
          <MenuItem
            bg={'gray.100'}
            _hover={{
              bg: 'blue.200',
            }}
          >
            <Checkbox defaultChecked>Checkbox</Checkbox>
          </MenuItem>

          <MenuItem
            bg={'gray.100'}
            _hover={{
              bg: 'blue.200',
            }}
          >
            <Checkbox defaultChecked>Checkbox</Checkbox>
          </MenuItem>

          <MenuItem
            bg={'gray.100'}
            _hover={{
              bg: 'blue.200',
            }}
          >
            <Checkbox defaultChecked>Checkbox</Checkbox>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
