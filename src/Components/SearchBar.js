import SearchBar from "material-ui-search-bar";
import {useRef} from 'react'

export default function SearchItem({searchItem}) {

    const searchBarItem = useRef(null)
    return (
        <>
            <SearchBar // dataSource={state.dataSource}
                onChange={
                    value => searchBarItem.current = value
                }
                onRequestSearch={
                    () => {
                        searchItem(searchBarItem.current)
                    }
                }
                onCancelSearch={
                    () => {
                        searchItem(null)
                    }
                }
                style={
                    {
                        margin: '10vh auto 2vh',
                        maxWidth: '50%'
                    }
                }/>
        </>
    )
}
