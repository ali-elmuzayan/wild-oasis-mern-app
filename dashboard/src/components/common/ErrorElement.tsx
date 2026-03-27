type ErrorElementProps = {
  message?: string;
  title?: string;
};

const ErrorElement = ({
  message = "Something went wrong while loading this section. Please try again.",
  title = "We hit a small snag",
}: ErrorElementProps) => {
  return (
    <div
      className="flex min-h-[24rem] w-full items-center justify-center"
      role="alert"
      aria-live="assertive"
    >
      <div className="w-full max-w-xl rounded-2xl border border-red-200 bg-white p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50">
            <div className="relative h-7 w-7">
              <span className="absolute left-1/2 top-0 h-5 w-1 -translate-x-1/2 rounded-full bg-red-500" />
              <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-red-500" />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xl font-semibold text-gray-800">{title}</p>
            <p className="leading-7 text-gray-600">{message}</p>
            <div className="h-1.5 w-24 rounded-full bg-red-100">
              <div className="h-full w-14 rounded-full bg-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorElement;
