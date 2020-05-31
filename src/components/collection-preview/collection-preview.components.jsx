import React from 'react';


//import component
import CollectionItem from '../collection-item/collection-item.component';


//scss
import './collection-preview.styles.scss'


const CollectionPreview =({title, items})=>(
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className='preview'>
{
    items.filter((item,index)=> index < 4).map(({id , ...collectionItems})=>
    <CollectionItem key={id} {...collectionItems}/>
    )
}

        </div>


    </div>
)

export default CollectionPreview;