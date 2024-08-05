import {useQueryErrorResetBoundary} from "@tanstack/react-query";
import {ErrorBoundary} from "react-error-boundary";
import { Outlet } from 'react-router-dom';
import {ErrorPage} from "../components/ErrorPage";

export function UnknownErrorBoundary({ children }) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onReset={reset}
    >
      <Outlet />
    </ErrorBoundary>
  )
}