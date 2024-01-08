import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProektirovanie2КонтрагентыLForm from './forms/i-i-s-proektirovanie2-контрагенты-l';
import IISProektirovanie2НоменклатураLForm from './forms/i-i-s-proektirovanie2-номенклатура-l';
import IISProektirovanie2ПеремещениеLForm from './forms/i-i-s-proektirovanie2-перемещение-l';
import IISProektirovanie2СотрудникиLForm from './forms/i-i-s-proektirovanie2-сотрудники-l';
import IISProektirovanie2КонтрагентыEForm from './forms/i-i-s-proektirovanie2-контрагенты-e';
import IISProektirovanie2НоменклатураEForm from './forms/i-i-s-proektirovanie2-номенклатура-e';
import IISProektirovanie2ПеремещениеEForm from './forms/i-i-s-proektirovanie2-перемещение-e';
import IISProektirovanie2СотрудникиEForm from './forms/i-i-s-proektirovanie2-сотрудники-e';
import IISProektirovanie2ГотПродукцияModel from './models/i-i-s-proektirovanie2-гот-продукция';
import IISProektirovanie2ЗапасМатериаловModel from './models/i-i-s-proektirovanie2-запас-материалов';
import IISProektirovanie2КонтрагентыModel from './models/i-i-s-proektirovanie2-контрагенты';
import IISProektirovanie2НоменклатураModel from './models/i-i-s-proektirovanie2-номенклатура';
import IISProektirovanie2ПеремещениеModel from './models/i-i-s-proektirovanie2-перемещение';
import IISProektirovanie2СотрудникиModel from './models/i-i-s-proektirovanie2-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proektirovanie2-гот-продукция': IISProektirovanie2ГотПродукцияModel,
    'i-i-s-proektirovanie2-запас-материалов': IISProektirovanie2ЗапасМатериаловModel,
    'i-i-s-proektirovanie2-контрагенты': IISProektirovanie2КонтрагентыModel,
    'i-i-s-proektirovanie2-номенклатура': IISProektirovanie2НоменклатураModel,
    'i-i-s-proektirovanie2-перемещение': IISProektirovanie2ПеремещениеModel,
    'i-i-s-proektirovanie2-сотрудники': IISProektirovanie2СотрудникиModel
  },

  'application-name': 'Proektirovanie2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proektirovanie2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proektirovanie2',
          title: 'Proektirovanie2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'учет-материалов': {
          caption: 'Учет материалов',
          title: 'Учет материалов',
          'i-i-s-proektirovanie2-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-proektirovanie2-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          },
          'i-i-s-proektirovanie2-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-proektirovanie2-перемещение-l': {
            caption: 'Перемещение',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-proektirovanie2-сотрудники-l': {
            caption: 'СотрудникиL',
            title: 'Сотрудники'
          },
          'i-i-s-proektirovanie2-контрагенты-l': {
            caption: 'КонтрагентыL',
            title: 'Контрагенты'
          },
          'i-i-s-proektirovanie2-номенклатура-l': {
            caption: 'НоменклатураL',
            title: 'Номенклатура'
          }
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-proektirovanie2-перемещение-l': {
            caption: 'ПеремещениеL',
            title: 'Перемещение'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proektirovanie2-контрагенты-l': IISProektirovanie2КонтрагентыLForm,
    'i-i-s-proektirovanie2-номенклатура-l': IISProektirovanie2НоменклатураLForm,
    'i-i-s-proektirovanie2-перемещение-l': IISProektirovanie2ПеремещениеLForm,
    'i-i-s-proektirovanie2-сотрудники-l': IISProektirovanie2СотрудникиLForm,
    'i-i-s-proektirovanie2-контрагенты-e': IISProektirovanie2КонтрагентыEForm,
    'i-i-s-proektirovanie2-номенклатура-e': IISProektirovanie2НоменклатураEForm,
    'i-i-s-proektirovanie2-перемещение-e': IISProektirovanie2ПеремещениеEForm,
    'i-i-s-proektirovanie2-сотрудники-e': IISProektirovanie2СотрудникиEForm
  },

});

export default translations;
