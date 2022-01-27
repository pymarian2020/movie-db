import React from "react";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components
import HeroImg from "./HeroImg";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import Button from "./Button";
// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";
// Images
import noImg from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } =
    useHomeFetch();

  console.log(state);

  if (error) return <div>Something went wrong..</div>;

  return (
    <>
      {!searchTerm && state.results[0] && (
        <HeroImg
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : noImg
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
