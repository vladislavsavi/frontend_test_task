import {BaseComponent} from 'base-component';

import {useFilter, FilterModel} from 'useFilter';

import './FilterComponent.scss';

class _FilterComponent extends BaseComponent {
    private readonly filter: FilterModel;

    constructor(container: HTMLBaseElement) {
        super(container);
    }



    render() {
        super.render();
        const checkboxList = document.querySelectorAll('[name="season"]');

        checkboxList.forEach(elem => elem.addEventListener('click', (e) => {
            const value = (e.target as HTMLInputElement).value;
            this.filter.seasons[value] = !this.filter.seasons[value];
            this.filter.save();
        }));
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
                     
                        <div class="filter__select__item">
                             <input class="filter__select__input" name="filter_status" type="radio" value="Alive"/>
                             <label class="filter__select__label" for="Season_4">Season 4</label>
                        </div>
                        
                         <div class="filter__select__item">
                              <input class="filter__select__input" name="filter_status" type="radio" value="Presumed Dead"/>
                              <label class="filter__select__label" for="Season_4">Season 4</label>
                        </div>
                       
                    </div>
                </div>
                
            </div>`
        );
    }
}

export const FilterComponent = useFilter(_FilterComponent);
