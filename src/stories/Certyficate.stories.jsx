import { Slider } from '../Components/HomeBody/Certificate/Slider';

export default {
  title: 'Components/Certificates',
  component: Slider,
};

const Template = (args) => <Slider {...args} />;

export const FooterStory = Template.bind({});
FooterStory.args = {
  variant: 'main',
};
