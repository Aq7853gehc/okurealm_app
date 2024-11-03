import { Link } from 'expo-router'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const Details = () => {
  return (
    <SafeAreaView className='bg-backg h-full w-full flex '>
      <View className='flex h-full w-full justify-center items-center'>
        <Text>Hello world</Text>
        <Link href={"/setting"} className='text-xl font-bold text-heading3'>Settings</Link>
      </View>
    </SafeAreaView>
  )
}
export default Details