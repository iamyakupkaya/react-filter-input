import React, {useState} from 'react'
import Form from "./Form/form";
import List from "./List/list";
import "./indexContact.css"


const IndexContact = () => {

    const [contact, setContact] = useState([]);
    const contactInfo={contact,setContact};

    return (
        <div id="container">
            <h1 style={{textAlign:"center"}}>Phone Directory</h1>
            <List contact={contact}></List>
            <Form contactInfo={contactInfo}></Form>
        </div>
    )
}

export default IndexContact;