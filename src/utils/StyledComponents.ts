import {
  Interpolation,
  SimpleInterpolation,
} from 'styled-components';

type CssInterpolation = Interpolation<any> | SimpleInterpolation;

export type CssStyleable = {
  cssStyles?: CssInterpolation;
};
