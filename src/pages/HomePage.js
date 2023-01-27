import axios from "axios";
import { useEffect, useState } from "react";
import CharactersCard from "../components/CharactersCard";
import "./HomePage.css";

export default function HomePage() {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hp-api.onrender.com/api/characters "
        );
        setCharList(response.data.splice(0, 20));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Harry Potter PWA app</h1>
      {charList ? (
        <div className="container">
          {charList.map((character) => {
            return <CharactersCard key={character.id} character={character} />;
          })}
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
}
