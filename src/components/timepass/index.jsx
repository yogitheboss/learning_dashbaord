export function Card({ className, children }) {
    return <div className={`border rounded-lg ${className}`}>{children}</div>;
  }
  
  export function CardHeader({ className, children }) {
    return <div className={`border-b p-4 ${className}`}>{children}</div>;
  }
  
  export function CardTitle({ className, children }) {
    return <h2 className={`text-lg font-bold ${className}`}>{children}</h2>;
  }
  
  export function CardDescription({ className, children }) {
    return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
  }
  
  export function CardContent({ className, children }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
  }
  