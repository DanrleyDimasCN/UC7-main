import React from 'react'
import './pesquisar.scss'
import Search from '../../Components/Pesquisar/search'
import SearchResposta from '../../Components/Pesquisar/searchResposta'

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