import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,


} from 'react-native';

import { RNCamera } from 'react-native-camera'


import { COLORS, FONTS, icons, images, SIZES } from '../constants'



const Scan = (navigation) => {




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
                    <Image />

                </TouchableOpacity>
            </View>
        )
    }


    return (
        <View style={{ flex: 1, backgroundColor: COLORS.transparent }}>
            <RNCamera
                ref={ref => {

                    this.camera = ref
                }}

                style={{ flex: 1 }}
                captureAudio={false}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                    title: 'Permision to use camera',
                    message: "Camera is required for barcode scanning",
                    buttonPositive: "ok",
                    buttonNegative: 'Cancel'
                }}
            >
                {renderHeader()}

            </RNCamera>
        </View>
    );
}

export default Scan;
