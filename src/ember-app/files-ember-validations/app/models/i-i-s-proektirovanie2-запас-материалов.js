import {
  defineNamespace,
  defineProjections,
  Model as ЗапасМатериаловMixin
} from '../mixins/regenerated/models/i-i-s-proektirovanie2-запас-материалов';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗапасМатериаловMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
