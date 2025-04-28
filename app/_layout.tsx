import { View, Text } from 'react-native'
import React from 'react'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { Slot, Stack } from 'expo-router'

export default function RootLayout() {
    return (
        <Provider store={store}>
            <Stack screenOptions={{
                headerShown: false,
            }} />
        </Provider>
    )
}