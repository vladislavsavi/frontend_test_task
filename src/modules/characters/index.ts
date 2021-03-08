import {BaseComponent} from 'base-component';
import {useFilter} from 'useFilter';
import {getCharacters} from 'client';

import {loader} from "./components";

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
    characters: any = null
    loading:boolean = false;
    limit: number = 10;
    strideLength: number = 10;



    loadData() {
        this.loading = true;
        this.update();
        console.log(this.limit, );
        getCharacters(this.limit)
            .then((characters) => {
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
            const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
            if (windowRelativeBottom <= document.documentElement.clientHeight) {
               this.debouncedLoadData();
            }
        })
    }

    mounted() {
        this.loadData();
        this.onScrollHandler();
    }

    renderList() {
        return this.characters.map((item: any) => `<li>${item.char_id}: ${item.name}</li>`).join('');
    }

    markup(): string {
        if(!this.characters) {
            return loader;
        }
        return (
            `<ul>
                ${this.renderList()}
            </ul>
            ${this.loading ? loader : ''}`
        )
    }
}

export const CharacterList = useFilter(_CharacterList);
