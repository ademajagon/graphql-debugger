import { UnixNanoTimeStamp } from "@graphql-debugger/time";

import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { ClientContext } from "../../../context/client";
import { Delete } from "../../../icons/delete";
import { IDS } from "../../../testing";
import { isTraceError } from "../../../utils/is-trace-error";
import { rootSpanName } from "../../../utils/root-span-name";

export function Favourites() {
  const params = useParams<{ traceId: string }>();
  const { favourites, handleDeleteFavouriteTrace } = useContext(ClientContext);

  const sortedfavourites = favourites.sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  return (
    <div
      id={IDS.sidebar.views.favourites}
      className="flex w-full flex-col gap-3 divide-y-2 divide-neutral/10"
    >
      {sortedfavourites.map(({ schemaId, trace }) => {
        const durationUnixNano = UnixNanoTimeStamp.fromString(
          trace.rootSpan?.durationNano || "0",
        );

        const startTimeUnixNano = UnixNanoTimeStamp.fromString(
          trace.rootSpan?.startTimeUnixNano || "0",
        );

        const { value, unit } = durationUnixNano.toSIUnits();

        const isSelected = params.traceId === trace.id;

        const isError = isTraceError(trace);

        return (
          <div
            className="text-xs text-neutral-100 flex items-center justify-between pt-3"
            role="button"
            data-favouritestraceid={trace.id}
            key={trace.id}
          >
            <div className="flex flex-col gap-1">
              <Link
                to={`/schema/${schemaId}/trace/${trace.id}`}
                className={`font-semibold ${isSelected ? "underline" : ""} ${
                  isError ? "text-error-red" : ""
                }`}
              >
                {rootSpanName({ trace })}
              </Link>
              <p className="ml-5 text-xs">
                - {startTimeUnixNano.formatUnixNanoTimestamp()}
              </p>
            </div>

            <div className="flex justify-center items-center gap-5">
              <span className="self-end font-normal">{`${value.toFixed(
                2,
              )} ${unit}`}</span>
              <button
                onClick={() => handleDeleteFavouriteTrace(trace.id ?? "")}
              >
                <Delete color="error-red" size="1.5em" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
