import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { SwipeButton } from 'react-native-expo-swipe-button';
import { styled } from 'nativewind';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

export default ({ navigation }) => {
    const [check, setCheck] = useState(-1);

    return (
        <StyledSafeAreaView className="flex-1 justify-evenly items-center bg-white p-4">
            <StyledView className="items-center mb-4">
                <StyledImage 
                    source={{ uri: 'https://via.placeholder.com/100' }} 
                    style={{ width: 100, height: 100 }} 
                    className="mb-4"
                />
                <StyledText className="text-center mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </StyledText>
                <LinearGradient
                    colors={['#A9CBF4', '#06264D']}
                    style={{ borderRadius: 20, marginTop: 10, paddingVertical: 10, paddingHorizontal: 20 }}
                >
                    <Button
                        title="Consumer"
                        buttonStyle={{ backgroundColor: 'transparent' }}
                        titleStyle={{ fontSize: 16 }}
                        onPress={() => setCheck(0)}
                    />
                </LinearGradient>
            </StyledView>

            <SwipeButton
                title="Slide to confirm"
                borderRadius={180}
                onComplete={() => navigation.navigate(check === 0 ? 'LoginCons' : 'LoginVsp')}
                containerStyle={{ backgroundColor: '#A9CBF4', marginVertical: 20, width: '80%' }}
                underlayTitle="Release to complete"
                underlayTitleStyle={{ color: 'black' }}
                disabled={check === -1}
            />

            <StyledView className="items-center">
                <StyledImage 
                    source={{ uri: 'https://via.placeholder.com/100' }} 
                    style={{ width: 100, height: 100 }} 
                    className="mb-4"
                />
                <StyledText className="text-center mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </StyledText>
                <LinearGradient
                    colors={['#A9CBF4', '#06264D']}
                    style={{ borderRadius: 20, marginTop: 10, paddingVertical: 10, paddingHorizontal: 20 }}
                >
                    <Button
                        title="VSP"
                        buttonStyle={{ backgroundColor: 'transparent' }}
                        titleStyle={{ fontSize: 16 }}
                        onPress={() => setCheck(1)}
                    />
                </LinearGradient>
            </StyledView>
        </StyledSafeAreaView>
    );
};


// import React from 'react';
// import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { TailwindProvider } from 'tailwind-rn';
// import utilities from './tailwind.json';

// export default function App({ navigation }) {
//   return (
//     <TailwindProvider utilities={utilities}>
//       <SafeAreaView className="flex-1 justify-center items-center">
//         <View className="bg-blue-400">
//           {/* <Logo /> */}
//           <Image
//             source={require("../assets/images/logo-removebg-preview 1.png")}
//             className="mt-20 self-center w-[201px] h-[181px]"
//           />
//           <TouchableOpacity className="mt-[60%] self-center" onPress={() => navigation.navigate('FlowSelect')}>
//             <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#A9CBF4', '#06264D']} className="rounded-lg h-10 w-50 justify-center">
//               <Text className="text-lg text-center text-white bg-transparent">
//                 Login
//               </Text>
//             </LinearGradient>
//           </TouchableOpacity>
//           <TouchableOpacity className="mt-4 self-center" onPress={() => navigation.navigate('Marketplace')}>
//             <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#A9CBF4', '#06264D']} className="rounded-lg h-10 w-50 justify-center">
//               <Text className="text-lg text-center text-white bg-transparent">
//                 SignUp
//               </Text>
//             </LinearGradient>
//           </TouchableOpacity>
//           <View className="flex-row items-center justify-around gap-8 mt-8">
//             <Image
//               source={require("../assets/images/mantra.jpg")}
//               className="w-[60px] h-[60px]"
//             />
//             <View className="flex-row items-center">
//               <Text className="text-black pl-2">Made in</Text>
//               <Image
//                 source={require("../assets/images/image 10.png")}
//                 className="w-10 h-5"
//               />
//             </View>
//             <Image
//               source={require("../assets/images/make-in-India-logo.jpg")}
//               className="w-20 h-12"
//             />
//           </View>
//         </View>
//       </SafeAreaView>
//     </TailwindProvider>
//   );
// }
