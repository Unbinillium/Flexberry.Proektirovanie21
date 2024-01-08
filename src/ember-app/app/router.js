import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proektirovanie2-контрагенты-l');
  this.route('i-i-s-proektirovanie2-контрагенты-e',
  { path: 'i-i-s-proektirovanie2-контрагенты-e/:id' });
  this.route('i-i-s-proektirovanie2-контрагенты-e.new',
  { path: 'i-i-s-proektirovanie2-контрагенты-e/new' });
  this.route('i-i-s-proektirovanie2-номенклатура-l');
  this.route('i-i-s-proektirovanie2-номенклатура-e',
  { path: 'i-i-s-proektirovanie2-номенклатура-e/:id' });
  this.route('i-i-s-proektirovanie2-номенклатура-e.new',
  { path: 'i-i-s-proektirovanie2-номенклатура-e/new' });
  this.route('i-i-s-proektirovanie2-перемещение-l');
  this.route('i-i-s-proektirovanie2-перемещение-e',
  { path: 'i-i-s-proektirovanie2-перемещение-e/:id' });
  this.route('i-i-s-proektirovanie2-перемещение-e.new',
  { path: 'i-i-s-proektirovanie2-перемещение-e/new' });
  this.route('i-i-s-proektirovanie2-сотрудники-l');
  this.route('i-i-s-proektirovanie2-сотрудники-e',
  { path: 'i-i-s-proektirovanie2-сотрудники-e/:id' });
  this.route('i-i-s-proektirovanie2-сотрудники-e.new',
  { path: 'i-i-s-proektirovanie2-сотрудники-e/new' });
});

export default Router;
