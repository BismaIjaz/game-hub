import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [selectedGameQuery, setSelectedGameQuery] = useState({} as GameQuery);

  return (
    <Grid
      templateAreas={{ lg: `"nav nav" "aside main"`, base: `"nav" "main"` }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenre={selectedGameQuery.genre}
            onSelectGenre={(genre) =>
              setSelectedGameQuery({ ...selectedGameQuery, genre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={4} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={selectedGameQuery.platform}
            onSelectPlatform={(platform) =>
              setSelectedGameQuery({ ...selectedGameQuery, platform })
            }
          />
          <SortSelector
            sortOrder={selectedGameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setSelectedGameQuery({ ...selectedGameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGrid selectedGameQuery={selectedGameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
