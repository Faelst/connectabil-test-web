import { Button as ChakraButton, ButtonProps, Text } from '@chakra-ui/react';

type Props = ButtonProps & {
  label: string;
  icon?: React.ReactNode;
};

export function Button({ label, icon, ...rest }: Props) {
  return (
    <ChakraButton
      width="100%"
      height={14}
      bg="blue.500"
      color="gray.100"
      borderRadius="full"
      {...rest}
    >
      <Text fontSize="sm" fontWeight="bold">
        {icon}
        {label}
      </Text>
    </ChakraButton>
  );
}
