import { Serializer as ЗапасМатериаловSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proektirovanie2-запас-материалов';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗапасМатериаловSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
