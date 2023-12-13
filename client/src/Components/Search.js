import './search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Search() {

    const [hidden, setHidden] = useState(true)
    const [inputValue, setInputValue] = useState('')

    const navigate = useNavigate()


    function handleClick(e) {
        setHidden(false)
        const inputText = document.querySelector('input')
        inputText.style.visibility = 'visible'
        inputText.focus()


    }

    async function handleFind(e) {
        e.preventDefault()
        setInputValue('')
        navigate(`/Search?q=${inputValue}`)
        setHidden(true)

    }

    return (

        <form className='searchBar' onSubmit={handleFind} >
            <label id='label'>

                <input type="text" className={hidden ? 'hidden' : 'input'} onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                <div className={hidden ? 'span' : 'after'} onClick={handleClick}><button className={hidden ? 'hidden' : 'span1'}><b>Find</b></button><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            </label>
        </form>
    )
}
