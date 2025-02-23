import styled from "styled-components";
import Canvas from "./Canvas";

const Container = styled.div`
  display: grid;
`;
export default function App() {
  return (
    <Container id="App">
      <h1>Noodles</h1>
      <Canvas height={500 + "px"} width={100 + "%"} />
    </Container>
  );
}
