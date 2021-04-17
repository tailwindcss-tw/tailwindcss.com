export const translateVariants = (x) => {
  switch (x) {
    case 'responsive':
      return '響應式'
    case 'hover':
    case 'focus':
    case 'active':
    case 'group-hover':
    default:
      return x
  }
}
