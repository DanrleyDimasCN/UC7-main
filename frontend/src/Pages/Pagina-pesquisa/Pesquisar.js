import React from 'react'
import './pesquisar.scss'
import Search from '../../Components/Pesquisar/Search'
import SearchResposta from '../../Components/Pesquisar/SearchResposta'

export default function Pesquisa() {
    return (
        <div>
           <div className='box-search-background'>
               <Search/>
               <SearchResposta/>
           </div>
        </div>
    )
}