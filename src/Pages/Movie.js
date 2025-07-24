import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MyCard from "../Components/MyCard";
import { toggleFavorite } from "../redux/favouriteSlice";

function Movie() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1")
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const handleFavorite = (movie) => {
    dispatch(toggleFavorite(movie));
  };

  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Movies</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {movies.map((item) => (
          <MyCard
            key={item.id}
            title={item.title}
            logo={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            cid={item.id}
            onPress={() => navigation.navigate("MovieDetails", { id: item.id })}
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={() => handleFavorite(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default Movie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    color: "white",
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
});
