import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Panel, Cutout, List, ScrollView } from 'react95-native';

import examples from './examples';

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
    padding: 10,
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

const ExamplesScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Panel variant='outside' style={[styles.panel]}>
        <Cutout style={[styles.cutout]}>
          <ScrollView style={[styles.scrollView]} alwaysShowScrollbars>
            <View style={[styles.content]}>
              {examples.map(group => (
                <List.Accordion
                  title={group.title}
                  key={group.title}
                  defaultExpanded
                  style={[styles.section]}
                >
                  {group.sections.map((section, i) => (
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
              ))}
            </View>
          </ScrollView>
        </Cutout>
      </Panel>
    </SafeAreaView>
  );
};

export default ExamplesScreen;
