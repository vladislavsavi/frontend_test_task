import {Header, CharacterList} from './modules'

import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
    new Header(document.querySelector('#header'));
    new (CharacterList as any)(document.querySelector('#content'));
});

