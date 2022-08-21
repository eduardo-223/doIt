import { Flex } from "@chakra-ui/react";

import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../contexts/Auth/AuthContex";
import { SingUpInfo } from "./SingUpInfo";
import { SingUpForm } from "./SingUpForm";

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

  const handleSingUp = (data: SingUpData) => {
    console.log(data)
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
        <SingUpForm
          errors={errors}
          handleSingUp={handleSubmit(handleSingUp)}
          loading={loading}
          register={register}
        />
        <SingUpInfo />
      </Flex>
    </Flex>
  );
};
