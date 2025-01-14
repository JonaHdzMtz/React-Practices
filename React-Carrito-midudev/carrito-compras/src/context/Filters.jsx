import { createContext, useState } from 'react';


//1-crear el context // el que se consume
export const FiltersContext = createContext();

//2 crar el provider// el que provee acceso al contexto
export function FilterersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: "laptops",
        minPrice: 50
    });
    
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}