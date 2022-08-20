import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import LogoSecondary from "../../assets/logo-secondary.svg";
import { Input } from "../../components/input";

import { FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../contexts/Auth/AuthContex";

const singInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

interface SingInData {
  email: string;
  password: string;
}

export const Login = () => {
  const { singIn } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SingInData>({
    resolver: yupResolver(singInSchema),
  });

  const handleSingIn = (data: SingInData) => {
    setLoading(true);
    singIn(data)
      .then((_) => setLoading(false))
      .catch((err) => setLoading(false));
  };

  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      alignItems="center"
      justifyContent="center"
      height={["auto", "auto", "100vh", "100vh"]}
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
      ]}
      color="white"
    >
      <Flex
        w={["100%", "100%", "90%", "65%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <Grid w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
          <Image
            src={LogoSecondary}
            alt="doit"
            boxSize={["120px", "120px", "150px", "150px"]}
          />
          <Heading mt="4" as="h1">
            O jeito fácil, grátis
          </Heading>
          <Text maxWidth="350px">
            Flexível e atrativo de gerenciar
            <b> seus projetos em uma única plataforma</b>
          </Text>
        </Grid>
        <Grid
          onSubmit={handleSubmit(handleSingIn)}
          as="form"
          w={["100%", "100%", "45%", "45%"]}
          padding="30px 15px"
          border="3px solid"
          borderColor="gray.100"
          bg="white"
          color="gray.900"
          mt={["4", "4", "0"]}
        >
          <Heading size="lg">Bem vindo de voltaI</Heading>
          <VStack mt="6" spacing="5">
            <Box w="100%">
              <Input
                placeholder="Digite seu email"
                icon={FaEnvelope}
                label="Login"
                type="email"
                error={errors.email}
                {...register("email")}
              />
              {!errors.email && (
                <Text ml="1" mt="1" color="gray.300">
                  Exemplo: nome@email.com
                </Text>
              )}
            </Box>
            <Input
              placeholder="Digite sua senha"
              icon={FaLock}
              type="password"
              error={errors.password}
              {...register("password")}
            />
          </VStack>
          <VStack mt="4" spacing="5">
            <Button
              isLoading={loading}
              bg="purple.800"
              w="100%"
              color="white"
              h="60px"
              borderRadius="8px"
              _hover={{ background: "purple.900" }}
              type="submit"
            >
              Entrar
            </Button>
            <Text color={"gary.400"}>Ainda não possui uma conta? </Text>
            <Button
              isLoading={loading}
              bg="gray.100"
              w="100%"
              color="gray.300"
              h="60px"
              borderRadius="8px"
              _hover={{ background: "gray.200" }}
            >
              Cadastrar
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
