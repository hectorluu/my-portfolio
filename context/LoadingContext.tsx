import React from 'react';

const LoadingContext = React.createContext({
    isLoading: false,
    setIsLoading: (value: boolean) => { },
});

export default LoadingContext;