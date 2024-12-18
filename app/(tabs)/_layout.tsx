import { Stack, Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View } from "react-native";

import { icon } from "@/constants/";

type TabIconProps = {
  icon?: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
};
const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="flex justify-center items-center">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-8 h-8"
      />
      <Text
        className={`${focused ? "font-semibold" : "font-normal"} text-xs `}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF4B5A",
        tabBarInactiveTintColor: "#C1C1D5",
        tabBarStyle: {
          backgroundColor: "#1E1E2F",
          borderTopWidth: 1,
          borderTopColor: "#1E1e2f",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title:"Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icon.home}
              color={color}
              focused={focused}
              name="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icon.search}
              color={color}
              focused={focused}
              name="Search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          headerShown: false,
          title: "My List",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icon.file}
              color={color}
              focused={focused}
              name="My List"
            />
          ),
        }}
      />
      
    </Tabs>
  );
};
export default TabLayout;
