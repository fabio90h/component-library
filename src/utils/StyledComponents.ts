import {
  Interpolation,
  SimpleInterpolation,
} from 'styled-components';

export type CssInterpolation =
  | Interpolation<any>
  | SimpleInterpolation;

export type CssStyleable = {
  cssStyles?: CssInterpolation;
};
