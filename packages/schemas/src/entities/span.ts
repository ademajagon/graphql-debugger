import { z } from "zod";

export const SpanSchema = z.object({
  id: z.string(),
  spanId: z.string(),
  parentSpanId: z.string().optional().nullable(),
  traceId: z.string(),
  name: z.string(),
  kind: z.string(),
  durationNano: z.string(),
  startTimeUnixNano: z.string(),
  endTimeUnixNano: z.string(),
  isForeign: z.boolean(),
  attributes: z.string().optional().nullable(),
  traceGroupId: z.string().optional().nullable(),
  errorMessage: z.string().optional().nullable(),
  errorStack: z.string().optional().nullable(),
  graphqlDocument: z.string().optional().nullable(),
  graphqlOperationName: z.string().optional().nullable(),
  graphqlOperationType: z.string().optional().nullable(),
  isGraphQLRootSpan: z.boolean().optional().nullable(),
  graphqlSchemaHash: z.string().optional().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
