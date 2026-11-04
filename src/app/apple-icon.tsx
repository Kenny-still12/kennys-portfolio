import { renderMonogram } from "./monogram";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Square corners: iOS applies its own rounded mask.
export default function AppleIcon() {
  return renderMonogram(size.width, false);
}
