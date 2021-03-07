import {FilterModel} from './models';

const initialFilter: FilterModel = {
    seasons: {1: false, 2: false, 3: false, 4: false}
}

export class Filter implements FilterModel{
    private static instance: Filter;
    private static readonly localStorageKey = 'character_filter'

    public seasons:  {[key: string]: boolean}

    private constructor(filter: FilterModel) {
        this.save = this.save.bind(this);
        Object.assign(this, filter);
    };

    public static getInstance(): Filter {
        const savedFilter: FilterModel = JSON.parse(localStorage.getItem(this.localStorageKey));
        if (!Filter.instance) {
            Filter.instance = new Filter(savedFilter ? savedFilter : initialFilter);
        }

        return Filter.instance;
    }

    collect() {
        const {seasons} = this;

        return {
            seasons
        }
    }

    save() {
        localStorage.setItem(Filter.localStorageKey, JSON.stringify(this.collect()));
    }
}