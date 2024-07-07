import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import posts from "~/assets/data/posts.json";

const post1 = posts[0];

export default function FeedScreen() {
  return (
    <View>
      <View>
        <Image source={{ uri: post1.user.image_url }} className="w-24 aspect-square" />
      </View>
      <Image source={{ uri: post1.image_url }} className="w-full aspect-[4/3]" />
    </View>
  );
}
