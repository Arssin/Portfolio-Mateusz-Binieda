import { Footer } from '../Components/Footer/Footer';

export default {
  title: 'MainThree/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Footer {...args} />;

export const FooterStory = Template.bind({});
FooterStory.args = {
  variant: 'main',
};
