import React from 'react';
import {
  createAppContainer,
  StackActions,
  NavigationActions,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Welcome from '../screens/Welcome';

interface AppNavigatorProps {
  initialRouteName: string | undefined;
}

export const resetNavigation = (routeName: string) => {
  StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName})],
  });
};

const AppNavigator = ({initialRouteName}: AppNavigatorProps) => {
  const Navigator = createAppContainer(
    createStackNavigator(
      {
        welcome: {screen: Welcome},
      },
      {
        initialRouteName,
        headerMode: 'none',
      },
    ),
  );
  return <Navigator />;
};
export default AppNavigator;