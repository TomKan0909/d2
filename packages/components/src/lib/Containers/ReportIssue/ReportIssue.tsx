// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Button } from '../../Inputs/Button/Button';
import { Select } from '../../Inputs/Select/Select';
import { Textarea } from '../../Inputs/Textarea/Textarea';
import React, { FormEvent, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { HeaderRow } from '../HeaderRow/HeaderRow';

export interface IReportIssueProps {
    ReportDescription?: string;
    handleSubmit: (
        arg0: FormEvent,
        arg1: HTMLOptionElement,
        arg2: string,
    ) => void;
    options: Array<HTMLOptionElement>;
    loading?: boolean;
}

export const ReportIssue = ({
    ReportDescription,
    handleSubmit,
    options,
    loading = false,
}: IReportIssueProps): ReactElement => {
    const [inputValue, setInputValue] = useState(options[0]);
    const [textareaValue, setTextareaValue] = useState('');
    return (
        <Container>
            <HeaderRow type="h2" label="Report your issue" display="column">
                {ReportDescription}
            </HeaderRow>
            <form
                onSubmit={(event) =>
                    handleSubmit(event, inputValue, textareaValue)
                }
            >
                <SelectContainer>
                    <Select
                        label="1. Choose a report type"
                        value={inputValue}
                        placeholder={inputValue}
                        onChange={({ target }: { target: any }) =>
                            setInputValue(target.value)
                        }
                    >
                        {options.map((option) => option)}
                    </Select>
                </SelectContainer>
                <TextareaContainer>
                    <Textarea
                        rows="3"
                        label="Description(required)"
                        value={textareaValue}
                        onChange={({ target }: { target: any }) =>
                            setTextareaValue(target.value)
                        }
                    />
                </TextareaContainer>
                <SubmitButtonContainer>
                    <Button
                        loading={loading}
                        disabled={!(textareaValue.length > 0)}
                    >
                        Report Issue
                    </Button>
                </SubmitButtonContainer>
            </form>
        </Container>
    );
};

const Container = styled.div`
    background: ${({ theme }) => theme.colors.background};
    width: 100%;
    height: 100%;
`;

const SubmitButtonContainer = styled.footer`
    margin-top: 15px;
`;

const SelectContainer = styled.div`
    margin-top: 10px;
`;

const TextareaContainer = styled.div`
    margin-top: 15px;
`;
