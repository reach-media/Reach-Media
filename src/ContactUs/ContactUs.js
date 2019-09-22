import React, { Component } from "react"
import axios from "axios"
import "./ContactUs.scss"
import Fab from "@material-ui/core/Fab";
import Swal from 'sweetalert2'
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
            returnedData: ""    
        }
    }

    handleSubmit = e => {
        const { name, email, phone, company, message } = this.state
        e.preventDefault()

        const haha = {
            name, email, phone, company, message
        }
        const newHaha = JSON.stringify(haha)
        // axios.get("http://localhost:9000/.netlify/functions/email")
        axios.post("http://localhost:9000/.netlify/functions/email", newHaha).then(res => {
            console.log(res.data)
            this.setState({
                returnedData: res.data
            })
        })
        Swal.fire({
            position: 'center',
            type: 'success',
            title: `We will contact you shortly`,
            showConfirmButton: false,
            timer: 1700
          })
    }
    handleChange = e => {
        e.preventDefault()
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChecked = e => {
        this.setState({ checkbox: !this.state.checkbox })

    }
  
    //   handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, phone, company,  message } = this.state
        return (
            <div id="contact-main">
                <div id="first-section">
                    <h1>Let's grow your business together!</h1>
                    <h3>We've helped hundreds of clients grow their businesses. Let us help you too.</h3>
                </div>
                <div id="second-section">
                    <h3>
                        Get started by filling out the form below. We will be sure to contact you!
                    </h3>
                </div>
                <div className="container" id="third-section">
                    <div id="left-column">
                        <h5 style={{ color: "red" }}> Talk To Us Regarding The Following</h5>
                        <p><em>Try to describe your main challenge. For example:</em></p>
                        <p><em>- Is your website getting enough traffic?</em></p>
                        <p><em>- What features or functionality would your website need to better serve your clients</em></p>
                        <p><em>- Are you just getting started?</em></p>
                        <p><em>- Is Social Media right for your business?</em></p>
                        <p><em>- Are you getting as many sales as you would like?</em></p>
                    </div>
                    <form id="right-column" name="contact" method="POST" action="formHandler.php" onSubmit={this.handleSubmit} >
                        <div class="row inputs">
                            <div class="col">
                                <input type="text" class="form-control contact_inputs" placeholder="Name" name="name" value={name} onChange={this.handleChange} />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control contact_inputs" placeholder="Email" name="email" value={email} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <br />
                        <div class="row inputs">
                            <div class="col">
                                <input type="text" class="form-control contact_inputs" placeholder="Phone #" name="phone" value={phone} onChange={this.handleChange} />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control contact_inputs" placeholder="Company" name="company" value={company} onChange={this.handleChange} />
                            </div>
                        </div>
                        <br />
                        <div class="form-group">
                            <textarea placeholder="Ask Us Any Questions Or Tell Us About Your Vision For Your Web Application" class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={message} onChange={this.handleChange}></textarea>
                        </div>
                        {/* <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" onChange={this.handleChecked} required />
                                <label class="form-check-label" for="gridCheck">
                                    By submitting this form you agree with the storage and handling of your data by this website.
                                </label>
                            </div>
                        </div> */}
                <input type="submit" class="btn btn-danger" value="Submit" />
                    </form>
                        {/* name = "checkbox" value ={checkbox} onClick = {this.handleClick} */}
                </div>
                    <div id="mailing">

                        <a  id="mailTo"  class="btn btn-danger" href="mailto:reachmediait@gmail.com">Click Here To Contact Us</a>
                    </div>
                </div>
        )
    }
}
export default Contact