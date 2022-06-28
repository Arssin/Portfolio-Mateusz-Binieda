import { MyProjects } from '../Components/HomeBody/MyProjects/MyProjects';

export default {
  title: 'Components/MyProjects',
  component: MyProjects,
};

// eslint-disable-next-line no-undef
const Template = (args) => <MyProjects {...args} />;

export const FooterStory = Template.bind({});
FooterStory.args = {
  variant: 'main',
};
