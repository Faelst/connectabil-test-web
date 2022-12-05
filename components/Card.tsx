import { Flex, Heading, HStack, Switch, Text, VStack } from '@chakra-ui/react';
import { Button } from '../components/Button';
import { EditIcon } from './icons/EditIcon';
import { PositionIcon } from './icons/PositionIcon';
import { TrashIcon } from './icons/TrashIcon';

type Props = {
  title: string;
  description: string;
  jobType?: string;
  status?: boolean;
  type: 'jobs' | 'companies';
  handleDelete?: () => void;
  handleDisable: () => void;
};

export function Card({
  title,
  description,
  type,
  status,
  jobType,
  handleDelete,
  handleDisable,
}: Props) {
  return (
    <HStack
      borderColor="gray.700"
      borderWidth={1}
      borderRadius={16}
      p={4}
      mb={5}
    >
      <Flex flexDirection="column" w={'full'}>
        <HStack justifyContent="flex-start" alignItems="center">
          <Heading fontSize={'24px'}>{title}</Heading>
          {type === 'jobs' && (
            <Text
              color="blue.500"
              fontSize={'14px'}
              bg="blue.100"
              py={1}
              px={2}
              rounded="full"
            >
              {jobType}
            </Text>
          )}
        </HStack>
        <VStack justifyContent="flex-start" alignItems="flex-start" mt={5}>
          <HStack>
            {type !== 'jobs' && <PositionIcon />}
            <Text fontSize={16}>{description}</Text>
          </HStack>
        </VStack>
      </Flex>
      <HStack pl={24} pr={4}>
        <Button
          label="Editar"
          rounded="full"
          height={8}
          _hover={{
            bg: 'blue.600',
          }}
          icon={<EditIcon />}
        />
        <Button
          label="Excluir"
          rounded="full"
          height={8}
          _hover={{
            bg: 'blue.600',
          }}
          icon={<TrashIcon />}
          onClick={handleDelete}
        />
        <Switch
          rounded="full"
          size="lg"
          backgroundColor="gray.700"
          onChange={() => handleDisable()}
          isChecked={status}
        />
      </HStack>
    </HStack>
  );
}
