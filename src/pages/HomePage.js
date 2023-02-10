import axios from "axios";
import { useEffect, useState } from "react";
import CharactersCard from "../components/CharactersCard";
import "./HomePage.css";

export default function HomePage() {
  const [charList, setCharList] = useState([]);
  const [offline, setOffline] = useState(false);
  useEffect(() => {
    if (!navigator.onLine) setOffline(true);
  }, []);

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
    <div className="main">
      <img src="logo192.png" alt="hp-logo" />
      <h1 className="text">Harry Potter PWA app</h1>
      <p className="text">Find all about your favorite character</p>
      {offline && (
        <>
          <div className="text">
            You are offline please connect to the internet
          </div>
          <button
            className="button"
            onClick={() => window.location.reload(true)}
          >
            Refresh
          </button>
        </>
      )}
      {charList ? (
        <div className="container">
          {charList.map((character) => {
            return <CharactersCard key={character.id} character={character} />;
          })}
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
}
