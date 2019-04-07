import { format as fnsFormat } from 'date-fns'
import * as fr from 'date-fns/locale/fr'

export function format(date, formatStr) {
  return fnsFormat(date, formatStr, {
    locale: fr
  })
}
