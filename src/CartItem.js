import React from 'react';

class CartItem extends React.Component{
            render(){
            console.log('this.props', this.props);
            const { price, title, qty} = this.props.product;
            const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = this.props;
            return(
                <div className="cart-item">
                    <div className="left-block">
                        <img style={styles.image}></img>
                    </div>
                    <div className="right-block">
                        <div style={{ fontSize:25 }}>{title}</div>
                        <div style={{ color:'#777'}}>Rs. {price}</div>
                        <div style={{ color:'#777'}}>Qty: {qty}</div>
                        <div className="cart-item-actions">
                            {/* Buttons */}
                            <img 
                             alt="increase" 
                             className="action-icons" 
                             src="https://as1.ftcdn.net/jpg/03/46/94/28/500_F_346942841_2iGSPUeLvwj7JbgUjSewYiIkaJzjGJG9.jpg" 
                             onClick={() => onIncreaseQuantity(product)}
                            />
                            <img
                             alt="decrese" 
                             className="action-icons" 
                             src="https://image.flaticon.com/icons/svg/659/659892.svg" 
                             onClick={() => onDecreaseQuantity(product)}
                            />
                            <img
                             alt="delete" 
                             className="action-icons" 
                             src="https://image.flaticon.com/icons/svg/1345/1345874.svg"
                             onClick={() => onDeleteProduct(product.id)}
                            />
                        </div>
                    </div>
                </div>
            );

        }
}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;