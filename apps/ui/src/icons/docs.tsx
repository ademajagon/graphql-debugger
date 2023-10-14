import { IconProps } from "./types";

export function DocsActive(props: IconProps) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 21 24" fill="none">
      <path
        d="M0.753906 3C0.753906 1.75736 1.76127 0.75 3.00391 0.75H17.2539C17.8062 0.75 18.2539 1.19772 18.2539 1.75V5.25"
        stroke="#3B4B68"
        strokeWidth="1.5"
      />
      <path
        d="M0.753906 3C0.753906 4.24264 1.76127 5.25 3.00391 5.25H18.2539C18.8062 5.25 19.2539 5.69771 19.2539 6.25V22.25C19.2539 22.8023 18.8062 23.25 18.2539 23.25H3.00391C1.76127 23.25 0.753906 22.2426 0.753906 21V3Z"
        stroke="#3B4B68"
        strokeWidth="1.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.00391 5.25C1.76127 5.25 0.753906 4.24264 0.753906 3V21C0.753906 22.2426 1.76127 23.25 3.00391 23.25H18.2539C18.8062 23.25 19.2539 22.8023 19.2539 22.25V6.25C19.2539 5.69771 18.8062 5.25 18.2539 5.25H3.00391ZM13.0039 11L6.00391 11V12.5L13.0039 12.5V11Z"
        fill="#3B4B68"
      />
    </svg>
  );
}

export function Docs(props: IconProps) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 20 24" fill="none">
      <path
        d="M0.75 3C0.75 4.24264 1.75736 5.25 3 5.25H17.25M0.75 3C0.75 1.75736 1.75736 0.75 3 0.75H16.25C16.8023 0.75 17.25 1.19772 17.25 1.75V5.25M0.75 3V21C0.75 22.2426 1.75736 23.25 3 23.25H18.25C18.8023 23.25 19.25 22.8023 19.25 22.25V6.25C19.25 5.69771 18.8023 5.25 18.25 5.25H17.25"
        stroke="#3B4B68"
        strokeWidth="1.5"
      />
      <line
        x1="13"
        y1="11.75"
        x2="6"
        y2="11.75"
        stroke="#3B4B68"
        strokeWidth="1.5"
      />
    </svg>
  );
}
