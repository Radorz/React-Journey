import CustomHeader from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs();

  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description=" Descubre y comparte el Gif perfecto"
      />
      <SearchBar placeHolder="Busca lo que quieras" onQuery={handleSearch} />
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />
      <GifList gifs={gifs} />
    </>
  );
};
