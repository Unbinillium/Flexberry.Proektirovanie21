import { Serializer as КонтрагентыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proektirovanie2-контрагенты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КонтрагентыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
