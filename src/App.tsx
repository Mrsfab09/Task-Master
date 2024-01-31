import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Todo from "./components/Card/Todo";
import Complete from "./components/Card/Complete";
import Item from "./components/Card/Item";
import Heading from "./components/Heading/Heading";
import Mode from "./components/Mode/Mode";
import Loader from "./components/Loader/Loader";

export const ThemeContext = createContext(null);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <ChakraProvider>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Heading>TaskMaster</Heading>
          <Mode />
          <Container>
            <Todo>
              <Item colorItem="bg-blue-300" />
            </Todo>
            <Complete>
              <Item colorItem="bg-emerald-300" />
            </Complete>
          </Container>
        </>
      )}
    </ChakraProvider>
  );
}
