import {Header} from './modules/header'

import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
    new Header(document.querySelector('#header'));
});

