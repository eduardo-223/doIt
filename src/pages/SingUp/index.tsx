import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../contexts/Auth/AuthContex";
import { SingUpInfo } from "./SingUpInfo";
import { SingUpForm } from "./SingUpForm";
import { GoBackButton } from "./GoBackButton";
import { api } from "../../services/api";

const singUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

interface SingUpData {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
}

export const SingUp = () => {
  const { singIn } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SingUpData>({
    resolver: yupResolver(singUpSchema),
  });

  const handleSingUp = ({ name, email, password }: SingUpData) => {
    setLoading(true);
    api
      .post("/register", { name, email, password })
      .then((response) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const iswideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      alignItems="center"
      justifyContent="center"
      height={["auto", "auto", "100vh", "100vh"]}
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-l, purple.800 65%, white 35%)",
        "linear(to-l, purple.800 65%, white 35%)",
      ]}
      color="white"
    >
      <Flex
        w={["100%", "100%", "90%", "65%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
      >
        {iswideVersion ? (
          <>
            <GoBackButton top="75" left="25" />
            <SingUpForm
              errors={errors}
              handleSingUp={handleSubmit(handleSingUp)}
              loading={loading}
              register={register}
            />
            <SingUpInfo />
          </>
        ) : (
          <>
            <GoBackButton top="10" left="75vw" />
            <SingUpInfo />
            <SingUpForm
              errors={errors}
              handleSingUp={handleSubmit(handleSingUp)}
              loading={loading}
              register={register}
            />
          </>
        )}
      </Flex>
    </Flex>
  );
};
