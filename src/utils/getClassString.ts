export default function getClassString(
  className: string,
  styleModule: CSSModuleClasses
) {
  if (!className) {
    return "";
  }
  return className
    .split(" ")
    .map((c) => (styleModule[c] ? styleModule[c] : c))
    .join(" ");
}
