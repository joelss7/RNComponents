import React, { useRef } from 'react'
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {

    // No dispara o vuelve a renderizar (dice fernando que es mejor que useState, que le gusta usar mas este , que es casi igual)
    const opacityAnimated = useRef(new Animated.Value(0)).current;

    const position = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // dispara una animacion con tiempo !
        Animated.timing(
            opacityAnimated,
            {
                // valor al que se movera
                toValue: 1,
                // tiempo de animacion
                duration: 800,
                // Acelarion por hardware
                useNativeDriver: true
            }
        ).start(() => console.log("La animacion ha terminado"));
    }


    const fadeOut = () => {
        // dispara una animacion con tiempo !
        Animated.timing(
            opacityAnimated,
            {
                // valor al que se movera
                toValue: 0.3,
                // tiempo de animacion
                duration: 300,
                // Acelarion por hardware
                useNativeDriver: true
            }
        ).start(() => console.log("La animacion ha terminado"));

        // End Call signifa la funcion que va disparar cuando se acabe la animacion 
    }


    const startMovingAnimation = (initPosition: number, duration = 300) => {

        // Set posicion que manden por parametro
        position.setValue(initPosition)

        // Animacion Bounce
        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                // Para que rebote
                easing: Easing.bounce
            }
        ).start();
    }


    return {
        opacityAnimated,
        position,
        fadeIn,
        fadeOut, startMovingAnimation
    }
}
