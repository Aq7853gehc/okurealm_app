import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
const Layout = () => {
  return (
    <Stack>
        <Stack.Screen name='setting' options={{headerShown:false}}/>
        <Stack.Screen name='[id]' options={{headerShown:false}}/>
    </Stack>
  )
}
export default Layout