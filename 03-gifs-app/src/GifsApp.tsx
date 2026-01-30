import { mockGifs } from "./mock-data/gifs.mock";
import CustomHeader from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["sex"]);
  const [gifs, setGifs] = useState<Gif[]>([])
  const handleTermClicked = (term: string) => {
    console.log(term);
  };

  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 7));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  };

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
