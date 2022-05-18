import dynamic from "next/dynamic";
import {Fragment, PropsWithChildren} from "react";

const _NoSsr = (props: PropsWithChildren<{}>) => (
  <Fragment>{props.children}</Fragment>
);

export const NoSSR = dynamic(() => Promise.resolve(_NoSsr), {
  ssr: false,
});
