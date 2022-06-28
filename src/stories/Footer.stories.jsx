import { Footer } from '../Components/Footer/Footer';

export default {
  title: 'MainThree/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// eslint-disable-next-line no-undef
const Template = (args) => <Footer {...args} />;

export const FooterStory = Template.bind({});
FooterStory.args = {
  variant: 'main',
};
