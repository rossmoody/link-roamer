import React from 'react'
import Link from '../scripts/Link'
import { Children } from '../types'

type Key = Pick<Link, 'href'>

type CheckedItemsContextProps = {
  checkedItems: Key[]
  setCheckedItems: React.Dispatch<React.SetStateAction<Key[]>>
}

const CheckedItemsContext = React.createContext({} as CheckedItemsContextProps)

export const CheckedItemsProvider = ({ children }: Children) => {
  const [checkedItems, setCheckedItems] = React.useState<Key[]>([])

  const checkedMemo = React.useMemo(
    () => ({
      checkedItems,
      setCheckedItems,
    }),
    [checkedItems]
  )

  return (
    <CheckedItemsContext.Provider value={checkedMemo}>
      {children}
    </CheckedItemsContext.Provider>
  )
}

export const useCheckedItems = () => React.useContext(CheckedItemsContext)
