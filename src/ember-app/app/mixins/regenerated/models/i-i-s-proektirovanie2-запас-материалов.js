import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колВо: DS.attr('decimal'),
  товар: DS.attr('string'),
  номенклатура: DS.belongsTo('i-i-s-proektirovanie2-номенклатура', { inverse: 'запасМатериалов', async: false })
});

export let ValidationRules = {
  колВо: {
    descriptionKey: 'models.i-i-s-proektirovanie2-запас-материалов.validations.колВо.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-proektirovanie2-запас-материалов.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-proektirovanie2-запас-материалов.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗапасМатериаловE', 'i-i-s-proektirovanie2-запас-материалов', {
    колВо: attr('Кол во', { index: 0 }),
    товар: attr('Товар', { index: 1 })
  });
};
