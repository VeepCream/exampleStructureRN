import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from "recoil"
import RecoilOutside from "recoil-outside"

import AppNavigator from './stacks/AppNavigator';

export default function Navigation() {

    return (
        <RecoilRoot>
            <NavigationContainer>
                <RecoilOutside />
                <AppNavigator />
            </NavigationContainer>
        </RecoilRoot>
    );
}