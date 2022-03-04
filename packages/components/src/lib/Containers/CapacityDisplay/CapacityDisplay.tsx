import React from 'react';
import styled from 'styled-components';

export interface ICapacityDisplay {
    /**
     * Total number of occupied seats
     */
    totalSeatsOccupied: number;
    /**
     * Total number of seats
     */
    totalNumberOfSeats: number;
}

/**
 * Primary UI component for user interaction
 */
export const CapacityDisplay: React.FC<ICapacityDisplay> = ({
    totalSeatsOccupied = 0,
    totalNumberOfSeats = 0,
    ...props
}) => {

    const capacityPercent = Math.ceil(
        (totalSeatsOccupied / totalNumberOfSeats) * 100,
    );

    return (
        <ContainerForComponent {...props}>
            <Row>
                <Col3>
                    <PieBox
                        capacityPercent={capacityPercent}
                    />
                </Col3>
                <Col8>
                    <TitleDiv>Current Capacity</TitleDiv>
                    <PercentDiv>{`${capacityPercent}% Full`}</PercentDiv>
                </Col8>
            </Row>
        </ContainerForComponent>
    );
};

/**
 * Styled component variables
 */

const ContainerForComponent = styled.div`
    height: 40px;
    width: 170px;
`;

interface IPieBox {
    capacityPercent: number;
}

const PieBox = styled.div<IPieBox>`
    flex-basis: 0;
    max-width: 100%;
    display: block;
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border-color: ${({theme}) => theme.colors.border};
    background-image: conic-gradient(
        ${({ theme }) => theme.colors.primary}
            ${({ capacityPercent }) => capacityPercent * 3.6}deg,
        ${({ theme }) => theme.colors.chairTableBackground} 0 270deg
    );
`;

const TitleDiv = styled.div`
    padding-left: 1em;
    font-size: 11px;
    line-height: 17.5px;
`;

const PercentDiv = styled.div`
    padding-left: 0.6rem;
    font-size: 14px;
    font-weight: bold;
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: 15px;
    margin-left: 5px;
`;

const Col = styled.div`
    position: relative;
    width: 100%;
    padding-top: 0.2rem;
`;

const Col3 = styled(Col)`
    flex: 0 0 25%;
    max-width: 25%;
`;

const Col8 = styled(Col)`
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
`;
