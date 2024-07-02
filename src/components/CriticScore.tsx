import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}
const CriticScore = ({ metacritic }: Props) => {
  const colorMap: { [key: number]: string } = {
    0: "red",
    1: "yellow",
    2: "green",
    3: "blue",
    4: "grey",
    5: "purple",
    6: "pink",
    7: "orange",
    8: "brown",
    9: "mauve",
    10: "brickred",
  };
  return (
    <Badge colorScheme={colorMap[Math.floor(metacritic / 10)]}>
      {metacritic}
    </Badge>
  );
};

export default CriticScore;
