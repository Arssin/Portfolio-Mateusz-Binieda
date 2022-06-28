import { MyProjects } from '../Components/HomeBody/MyProjects/MyProjects';

export default {
  title: 'Components/MyProjects',
  component: MyProjects,
};

const Template = (args) => <MyProjects {...args} />;

export const FooterStory = Template.bind({});
FooterStory.args = {
  variant: 'main',
};
