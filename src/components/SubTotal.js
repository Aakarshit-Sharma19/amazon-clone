import React from 'react';
import 'styles/SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from 'utilities/StateProvider';
import { getBasketTotal } from 'utilities/reducer';
import { useHistory } from 'react-router';

function SubTotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={
                    value => (
                        <>
                            <p>
                                Subtotal ({basket.length} items): <strong>{value}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" /> This order contains a gift
                            </small>
                        </>
                    )
                }
                decimalText={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal;