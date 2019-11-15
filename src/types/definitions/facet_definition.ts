import { DgraphType } from '../dgraph_types';

export class FacetDefinition {
  name: string;
  predicate: string;
  type: DgraphType.String | DgraphType.Bool | DgraphType.Int | DgraphType.Float | DgraphType.DateTime;
}
