import { Meta, Story } from '@storybook/react';
import { SmallText } from '../..';
import KitchenPage, {IKitchenPageProps} from './KitchenPage';

export default {
    title: 'Terminal/Kitchen/KitchenPage',
    component: KitchenPage,
    args: {
        columns: 3,
        rows: 2
    },
} as Meta;

export const Basic: Story<IKitchenPageProps> = (args) => <KitchenPage {...args}>
    <SmallText>Hello</SmallText>
    <SmallText>Hello</SmallText>
    <SmallText>Hello</SmallText>
    <SmallText>Hello</SmallText>
    <SmallText>Hello</SmallText>
    <SmallText>Hello</SmallText>
</KitchenPage>;
