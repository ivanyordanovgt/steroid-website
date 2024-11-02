import { useContext } from "react"
import { UserContext } from "../../App"

const BillingAddresses = ({addressProps, onAddAddressClick}) => {
    const users = useContext(UserContext);

    return(
        <div className="addresses-content">
            <span>The following addresses will be used on the checkout page by default.</span>
            <h1>Billing address</h1>
            <p><a id='add-billing-address-link' onClick={onAddAddressClick}>Add Billing address</a></p>
            <h2 id='address-h2'>You have not set up any addresses as of yet.</h2>
        </div>
    )
}

/* const AddressList = ({ addressProps, onAddAddressClick }) => {
    return (
        <div>
            <h2>Your Addresses</h2>
            <ul>
                {addressProps.map((address, index) => (
                    <li key={index}>{address}</li>
                ))}
            </ul>
            <button onClick={onAddAddressClick}>Add New Address</button>
        </div>
    );
};*/

export default BillingAddresses