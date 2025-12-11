interface FoundationProps {
    height: number;
    width: number;
}

export function Foundation({ height, width }: FoundationProps) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6" style={{ height: `${height}px`, width: `${width}px` }}>
      </div>
    );
  }