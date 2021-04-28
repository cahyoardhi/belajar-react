import {useState ,createContext} from 'react'

export const TabelContext = createContext()

export const TabelProvider = props => {
    const [dataBuah, setDataBuah] = useState({
        lists: null,
        selectedId: 0,
        statusForm: 'create'
    })

    return (
        <TabelContext.Provider value={[dataBuah, setDataBuah]}>
            {props.children}
        </TabelContext.Provider>
    )
}