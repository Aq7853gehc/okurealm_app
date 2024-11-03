import { Link } from 'expo-router'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const MangaPage = () => {
  return (
    <SafeAreaView className='flex w-full h-full bg-backg'>
        <View className='flex justify-center items-center w-full h-full'>
            <Text className='text-heading1 text-2xl font-bold'>Manga Details</Text>
            <Link href={"/chapters/12"}className='text-2xl font-bold text-heading2' >Chapters</Link>
        </View>
    </SafeAreaView>
  )
}
export default MangaPage