import { imgDescStyle } from "../styles/miscellaneousInline";

export default function ImageDescription({ children }) {
  return (
    <span style={imgDescStyle}>
      <em>{children}</em>
    </span>
  );
}
