import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

// UI KItten
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Divider,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {CartProvider} from './context';

// Components
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default () => (
  <>
    <SafeAreaView style={styles.topArea} />
    <StatusBar barStyle="light-content" backgroundColor="rgb(21, 26, 48)" />
    <SafeAreaView style={styles.mainArea}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <CartProvider>
          <Layout style={styles.mainArea}>
            <Header />
            <Divider />
            <Content />
            <Divider />
            <Footer />
          </Layout>
        </CartProvider>
      </ApplicationProvider>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  topArea: {flex: 0, backgroundColor: 'rgb(21, 26, 48)'},
  mainArea: {
    flex: 1,
    backgroundColor: 'rgb(21, 26, 48)',
  },

  card: {
    flex: 1,
  },
});
