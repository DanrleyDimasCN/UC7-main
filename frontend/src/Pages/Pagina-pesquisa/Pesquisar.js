import React from 'react'
import Search from '../../Components/Pesquisar/Search'
import SearchResposta from '../../Components/Pesquisar/SearchResposta'
import './pesquisar.scss'

export default function Pesquisa() {
    return (
        <div>
           <div className='box-search-background'>
               <Search/>
               <SearchResposta />
           </div>
        </div>
    )
}