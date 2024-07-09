import { useEffect, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";

export default function New() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!image) {
      pickImage();
    }
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="p-3 items-center flex-1">
      {image === "" && (
        <>
          <View className="bg-gray-200 w-full h-96 rounded-md">
            <FontAwesome name="image" color={"#1877f2"} className="text-gray-500 m-auto" size={300} />
          </View>

          <Text onPress={pickImage} className="text-blue-500 font-semibold">
            Add a photo
          </Text>
        </>
      )}
      {image !== "" && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      {image !== "" && (
        <Text onPress={() => setImage("")} className="text-red-500 font-semibold">
          Remove
        </Text>
      )}

      {image !== "" && (
        <Text onPress={pickImage} className="text-blue-500 font-semibold m-5">
          Change
        </Text>
      )}

      <TextInput
        placeholder="Caption"
        className="w-full p-3"
        onChangeText={(newValue) => setCaption(newValue)}
        value={caption}
      />
      <View className="mt-auto w-full">
        <Pressable className="bg-blue-500 w-full p-4 items-center rounded-md">
          <Text className="text-white font-semibold">Share</Text>
        </Pressable>
      </View>
    </View>
  );
}
