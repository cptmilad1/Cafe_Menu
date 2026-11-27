export const validateCustomer = ({ name, table }) => {
  const errors = {}
  const trimmed = (name ?? '').trim()

  if (trimmed.length < 2) errors.name = 'Enter your name (at least 2 characters).'
  else if (trimmed.length > 40) errors.name = 'Name must be 40 characters or fewer.'

  const tableNumber = Number(table)
  if (table === '' || table == null) errors.table = 'Enter your table number.'
  else if (!Number.isInteger(tableNumber) || tableNumber < 1 || tableNumber > 99) {
    errors.table = 'Table number must be a whole number from 1 to 99.'
  }

  return errors
}
