import { useState } from "react";

interface Props {
  placeHolder?: string;

  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeHolder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onQuery(query);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeHolder}
        value={query}
        onChange={(event) => console.log(event.target.value)}
        onKeyDown={(event) =>{
          if(event.key ==='Enter')
            handleSearch();
        }}

      />

      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
