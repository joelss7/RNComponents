import React, { useState } from 'react'
import { Platform, Switch, View } from 'react-native';

export const SwitchScreen = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    // lo opuesto de is Enabled !
    const toggleSwitch = () => setIsEnabled(!isEnabled);

    return (
        <View style={{ marginTop: 100 }}>

            <Switch
                trackColor={{ false: "#D9D9D9", true: "#5856D6" }}
                thumbColor={

                    (Platform.OS === "android") ? '#5856D6' : ''
                }
                ios_backgroundColor="#3e3e3A"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

        </View>
    )
}
