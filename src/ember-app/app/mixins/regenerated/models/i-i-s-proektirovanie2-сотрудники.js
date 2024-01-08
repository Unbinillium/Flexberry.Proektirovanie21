import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.attr('string'),
  оклад: DS.attr('decimal'),
  подразделение: DS.attr('string'),
  телефон: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-proektirovanie2-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оклад: {
    descriptionKey: 'models.i-i-s-proektirovanie2-сотрудники.validations.оклад.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  подразделение: {
    descriptionKey: 'models.i-i-s-proektirovanie2-сотрудники.validations.подразделение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-proektirovanie2-сотрудники.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-proektirovanie2-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-proektirovanie2-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    должность: attr('Должность', { index: 1 }),
    подразделение: attr('Подразделение', { index: 2 }),
    оклад: attr('Оклад', { index: 3 }),
    телефон: attr('Телефон', { index: 4 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-proektirovanie2-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    должность: attr('Должность', { index: 1 }),
    подразделение: attr('Подразделение', { index: 2 }),
    оклад: attr('Оклад', { index: 3 }),
    телефон: attr('Телефон', { index: 4 })
  });
};
