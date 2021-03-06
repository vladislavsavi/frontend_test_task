import {BaseComponent} from 'base-component';

export class LoremComponent extends BaseComponent {
    markup(): string {
        return `<div  class="lorem__component__wrapper">
            <h1 class="lorem__title">What is Lorem Ipsum?</h1>
            <div class="lorem__long_text">
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus alias aliquam amet aperiam
                    aut culpa doloribus enim est eum excepturi facilis ipsa iste magnam maiores, placeat, recusandae
                    reiciendis velit?
                </div>
                <div>Enim illum, non! Ab adipisci animi aspernatur aut autem beatae consequatur dolore enim eveniet,
                    ipsa omnis perferendis provident reiciendis reprehenderit saepe sed sint tempore, voluptas
                    voluptates voluptatibus. Blanditiis, nesciunt, nisi?
                </div>
                <div>Accusamus amet commodi dicta dolor, eligendi expedita facilis ipsa, optio possimus qui quibusdam
                    quo tempora? Deleniti eligendi obcaecati vel? Aspernatur assumenda debitis enim expedita facere
                    obcaecati, officia sapiente sequi tempore.
                </div>
                <div>Beatae impedit nesciunt odio perspiciatis? Accusamus dolor doloribus ea explicabo iure ratione,
                    vel? Architecto aspernatur blanditiis culpa dolores ea, id iure magnam mollitia numquam optio,
                    placeat quae quasi quos voluptas?
                </div>

            </div>
        </div>`;
    }
}
