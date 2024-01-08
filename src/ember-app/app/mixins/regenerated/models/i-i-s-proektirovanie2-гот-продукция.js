import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колВо: DS.attr('string'),
  одобрено: DS.attr('boolean'),
  товар: DS.attr('string'),
  номенклатура: DS.belongsTo('i-i-s-proektirovanie2-номенклатура', { inverse: 'готПродукция', async: false })
});

export let ValidationRules = {
  колВо: {
    descriptionKey: 'models.i-i-s-proektirovanie2-гот-продукция.validations.колВо.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  одобрено: {
    descriptionKey: 'models.i-i-s-proektirovanie2-гот-продукция.validations.одобрено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-proektirovanie2-гот-продукция.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-proektirovanie2-гот-продукция.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГотПродукцияE', 'i-i-s-proektirovanie2-гот-продукция', {
    товар: attr('Товар', { index: 0 }),
    колВо: attr('Кол во', { index: 1 }),
    одобрено: attr('Одобрено', { index: 2 })
  });
};
