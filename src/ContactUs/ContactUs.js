import React, { Component } from "react"
import axios from "axios"
import "./ContactUs.scss"
import Fab from "@material-ui/core/Fab";


class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            phone: "",
            company: "",
            interestedIn: "",
            message: "",
            checkbox: false,
            error: false,
            isMailSent: false,
        }
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

    handleSubmit = e => {
        const { name, email, phone, company, interestedIn, message } = this.state
        e.preventDefault()
        axios
            .post('/api/contact', { name, email, phone, company, interestedIn, message })
            .then(() => this.setState({
                isMailSent: true,
                name: "",
                email: "",
                phone: "",
                company: "",
                interestedIn: "",
                message: "",
                checkbox: false,
                error: false,
            }))
            .catch(() => this.setState({
                error: true,
                name: "",
                email: "",
                phone: "",
                company: "",
                interestedIn: "",
                message: "",
                checkbox: false,
                isMailSent: false,
            }))
    }

    render() {
        const { name, email, phone, company, interestedIn, message, checkbox, isMailSent, error } = this.state
        return (
            <div id="contact-main">
                <div id="first-section">
                    <h1>Let's grow your business together!</h1>
                    <h3>We've helped hundreds of clients grow their businesses. Let us help you too.</h3>
                </div>
                <div id="second-section">
                    <h3>
                        Get started by filling out the form below. We' ll get bacj tou you in 24 hrs or less!
                    </h3>
                    <h3><strong>- or -</strong></h3>
                    <Fab variant="extended" aria-label="delete" color='secondary' >
                        BOOK A FREE CONSULTATION
                    </Fab>
                </div>
                <div className="container" id="third-section">
                    <div id="left-column">
                        <h5 style={{ color: "red" }}> Tips to fill out the form</h5>
                        <p><em>Try to describe your main challenge. For example:</em></p>
                        <p><em>- Is your website getting enough traffic?</em></p>
                        <p><em>- Are you just getting started?</em></p>
                        <p><em>- Is Social Media right for your business?</em></p>
                        <p><em>- Are you getting as many sales as you would like?</em></p>
                        <hr />
                        <h5 style={{ color: "red" }}>Get in touch!</h5>
                        <p><strong>Email:</strong>reachmedia@gmail.com</p>
                        <p><strong>Phone:</strong>801-123-1234</p>
                        <p><strong>Address:</strong>The cupboard under the stairs,4 privet drive, little whinging, surrey</p>
                    </div>
                    <form id="right-column" onSubmit={this.handleSubmit}>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Name" name="name" value={name} onChange={this.handleChange} />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Email" name="email" value={email} onChange={this.handleChange} required />
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Phone #" name="phone" value={phone} onChange={this.handleChange} />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Company" name="company" value={company} onChange={this.handleChange} />
                            </div>
                        </div>
                        <br />
                        <div class="form-group">
                            <select id="inputState" class="form-control" name="interestedIn" value={interestedIn} onChange={this.handleChange}>
                                <option selected>Interested In</option>
                                <option>Web Design</option>
                                <option>Content Writing</option>
                                <option>Branding Strategy</option>
                                <option>Graphic Design</option>
                                <option>Social Media Management</option>
                                <option>Marketing Mentor</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={message} onChange={this.handleChange}></textarea>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" onChange={this.handleChecked} required />
                                <label class="form-check-label" for="gridCheck">
                                    By submitting this form you agree with the storage and handling of your data by this website.
                                </label>
                            </div>
                        </div>
                        {isMailSent ? <div className="alert alert-success" role="alert">Email sent successfully</div>
                            : null}
                        {error ? <div className="alert alert-danger" role="alert">Oppps! Something went wrong</div>
                            : null}

                        <button type="submit" class="btn btn-danger">Submit</button>
                        {/* name = "checkbox" value ={checkbox} onClick = {this.handleClick} */}
                    </form>
                </div>
            </div>
        )
    }
}
export default Contact