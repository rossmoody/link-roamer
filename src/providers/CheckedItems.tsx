import React from 'react'

type CheckedItemsContextProps = {
  checkedItems: string[]
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>
}

const CheckedItemsContext = React.createContext({} as CheckedItemsContextProps)

export const CheckedItemsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [checkedItems, setCheckedItems] = React.useState<string[]>([])

  const checkedMemo = React.useMemo(
    () => ({
      checkedItems,
      setCheckedItems,
    }),
    [checkedItems],
  )

  return (
    <CheckedItemsContext.Provider value={checkedMemo}>
      {children}
    </CheckedItemsContext.Provider>
  )
}

export const useCheckedItems = () => React.useContext(CheckedItemsContext)
