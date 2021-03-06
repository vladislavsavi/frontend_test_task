import {BaseComponent} from 'base-component';
import {FilterModel} from './models';

export class FilterComponent extends BaseComponent {
    private readonly filter: FilterModel;

    constructor(container: HTMLBaseElement, filter: any) {
        super(container);
        this.filter = filter;
    }

    render() {
        super.render();
        const checkboxList = document.querySelectorAll('[name="season"]');
        checkboxList.forEach(elem => elem.addEventListener('click', (e) => {
            const value = (e.target as HTMLInputElement).value;
            this.filter.checked[value] = !this.filter.checked[value];
            console.log(this.filter.checked)
        }));
    }

    markup(): string {
        const filter = this.filter;
        return (
            `<div class="filter__wrapper">
                <div>
                    <h3>Appearance</h3>
                    <label>
                        <input 
                            ${filter?.checked['1'] ? 'checked' : ''}
                            type="checkbox" 
                            class="" 
                            value="1" 
                            name="season" 
                        />
                        1
                    </label>
                    <label>
                         <input 
                            ${filter?.checked['2'] ? 'checked' : ''}
                            type="checkbox" 
                            class="" 
                            value="2" 
                            name="season" 
                        />
                        2
                    </label>
                    <label>
                        <input 
                            ${filter?.checked['3'] ? 'checked' : ''}
                            type="checkbox" 
                            class="" 
                            value="3" 
                            name="season" 
                        />
                        3
                    </label>
                    <label>
                         <input 
                            ${filter?.checked['4'] ? 'checked' : ''}
                            type="checkbox" 
                            class="" 
                            value="4" 
                            name="season" 
                        />
                        4
                    </label>
                </div>
            </div>`
        );
    }
}




