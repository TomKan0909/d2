import React from 'react';
import styled, {css} from "styled-components";
import { IChair } from '../Chair/Chair';

type getChairTextType = () => JSX.Element;

export interface IAdvancedChair extends IChair{
    /** Primary color of chair */
    chairColor: string;
    /** Secondary color of chair to create a gradient */
    secondaryChairColor: string;
    /** Property to pass for back of the chair */
    backChairProps:React.HTMLAttributes<HTMLDivElement>;
    /** Property to pass for chair's seat */
    chairSeatProps:React.HTMLAttributes<HTMLDivElement>;
    /** Property to pass for chair's legs */
    chairLegProps: React.HTMLAttributes<HTMLDivElement>;
    /** The function to execute on chair click */
    onChairClick: (
    ) => void;
}

export const AdvancedChair: React.FC<IAdvancedChair> = ({
    occupiedBy = '',
    relativeSize = 1.0,
    chairColor = '#6495ED',
    secondaryChairColor= '#adbcf9',
    onChairClick,
    backChairProps,
    chairSeatProps,
    chairLegProps,
    ...props
}) => {
    /**
     * Function to return a text string for occupiedBy on chair's seat
     */
    const getChairText: getChairTextType = () => (
        <AdvancedChairText relativeSize={relativeSize}>
            {occupiedBy}
        </AdvancedChairText>
    );
    return (
        <div{...props}>
            <ChairBody onClick={onChairClick}>
                <BackOfChair
                    chairColor = {chairColor}
                    secondaryChairColor = {secondaryChairColor}
                    {...backChairProps}/>
                <ChairSeat
                    chairColor = {chairColor}
                    secondaryChairColor = {secondaryChairColor}
                    {...chairSeatProps}
                >
                    {getChairText()}
                </ChairSeat>
                <TopChairLeg
                    chairColor = {chairColor}
                    secondaryChairColor = {secondaryChairColor}
                    {...chairLegProps}/>
                <BottomChairLeg
                    chairColor = {chairColor}
                    secondaryChairColor = {secondaryChairColor}
                    {...chairLegProps}/>
            </ChairBody>
        </div>
    )
}

const ChairBody = styled.div`
  color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 7px 21px 4px;
  grid-template-rows: 2px 3px 5px 12px 5px 3px 2px;
  grid-template-areas:
  "back . ."
  "back seat  ."
  "back seat firstleg"
  "back seat  ."
  "back seat secondleg"
  "back seat ."
  "back . ."
`;

interface IChairColorStyle{
    chairColor: string;
    secondaryChairColor: string;
}

const BackOfChair = styled.div<IChairColorStyle>`
  grid-area: back;
  border-radius: 1px 3px 3px 1px;
  ${({chairColor, secondaryChairColor}) => `background: linear-gradient(to right, ${chairColor}, 50%, ${secondaryChairColor})`};
`;

const ChairSeat = styled.div<IChairColorStyle>`
  grid-area: seat;
  border-radius: 0 3px 3px 0;
  ${({chairColor, secondaryChairColor}) => `background: linear-gradient(to right, ${chairColor}, 50%, ${secondaryChairColor})`}
`;

const TopChairLeg = styled.div<IChairColorStyle>`
  grid-area: firstleg;
  border-radius: 0 3px 3px 0;
  ${({chairColor, secondaryChairColor}) => `background: linear-gradient(to right, ${chairColor}, 10%, ${secondaryChairColor})`}
`;

const BottomChairLeg = styled.div<IChairColorStyle>`
  grid-area: secondleg;
  border-radius: 0 3px 3px 0;
  ${({chairColor, secondaryChairColor}) => `background: linear-gradient(to right, ${chairColor}, 10%, ${secondaryChairColor})`}
`;

const textBaseStyle = css<Pick<IAdvancedChair, 'relativeSize'>>`
    ${({ relativeSize }) => {
        const BASE_CHAIR_FONT_SIZE = 1.5;
        return `font-size: ${BASE_CHAIR_FONT_SIZE * relativeSize}em;`;
    }}
    color: ${({ theme }) => theme.colors.background};
    font-weight: bold;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const textChairStyle = css<Pick<IAdvancedChair, 'relativeSize'>>`
    ${textBaseStyle};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AdvancedChairText = styled.div<Pick<IAdvancedChair, 'relativeSize'>>`
    ${textChairStyle};
`;
