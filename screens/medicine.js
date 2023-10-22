import React, { useLayoutEffect, useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import medicine from "../styles/home"
const Medicine = ({ route, navigation }) => {
    return (
        <View>
            <FlatList
                data={[
                    { key: 'Devisssssn' },
                    { key: 'Dan' },
                    { key: 'Dominic' },
                    { key: 'Jackson' },
                    { key: 'James' },
                    { key: 'Joel' },
                    { key: 'John' },
                    { key: 'Jillian' },
                    { key: 'Jimmy' },
                    { key: 'Julie' },
                ]}
                renderItem={({ item }) => <Text style={medicine.item}>{item.key}</Text>}
            />
        </View>
    );
}

export default Medicine;