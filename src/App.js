import "./styles.css";
import SplashScreen from "./SplashScreen";
import React, { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 120000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <div>
          <h1>App</h1>
        </div>
      )}
    </div>
  );
}
