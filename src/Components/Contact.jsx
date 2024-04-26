import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: ''
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My mobile number is ${data.phone}. My email is ${data.email}, Here is what i want to say ${data.msg}`)
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">FullName</label>
                                <input type="text" class="form-control mt-2" id="exampleFormControlInput1"
                                    name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" />
                            </div>
                            <div class="form-group mt-3 pt-3">
                                <label for="exampleFormControlInput1">Phone</label>
                                <input type="number" class="form-control mt-2" id="exampleFormControlInput1"
                                    name="phone" value={data.phone} onChange={InputEvent} placeholder="mobile number" />
                            </div>
                            <div class="form-group mt-3 pt-3">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control mt-2" id="exampleFormControlInput1"
                                    name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div class="form-group mt-3 pt-3">
                                <label for="exampleFormControlTextarea1">Massage</label>
                                <textarea class="form-control mt-2" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                            </div>
                            <div className="col-12 mt-3 ">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;