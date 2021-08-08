import { useMemo } from 'react'

interface UsePaginationProps {
  count: number
  page: number
  productsPerPage: number
}

interface Output {
  pages: any
  showLeftArrow: boolean
  showRightArrow: boolean
  renderFrom: number
}

const usePagination = ({
  count,
  page,
  productsPerPage,
}: UsePaginationProps): Output => {
  const pageCount = useMemo(() => {
    return Math.ceil(count / productsPerPage)
  }, [count, productsPerPage])

  const pages = useMemo(() => {
    const value = Array.from(new Array(pageCount), (_, k) => k + 1)

    if (page < 3) {
      return value.slice(0, 5)
    }

    if (pageCount - page < 3) {
      return value.slice(-5)
    }

    return value.slice(page - 3, page + 2)
  }, [page, pageCount])

  const showLeftArrow = useMemo(() => {
    return page > 1
  }, [page])

  const showRightArrow = useMemo(() => {
    return page !== pageCount
  }, [page, pageCount])

  const renderFrom = useMemo(() => {
    return pageCount * (page - 1) + (page - 1)
  }, [page])

  return {
    pages,
    showLeftArrow,
    showRightArrow,
    renderFrom,
  }
}

export default usePagination
