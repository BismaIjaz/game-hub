import { HStack, Image } from "@chakra-ui/react";
import Gosaas_Logo from "../assets/react.svg";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={Gosaas_Logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />{" "}
    </HStack>
  );
};

export default NavBar;
