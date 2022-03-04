// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactHTMLElement } from 'react';
import styled from 'styled-components';
import { Mixins } from '../../Utils';
import { motion } from 'framer-motion';


export interface IKitchenPageProps extends ReactHTMLElement<HTMLDivElement> {
    columns: number,
    rows: number  
};

const KitchenPage = ({
    children,
    columns,
    rows,
    ...props
}: IKitchenPageProps): React.ReactElement => (
    <PageDiv columns={columns} rows={rows} {...props}>
        {children}
    </PageDiv>
);

interface PageDivProps {
    columns: number;
    rows: number;
}

const PageDiv = styled(motion.div)<PageDivProps>`
    display: grid;
    grid-template-columns: ${({columns}) => 'repeat(' + columns + ', 1fr)'};
    grid-template-rows: ${({rows}) =>
        'repeat(' + rows + ', calc(100% / ' + rows + ' ))'};
    width: calc(100vw - 265px);
    height: calc(100vh - 100px);
    margin: 5px 0 0 15px;
    ${Mixins.media(
        'tablet',
        `
        width:calc(100vw - 85px);
        margin: 5px 0 0 10px;
    `,
    )}
`;

export default KitchenPage;

