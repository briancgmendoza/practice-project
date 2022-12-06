import React from 'react';
import loadable from '@loadable/component';

export default [
    {
        path: './login',
        exact: true,
        component: loadable(() => import('../login/login')),
    }
];
