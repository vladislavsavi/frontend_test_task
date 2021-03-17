import {BaseComponent} from 'base-component';

import {LoremComponent, FilterComponent} from "./components";

import './styles/header.scss';
import {isIE} from "isIE";

export class Header extends BaseComponent {
    private loremContainer: HTMLBaseElement;
    private filterContainer: HTMLBaseElement;

    render() {
        this.container.innerHTML = this.markup();
        this.loremContainer = this.container.querySelector('.header__lorem');
        this.filterContainer = this.container.querySelector('.header__filter');
        new (LoremComponent as any)(this.loremContainer);
        new (FilterComponent as any)(this.filterContainer);
    }

    markup(): string {
        if(document.documentElement.clientWidth <= 500) {
            return (
                `<div class="header__wrapper">
                    <div class="header__filter"></div>
                    <div class="header__lorem"></div>
                </div>`
            )
        }
        return (
            `<div class="header__wrapper">
                <div class="header__lorem"></div>
                <div class="header__filter"></div>
            </div>`
        );
    }
}
