import AppBarExample from './AppBarExample';
import ButtonExample from './ButtonExample';
import CardExample from './CardExample';
import CheckboxExample from './CheckboxExample';
import ColorPickerExample from './ColorPickerExample';
import DesktopExample from './DesktopExample';
import DividerExample from './DividerExample';
import FieldsetExample from './FieldsetExample';
import HourglassExample from './HourglassExample';
import ListExample from './ListExample';
import MenuExample from './MenuExample';
import NumberInputExample from './NumberInputExample';
import PanelExample from './PanelExample';
import ProgressExample from './ProgressExample';
import RadioExample from './RadioExample';
import ScrollPanelExample from './ScrollPanelExample';
import ScrollViewExample from './ScrollViewExample';
import SelectBoxExample from './SelectBoxExample';
import SelectExample from './SelectExample';
import SliderExample from './SliderExample';
import SnackbarExample from './SnackbarExample';
import TabsExample from './TabsExample';
import TextInputExample from './TextInputExample';
import TypographyExample from './TypographyExample';
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
        name: 'ColorPickerExample',
        component: ColorPickerExample,
        title: 'ColorPicker',
      },
      {
        name: 'NumberInputExample',
        component: NumberInputExample,
        title: 'NumberInput',
      },
      { name: 'RadioExample', component: RadioExample, title: 'Radio' },
      { name: 'SelectExample', component: SelectExample, title: 'Select' },
      {
        name: 'SelectBoxExample',
        component: SelectBoxExample,
        title: 'SelectBox',
      },
      { name: 'SliderExample', component: SliderExample, title: 'Slider' },
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
      {
        name: 'DividerExample',
        component: DividerExample,
        title: 'Divider',
      },
      {
        name: 'FieldsetExample',
        component: FieldsetExample,
        title: 'Fieldset',
      },
      { name: 'PanelExample', component: PanelExample, title: 'Panel' },
      {
        name: 'ScrollViewExample',
        component: ScrollViewExample,
        title: 'ScrollView',
      },
      {
        name: 'ScrollPanelExample',
        component: ScrollPanelExample,
        title: 'ScrollPanel',
      },
      {
        name: 'SnackbarExample',
        component: SnackbarExample,
        title: 'Snackbar',
      },
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
      {
        name: 'TypographyExample',
        component: TypographyExample,
        title: 'Typography',
      },
    ],
  },
];
