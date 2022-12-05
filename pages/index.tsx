import { Flex, Grid, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Button } from '../components/Button';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/signup');
  };

  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 870px 513px 1fr"
      templateRows="1fr 1fr 1fr 315px 1fr"
      templateAreas="
        '. . . .'
        '. . . .'
        '. . . .'
        '. . card .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
      backgroundColor="blue.500"
    >
      <Flex
        gridArea="card"
        flexDir="column"
        backgroundColor="gray.100"
        borderRadius={8}
        padding={10}
      >
        <Heading
          size="lg"
          textColor="blue.500"
          lineHeight="tall"
          fontFamily="Roboto"
        >
          A sua vaga é o quê faltava para
        </Heading>
        <Heading
          size="xl"
          textColor="blue.500"
          lineHeight="tall"
          fontFamily="fantasy"
        >
          a nossa magia !
        </Heading>

        <Button
          mt={8}
          label="CADASTRE-SE AGORA"
          _hover={{
            bg: 'blue.700',
          }}
          onClick={handleClick}
        />
      </Flex>
    </Grid>
  );
}
