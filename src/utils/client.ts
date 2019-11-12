import * as grpc from 'grpc';
import { DgraphClient, DgraphClientStub } from 'dgraph-js';

const stub = new DgraphClientStub(
  'localhost:9080',
  grpc.credentials.createInsecure(),
  {
    'grpc.max_send_message_length': -1,
    'grpc.max_receive_message_length': -1,
  },
);

export const client = new DgraphClient(stub);
