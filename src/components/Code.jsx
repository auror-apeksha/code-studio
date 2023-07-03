import { Box, styled } from "@mui/material";
import Editor from "./Editor";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 50vh;
`;
const Code = () => {
  return (
    <Container>
      <Editor heading="HTML" icon="/" color="#ff3c41" />
      <Editor heading="CSS" icon="*" color="#0ebeff" />
      <Editor heading="JavaScript" icon="()" color="#fcd000" />
    </Container>
  );
};

export default Code;
