import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Panel, Cutout, List, ScrollView, original } from 'react95-native';

import examples from './examples';
import themes from './examples/themes';
import { LocalThemeContext } from './util/LocalThemeContext';

const ExamplesScreen = () => {
  const navigation = useNavigation();

  const { setTheme } = useContext(LocalThemeContext);

  const onThemePress = (themeId: string) => {
    const { theme = original } = themes.find(({ id }) => id === themeId) || {};

    setTheme(theme);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Panel variant='outside' style={styles.panel}>
        <Cutout style={styles.cutout}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.content}
            alwaysShowScrollbars
          >
            <List.Accordion title='Themes' defaultExpanded>
              <List.Section>
                {themes.map(theme => (
                  <List.Item
                    key={theme.id}
                    title={theme.id}
                    onPress={() => onThemePress(theme.id)}
                  />
                ))}
              </List.Section>
            </List.Accordion>
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
      </Panel>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
  listItem: {
    height: 40,
    paddingHorizontal: 18,
  },
  panel: {
    padding: 8,
  },
  cutout: {
    backgroundColor: 'white',
    height: '100%',
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
});

export default ExamplesScreen;
