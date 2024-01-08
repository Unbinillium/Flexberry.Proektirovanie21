import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proektirovanie2-перемещение', 'Unit | Serializer | i-i-s-proektirovanie2-перемещение', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proektirovanie2-перемещение',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
