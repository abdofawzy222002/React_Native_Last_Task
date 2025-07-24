import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/favouriteSlice";
import MyCard from "../Components/MyCard";
import { useNavigation } from "@react-navigation/native";

function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Movies</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {favorites.length > 0 ? (
          favorites.map((item) => (
            <MyCard
              key={item.id}
              title={item.title}
              logo={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              cid={item.id}
              onPress={() => navigation.navigate("MovieDetails", { id: item.id })}
              isFavorite={true}
              onToggleFavorite={() => dispatch(toggleFavorite(item))}
            />
          ))
        ) : (
          <Text style={styles.noData}>No favorite movies added yet.</Text>
        )}
      </ScrollView>
    </View>
  );
}

export default Favorites;

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
  noData: {
    color: "#ccc",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
});
