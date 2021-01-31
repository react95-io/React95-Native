import React, { useState } from 'react';
import { StyleSheet, View, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Panel,
  AppBar,
  Button,
  List,
  Text,
  ScrollView,
  ScrollPanel,
  Divider,
  Window,
  Anchor,
  useTheme,
} from 'react95-native';
import type { Theme } from 'react95-native';
import examples from './examples';
import themes from './examples/themes';
import ThemeButton from './util/ThemeButton';

type Props = {
  setTheme: (theme: Theme) => void;
};

const ExamplesScreen = ({ setTheme: setThemeProp }: Props) => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const navigation = useNavigation();
  // const { theme: currentTheme, setTheme } = useContext(LocalThemeContext);

  const currentTheme = useTheme();
  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.warn("Couldn't load page", err));
  };

  return (
    <View style={styles.container}>
      {showAboutModal ? (
        <Window
          title='About'
          style={{ flex: 1 }}
          onClose={() => setShowAboutModal(false)}
        >
          <View
            style={{
              padding: 16,
              justifyContent: 'space-between',
              flex: 1,
            }}
          >
            <Panel variant='cutout' background='material' style={styles.cutout}>
              <ScrollView
                style={styles.scrollView}
                scrollViewProps={{
                  contentContainerStyle: styles.content,
                }}
              >
                <View>
                  <Text
                    bold
                    style={{
                      fontSize: 22,
                      marginBottom: 16,
                    }}
                  >
                    Welcome to React95 Native
                  </Text>

                  <Text style={{ lineHeight: 24 }}>
                    This <Text style={{ color: 'red' }}>PRERELEASE</Text>{' '}
                    version of React95 Native is under construction!
                    {'\n'}
                    {'\n'}
                    Please remember that the components, themes and API will
                    continue to change through the product&apos;s development
                    cycle.
                    {'\n'}
                    {'\n'}
                    If you find this project interesting consider doing the
                    following:
                    {'\n'}
                    {'\n'}- follow our{' '}
                    <Anchor
                      underline
                      onPress={() => openLink('https://twitter.com/react95_io')}
                    >
                      Twitter account
                    </Anchor>
                    {'\n'}- visit our{' '}
                    <Anchor
                      underline
                      onPress={() => openLink('https://react95.io/')}
                    >
                      Website
                    </Anchor>
                    {'\n'}- sponsor us on{' '}
                    <Anchor
                      underline
                      onPress={() =>
                        openLink('https://www.patreon.com/arturbien')
                      }
                    >
                      Patreon
                    </Anchor>
                    {'\n'}- donate through{' '}
                    <Anchor
                      underline
                      onPress={() =>
                        openLink('https://www.paypal.com/paypalme/react95')
                      }
                    >
                      PayPal
                    </Anchor>
                    {'\n'}- tell your friends!
                    {'\n'}
                    {'\n'}
                    Thanks!
                    {'\n'}
                    {'\n'}- the React95 team
                  </Text>
                </View>
              </ScrollView>
            </Panel>
            <View>
              <Divider style={{ marginTop: 16 }} />
              <Button
                primary
                style={{ marginTop: 16, alignSelf: 'flex-end', width: 150 }}
                onPress={() => setShowAboutModal(false)}
              >
                OK
              </Button>
            </View>
          </View>
        </Window>
      ) : (
        <>
          <AppBar style={styles.header}>
            <View style={styles.logo}>
              <Image
                style={styles.logoImage}
                source={{
                  uri:
                    'data:image/png;base64,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',
                }}
              />
              <Text style={styles.heading} bold disabled>
                React95
              </Text>
            </View>
            <Button
              square
              variant='raised'
              size='lg'
              style={styles.aboutButton}
              onPress={() => setShowAboutModal(true)}
            >
              <Image
                style={styles.questionMark}
                source={{
                  uri:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABeElEQVR4AcXBgW0cMQxFwUfl+qI641dnYmWMZSCAsdmzV+szPGPcIFF8QcK4wNggUbzpfeLuZCbuzpKZuDuZyTJnZ5EwPmFcIFG8iSgyE3cnM3F3MhN3Z8lM3J3M5J85OxLGE8YXJCqiuCozOZqzI2GcMD4hUREFGNcVS2by0ZwdCeOg8YRERRRg7DHAOCNRHDROSFREAcZd7p0jif80fpB7Z5mz80zjQKIiCjBeYc7OZx5sGoN3Eu+q+JbGhjE4MjO+pXGDxGK8kcR3NDZJLMYmicU4aGyQWIxNEotx4sEJM+MJ4wOJighAnBkDJBbjCeMmiYoowDgzBkgsxieMGyQqogDjzBggsRhfaGySqIgCjDNjsKVxi/EqjQ0SFVE8MwbbGr+s8csaP0BiMS5ovJjEYlz0YJOZ8UrGDRLFQe+TOTuLxGJc8GCTpIoQR2N07mhskFQR4kwEtzR+WePFJBbjoj9smHMOM6n3ydEYILEYG4x7inPGpr+fbJEGoinDewAAAABJRU5ErkJggg==',
                }}
              />
            </Button>
          </AppBar>
          <ScrollPanel style={styles.scrollPanel}>
            {themes.map(theme => (
              <ThemeButton
                theme={theme}
                currentTheme={currentTheme}
                selected={theme.name === currentTheme.name}
                onPress={() => setThemeProp(theme)}
                key={theme.name}
              />
            ))}
          </ScrollPanel>
          <Panel variant='raised' style={styles.panel}>
            <Divider />
            <Panel variant='cutout' background='canvas' style={styles.cutout}>
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
            </Panel>
            <View style={[styles.statusBar]}>
              <Panel
                variant='well'
                style={[styles.statusBarItem, { flexGrow: 1, marginRight: 4 }]}
              >
                <Text>Current theme: {currentTheme.name}</Text>
              </Panel>
              <Panel variant='well' style={[styles.statusBarItem]}>
                <Text>Total themes: {themes.length}</Text>
              </Panel>
            </View>
          </Panel>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  statusBar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',

    marginTop: 4,
  },
  statusBarItem: {
    paddingHorizontal: 6,
    height: 32,
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    marginBottom: -4,
    zIndex: 10,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 2,
  },
  logoImage: {
    position: 'absolute',
    left: -38,
    top: -4,
    height: 32,
    width: 32,
    resizeMode: 'cover',
  },
  heading: {
    fontSize: 24,
    fontStyle: 'italic',
  },
  aboutButton: {
    position: 'absolute',
    right: 8,
    height: 40,
    width: 40,
  },
  questionMark: {
    width: 26,
    height: 26,
  },
  scrollPanel: {
    zIndex: -1,
  },
});

export default ExamplesScreen;
