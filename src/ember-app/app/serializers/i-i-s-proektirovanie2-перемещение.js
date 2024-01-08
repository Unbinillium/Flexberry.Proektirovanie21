import { Serializer as ПеремещениеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proektirovanie2-перемещение';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПеремещениеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
