export interface FilterModel {
    seasons?: {[key: string]: boolean};
    status?: 'All statuses' | 'Alive' | 'Presumed dead' | 'Deceased';
    save?: () => void;
}
