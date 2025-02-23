import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import styled from "styled-components";
import Canvas from "./Canvas";

const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
`;
export default function App() {
  return (
    <Container id="App">
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel>
          <h1>Noodles</h1>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <Canvas height={100 + "%"} width={100 + "%"} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </Container>
  );
}
