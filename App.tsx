import React from 'react';
import {SafeAreaView} from 'react-native';
import {AgendaComponent} from './src/presentation/screen/AgendaComponent';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AgendaComponent />
    </SafeAreaView>
  );
};
