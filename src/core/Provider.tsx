/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
// import { AccessibilityInfo } from 'react-native';
import { ThemeProvider } from './theming';
import PortalHost from '../components/Portal/PortalHost';

import original from '../styles/themes/original';

import type { Theme } from '../types';

type Props = {
  children: React.ReactNode;
  theme?: Theme;
};

const Provider = ({ ...props }: Props) => {
  // const [reduceMotionEnabled, setReduceMotionEnabled] = React.useState<boolean>(
  //   false,
  // );

  // React.useEffect(() => {
  //   if (!props.theme) {
  //     AccessibilityInfo.addEventListener(
  //       'reduceMotionChanged',
  //       setReduceMotionEnabled,
  //     );
  //   }
  //   return () => {
  //     if (!props.theme) {
  //       AccessibilityInfo.removeEventListener(
  //         'reduceMotionChanged',
  //         setReduceMotionEnabled,
  //       );
  //     }
  //   };
  // }, [props.theme]);

  const getTheme = () => {
    const { theme: providedTheme } = props;

    return providedTheme || original;
  };

  const { children } = props;
  return (
    <PortalHost>
      <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>
    </PortalHost>
  );
};

export default Provider;
