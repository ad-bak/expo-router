import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

import posts from "~/assets/data/posts.json";
import PostListItem from "~/src/components/PostListItem";

const post1 = posts[0];

export default function FeedScreen() {
  return <PostListItem post={post1} />;
}
