import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'
import { FlatListMenuItem } from '../components/FlatListMenuItem';
// Se separo archivo poara evitar longitud
import { menuItems } from '../mockData/menuItems';


// yarn add -D @types/react-native-vector-icons

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const renderListHeader = () => {

        return (
            <View style={{ marginBottom: 20 }}>
                <Text style={styles.title}>Opciones de Menú</Text>
            </View>
        )
    }

    const itemSeparator = () => {
        return (
            <View style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 8 }}>
            </View>
        );
    }

    return (

        <View style={{ flex: 1, marginTop: top + 20, ...styles.globlalMargin }}>

            <FlatList
                data={menuItems}
                // itera cada item y se lo pasa al renderizarMenuItem
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => renderListHeader()}
                ItemSeparatorComponent={() => itemSeparator()}


            >
            </FlatList>

        </View>
    )
}
