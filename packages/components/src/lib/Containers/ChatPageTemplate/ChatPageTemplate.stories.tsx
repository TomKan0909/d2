import { 
  Button,
  ChatPageTemplate,
  Divider,
  Heading,
  IChatPageProps,
  InputFragment,
  Loading,
  MainTheme,
  SmallText,
  Tag,
  VoiceButton,
} from '@ce/components';
import { Microphone, ShoppingCart } from 'styled-icons/fa-solid';
import { Meta, Story } from '@storybook/react';
import Snowfall from 'react-snowfall';
import styled from 'styled-components';
import Theme from '../../Themes/ThemeTemplate';

const isLoading = false;
const isPopUpVisible = false;

const shoppingCartDisplayProps = {
    icon: ShoppingCart,
    primary: true,
    iconSize: "25px",
    margin: '0 0 0 auto',
}

export default {
    title: 'Voice User Interface/ChatPage/ChatPage Template',
    component: ChatPageTemplate,
    args: {
        isPopUpVisible: isPopUpVisible,
        isLoading: isLoading,
        loadingChildren: (
            <>
            <Loading loading={isLoading} />
            <Snowfall color={MainTheme.colors.primary} />
            </>
        ),
        popUpChildren: (
          <>
            <Heading>Hey there User!</Heading>
            <Button {...shoppingCartDisplayProps}>
                0 | $0
            </Button>
          </>
        ),
        chatContainerChildren: (
            <div style={{
              height: "calc(100% - 275px)",
              backgroundColor: 'rgba(238, 238, 238, 0.25)',
            }} 
            />
        ),
        inputChildren: (
            <>
                <VoiceButton 
                    icon={Microphone}
                    iconSize='20px'
                />
                <Divider>
                  <SmallText>OR</SmallText>
                </Divider>
                <div>
                    <Tag style={{backgroundColor: MainTheme.colors['background']}}>
                      {'Place Order'}</Tag>
                    <Tag style={{backgroundColor: MainTheme.colors['background']}}>{'Cancel Order'}</Tag>
                    <Tag style={{backgroundColor: MainTheme.colors['background']}}>{'List Orders'}</Tag>
                    <Tag style={{backgroundColor: MainTheme.colors['background']}}>{'Done'}</Tag>
                </div>
                <InputFragment 
                    type='text'
                    id='name'
                    placeholder='Type your response...'
                    width={'50%'}
                />
                <Button 
                  primary={false} 
                  color={MainTheme.colors.background}  
                  children={'Submit'}/>
            </>

        ),
    },
}

export const Empty: Story<IChatPageProps> = () => (
  <ChatPageTemplate />
);

export const ChatPage: Story<IChatPageProps> = (args) => (
    <ChatPageTemplate {...args} />
);