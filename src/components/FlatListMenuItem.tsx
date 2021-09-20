import React from 'react'
import { MenuItem } from '../interfaces/appInterfaces';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

interface Props {
    menuItem: MenuItem
}

// Recibe 1 item y lo renderiza inidivudalmente en la lista
export const FlatListMenuItem = (props: Props) => {

    const { navigate } = useNavigation();

    const { menuItem } = props;

    return (
        <TouchableOpacity activeOpacity={0.5}
            onPress={() => navigate(menuItem.component as any)}
        >
            <View style={styles.container} >

                <Icon
                    name={menuItem.icon}
                    size={24}
                    color="#FAF" />
                <Text style={styles.itemText}> {menuItem.name}</Text>

                <View style={styles.espaciadorColumns}>
                    {/* Se va estirar todo lo que puede */}
                </View>

                <Icon
                    name="chevron-forward-outline"
                    size={24}
                    color="#FAF" />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 24
    },
    espaciadorColumns: {
        flex: 1
    }

})
