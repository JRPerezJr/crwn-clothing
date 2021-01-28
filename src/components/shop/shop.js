import React from 'react';
import shopData from '../../shoppingData';
import { PreviewCollection } from '../preview-collection/preview-collection';
export default class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
