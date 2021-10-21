import React from 'react';
import styled from 'styled-components';
import { CssStyleable } from '../../utils/StyledComponents';

type Props = CssStyleable & {
  type: 'h1' | 'h2' | 'subheader' | 'p';
};

const H1 = styled.h1<CssStyleable>`
  color: ${(props) => props.theme.color};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.h1.fontSize};
  line-height: ${(props) => props.theme.h1.lineHeight};

  ${(props) => props.cssStyles};
`;

const H2 = styled.h2<CssStyleable>`
  color: ${(props) => props.theme.color};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.h2.fontSize};
  line-height: ${(props) => props.theme.h2.lineHeight};

  ${(props) => props.cssStyles};
`;

const Subheader = styled.h3<CssStyleable>`
  color: ${(props) => props.theme.color};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.subheader.fontSize};
  line-height: ${(props) => props.theme.subheader.lineHeight};

  ${(props) => props.cssStyles};
`;

const P = styled.p<CssStyleable>`
  color: ${(props) => props.theme.color};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.p.fontSize};
  line-height: ${(props) => props.theme.p.lineHeight};

  ${(props) => props.cssStyles};
`;

const Text: React.FC<Props> = ({ type, children, cssStyles }) => {
  switch (type) {
    case 'h1':
      return <H1 cssStyles={cssStyles}>{children}</H1>;
    case 'h2':
      return <H2 cssStyles={cssStyles}>{children}</H2>;
    case 'subheader':
      return <Subheader cssStyles={cssStyles}>{children}</Subheader>;
    case 'p':
    default:
      return <P cssStyles={cssStyles}>{children}</P>;
  }
};

export default Text;
