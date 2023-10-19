import { useState, useEffect, useMemo } from "react";
import { Movie } from "../interfaces/Movie";

async function getRandomMovie(): Promise<Movie> {
  return fetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    }
  )
    .then((res) => res.json() as Promise<{ results: Movie[] }>)
    .then(
      ({ results: movies }) => movies[Math.floor(Math.random() * movies.length)]
    );
}

function getPartialMovieName(movie: Movie): string {
  const difficulty = 5;
  const indexes = Array.from({ length: movie.name.length }, (_, i) => i)
    .sort((index) =>
      movie.name[index] === " " ? 1 : Math.random() >= 0.5 ? 1 : -1
    )
    .slice(0, Math.max(Math.floor((movie.name.length * difficulty) / 100), 1));

  return movie.name.split("").reduce((name, letter, index) => {
    name = name.concat(indexes.includes(index) ? "_" : letter);

    return name;
  }, "");
}

const GetMovie = () => {
  const [points, setPoints] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [guess, setGuess] = useState<string>("");
  const [hintsCount, setHintsCount] = useState<number>(0);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [movie, setMovie] = useState<null | Movie[]>(null);
  const partial = useMemo(() => {
    if (!movie) return "";
    return getPartialMovieName(movie);
  }, [movie]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (guess?.toLocaleLowerCase() === movie!.name.toLocaleLowerCase()) {
      alert("You guessed correctly!");
      setPoints((points) => points + 1);
    } else {
      alert("You guessed wrong!");
      setLives((lives) => lives - 1);
    }
    setMovie(null);
    setGuess("");
    setShowHint(false);
  }

  function handleReset() {
    setLives(3);
    setPoints(0);
    setHintsCount(0);
  }

  function handleHint() {
    if (showHint) {
      setHintsCount(hintsCount + 1);
    }
    if (hintsCount >= 3) {
      alert("You have used all your hints!");
      setHintsCount(0);
    }
    setShowHint(true);
  }

  useEffect(() => {
    getRandomMovie().then(setMovie);
  }, [points, lives]);

  return (
    <>
      <section>
        <div className="text-center text-2xl">
          lives: {lives} - points: {points} - hints: {hintsCount}
        </div>
        {!movie ? (
          <div>Loading...</div>
        ) : lives ? (
          <form
            className="font-mono py-8 flex flex-col gap-4 "
            onSubmit={handleSubmit}
          >
            <input
              className="p-4 text-x tracking-widest"
              type="text"
              readOnly
              value={partial}
            />
            <input
              className="p-4 text-xl tracking-widest"
              name="partial"
              type="text"
              value={guess}
              onChange={(event) => setGuess(event.target.value)}
            />
            <button type="button" onClick={handleHint}>
              Show hint
            </button>
            <button
              className="rounded-lg text-lg  h-16 bg-slate-400"
              type="submit"
            >
              Guess
            </button>
            {showHint && <p>{movie.overview}</p>}
          </form>
        ) : (
          <div>
            <p>Game over</p>
            <button onClick={handleReset}>Play again</button>
          </div>
        )}
      </section>
    </>
  );
};

export default GetMovie;
