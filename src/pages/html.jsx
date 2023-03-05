import * as React from "react";
import { Link, useSearchParams } from "react-router-dom";
import Html from './../components/Html';


export default function HtmlPage() {

  const [params, setParams] = useSearchParams();

  return (
    <>
      <Html num={params.get('num')}></Html>
    </>
  );
}
