const formatCurrency = (value: number, currency: string): string => {
  switch (currency) {
    case 'EUR':
      return `€${value}`

    default:
      return `$${value}`
  }
}

export default formatCurrency
