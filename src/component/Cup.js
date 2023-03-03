import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Cup({title, qtd}) {
  const l = 2;

  const BigCup = () => {
    return (
      <View style={bigCup.cup}>
        <Text style={bigCup.remained}>{l}L</Text>
        <Text style={{alignSelf: 'center'}}>Remained</Text>
      </View>
    );
  };

  const SmallCup = () => {
    const ml = (l / qtd) * 1000;

    return (
      <View style={smallCup.cup}>
        <Text style={smallCup.volume}>{ml}</Text>
        <Text style={{alignSelf: 'center'}}>ml</Text>
      </View>
    );
  };

  return !!title ? BigCup() : SmallCup();
}

const bigCup = StyleSheet.create({
  cup: {
    backgroundColor: '#fff',
    paddingTop: 65,
    alignSelf: 'center',
    margin: 25,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderWidth: 3,
    borderColor: '#144fc6',
    borderTopColor: '#fff',
    width: 160,
    height: 240,
  },
  remained: {
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
  },
});

const smallCup = StyleSheet.create({
  cup: {
    backgroundColor: '#fff',
    margin: 8,
    paddingTop: 18,
    alignSelf: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 3,
    borderColor: '#144fc6',
    width: 60,
    height: 70,
  },
  volume: {
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default Cup;
