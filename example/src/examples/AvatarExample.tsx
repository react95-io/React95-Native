import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react95-native';

import Container from '../util/Container';

const imageSrc =
  'https://sphoto.nasza-klasa.pl/33278012/1/square/2658174fbd.jpeg?v=1';

const AvatarExample = () => {
  return (
    <Container>
      <Container.Section title='Usage:'>
        <View style={{ flexDirection: 'row' }}>
          <Avatar style={[styles.avatar, { backgroundColor: 'palevioletred' }]}>
            <Text>BR</Text>
          </Avatar>
          <Avatar style={styles.avatar} square>
            {/* eslint-disable-next-line */}
            <Text>🚀</Text>
          </Avatar>
          <Avatar style={styles.avatar} src={imageSrc} />
          <Avatar style={styles.avatar} src={imageSrc} square />
        </View>
      </Container.Section>
    </Container>
  );
};

const styles = StyleSheet.create({
  avatar: {
    marginRight: 6
  }
});

export default AvatarExample;
