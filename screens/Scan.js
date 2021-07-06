import { func } from 'prop-types';
import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,


} from 'react-native';

import { RNCamera } from 'react-native-camera'


import { COLORS, FONTS, icons, images, SIZES } from '../constants'






const Scan = ({ navigation }) => {




    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', marginTop: SIZES.padding * 4, paddingHorizontal: SIZES.padding * 3 }}>
                <TouchableOpacity style={{
                    width: 45,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Image
                        source={icons.close}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.white
                        }}
                    />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Scan for Payment</Text>
                </View>
                <TouchableOpacity style={{
                    height: 45,
                    width: 45,
                    backgroundColor: COLORS.green,
                    borderColor: COLORS.green,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center'

                }}
                    onPress={() => console.log('info')}
                >

                    <Image
                        source={icons.info}
                        style={{
                            height: 25,
                            width: 25,
                            tintColor: COLORS.white
                        }}
                    />


                </TouchableOpacity>
            </View>
        )
    }
    function renderScanFocus() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={images.focus}
                    resizeMode='stretch'
                    style={{
                        marginTop: "-55%",
                        width: 200,
                        height: 300,

                    }}
                />
            </View>
        )
    }
    function renderPaymentMethods() {
        return (
            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 220,
                padding: SIZES.padding * 3,
                borderTopLeftRadius: SIZES.radius,
                borderTopRightRadius: SIZES.radius,
                backgroundColor: COLORS.white
            }}>
                <Text style={{ ...FONTS.h4 }}>Another Payment Methods</Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginTop: SIZES.padding * 2,

                }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: SIZES.padding * 2
                        }}
                        onPress={() => console.log('Phone Number')}
                    >
                        <View style={{
                            width: 40,
                            height: 40,
                            backgroundColor: COLORS.lightpurple,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image
                                source={icons.phone}
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: COLORS.purple
                                }} />
                        </View>

                        <Text style={{
                            marginLeft: SIZES.padding, ...FONTS.body4
                        }}>Phone Number</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        flexDirection: 'row', alignItems: 'center',
                        marginLeft: SIZES.padding * 2
                    }}
                        onPress={() => console.log('BarCode')}
                    >
                        <View style={{
                            width: 40,
                            width: 40,
                            backgroundColor: COLORS.lightGreen,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}>

                            <Image
                                source={icons.barcode}
                                resizeMode="cover"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: COLORS.primary

                                }}
                            />

                        </View>
                        <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4 }}>
                            Barcode
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }


    function onBarCodeRead(result) {

        console.log(result.data)

    }

    return (

        <View style={{ flex: 1, backgroundColor: COLORS.transparent }}>
            <RNCamera
                // ref={ref => {

                //     this.camera = ref
                // }}

                style={{ flex: 1 }}
                captureAudio={false}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                onBarCodeRead={onBarCodeRead}
                androidCameraPermissionOptions={{

                    title: 'Permision to use camera',
                    message: "Camera is required for barcode scanning",
                    buttonPositive: "ok",
                    buttonNegative: 'Cancel'
                }}
            >
                {renderHeader()}
                {renderPaymentMethods()}
                {renderScanFocus()}

            </RNCamera>
        </View>
    );
}

export default Scan;
