// src/components/card.jsx
export const Card = ({ children, className }) => {
    return <div className={`p-4 rounded shadow ${className}`}>{children}</div>;
  };
  
  export const CardHeader = ({ children }) => {
    return <div className="font-bold text-lg">{children}</div>;
  };
  
  export const CardTitle = ({ children }) => {
    return <h2 className="text-xl font-semibold">{children}</h2>;
  };
  
  export const CardContent = ({ children }) => {
    return <div className="mt-2">{children}</div>;
  };
  