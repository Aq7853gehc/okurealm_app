import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
const ChapterLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='[no]' options={{headerShown:false}}/>
    </Stack>
  )
}
export default ChapterLayout