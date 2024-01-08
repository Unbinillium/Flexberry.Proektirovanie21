import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПеремещениеMixin
} from '../mixins/regenerated/models/i-i-s-proektirovanie2-перемещение';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПеремещениеMixin, Validations, {
});

defineProjections(Model);

export default Model;
