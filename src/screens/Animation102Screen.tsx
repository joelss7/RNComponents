import React, { useRef } from 'react'
import { View, StyleSheet, PanResponder, Animated } from 'react-native';



export const Animation102Screen = () => {

    // DRAGABLLE BOX
    const pan = useRef(new Animated.ValueXY()).current;

    // gestures 
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x, // x,y are Animated.Value
                dy: pan.y,
            },
        ], {
            // Tiene que star en falso para que jale 
            useNativeDriver: false
        }),

        // cuando la persona suelta la animacion
        onPanResponderRelease: () => {
            Animated.spring(
                pan, // Auto-multiplexed
                {
                    toValue: { x: 0, y: 0 },
                    // Tiene ser falso par quitar warning
                    useNativeDriver: false
                }
            ).start();
        },
    });

    return (
        <View style={styles.container}>
            <Animated.View
                {...panResponder.panHandlers}
                style={[pan.getLayout(), styles.box]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        backgroundColor: "#61dafb",
        width: 80,
        height: 80,
        borderRadius: 4,
    },
});
