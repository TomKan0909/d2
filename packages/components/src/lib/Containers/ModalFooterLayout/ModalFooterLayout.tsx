import React from 'react';
import styled from 'styled-components';
import {flex} from '../../Utils/Mixins';

export interface ModalFooterLayoutProps extends React.HTMLAttributes<HTMLDivElement>{
    /* The JSX Elements for the left side of the footer */
    footerLeft?: JSX.Element;
    /* The JSX Elements for the center of the footer */
    footerCenter?: JSX.Element;
    /* The JSX Elements for the right side of the footer */
    footerRight?: JSX.Element;
}

export const ModalFooterLayout: React.FC<ModalFooterLayoutProps> = ({
    footerLeft,
    footerCenter,
    footerRight,
    ...props
}): React.ReactElement => (
    <FooterContainer $centerExists={footerCenter !== undefined} {...props}>
        <Left> {footerLeft} </Left>
        <Center> {footerCenter} </Center>
        <Right> {footerRight} </Right>
    </FooterContainer>
);

interface ContainerProps{
    $centerExists: boolean;
}

const FooterContainer = styled.div<ContainerProps>`
    ${props => flex('row', props.$centerExists ? 'space-around' : 'space-between')}
`;

const Left = styled.div`
`;

const Center = styled.div`
`;

const Right = styled.div`
`;