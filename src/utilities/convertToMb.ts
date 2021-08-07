const convertToMb = (sizeInKb: number): string =>
  `${(sizeInKb / 1024).toFixed(2)} mb`

export default convertToMb
