import { Skills } from '../Components/HomeBody/Skills/Skills';

export default {
  title: 'Components/Skills',
  component: Skills,
};

const Template = (args) => <Skills {...args} />;

export const SkillsStory = Template.bind({});
SkillsStory.args = {
  variant: 'main',
};
