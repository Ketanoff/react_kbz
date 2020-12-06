import React from 'react';
import {UncontrolledRating} from './UncontrolledRating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'UncontrolledRating',
    comment: UncontrolledRating
};

const callback = action('rating changed inside component');

export const UncontrolledMode = () => <UncontrolledRating onChange={callback} defaultValue={0}/>;
