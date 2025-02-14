import { DebuggerClient } from "@graphql-debugger/client";

import { createYoga } from "graphql-yoga";

import { context } from "./context";
import { createSchema } from "./schema";

export function createServer({ client }: { client: DebuggerClient }) {
  const { schema, schemaHash } = createSchema({ client });

  return createYoga({
    schema,
    context: context({ client, schema, schemaHash }),
  });
}
