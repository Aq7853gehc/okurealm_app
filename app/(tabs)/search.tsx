import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
const search = () => {
  return (
    <SafeAreaView className='flex w-full h-full'>
    <StatusBar backgroundColor={"#1E1E2F"} barStyle={"light-content"}/>
     <ScrollView className='flex-1 bg-backg h-full w-full'>
     <View className='flex h-screen w-full'>
        <Text className='text-heading1 font-bold text-3xl'>List</Text>
      </View>
     </ScrollView>
  </SafeAreaView>
  )
}
export default search