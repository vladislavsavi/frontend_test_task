export abstract class BaseComponent {
    container: any;
    ref: number;
    refs: {[key: string]: BaseComponent} = {};

    constructor(container: HTMLBaseElement) {
        if (typeof container.dataset.ref === 'undefined') {
            this.ref = Math.random();
            this.refs[this.ref] = this;
            container.dataset.ref = String(this.ref);
            this.init(container);
        } else {
            return this.refs[container.dataset.ref];
        }
    }

    init(container: any) {
        this.container = container;
        this.render();
    }

    abstract markup(): string;

    render() {
        this.container.innerHTML = this.markup();
    }
}
