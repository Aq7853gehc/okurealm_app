import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Chapters = () => {
  return (
    <SafeAreaView className="flex w-full h-full bg-backg">
      <View className="flex justify-center items-center h-full ">
        <Text className="text-heading1 font-semibold text-3xl">Chapters</Text>
      </View>
    </SafeAreaView>
  );
};
export default Chapters;
    