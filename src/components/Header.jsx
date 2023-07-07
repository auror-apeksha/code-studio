import { AppBar, Toolbar, styled, Button } from "@mui/material";
import logo from "../assets/images/codepen-icon.png";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Container = styled(AppBar)`
  background: #060606;
  height: 10vh;
`;

const Actionbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;
const Header = () => {
  const { setHtml, setCss, setJs } = useContext(DataContext);
  const handleReset = () => {
    setHtml("");
    setCss("");
    setJs("");
  };
  return (
    <Container position="static">
      <Actionbar>
        <img src={logo} alt="logo" style={{ width: 40 }} />
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
      </Actionbar>
    </Container>
  );
};
export default Header;
