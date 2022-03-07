import React from 'react';
import { Save } from '@styled-icons/fa-solid/Save';
import { Meta, Story } from '@storybook/react';
import { IconViewer, IconViewerProps } from '../IconViewer/IconViewer';

export default {
    title: 'Components/Atoms/IconViewer',
    component: IconViewer,
    argTypes: { onClick: { action: 'Button Click Occurred' } },
    args: {
        icon: Save,
        label: 'Play',
        description: 'gel-icon-playn',  
    },
} as Meta;

export const Basic: Story<IconViewerProps> = (args) => (
    <IconViewer {...args}></IconViewer>
);
