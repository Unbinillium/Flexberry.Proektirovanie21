import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колВо: DS.attr('decimal'),
  контрагент: DS.attr('string'),
  материалы: DS.attr('string'),
  ответственный: DS.attr('string'),
  сумма: DS.attr('decimal'),
  цена: DS.attr('decimal'),
  контрагенты: DS.belongsTo('i-i-s-proektirovanie2-контрагенты', { inverse: null, async: false }),
  номенклатура: DS.belongsTo('i-i-s-proektirovanie2-номенклатура', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-proektirovanie2-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  колВо: {
    descriptionKey: 'models.i-i-s-proektirovanie2-перемещение.validations.колВо.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-proektirovanie2-перемещение.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  материалы: {
    descriptionKey: 'models.i-i-s-proektirovanie2-перемещение.validations.материалы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ответственный: {
    descriptionKey: 'models.i-i-s-proektirovanie2-перемещение.validations.ответственный.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-proektirovanie2-перемещение.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-proektirovanie2-перемещение.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-proektirovanie2-перемещение.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-proektirovanie2-перемещение.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proektirovanie2-перемещение.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПеремещениеE', 'i-i-s-proektirovanie2-перемещение', {
    ответственный: attr('Ответственный', { index: 0 }),
    контрагент: attr('Контрагент', { index: 1 }),
    материалы: attr('Материалы', { index: 2 }),
    цена: attr('Цена', { index: 3 }),
    колВо: attr('Кол во', { index: 4 }),
    сумма: attr('Сумма', { index: 5 }),
    контрагенты: belongsTo('i-i-s-proektirovanie2-контрагенты', 'Контрагенты', {
      фИО: attr('ФИО', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фИО' }),
    сотрудники: belongsTo('i-i-s-proektirovanie2-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'фИО' }),
    номенклатура: belongsTo('i-i-s-proektirovanie2-номенклатура', 'Номенклатура', {
      наименование: attr('Наименование', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ПеремещениеL', 'i-i-s-proektirovanie2-перемещение', {
    ответственный: attr('Ответственный', { index: 0 }),
    контрагент: attr('Контрагент', { index: 1 }),
    материалы: attr('Материалы', { index: 2 }),
    цена: attr('Цена', { index: 3 }),
    колВо: attr('Кол во', { index: 4 }),
    сумма: attr('Сумма', { index: 5 }),
    контрагенты: belongsTo('i-i-s-proektirovanie2-контрагенты', 'ФИО', {
      фИО: attr('ФИО', { index: 6 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-proektirovanie2-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 7 })
    }, { index: -1, hidden: true }),
    номенклатура: belongsTo('i-i-s-proektirovanie2-номенклатура', 'Наименование', {
      наименование: attr('Наименование', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
