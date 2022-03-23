import React, { useState } from "react";
import "../indexContact.css"
const List = (props) => {
  //ASSIGNMENT AREA
  const contactList = props.contact;

  //HOOKS AREA
  const [filter, setFilter] = useState("");

  //FUNCTIONS AREA
  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  //FILTER CONTACTS
  const filteredContacts = contactList.filter((contact) => { //filter method return a array of elements how provides
    // ... the condition. if return has true, contact added in list if has false wonT be added in list. 
    return Object.keys(contact).some((key) =>
      contact[key].toString().toLowerCase().includes(filter.toLocaleLowerCase()) // this will return false or true
    );
  });

  return (
    <>
      <input
        value={filter}
        onChange={onChangeFilter}
        name="search"
        type="text"
        placeholder="Search"
      />
      {contactList.length > 0 ? (
       filteredContacts.length > 0 ?  filteredContacts.map((contact, index) => { //using filtred array here.
          return (
            <div id="list" key={index}>
              <h3>{contact.name} || {contact.phone}</h3>
            </div>
          );
        }) : <div className="noResult">Kayıt Bulunamadı.!</div>
      ) : (
        <div className="noResult">KAYIT YOK.!</div>
      )}
      <h4 style={{textAlign:"center"}}>Total Account: {filteredContacts.length}</h4>

    </>
  );
};

export default List;
