import { useState } from "react";

import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

import { Controlled as ControlledEditor } from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "../App.css";

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 700;
`;

const Editor = ({ heading, icon, color, value, onChange }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              backgroundColor: color,
              display: "flex",
              width: 20,
              height: 20,
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: "#000",
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <>
          {open ? (
            <CloseFullscreenIcon
              fontSize="small"
              style={{ alignSelf: "center" }}
              onClick={handleClick}
            />
          ) : (
            <OpenInFullIcon
              fontSize="small"
              style={{ alignSelf: "center" }}
              onClick={handleClick}
            />
          )}
        </>
      </Header>
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Container>
  );
};
export default Editor;
