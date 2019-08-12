import React, { Component } from "react"
import "./ContactUs.css"

class Contact extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
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
                    <button type="submit" class="btn btn-danger">BOOK A FREE CONSULTATION</button>
                </div>
                <div className="container" id="third-section">
                    <div id="left-column">
                        <h5 style ={{color: "red"}}> Tips to fill out the form</h5>
                        <p><em>Try to describe your main challenge. For example:</em></p>
                        <p><em>- Is your website getting enough traffic?</em></p>
                        <p><em>- Are you just getting started?</em></p>
                        <p><em>- Is Social Media right for your business?</em></p>
                        <p><em>- Are you getting as many sales as you would like?</em></p>
                        <hr />
                        <h5 style ={{color: "red"}}>Get in touch!</h5>
                        <p><strong>Email:</strong>info@reachmedia.com</p>
                        <p><strong>Phone:</strong>123456778m</p>
                        <p><strong>Address:</strong>The cupboard under the stairs 4 privet drive little whinging surrey</p>
                    </div>
                    <form id="right-column">
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Name" />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Phone #" />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Company" />
                            </div>
                        </div>
                        <br/>
                        <div class="form-group">

                            <select id="inputState" class="form-control">
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
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    By submitting this form you agree with the storage and handling of your data by this website.
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-danger">Submit</button>

                    </form>
                </div>

            </div>
        )
    }
}

export default Contact
