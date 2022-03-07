import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icongraphy, IcongraphyProps } from '../Icongraphy/Icongraphy';
import { Save } from '@styled-icons/fa-solid/Save';
import { Atom } from '@styled-icons/fa-solid/Atom';


export default {
    title: 'Design System/Icongraphy',
    component: Icongraphy,
    args: {
        iconList: [
            {icon: Save, label: 'Play', description: 'gel-icon-playn'},
            {icon: Atom, label: 'Atom', description: 'gel-icon-atom'},
            {icon: Save, label: 'Play', description: 'gel-icon-playn'},
            {icon: Save, label: 'Play', description: 'gel-icon-playn'},
            {icon: Save, label: 'Play', description: 'gel-icon-playn'},
            {icon: Save, label: 'Play', description: 'gel-icon-playn'},
            {icon: Save, label: 'Play', description: 'gel-icon-playn'},
            {icon: Save, label: 'Play', description: 'gel-icon-playn'},
            {icon: Save, label: 'Play', description: 'gel-icon-playn'},
            {icon: Save, label: 'Play', description: 'gel-icon-playn'},
            {icon: Save, label: 'Play', description: 'gel-icon-playn'},
            {icon: Save, label: 'Play', description: 'gel-icon-playn'},
        ],
    },
} as Meta;

export const Overview: Story<IcongraphyProps> = (args) => (
    <Icongraphy {...args} />
);
