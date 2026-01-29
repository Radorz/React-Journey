import { useEffect, useState } from "react";

interface Props {
  placeHolder?: string;

  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeHolder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() =>{
    const timeOutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeOutId);
    }
  })

  const handleSearch = () => {
     onQuery(query);
  };

  const handleKeyDown = (event : React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter'){
      handleSearch();
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeHolder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={(event) =>{
          if(event.key ==='Enter')
            handleSearch();
        }}

      />

      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
