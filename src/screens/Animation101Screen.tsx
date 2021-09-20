import React, { useRef, useState } from 'react'
import { Animated, View, StyleSheet, Button, Easing } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    // usaulemnte se usa para renderizar()
    const [state, setstate] = useState(0)


    // Desestructuramos de nuestra funcion/hook UseAnimation 
    const { opacityAnimated, position, startMovingAnimation, fadeIn, fadeOut } = useAnimation();


    return (
        <View style={styles.container}>

            <Animated.View style={{
                ...styles.purpleBox,
                marginBottom: 20,
                opacity: opacityAnimated,
                // Se usa transform envez de top en las animaciones 
                transform: [{
                    translateY: position
                }]
            }} />

            <Button
                title="Fade IN"
                onPress={() => {
                    fadeIn();
                    startMovingAnimation(-200)
                }} />


            <Button title="Fade OUT"
                onPress={fadeOut} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: "#5856D6",
        width: 150,
        height: 150
    }
})
