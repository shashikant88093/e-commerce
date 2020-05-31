import React from 'react';
import SHOP_DATA from './collection';
import CollectionPreview from '../../components/collection-preview/collection-preview.components';
//scss
import './shop.style.scss';
class ShopPage extends React.Component {
   state={
       collections: SHOP_DATA
   }

    render() {
        return (
            <div className='shop-page'>
                {
                    this.state.collections.map(({id, ...collectionShop})=>
                    <CollectionPreview id={id} {...collectionShop} />
                    )
                }
            </div>
         
        );
    }
}




export default ShopPage
