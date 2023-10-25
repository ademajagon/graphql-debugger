import { UnixNanoTimeStamp } from "@graphql-debugger/time";
import { Trace } from "@graphql-debugger/types";

import { IDS } from "../../testing";
import { isTraceError } from "../../utils/is-trace-error";
import { sumTraceTime } from "../../utils/sum-trace-time";

export function Pill({
  trace,
  bg = "white-100",
}: {
  trace?: Trace;
  bg?: string;
}) {
  const startTimeUnixNano = UnixNanoTimeStamp.fromString(
    trace?.rootSpan?.startTimeUnixNano || "0",
  );
  const traceDurationUnixNano = trace && sumTraceTime(trace);
  const traceDurationSIUnits = traceDurationUnixNano?.toSIUnits();

  const isError = trace && isTraceError(trace);

  return (
    <div
      id={IDS.trace.pill}
      className={`py-2 px-4 bg-${bg} rounded-2xl text-neutral-100`}
    >
      <p className="font-semibold">
        <span className={`underline ${isError ? "text-error-red" : ""}`}>
          {trace?.rootSpan?.name}
        </span>
        {` - ${traceDurationSIUnits?.value.toFixed(
          2,
        )} ${traceDurationSIUnits?.unit} `}
      </p>
      <p className="text-xs italic">
        {startTimeUnixNano.formatUnixNanoTimestamp()}
      </p>
    </div>
  );
}
