import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
const HomeLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown:false}}/>
        <Stack.Screen name='[id]' options={{headerShown:false}}/>
    </Stack>
  )
}
export default HomeLayout