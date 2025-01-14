import { useContext } from 'react'
import { FiltersContext } from '../context/Filters'

export function useFilters() {

    const { filters, setFilters } = useContext(FiltersContext)
    console.log(filters)


    const filterProductos = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice &&
                (filters.category === "all" ||
                    product.category === filters.category
                )
            )
        })
    }
    return { filterProductos, setFilters, filters }
}