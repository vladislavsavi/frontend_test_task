import {Filter} from './Filter';

export function useFilter<T extends Function>(target: Function): T {
    target.prototype.filter = Filter.getInstance();
    return <T>target;
}
