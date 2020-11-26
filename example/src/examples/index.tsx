import ButtonExample from './ButtonExample';
import TextInputExample from './TextInputExample';
import PanelExample from './PanelExample';
import AppBarExample from './AppBarExample';
import CutoutExample from './CutoutExample';
import TextExample from './TextExample';
import AvatarExample from './AvatarExample';

export default [
  { name: 'ButtonExample', component: ButtonExample, title: 'Button' },
  { name: 'TextInputExample', component: TextInputExample, title: 'TextInput' },
  { name: 'PanelExample', component: PanelExample, title: 'Panel' },
  { name: 'AppBarExample', component: AppBarExample, title: 'AppBar' },
  { name: 'CutoutExample', component: CutoutExample, title: 'Cutout' },
  { name: 'TextExample', component: TextExample, title: 'Text' },
  { name: 'AvatarExample', component: AvatarExample, title: 'Avatar' }
].sort((a, b) => {
  /* Sort screens alphabetically */
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
});
