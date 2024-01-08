import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  едИзм: DS.attr('string'),
  защСвойст: DS.attr('string'),
  наименование: DS.attr('string'),
  экоКласс: DS.attr('string'),
  готПродукция: DS.hasMany('i-i-s-proektirovanie2-гот-продукция', { inverse: 'номенклатура', async: false }),
  запасМатериалов: DS.hasMany('i-i-s-proektirovanie2-запас-материалов', { inverse: 'номенклатура', async: false })
});

export let ValidationRules = {
  едИзм: {
    descriptionKey: 'models.i-i-s-proektirovanie2-номенклатура.validations.едИзм.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  защСвойст: {
    descriptionKey: 'models.i-i-s-proektirovanie2-номенклатура.validations.защСвойст.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-proektirovanie2-номенклатура.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  экоКласс: {
    descriptionKey: 'models.i-i-s-proektirovanie2-номенклатура.validations.экоКласс.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  готПродукция: {
    descriptionKey: 'models.i-i-s-proektirovanie2-номенклатура.validations.готПродукция.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  запасМатериалов: {
    descriptionKey: 'models.i-i-s-proektirovanie2-номенклатура.validations.запасМатериалов.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НоменклатураE', 'i-i-s-proektirovanie2-номенклатура', {
    наименование: attr('Наименование', { index: 0 }),
    едИзм: attr('Ед изм', { index: 1 }),
    экоКласс: attr('Эко класс', { index: 2 }),
    защСвойст: attr('Защ свойст', { index: 3 }),
    готПродукция: hasMany('i-i-s-proektirovanie2-гот-продукция', 'Гот продукция', {
      товар: attr('Товар', { index: 0 }),
      колВо: attr('Кол во', { index: 1 }),
      одобрено: attr('Одобрено', { index: 2 })
    }),
    запасМатериалов: hasMany('i-i-s-proektirovanie2-запас-материалов', 'Запас материалов', {
      колВо: attr('Кол во', { index: 0 }),
      товар: attr('Товар', { index: 1 })
    })
  });

  modelClass.defineProjection('НоменклатураL', 'i-i-s-proektirovanie2-номенклатура', {
    наименование: attr('Наименование', { index: 0 }),
    едИзм: attr('Ед изм', { index: 1 }),
    экоКласс: attr('Эко класс', { index: 2 }),
    защСвойст: attr('Защ свойст', { index: 3 })
  });
};
