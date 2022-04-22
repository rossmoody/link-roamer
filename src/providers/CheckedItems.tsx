import React from 'react'
import { Children } from '../types'

type CheckedItemsContextProps = {
  checkedItems: string[]
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>
}

const CheckedItemsContext = React.createContext({} as CheckedItemsContextProps)

export const CheckedItemsProvider = ({ children }: Children) => {
  const [checkedItems, setCheckedItems] = React.useState<string[]>([])

  const checkedMemo = React.useMemo(() => {
    const sorted = checkedItems.sort()

    return {
      checkedItems: sorted,
      setCheckedItems,
    }
  }, [checkedItems])

  return (
    <CheckedItemsContext.Provider value={checkedMemo}>
      {children}
    </CheckedItemsContext.Provider>
  )
}

export const useCheckedItems = () => React.useContext(CheckedItemsContext)
