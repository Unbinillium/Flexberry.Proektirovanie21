import {
  defineNamespace,
  defineProjections,
  Model as НоменклатураMixin
} from '../mixins/regenerated/models/i-i-s-proektirovanie2-номенклатура';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НоменклатураMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
