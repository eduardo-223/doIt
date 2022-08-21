import { Button, Text } from "@chakra-ui/react";
import { useAuth } from "../../contexts/Auth/AuthContex";

export const Dashboard = () => {
  const { singOut } = useAuth();
  return <Button onClick={singOut}>deslogar</Button>;
};
