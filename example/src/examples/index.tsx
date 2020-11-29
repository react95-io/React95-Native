import ButtonExample from './ButtonExample';
import TextInputExample from './TextInputExample';
import PanelExample from './PanelExample';
import AppBarExample from './AppBarExample';
import CutoutExample from './CutoutExample';
import TextExample from './TextExample';
import DividerExample from './DividerExample';
import CheckboxExample from './CheckboxExample';
import WindowExample from './WindowExample';
import FieldsetExample from './FieldsetExample';
import MenuExample from './MenuExample';
import ProgressExample from './ProgressExample';

export default [
  { name: 'ButtonExample', component: ButtonExample, title: 'Button' },
  { name: 'TextInputExample', component: TextInputExample, title: 'TextInput' },
  { name: 'PanelExample', component: PanelExample, title: 'Panel' },
  { name: 'AppBarExample', component: AppBarExample, title: 'AppBar' },
  { name: 'CutoutExample', component: CutoutExample, title: 'Cutout' },
  { name: 'TextExample', component: TextExample, title: 'Text' },
  { name: 'DividerExample', component: DividerExample, title: 'Divider' },
  { name: 'CheckboxExample', component: CheckboxExample, title: 'Checkbox' },
  { name: 'WindowExample', component: WindowExample, title: 'Window' },
  { name: 'FieldsetExample', component: FieldsetExample, title: 'Fieldset' },
  { name: 'MenuExample', component: MenuExample, title: 'Menu' },
  { name: 'ProgressExample', component: ProgressExample, title: 'Progress' },
].sort((a, b) => {
  /* Sort screens alphabetically */
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
});
