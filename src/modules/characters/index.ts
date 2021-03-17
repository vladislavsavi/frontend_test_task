import {BaseComponent} from 'base-component';
import {useFilter, FilterModel} from 'useFilter';
import {getCharacters} from 'client';

import {loader} from "./components";
import {CharacterModel} from './models';

import './styles/characters_list.scss'
import {isIE} from "isIE";

function debounce(f: Function, ms: number) {
    let isCooldown = false;

    return function() {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    };
}

class _CharacterList extends BaseComponent {
    [x: string]: any | FilterModel;
    characters: CharacterModel[] = [];
    loading:boolean = false;
    limit: number = 10;
    strideLength: number = 10;



    loadData() {
        this.loading = true;
        this.update();
        getCharacters(this.limit)
            .then((characters: CharacterModel[]) => {
                this.characters = characters;
                this.loading = false;
                this.update();
            });
    }

    requestMore() {
        this.limit += this.strideLength;
        this.loadData();
    }

    debouncedLoadData = debounce(this.requestMore.bind(this), 500);

    onScrollHandler() {
        window.addEventListener('scroll', () => {
            if (document.body.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight) {
               this.debouncedLoadData();
            }
        })
    }

    mounted() {
        this.loadData();
        this.onScrollHandler();
        this.filter.subscribe(this.update.bind(this));
    }


    filterBySeasons(characters: CharacterModel[]) {
        let result = characters;
        Object.keys(this.filter.seasons).forEach((key) => {
            if(this.filter.seasons[key]) {
                result = characters.filter((item) => item.appearance.some((season) => key === season.toString()));
            }
        })
        return result;
    }

    filterByStatus(characters: CharacterModel[]) {
        if(this.filter.status === 'All statuses') {
            return characters;
        }
        return characters.filter((item) => item.status.toUpperCase() === this.filter.status.toUpperCase());
    }

    filteredCharacters() {
        if(!this.filter) {
            return this.characters;
        }
        if(this.filter.status === 'All statuses' && !this.filter.seasons) {
            return this.characters;
        }

        const filteredByStatus = this.filterByStatus(this.characters)
        return this.filterBySeasons(filteredByStatus);
    }

    renderList() {
        return this.filteredCharacters().map((item: CharacterModel) => (
            `<div class="character">
                <div class="character__wrapper">
                    <h3>${item.name}</h3>
                    <div class="character__img" style="background-image: url('${item.img}')"></div>
                    <p>Nickname: <span>${item.nickname}</span></p>
                    <p>Status: <span>${item.status}</span></p>
                    <p>Occupation: <span>${item.occupation}</span></p>
                    <p>Appearance: <span>${item.appearance.join(', ')}</span></p>
                </div>
            </div>`
        )).join('').trim().replace('\n', '');
    }

    renderLoader() {
        if(this.loading) {
            if(isIE() &&  isIE() < 10) {
                return '<p style="text-align: center">loading...</p>'
            }
            return loader
        }
        return ''
    }

    markup(): string {
        if(!this.characters) {
            return this.renderLoader();
        }
        return (
            `<div class="characters_list__wrapper">
                ${this.renderList()}
            </div>
            ${this.renderLoader()}`
        )
    }
}

export const CharacterList = useFilter(_CharacterList);
