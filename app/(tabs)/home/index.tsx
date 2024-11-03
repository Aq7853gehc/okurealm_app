import React, { FC, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Animated,
  Button,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from 'react-native-reanimated-carousel';
import { Link } from "expo-router";
const Home = () => {
  return (
    <SafeAreaView className="flex-1 w-full h-full">
      <StatusBar backgroundColor={"#1E1E2F"} barStyle={"light-content"} />
      <ScrollView className="flex bg-backg h-full w-full">
        <View className="flex relative h-full w-full items-center rounded-lg">
          <MangaCarousel/>
        <View className="flex h-full w-full">
          <Text className="text-heading1 text-2xl font-bold">Up Comming</Text>
          <Link href={"/home/2"} className="text-body text2xl">Hello</Link>
          <Link href={"/(root)/1"} className="text-body text-2xl font-bold">Manga</Link>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;

const data = [
  {
    title: "Manga 1",
    description: "A thrilling manga series.",
    imageUrl: "https://i0.wp.com/www.thenerddaily.com/wp-content/uploads/2018/07/Best-Anime-Series.jpg"
  },
  {
    title: "Manga 2",
    description: "An exciting adventure awaits.",
    imageUrl: "https://assets-prd.ignimgs.com/2022/09/22/demonslayer-1663870772245.jpg",
  },
  // Add more manga items as needed
];

const { width: viewportWidth } = Dimensions.get('window');

const MangaCarousel = () => {
  return (
    <Carousel
      loop
      width={viewportWidth}
      height={240} // Adjust the height as needed
      autoPlay={true}
      data={data}
      scrollAnimationDuration={2000}
      renderItem={({ item }) => (
        <View className="bg-containers absolute rounded-lg shadow-lg w-full border-primary border">
          <Image
            source={{ uri: item.imageUrl }}
            className="w-full h-60 object-cover rounded-lg"
          />
          <View className="absolute w-full bottom-1 left-2">
            <Text className="text-lg font-semibold text-body">{item.title}</Text>
            <Text className="text-base text-body ">{item.description}</Text>
          </View>
          
        </View>
      )}
    />
  );
};
