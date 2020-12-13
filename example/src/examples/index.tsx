import AppBarExample from './AppBarExample';
import ButtonExample from './ButtonExample';
import CardExample from './CardExample';
import CheckboxExample from './CheckboxExample';
import CutoutExample from './CutoutExample';
import DesktopExample from './DesktopExample';
import DividerExample from './DividerExample';
import FieldsetExample from './FieldsetExample';
import HourglassExample from './HourglassExample';
import ListExample from './ListExample';
import MenuExample from './MenuExample';
import PanelExample from './PanelExample';
import ProgressExample from './ProgressExample';
import RadioExample from './RadioExample';
import ScrollPanelExample from './ScrollPanelExample';
import SelectBoxExample from './SelectBoxExample';
import SelectExample from './SelectExample';
import SnackbarExample from './SnackbarExample';
import TabsExample from './TabsExample';
import TextExample from './TextExample';
import TextInputExample from './TextInputExample';
import WindowExample from './WindowExample';

export default [
  {
    title: 'Inputs',
    items: [
      { name: 'ButtonExample', component: ButtonExample, title: 'Button' },
      {
        name: 'CheckboxExample',
        component: CheckboxExample,
        title: 'Checkbox',
      },
      {
        name: 'FieldsetExample',
        component: FieldsetExample,
        title: 'Fieldset',
      },
      { name: 'RadioExample', component: RadioExample, title: 'Radio' },
      { name: 'SelectExample', component: SelectExample, title: 'Select' },
      {
        name: 'SelectBoxExample',
        component: SelectBoxExample,
        title: 'SelectBox',
      },
      {
        name: 'TextInputExample',
        component: TextInputExample,
        title: 'TextInput',
      },
    ],
  },
  {
    title: 'Layout',
    items: [
      { name: 'AppBarExample', component: AppBarExample, title: 'AppBar' },
      { name: 'CardExample', component: CardExample, title: 'Card' },
      { name: 'CutoutExample', component: CutoutExample, title: 'Cutout' },
      {
        name: 'DividerExample',
        component: DividerExample,
        title: 'Divider',
      },
      { name: 'PanelExample', component: PanelExample, title: 'Panel' },
      { name: 'ScrollPanelExample', component: ScrollPanelExample, title: 'ScrollPanel' },
      { name: 'SnackbarExample', component: SnackbarExample, title: 'Snackbar' },
      { name: 'WindowExample', component: WindowExample, title: 'Window' },
    ],
  },
  {
    title: 'Navigation',
    items: [
      { name: 'ListExample', component: ListExample, title: 'List' },
      { name: 'MenuExample', component: MenuExample, title: 'Menu' },
      { name: 'TabsExample', component: TabsExample, title: 'Tabs' },
    ],
  },
  {
    title: 'Other',
    items: [
      {
        name: 'DesktopExample',
        component: DesktopExample,
        title: 'Desktop',
      },
      {
        name: 'HourglassExample',
        component: HourglassExample,
        title: 'Hourglass',
      },
      {
        name: 'ProgressExample',
        component: ProgressExample,
        title: 'Progress',
      },
    ],
  },
  {
    title: 'Typography',
    items: [{ name: 'TextExample', component: TextExample, title: 'Text' }],
  },
];
