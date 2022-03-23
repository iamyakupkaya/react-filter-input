import React, { useState, useEffect } from "react";



const INITIAL_FORM = { name: "", phone: "" };

//BEGINING OF FORM METHOD
const Form = (props) => {
    //ASSIGNMENT AREA
    const {contact, setContact} = props.contactInfo;


    //HOOKS AREA
    const [form, setForm] = useState(INITIAL_FORM);
    useEffect(() => {
        console.log("Fomr değişiyor: !")

        setForm(INITIAL_FORM);

    }, [contact])

    //eventHandler to change form information -entries-
    const onChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    const onSubmitForm = (event) => {
        event.preventDefault();
        if (form.name === "" || form.phone ===""){ // if name or phone is empty form won't do following codes in this method
            return; // to finish method
        }
        console.log("Yazdı")
        setContact([...contact, form]);

    }

    return (
        <div>
        <form onSubmit={onSubmitForm}>
        <input
            name="name"
            value={form.name}
            onChange={onChangeForm}
            placeholder="Name:"
        ></input>
        <br></br>
        <br></br>
        <input
            name="phone"
            value={form.phone}
            placeholder="Phone:"
            onChange={onChangeForm}
        ></input>
        <br></br>
        <br></br>
        <button>ADD</button>
        </form>
        </div>
    );
};

export default Form;
