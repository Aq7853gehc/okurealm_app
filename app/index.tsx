import { Link } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
   <SafeAreaView className="flex-1 h-full bg-backg">
    <View className="flex-1 h-full w-full justify-center items-center gap-5">
      <Image className="object-contain w-[10rem] h-[10rem] border-containers rounded-full border-2" alt="LOGO" src=""/>
      <Text className="text-4xl font-black text-body">OkuRealm</Text>

      <Link href={"/(home)"} className="text-body font-semibold text-2xl underline uppercase">Home</Link>
  
     <TouchableOpacity className="rounded-lg px-5 py-3 bg-primary absolute bottom-[2rem]">
      <Text className=" font-semibold text-body text-xl">Try Again</Text>
     </TouchableOpacity>
    </View>
   </SafeAreaView>
  );
}
