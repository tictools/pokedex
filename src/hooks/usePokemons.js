import { useState, useEffect } from 'react'

import { getCurrentOffset } from '../common/utils'
import {
  BASE_URL,
  EMPTY_ARRAY,
  INITIAL_PAGINATION_STATUS_VALUE
} from '../common/constants'

export default function usePokemons (page) {
  const [pageStatus, setPageStatus] = useState(INITIAL_PAGINATION_STATUS_VALUE)
  const [pokemons, setPokemons] = useState(EMPTY_ARRAY)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPokemons = () => {
      const currentOffset = getCurrentOffset(page)
      setLoading(true)
      fetch(`${BASE_URL}?offset=${currentOffset}&limit=10`)
        .then((response) => response.json())
        .then(({ results, previous, next }) => {
          setPokemons(results)
          setPageStatus({
            ...pageStatus,
            previous,
            next
          })
          setLoading(false)
        })
    }
    fetchPokemons()
  }, [page])

  return { pokemons, loading, pageStatus }
}
