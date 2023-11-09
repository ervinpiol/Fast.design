import {
  provideFASTDesignSystem,
  fastCard,
  fastButton,
  fastSearch,
  fastSwitch,
} from "@microsoft/fast-components";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";

const { wrap } = provideReactWrapper(React, provideFASTDesignSystem());

export const FastCard = wrap(fastCard());
export const FastButton = wrap(fastButton());
export const FastSearch = wrap(fastSearch());
export const FastSwitch = wrap(fastSwitch());
