import React from 'react';
import CartItem from './CartItem'


class Cart extends React.Component{
        render(){
            return(
                <div className="cart">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            );
        }
}
// const styles = {
//     image: {
//         height: 110,
//         width: 110,
//         borderRadius: 4,
//         background: '#ccc'
//     }
// }
export default Cart;