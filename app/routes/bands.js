import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import {A} from '@ember/array';

const Band = EmberObject.extend({
    name: '',
})
export default Route.extend({
    model() {
        const ledZeppelin = Band.create({ name: 'Led Zepepelin'})
        const pearlJam = Band.create({ name: 'Peal Jam'})
        const fooFighters = Band.create({ name: 'Foo Fighters'})

        return A([ledZeppelin, pearlJam, fooFighters]);
    }
});
