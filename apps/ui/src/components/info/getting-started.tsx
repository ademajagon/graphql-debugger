import { HighlightedText } from "../utils/highlighted-text";
import { LinkedText } from "../utils/linked-text";
import { Spinner } from "../utils/spinner";

export function GettingStarted() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 text-xs">
        <div className="flex flex-col gap-5 text-center">
          <p className="font-bold text-lg">No schemas found</p>
          <p className="italic">Waiting for schema upload.</p>
          <div className="mx-auto w-10">
            <Spinner />
          </div>
        </div>
        <p>
          The debugger is waiting for a{" "}
          <HighlightedText text="POST" spacing="'" color="graphql-otel-green" />{" "}
          event to be sent to collector{" "}
          <HighlightedText
            text="/api/vi/schema"
            spacing="'"
            color="graphql-otel-green"
          />{" "}
          endpoint.
        </p>
        <p>
          Once the schema is sent, it will be available in the list above and
          you can start sending and viewing traces associated with it.
        </p>
        <p>
          The uploading of the schema is usually done automatically when you use
          the{" "}
          <HighlightedText
            text="traceSchema"
            spacing="'"
            color="graphql-otel-green"
          />{" "}
          method from the{" "}
          <LinkedText
            href="https://www.npmjs.com/package/@graphql-debugger/trace-schema"
            text="trace schema sdk"
          />
          .
        </p>
        <p>
          If you wish to manually send the schema, you can do so by using the{" "}
          <HighlightedText
            text="DebuggerClient"
            spacing="'"
            color="graphql-otel-green"
          />{" "}
          exported from the{" "}
          <LinkedText
            href="https://www.npmjs.com/package/@graphql-debugger/client"
            text="client sdk"
          />{" "}
          .
        </p>
      </div>
    </div>
  );
}
