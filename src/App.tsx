import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      <Tabs defaultValue="main" style={{ height: "100%" }}>
        <TabsList>
          <h1>Noodles</h1>
          <TabsTrigger value="main">Main</TabsTrigger>
          <TabsTrigger value="text">Text</TabsTrigger>
        </TabsList>
        <TabsContent value="main">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>Text Editor</ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <Canvas />
            </ResizablePanel>
          </ResizablePanelGroup>
        </TabsContent>
        <TabsContent value="text">
          <h1>Text Editor</h1>
        </TabsContent>
      </Tabs>
    </Container>
  );
}
