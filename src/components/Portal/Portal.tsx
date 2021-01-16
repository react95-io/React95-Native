import React from 'react';
import PortalConsumer from './PortalConsumer';
import PortalHost, { PortalContext, PortalMethods } from './PortalHost';

import type { Theme } from '../../types';
import { ThemeProvider, withTheme } from '../../core/theming';

type Props = {
  /**
   * Content of the `Portal`.
   */
  children: React.ReactNode;
  /**
   * @optional
   */
  theme: Theme;
};

/**
 * Portal allows to render a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a [`Portal.Host`](portal-host.html) component to be rendered somewhere in the parent tree.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Portal, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Portal>
 *     <Text>This is rendered at a different place</Text>
 *   </Portal>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Portal = ({ children, theme }: Props) => {
  return (
    <PortalContext.Consumer>
      {manager => (
        <PortalConsumer manager={manager as PortalMethods}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PortalConsumer>
      )}
    </PortalContext.Consumer>
  );
};

Portal.Host = PortalHost;

export default withTheme(Portal);
