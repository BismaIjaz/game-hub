import { HStack, Image } from "@chakra-ui/react";
import Gosaas_Logo from "../assets/react.svg";
import { ColorModeSwitch } from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={Gosaas_Logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />{" "}
    </HStack>
  );
};

export default NavBar;
