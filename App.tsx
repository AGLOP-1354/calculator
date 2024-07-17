/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback} from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const screenSize = useWindowDimensions();
  const buttonSize = screenSize.width / 4;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPressNumber = useCallback<(pressed: number) => void>(pressed => {
    console.log('pressed', pressed);
  }, []);

  const onPressAction = useCallback<(action: string) => void>(pressed => {
    console.log('pressed', pressed);
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}} />

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 4,
            }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number: number) => (
              <Pressable
                onPress={() => onPressNumber(number)}
                style={{
                  width: buttonSize - 4,
                  height: buttonSize - 4,
                  borderRadius: (buttonSize - 4) * 0.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'gray',
                }}>
                <Text style={{fontSize: 24}}>{number}</Text>
              </Pressable>
            ))}
          </View>

          <View style={{paddingHorizontal: 12}}>
            {[
              {label: '+', action: 'plus'},
              {label: '-', action: 'minus'},
              {label: '*', action: 'multiply'},
              {label: '/', action: 'divide'},
              {label: 'C', action: 'clear'},
              {label: '=', action: 'equal'},
            ].map(({label, action}) => (
              <Pressable
                onPress={() => onPressAction(action)}
                style={{
                  width: screenSize.width / 6,
                  height: screenSize.width / 6,
                  borderRadius: (screenSize.width / 6) * 0.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'lightGray',
                }}>
                <Text style={{fontSize: 24}}>{label}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
