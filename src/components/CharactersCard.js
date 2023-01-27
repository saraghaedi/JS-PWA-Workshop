import "./Characters.css";

export default function charactersCard({ character }) {
  return (
    <div className="card">
      <img
        width={240}
        height={340}
        src={character.image}
        alt={character.name}
      />
      <h3>{character.name}</h3>
      <p>Actor: {character.actor}</p>
      <p>House: {character.house}</p>
      <p>Species: {character.species}</p>
      <p>Year of birth: {character.yearOfBirth}</p>
      <p>Wizard: {character.wizard ? "True" : "False"}</p>
      <p>Ancestry: {character.ancestry}</p>
    </div>
  );
}
