import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Panel,
  AppBar,
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
      <AppBar style={styles.header}>
        <Text style={styles.heading} bold disabled>
          React95
        </Text>
      </AppBar>
      <ScrollPanel style={styles.scrollPanel}>
        {themes.map(theme => (
          <ThemeButton
            theme={theme}
            currentTheme={currentTheme}
            selected={theme.name === currentTheme.name}
            onPress={() => setTheme(theme)}
            key={theme.name}
          />
        ))}
      </ScrollPanel>
      <Panel variant='outside' style={styles.panel}>
        <Divider />
        <Cutout
          style={[styles.cutout, { backgroundColor: currentTheme.canvas }]}
        >
          <ScrollView
            style={styles.scrollView}
            scrollViewProps={{
              contentContainerStyle: styles.content,
            }}
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
  header: {
    justifyContent: 'center',
    marginBottom: -4,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  heading: {
    fontSize: 24,
    fontStyle: 'italic',
  },
  scrollPanel: {
    zIndex: -1,
  },
});

export default ExamplesScreen;
