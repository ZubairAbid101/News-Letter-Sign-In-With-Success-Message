function App() {
    /* Initializing state */
    const [emailInput, setEmailInput] = React.useState("")
    const [errorPresent, setErrorPresent] = React.useState(false)
    const [formSubmit, setFormSubmit] = React.useState(false)

    /* Setting conditional styling */
    const errorInputStyles = {
        backgroundColor: errorPresent ? "hsla(4, 100%, 67%, 0.5)" : ""
    }

    const containerStyles = {
        display: formSubmit ? "none" : ""
    }

    /* Email Validation Regular Expression */
    const emailValidationRegex = /^[A-Za-z0-9]+@([A-Za-z0-9]+\.)[A-Za-z]{2,4}$/

    function handleChange(event) {
        setEmailInput(event.target.value)
        setErrorPresent(false)
    }

    function handleClick() {
        if (emailValidationRegex.test(emailInput) !== true) {
            setErrorPresent(true)
        }else{
            setFormSubmit(true)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleDismiss() {
        setFormSubmit(false)
    }

    return(
        <div>
            <div style={containerStyles} className="container">
                <div className="info-container">
                    <div className="main-heading">Stay updated!</div>
                    <div className="sub-heading">Join 60,000+ product managers receiving monthly updates on:</div>

                    <div className="product-list item-1">
                        <div className="list-icon-container">
                            <img className="list-icon" src="./assets/images/icon-list.svg"/>
                        </div>
                        <div className="list-text">Product discovery and building what matters</div>
                    </div>

                    <div className="product-list item-2">
                        <div className="list-icon-container">
                            <img className="list-icon" src="./assets/images/icon-list.svg"/>
                        </div>
                        <div className="list-text">Measuring to ensure updates are a success</div>
                    </div>

                    <div className="product-list item-3">
                        <div className="list-icon-container">
                            <img className="list-icon" src="./assets/images/icon-list.svg"/>
                        </div>
                        <div className="list-text">And much more!</div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="label-error-container">
                            <label className="email-label">Email address</label>
                            {errorPresent ? <div className="error-message">Valid email required</div> : ""}
                        </div>
                        <input style={errorInputStyles} className="email-input" type="email" placeholder="email@company.com" onChange={handleChange} />
                        <button className="submit-btn" type="submit" onClick={handleClick}>Subscribe to monthly newsletter</button>
                    </form>
                </div>

                <div className="img-container">
                    <img className="img-main-desktop" src="./assets/images/illustration-sign-up-desktop.svg"/>
                    <img className="img-main-mobile" src="./assets/images/illustration-sign-up-mobile.svg"/>
                </div>
            </div>

            <ThankYou formSubmit={formSubmit} handleDismiss={handleDismiss} />
        </div>
    )
}

function ThankYou(props) {

    /* Setting conditional styling */
    const thankYouContainerStyles = {
        display: props.formSubmit ? "block" : ""
    }

    return (
        <div style={thankYouContainerStyles} className="thank-you-container">
            <div className="icon-container">
                <img className="icon" src="./assets/images/icon-success.svg" />
            </div>

            <div className="thank-you-heading">Thanks for subscribing!</div>
            <div className="thank-you-sub-heading">A confirmation email has been sent to <a href="">ash@loremcompany.com</a>. Please open it and click the button inside to confirm your subscription.</div>

            <button onClick={props.handleDismiss} className="thank-you-btn" type="submit">Dismiss message</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)