import {Form, Field} from "react-final-form";
import {useState} from "react";

export const PaymentForm = () => {
    const [formResults, setFormResults] = useState("");
    const formData = {};
    const onSubmit = (values, form) => {
        let result = JSON.stringify(values, 0, 2);
        setFormResults(prevState => prevState + result)
        form.restart();
    };

    // Validators.
    const required = (value) => (value ? undefined : "Please fill out this field");
    const mustBeString = (value) => (value.match(/^[A-Za-z]+$/) ? undefined : "Please input alphabet characters only");
    const mustBeNumber = (value) => (isNaN(value) ? "Please input digits only" : undefined);
    const mustBeLength16 = (value) => ((value.length === 16) ? undefined : "Must be 16 digits");
    const mustBeLength3 = (value) => ((value.length === 3) ? undefined : "Must be 3 digits");
    const validateEmail = (value) => {
        if (value) {
            return (/\S+@\S+\.\S+/).test(value) ? undefined : "Please input valid email (example: info@geniusee.com)";
        }
    }
    const composeValidators = (...validators) => (value) => {
        return validators.reduce((error, validator) => error || validator(value), undefined);
    }

    // Classes.
    const getInputClass = (meta, classOfInput = "form-control") => {
        let classes = classOfInput;
        if (meta.error && meta.touched) {
            classes += ' is-invalid';
        }
        return classes;
    }

    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="payment-form container col-md-6">
                <h2 className="payment-form__title">Payment form</h2>
                <Form
                    onSubmit={onSubmit}
                    initialValues={formData}
                    render={({handleSubmit, form, submitting, pristine, values}) => (
                        <form
                            method="POST"
                            action="https://httpbin.org/post"
                            onSubmit={handleSubmit}
                            className="row g-3 needs-validation payment-form__form"
                            noValidate
                        >
                            <Field
                                name="firstName"
                                validate={composeValidators(required, mustBeString)}
                            >
                                {({input, meta}) => (
                                    <div className="col-md-6">
                                        <label form="validationFirstName" className="form-label">First Name*</label>
                                        <input
                                            {...input} type="text"
                                            placeholder="First Name"
                                            className={getInputClass(meta)}
                                            id="validationFirstName"
                                            autoComplete="off"
                                        />
                                        <div className="invalid-feedback">{meta.error}</div>
                                    </div>
                                )}
                            </Field>

                            <Field
                                name="lastName"
                                validate={composeValidators(required, mustBeString)}
                            >
                                {({input, meta}) => (
                                    <div className="col-md-6">
                                        <label form="validationLastName" className="form-label">Last Name*</label>
                                        <input
                                            {...input} type="text"
                                            placeholder="Last Name"
                                            className={getInputClass(meta)}
                                            id="validationLastName"
                                            autoComplete="off"
                                        />
                                        <div className="invalid-feedback">{meta.error}</div>
                                    </div>
                                )}
                            </Field>

                            <Field
                                name="country"
                                validate={composeValidators(required, mustBeString)}
                            >
                                {({input, meta}) => (
                                    <div className="col-md-6">
                                        <label form="validationCountry" className="form-label">Country*</label>
                                        <input
                                            {...input} type="text"
                                            placeholder="Country"
                                            className={getInputClass(meta)}
                                            id="validationCountry"
                                            autoComplete="off"
                                        />
                                        <div className="invalid-feedback">{meta.error}</div>
                                    </div>
                                )}
                            </Field>

                            <Field
                                name="address"
                                validate={composeValidators(required)}
                            >
                                {({input, meta}) => (
                                    <div className="col-md-6">
                                        <label form="validationAddress" className="form-label">Address*</label>
                                        <input
                                            {...input} type="text"
                                            placeholder="Address"
                                            className={getInputClass(meta)}
                                            id="validationAddress"
                                            autoComplete="off"
                                        />
                                        <div className="invalid-feedback">{meta.error}</div>
                                    </div>
                                )}
                            </Field>

                            <Field
                                name="creditCard"
                                validate={composeValidators(required, mustBeNumber, mustBeLength16)}
                            >
                                {({input, meta}) => (
                                    <div className="col-md-10">
                                        <label form="validationCreditCard" className="form-label">Credit Card*</label>
                                        <input
                                            {...input} type="text"
                                            maxLength="16"
                                            placeholder="XXXX XXXX XXXX XXXX"
                                            className={getInputClass(meta)}
                                            id="validationCreditCard"
                                            autoComplete="off"
                                        />
                                        <div className="invalid-feedback">{meta.error}</div>
                                    </div>
                                )}
                            </Field>

                            <Field
                                name="cvv2Code"
                                validate={composeValidators(required, mustBeNumber, mustBeLength3)}
                            >
                                {({input, meta}) => (
                                    <div className="col-md-2">
                                        <label form="validationCvv2Code" className="form-label">CVV2*</label>
                                        <input
                                            {...input} type="password"
                                            maxLength="3"
                                            placeholder="CVV2"
                                            className={getInputClass(meta)}
                                            id="validationCvv2Code"
                                            autoComplete="off"
                                        />
                                        <div className="invalid-feedback">{meta.error}</div>
                                    </div>
                                )}
                            </Field>

                            <Field
                                name="email"
                                validate={validateEmail}
                            >
                                {({input, meta}) => (
                                    <div className="col-md-12">
                                        <label form="validationEmail" className="form-label">Email for a receipt</label>
                                        <input
                                            {...input} type="text"
                                            placeholder="Email"
                                            className={getInputClass(meta)}
                                            id="validationEmail"
                                        />
                                        <div className="invalid-feedback">{meta.error}</div>
                                    </div>
                                )}
                            </Field>

                            <Field
                                name="agreement"
                                validate={required}
                            >
                                {({input, meta}) => (
                                    <div className="col-md-12">
                                        <div className="form-check">
                                            <label form="validationAgreement" className="form-check-label">
                                                <input
                                                    {...input}
                                                    type="checkbox"
                                                    value=""
                                                    className={getInputClass(meta, "form-check-input")}
                                                    id="validationAgreement"
                                                />
                                                Agree with terms of use*
                                                <div className="invalid-feedback">You must agree before
                                                    submitting.</div>
                                            </label>

                                        </div>
                                    </div>
                                )}
                            </Field>

                            <div className="d-grid gap-2 text-align-center">
                                <button
                                    type="submit"
                                    className="btn btn-success payment-form__submit"
                                >
                                    Pay
                                </button>
                            </div>
                        </form>
                    )}
                />
            </div>
            {formResults && (
                <div className="form-results container col-md-6">
                    <code lang="json" className="form-results__code">
                        Results: {formResults}
                    </code>
                </div>
            )
            }
        </div>
    );
}
