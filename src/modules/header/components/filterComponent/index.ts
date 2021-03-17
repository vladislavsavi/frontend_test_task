import {BaseComponent} from 'base-component';

import {useFilter, FilterModel} from 'useFilter';

import {CharacterList} from '../../../characters'

import './styles/FilterComponent.scss';

interface FilterComponentModel {
    filter?: FilterModel;
}

class _FilterComponent extends BaseComponent {
    [x: string]: any;

    mounted() {
        this.parseCheckboxes();
        this.parseSelect();
        this.parseButton();
    }

    didUpdate() {
        this.parseCheckboxes();
        this.parseSelect();
        this.parseButton();
    }

    parseCheckboxes() {
        const checkboxList = document.querySelectorAll('[name="season"]');
        checkboxList.forEach(elem => elem.addEventListener('click', (e) => {
            const value = (e.target as HTMLInputElement).value;

            this.filter.seasons[value] = !this.filter.seasons[value];
        }));
    }

    parseSelect() {
        const selectWrapper = document.querySelector('.filter__select');
        const selectItems = document.querySelectorAll('[name="status"]');

        selectWrapper.addEventListener('click', (e) => {
            e.stopPropagation();
            selectWrapper.className +='filter__select_open';
        });
        window.addEventListener('click', (e) => {
            e.stopPropagation();
            const classArr: string[] = selectWrapper.className.split(' ');
            selectWrapper.className = classArr.filter(className => className !== 'filter__select_open').join(' ');
        });

        selectItems.forEach(elem => elem.addEventListener('click', (e) => {
            const value = (e.target as HTMLInputElement).value;
            this.filter.status = value as 'All statuses' | 'Alive' | 'Presumed dead' | 'Deceased';
            this.update();
        }));
    }

    parseButton() {
        const searchBtn = document.querySelector('.filter__search_button');
        searchBtn.addEventListener('click', () => {
            this.filter.save();
        });
    }

    markup(): string {
        const filter = this.filter;
        return (
            `<div class="filter__wrapper">
                
                <div class="filter__seasons__wrapper">
                    <h3>Appearance:</h3>
                    <div class="filter__seasons">
                        <div class="filter__seasons__button">
                            <input
                                ${filter?.seasons['1'] ? 'checked' : ''}
                                type="checkbox" 
                                class="filter__seasons__input" 
                                value="1" 
                                id="Season_1"
                                name="season" 
                            />
                            <label class="filter__seasons__label" for="Season_1">Season 1</label>
                        </div>
                        
                       <div class="filter__seasons__button">
                            <input
                                ${filter?.seasons['2'] ? 'checked' : ''}
                                type="checkbox" 
                                class="filter__seasons__input" 
                                value="2" 
                                id="Season_2"
                                name="season" 
                            />
                            <label class="filter__seasons__label" for="Season_2">Season 2</label>
                        </div>
                        
                       <div class="filter__seasons__button">
                            <input
                                ${filter?.seasons['3'] ? 'checked' : ''}
                                type="checkbox" 
                                class="filter__seasons__input" 
                                value="3" 
                                id="Season_3"
                                name="season" 
                            />
                            <label class="filter__seasons__label" for="Season_3">Season 3</label>
                        </div>
                        
                       <div class="filter__seasons__button">
                            <input
                                ${filter?.seasons['4'] ? 'checked' : ''}
                                type="checkbox" 
                                class="filter__seasons__input" 
                                value="4" 
                                id="Season_4"
                                name="season" 
                            />
                            <label class="filter__seasons__label" for="Season_4">Season 4</label>
                        </div>
                    </div>
                </div>
                
                <div class="filter__status__wrapper">
                      <h3>Status:</h3>
                     <div class="filter__select">
                        <div class="filter__select__value">${this.filter.status}</div>
                        <div class="filter__select__dropdown">
                            <div class="filter__select__item">
                                 <div
                                    ${filter?.status === 'All statuses' ? 'checked' : ''}
                                    id="status_all_statuses"
                                    class="filter__select__input"
                                    name="status"
                                    type="radio"
                                    value="All statuses"
                                />
                                 <label class="filter__select__label" for="status_all_statuses">All statuses</label>
                            </div>
                         
                            <div class="filter__select__item">
                                 <input
                                    ${filter?.status === 'Alive' ? 'checked' : ''} 
                                    id="status_alive"
                                    class="filter__select__input"
                                    name="status"
                                    type="radio"
                                    value="Alive"
                                 />
                                 <label class="filter__select__label" for="status_alive">Alive</label>
                            </div>
                            
                             <div class="filter__select__item">
                                  <input 
                                    ${filter?.status === 'Presumed dead' ? 'checked' : ''} 
                                    id="status_presumed_dead"
                                    class="filter__select__input"
                                    name="status"
                                    type="radio"
                                    value="Presumed dead"
                                  />
                                  <label class="filter__select__label" for="status_presumed_dead">Presumed dead</label>
                            </div>
                            
                             <div class="filter__select__item">
                                  <input 
                                    ${filter?.status === 'Deceased' ? 'checked' : ''} 
                                    id="status_deceased"
                                    class="filter__select__input"
                                    name="status"
                                    type="radio"
                                    value="Deceased"
                                  />
                                  <label class="filter__select__label" for="status_deceased">Deceased</label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button class="filter__search_button">
                    Search
                </button>
            </div>`
        );
    }
}

export const FilterComponent = useFilter(_FilterComponent);
