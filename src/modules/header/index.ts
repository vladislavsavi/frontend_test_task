import {BaseComponent} from 'base-component';

import {LoremComponent, FilterComponent} from "./components";
import {FilterModel} from './components/filterComponent/models';
import './header.scss';

const filter: FilterModel = {checked: {}};

export class Header extends BaseComponent {
    private loremContainer: HTMLBaseElement;
    private filterContainer: HTMLBaseElement;

    render() {
        this.container.innerHTML = this.markup();
        this.loremContainer = this.container.querySelector('.header__lorem');
        this.filterContainer = this.container.querySelector('.header__filter');
        new LoremComponent(this.loremContainer);
        new FilterComponent(this.filterContainer, filter);
    }

    markup(): string {
        return (
            `<div class="header__wrapper">
                <div class="header__lorem"></div>
                <div class="header__filter"></div>
            </div>`
        );
    }
}
