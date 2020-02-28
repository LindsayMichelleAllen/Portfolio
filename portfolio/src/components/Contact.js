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
            newMessage: ""
        }
    }

    handleSubmit = (e) => {
        let newMessage = this.state;

        //TODO:
        ///send post request to server with newMessage
        ///Alert if issue sending message - do not clear form
        ///Alert if message sent - clear form
        e.preventDefault(); // don't do refresh
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return(
            <div className="full-wrap">
                <form onSubmit={this.handleSubmit}>
                    <div className="identity">
                        <label>Name: </label><input name="name" type="text" onChange={this.handleChange} required></input>
                        <p></p>
                        <label>Email: </label><input name="email" type="text" onChange={this.handleChange} required></input>
                        <p></p>
                        <label>Phone: </label><input name="phone" type="text" onChange={this.handleChange} required></input>
                        <p></p>
                        <label>Company: </label><span style={{fontStyle: "italic"}}> (optional)</span><input name="company" type="text" onChange={this.handleChange}></input>
                        <p></p>
                        <label>Department: </label><span style={{fontStyle: "italic"}}> (optional)</span><input name="department" type="text" onChange={this.handleChange}></input>
                        <p></p>
                    </div>
                    <div align="center">
                        <p></p>
                        <textarea name="message" type="text" placeholder="Enter Message..." rows={8} cols={70} onChange={this.handleChange} required></textarea>
                        <p></p>     
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default Contact;