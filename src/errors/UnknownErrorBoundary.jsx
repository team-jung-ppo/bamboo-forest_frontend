import {useQueryErrorResetBoundary} from "@tanstack/react-query";
import {ErrorBoundary} from "react-error-boundary";

import {ErrorPage} from "../components/ErrorPage";

export function UnknownErrorBoundary({ children }) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onReset={reset}
    >
      {children}
    </ErrorBoundary>
  )
}