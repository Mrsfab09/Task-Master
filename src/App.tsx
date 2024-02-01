import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Todo from "./components/Card/Todo";
import Complete from "./components/Card/Complete";
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
            <Todo></Todo>
            <Complete></Complete>
          </Container>
        </>
      )}
    </ChakraProvider>
  );
}
// https://github.com/Jak-zaczac-programowac/zrozumiecreact-modul-4/blob/main/src/App.jsx
