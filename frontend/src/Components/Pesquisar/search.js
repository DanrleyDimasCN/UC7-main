import React from 'react'
import search from '../../image/logo-search.png'

export default function Search() {
    return (
        <div>
            <div className="box-search">
                <form>
                    <div className='box-search-box-btn'>
                        <input
                        type="search"
                        placeholder='Pesquisar...'
                        />
                        <button>
                            <img src={search} alt="" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}