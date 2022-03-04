import { flex } from '../../Utils/Mixins';
import React from 'react';
import styled from 'styled-components';
import Snowfall from 'react-snowfall';

const mainFramePadding = "1rem";
export interface IChatPageProps {
    isPopUpVisible?: boolean;
    isLoading?: boolean;
    loadingChildren?: React.ReactElement;
    popUpChildren?: React.ReactElement;
    inputChildren?: React.ReactElement;
    chatContainerChildren?: React.ReactElement;
}

export const ChatPageTemplate: React.FC<IChatPageProps> = ({
    isPopUpVisible = false,
    isLoading = false,
    loadingChildren,
    popUpChildren,
    inputChildren,
    chatContainerChildren,
    ...props
}): React.ReactElement => {
    if (isLoading) {
      return <>{loadingChildren}</>;
    }
    return (
      <ChatPage>
      <ChatPageContainer>
        <StyledSnowfall />
          <PopupContainer>
            <Popup isHovered={isPopUpVisible} children={popUpChildren} />
          </PopupContainer>
        <ChatPageContent>
            <ChatContainer children={chatContainerChildren} />
            <InputContainer children={inputChildren} />
        </ChatPageContent>
      </ChatPageContainer>
      </ChatPage>
    );
};

const InputContainer = styled.div`
  ${flex("column")};
  align-items: center;
  width: calc(100% - calc(${mainFramePadding} * 2));
  height: calc(125px);
  position: absolute;
  top: calc(100% - 150px);
  justify-content: end;
`;

const ChatContainer = styled.div`
  position: absolute;
  width: calc(100% - calc(${mainFramePadding} * 2));
  height: calc(100% - 25px);
`;

const ChatPageContent = styled.div`
  min-width: 400px;
  min-height: 600px;
  width: 60%;
  height: 100%;
  ${({ theme }) => `
    background: ${theme.colors.voiceOrderingColors.chatWindowColor};
  `}
  padding: ${mainFramePadding};
  border-radius: 5px;
  margin: 0 auto 0 auto;
  overflow: hidden;
  overflow-y: hidden;
  overflow-wrap: break-word;
  position: relative;
`;

const ChatPage = styled.div`
  display: table;
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
`;

const ChatPageContainer = styled.div`
  vertical-align: middle;
  display: table-cell;
  ${({ theme }) => `
    background: ${theme.colors.voiceOrderingColors.backgroundGradient};
  `}
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Popup = styled.div<{ isHovered: boolean }>`
  ${flex("row")};
  position: relative;
  top: -50%;
  height: 50%;
  margin: 0 auto 0 auto;
  max-width: calc(800px);
  width: calc(80%);
  ${({ theme }): string => `
    background-color: ${theme.colors["background"]};
  `}
  box-shadow: 0 1mm 5mm;
  border-radius: 0 0 20px 20px;
  padding: 10px;
  z-index: 2;

  transition: 0.5s;

  ${({ isHovered }): string =>
    isHovered
      ? `
    transition: 0.25s ease-out 1;
    top: calc(0%);
  `
      : ``}
`;

const PopupContainer = styled.div`
  position: absolute;
  top: 0%;
  width: 100%;
  height: 150px;
  z-index: 2;
`;

const StyledSnowfall = styled(Snowfall)`
  position: absolute;
  z-index: -1;
`;

export default ChatPageTemplate;