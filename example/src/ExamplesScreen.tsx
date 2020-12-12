import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Panel,
  Cutout,
  List,
  Text,
  ScrollView,
  ScrollPanel,
  Divider,
} from 'react95-native';

import examples from './examples';
import themes from './examples/themes';
import { LocalThemeContext } from './util/LocalThemeContext';
import ThemeButton from './util/ThemeButton';

const ExamplesScreen = () => {
  const navigation = useNavigation();
  const { theme: currentTheme, setTheme } = useContext(LocalThemeContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollPanel>
        {themes.map(theme => (
          <ThemeButton
            key={theme.name}
            theme={theme}
            selected={theme.name === currentTheme.name}
            onPress={() => setTheme(theme)}
          />
        ))}
      </ScrollPanel>
      <Panel variant='outside' style={styles.panel}>
        <Divider />
        <Cutout style={styles.cutout}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.content}
            alwaysShowScrollbars
          >
            <List.Accordion
              title='Components'
              style={styles.section}
              defaultExpanded
            >
              {examples.map((section, i) => (
                <React.Fragment key={section.title}>
                  {i > 0 && <List.Divider />}
                  <List.Section title={section.title}>
                    {section.items.map(item => (
                      <List.Item
                        title={item.title}
                        key={item.title}
                        onPress={() => navigation.navigate(item.name)}
                      />
                    ))}
                  </List.Section>
                </React.Fragment>
              ))}
            </List.Accordion>
          </ScrollView>
        </Cutout>
        <View style={[styles.info]}>
          <Panel variant='well' style={[styles.infoItem, { flexGrow: 1 }]}>
            <Text>Current theme: {currentTheme.name}</Text>
          </Panel>
          <Panel variant='well' style={[styles.infoItem]}>
            <Text>Total themes: {themes.length}</Text>
          </Panel>
        </View>
      </Panel>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  listItem: {
    height: 40,
    paddingHorizontal: 18,
  },
  panel: {
    flex: 1,
    padding: 8,
    marginTop: -4,
    paddingTop: 12,
  },
  cutout: {
    backgroundColor: 'white',
    flexGrow: 1,
    marginTop: 8,
  },
  content: {
    padding: 16,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 16,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',

    marginTop: 6,
    marginBottom: 2,
  },
  infoItem: {
    marginHorizontal: 2,
    paddingHorizontal: 4,
    height: 30,
    justifyContent: 'center',
  },
});

export default ExamplesScreen;
