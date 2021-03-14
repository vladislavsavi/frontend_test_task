interface TargetElement extends HTMLBaseElement{
    data: any;
}

export abstract class BaseComponent {
    container: any;
    ref: number;
    refs: {[key: string]: BaseComponent} = {};

    constructor(container: TargetElement) {
        if(!container.data) {
            container.data = {};
        }
        if (typeof container.data.ref === 'undefined') {
            this.ref = Math.random();
            this.refs[this.ref] = this;
            container.data.ref = String(this.ref);
            this.init(container);
        } else {
            return this.refs[container.data.ref];
        }
    }

    init(container: any) {
        this.container = container;
        this.render();
    }

    mounted(): void {}

    update() {
        this.container.innerHTML = this.markup();
        this.didUpdate();
    }

    didUpdate() {}

    abstract markup(): string;

    render() {
        this.container.innerHTML = this.markup();
        this.mounted();
    }
}
