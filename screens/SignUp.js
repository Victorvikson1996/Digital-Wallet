import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Modal,
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    Platform

} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'





import { COLORS, SIZES, icons, images, FONTS } from '../constants'
import icon from '../constants/icon'

const SignUp = (props) => {

    function renderHeader() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.padding * 6,
                    paddingHorizontal: SIZES.padding * 2
                }}

                onPress={() => console.log("Sign Up")}
            >
                <Image
                    source={icon.back}
                    resizeMode='contain'
                    style={
                        {
                            width: 20,
                            height: 20,
                            tintColor: COLORS.white
                        }
                    }
                />
                <Text style={{ marginLeft: SIZES.padding * 1.5, color: COLORS.white, ...FONTS.h4 }}>SignUp</Text>
            </TouchableOpacity>
        )
    }

    function renderLogo() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 5,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center'

                }}>

                <Image
                    source={images.wallieLogo}



                    resizeMode="contain"
                    style={{
                        width: '60%'
                    }
                    }
                />

            </View>
        )
    }


    function renderForm() {
        return (
            <View style={{
                marginTop: SIZES.padding * 3,
                marginHorizontal: SIZES.padding * 3,
            }}>

                {/* {Full Name} */}
                <View
                    style={{
                        marginTop: SIZES.padding * 3,
                        marginHorizontal: SIZES.padding * 3
                    }}
                >

                    <View style={{ marginTop: SIZES.padding * 3 }}>
                        <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Full Name</Text>
                        <TextInput
                            style={{
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.white,
                                borderBottomWidth: 1,
                                height: 40,
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                            placeholder="Enter Full Name"
                            placeholderTextColor={COLORS.white}
                            selectionColor={COLORS.white}
                        />
                    </View>
                    {/* Phone  NUMEr */}
                    <View style={{ marginTop: SIZES.padding * 2 }}>
                        <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Phone Number</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {/* country code */}
                            <TouchableOpacity style={{
                                width: 100,
                                height: 50,
                                marginHorizontal: 5,
                                borderBottomColor: COLORS.white,
                                borderBottomWidth: 1,
                                flexDirection: 'row',
                                ...FONTS.body2
                            }}
                                onPress={() => console.log("Show Modal")}
                            >
                                <View style={{ justifyContent: 'center' }}>
                                    <Image
                                        source={icons.down}
                                        style={{
                                            width: 10,
                                            height: 10,
                                            tintColor: COLORS.white
                                        }}
                                    />

                                </View>
                                <View sytle={{
                                    justifyContent: 'center',
                                    marginLeft: 5,
                                }}>
                                    <Image source={images.usFlag}
                                        resizeMode="contain"
                                        style={{ width: 30, height: 30 }}
                                    />

                                </View>
                                <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>US+1</Text>
                                </View>
                            </TouchableOpacity>
                            {/* phone Number */}

                            <TextInput
                                sytle={{
                                    flex: 1,
                                    marginVertical: SIZES.padding
                                }}
                            />

                        </View>
                    </View>
                </View>

            </View>
        )
    }

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
        >
            <LinearGradient
                colors={[COLORS.lime, COLORS.emerald]}
                style={{ flex: 1 }}
            >
                <ScrollView>
                    {renderHeader()}
                    {renderLogo()}
                    {renderForm()}
                </ScrollView>

            </LinearGradient>

        </KeyboardAvoidingView>

    )
}

export default SignUp