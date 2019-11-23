import * as React from 'react';

export default class Slider extends React.Component<SliderProps, {}>{}

export const enum TooltipSetting {
  OFF = "off",
  ON = "on",
  ALWAYS = "always"
}

export interface SliderProps {
    min?: number,
    max?: number,
    step?: number,
    value?: number,
    orientation?: string,
    tooltip?: TooltipSetting,
    reverse?: boolean,
    labels?: object,
    handleLabel?: string,
    format?: Function,
    onChangeStart?: Function,
    onChange?: Function,
    onChangeComplete?: Function
}
