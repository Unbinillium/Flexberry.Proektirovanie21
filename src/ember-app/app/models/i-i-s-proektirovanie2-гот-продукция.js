import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ГотПродукцияMixin
} from '../mixins/regenerated/models/i-i-s-proektirovanie2-гот-продукция';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ГотПродукцияMixin, Validations, {
});

defineProjections(Model);

export default Model;
