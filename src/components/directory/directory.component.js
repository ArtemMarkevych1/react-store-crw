import React from 'react'
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'

const Directory = () => {
    const sections = [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5
        }
    ]

    return <div className='directory-menu'>
        {sections.map(({title, imageUrl, size, id}) =>
            <MenuItem
                title={title.toUpperCase()}
                imageUrl={imageUrl}
                size={size}
                key={id}/>
        )}
    </div>
}

export default Directory
