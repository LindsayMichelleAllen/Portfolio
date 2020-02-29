import React from 'react';
import '../style/Contact.css';

class Contact extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            company: "",
            department: "",
            message:"",
        }
    }

    handleSubmit = (e) => {
        let newMessage = this.state;
        var request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            console.log(request.readyState);
            console.log(request.status);
            if (request.readyState == 4 && request.status == 200) {
                this.setState({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    department: "",
                    message: ""
                });
                alert("Message sent! I will be in touch with you soon.");
            } else if(request.readyState == 4 && request.status != 200) { 
                alert("Server unable to process message. If problem persists, please email me directly at lindsay.allen.michelle@gmail.com.");
            }
        });
        request.open('POST', 'http://localhost:5000/api/sendMessage', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(JSON.stringify(newMessage));
        e.preventDefault(); // don't do refresh
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return(
            <div className="full-wrap parent">
                <form onSubmit={this.handleSubmit}>
                    <div className="identity">
                        <label>Name: </label><input value={this.state.name} name="name" type="text" onChange={this.handleChange} required></input>
                        <p></p>
                        <label>Email: </label><input value={this.state.email} name="email" type="text" onChange={this.handleChange} required></input>
                        <p></p>
                        <label>Phone: </label><input value={this.state.phone} name="phone" type="text" onChange={this.handleChange} required></input>
                        <p></p>
                        <label>Company: </label><span style={{fontStyle: "italic"}}> (optional)</span><input value={this.state.company} name="company" type="text" onChange={this.handleChange}></input>
                        <p></p>
                        <label>Department: </label><span style={{fontStyle: "italic"}}> (optional)</span><input value={this.state.department} name="department" type="text" onChange={this.handleChange}></input>
                        <p></p>
                    </div>
                    <div align="center">
                        <p></p>
                        <textarea value={this.state.message} name="message" type="text" placeholder="Enter Message..." rows={8} cols={70} onChange={this.handleChange} required></textarea>
                        <p></p>     
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default Contact;