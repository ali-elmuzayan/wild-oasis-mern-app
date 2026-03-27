type LoadingProps = {
  label?: string;
  fullScreen?: boolean;
};

const Loading = ({
  label = "Loading your workspace...",
  fullScreen = false,
}: LoadingProps) => {
  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "min-h-screen" : "min-h-[24rem] w-full"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="relative flex h-14 w-14 items-center justify-center">
            <div className="absolute h-14 w-14 rounded-full bg-emerald-100 animate-ping [animation-duration:2s]" />
            <div className="absolute h-10 w-10 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin" />
            <div className="h-3 w-3 rounded-full bg-emerald-600" />
          </div>

          <div className="flex-1 space-y-3">
            <p className="text-lg font-semibold text-gray-700">{label}</p>
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.3s]" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.15s]" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-bounce" />
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="h-3 w-11/12 rounded-full bg-gray-200 animate-pulse" />
          <div className="h-3 w-4/5 rounded-full bg-gray-200 animate-pulse [animation-delay:150ms]" />
          <div className="h-3 w-3/5 rounded-full bg-gray-200 animate-pulse [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
