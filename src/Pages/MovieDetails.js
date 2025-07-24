import { useEffect, useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import axios from "axios";
import MyCard from "../Components/MyCard";

function MovieDetails({ route }) {
  const movieId = route.params.id;
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en`
      )
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, []);

  const backdropUrl = details.backdrop_path
    ? `https://image.tmdb.org/t/p/w780${details.backdrop_path}`
    : null;

  return (
    <ImageBackground
      source={{ uri: backdropUrl }}
      style={styles.background}
      resizeMode="cover"
      blurRadius={2}
    >
      <View>
        <MyCard
          title={details.title}
          logo={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          movieDate={details.release_date}
          movieStatus={details.status}
          movieOverview={details.overview}
        />
      </View>
    </ImageBackground>
  );
}

export default MovieDetails;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
