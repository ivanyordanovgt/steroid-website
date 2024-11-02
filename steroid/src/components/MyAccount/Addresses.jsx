import {React, useState, useContext} from 'react'
import AddAddress from './AddAddress'
import BillingAddresses from './BillingAddresses'
import { UserContext } from '../../App'

const Addresses = ({addressesProps}) => {
  const [addressSection, setAddressSection] = useState("billing-addresses");
  const [addresses, setAddresses] = useState(addressesProps);

  // const users = useContext(UserContext);

  const showAddressForm = () => {
    setAddressSection('add-address');
  }

  const handleSaveForm = (newAddress) => {
    setAddressSection('billing-addresses');
    setAddresses([...addresses, newAddress]); // Add the new address
  }

  const handleCancel = () => {
    setAddressSection('billing-addresses');
  }

  return (
    <div id="addresses" className="content-section">
      {addressSection === "billing-addresses" ? (
        <BillingAddresses addressesProps={addresses} onAddAddressClick={showAddressForm}/>
      ) : (
        <AddAddress onSave={handleSaveForm} onCancel={handleCancel}/>
      )}
    </div>
  );
}

export default Addresses