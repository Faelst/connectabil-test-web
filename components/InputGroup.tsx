import {
  Input,
  InputProps,
  Text,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react';

type Props = {
  label: string;
  inputProps?: InputProps;
  textArea?: boolean;
  textAreaProps?: TextareaProps;
};

export function InputGroup({
  label,
  inputProps,
  textArea = false,
  textAreaProps,
}: Props) {
  return (
    <>
      <Text mb={0.5} fontSize={16}>
        {label}
      </Text>
      {!textArea ? (
        <Input
          borderWidth={1}
          borderColor="gray.700"
          height={12}
          borderRadius={16}
          _hover={{
            borderColor: 'blue.500',
          }}
          marginBottom={3}
          {...inputProps}
        />
      ) : (
        <Textarea
          placeholder="Descrição da vaga"
          borderWidth={1}
          borderColor="gray.700"
          borderRadius={16}
          _hover={{
            borderColor: 'blue.500',
          }}
          marginBottom={3}
          {...textAreaProps}
        />
      )}
    </>
  );
}
