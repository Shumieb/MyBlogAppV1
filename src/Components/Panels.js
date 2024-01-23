import React from 'react'
import UpcomingArticlesPanel from './UpcomingArticlesPanel'
import NewArticlesPanel from './NewArticlesPanel'
import PopularArticlesPanel from './PopularArticlesPanel'

function Panels() {
    return (
        <div>
            <UpcomingArticlesPanel />
            <NewArticlesPanel />
            <PopularArticlesPanel />
        </div>
    )
}

export default Panels