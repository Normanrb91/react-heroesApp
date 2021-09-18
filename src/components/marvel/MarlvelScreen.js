import React from 'react'
import { HeroeList } from '../heroes/HeroeList'

export const MarlvelScreen = () => {
    return (
        <div>
            <h1>Marvel Heroes</h1>
            <hr />

            <HeroeList publisher="Marvel Comics" />
        </div>
    )
}
