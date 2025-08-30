import { CSSProperties } from "react";

export const MyAwesomeApp = () => {
  const firstName = "Luis";
  const lastName = "Franco";

  const favoriteGames = ["ABI", "COD", "lol"];
  const isActive = false;

  const address = {
    zipCode: "String",
    Country: "String",
  };

  const myStyles: CSSProperties = {
    backgroundColor: "red",
    borderRadius: 20,
    padding: 10,
  };

  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>
      <h1>{isActive ? "Duro" : "Gay"}</h1>

      <p
        style={{
          backgroundColor: "red",
          borderRadius: 20,
          padding: 10,
        }}
      >
        {JSON.stringify(address)}
      </p>
    </>
  );
};
