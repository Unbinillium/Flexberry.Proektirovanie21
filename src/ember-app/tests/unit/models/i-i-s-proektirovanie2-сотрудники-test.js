import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proektirovanie2-сотрудники', 'Unit | Model | i-i-s-proektirovanie2-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proektirovanie2-гот-продукция',
    'model:i-i-s-proektirovanie2-запас-материалов',
    'model:i-i-s-proektirovanie2-контрагенты',
    'model:i-i-s-proektirovanie2-номенклатура',
    'model:i-i-s-proektirovanie2-перемещение',
    'model:i-i-s-proektirovanie2-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
