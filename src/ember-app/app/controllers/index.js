import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.учет-материалов.caption'),
          title: i18n.t('forms.application.sitemap.учет-материалов.title'),
          children: [{
            link: 'i-i-s-proektirovanie2-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie2-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie2-сотрудники-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-proektirovanie2-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie2-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie2-контрагенты-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-proektirovanie2-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie2-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie2-номенклатура-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-proektirovanie2-перемещение-l',
            caption: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie2-перемещение-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-материалов.i-i-s-proektirovanie2-перемещение-l.title'),
            icon: 'building',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-proektirovanie2-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-proektirovanie2-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-proektirovanie2-сотрудники-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-proektirovanie2-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-proektirovanie2-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-proektirovanie2-контрагенты-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-proektirovanie2-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-proektirovanie2-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-proektirovanie2-номенклатура-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.документы.caption'),
          title: i18n.t('forms.application.sitemap.документы.title'),
          children: [{
            link: 'i-i-s-proektirovanie2-перемещение-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-proektirovanie2-перемещение-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-proektirovanie2-перемещение-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})