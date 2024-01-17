import { ChakraProvider } from "@chakra-ui/react";
import Container from "./components/Container/Container";
import Todo from "./components/Card/Todo";
import Complete from "./components/Card/Complete";
import Item from "./components/Card/Item";
import Heading from "./components/Heading/Heading";
import Mode from "./components/Mode/Mode";
import { createContext } from "react";

export const ThemeContext = createContext(null);

export default function App() {
  return (
    <ChakraProvider>
      <Heading props="TaskMaster" />
      <Mode />
      <Container>
        <Todo>
          <Item colorItem="bg-blue-300" />
        </Todo>
        <Complete>
          <Item colorItem="bg-emerald-300" />
        </Complete>
      </Container>
    </ChakraProvider>
  );
}
