import React from 'react';
import loadable from '@loadable/component';

export default [
    {
        path: '/dashboard',
        axact: true,
        component: loadable(() => import('../dashboard/dashboard'))
    },
];