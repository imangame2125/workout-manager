interface SpinnerProps {
  loading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  if (!loading) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Spinner;
