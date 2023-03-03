import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
// Components
import Cup from './component/Cup';

function App() {
  const cups = 8;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>Drink Water</Text>
        <Text style={styles.subTitle}>Goal: 2 Liters</Text>
      </View>
      <Cup title={true} />
      <Text style={styles.question}>
        How many glasses of water that you have drank?
      </Text>
      <View style={styles.cups}>
        {[...Array(cups)].map(e => (
          <Cup title={false} qtd={cups} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3494e4',
    flex: 1,
    flexDirection: 'column',
  },
  info: {
    marginTop: 35,
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    fontWeight: '700',
    lineHeight: 50,
    fontSize: 26,
  },
  subTitle: {
    alignSelf: 'center',
    fontSize: 18,
  },
  question: {
    alignSelf: 'center',
    fontSize: 16,
    marginBottom: 25,
  },
  cups: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25,
    flexDirection: 'row',
  },
});

export default App;
