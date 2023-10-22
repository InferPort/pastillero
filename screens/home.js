import React, { useLayoutEffect, useState } from "react";
import { View, TextInput, Text, FlatList, Pressable, SafeAreaView } from "react-native";
import home from "../styles/home"

const Home = ({ route, navigation }) => {
    return (
        <View>
            <Text style={home.title}>Buen día, Nicolás! :)</Text>
            <Text style={home.subtitle}>Hoy debes tomar 4 medicamentos</Text>
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
                renderItem={({ item }) => <Text style={home.item}>{item.key}</Text>}
            />
        </View>
    );
}

export default Home;