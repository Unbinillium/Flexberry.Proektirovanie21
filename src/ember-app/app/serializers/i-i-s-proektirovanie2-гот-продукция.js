import { Serializer as ГотПродукцияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proektirovanie2-гот-продукция';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГотПродукцияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
