import { makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import { AppStylePropType } from "../../utils/types";
const style = makeStyles(({ colors, breakpoints }: AppStylePropType) => ({
  root: {},
}));
type CustomTextGradientPropTypes = Partial<{
  text: string;
  gradient: string[];
}>;
export default function CustomTextGradient({
  text = "",
  gradient,
}: CustomTextGradientPropTypes) {
  const classes = style(),
    { colors } = useTheme<AppStylePropType>(),
    { primary, secondary, accent } = colors || {},
    textCount = text?.length;
  if (!gradient) gradient = [primary, secondary, accent] as string[];
  const textMark = Math.ceil(Number(textCount) / gradient.length),
    stringBuilder = [];
  let refresher = 0,
    gradientIndex = 0;
  for (let i = 0; i < text.length; i++) {
    refresher++;
    const element = text.charAt(i);
    stringBuilder.push(
      <span style={{ color: gradient[gradientIndex] }}>{element}</span>
    );
    if (refresher === textMark) {
      refresher = 0;
      gradientIndex++;
    }
  }
  return <div className={classes.root}>{stringBuilder}</div>;
}
export { CustomTextGradient };
