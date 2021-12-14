import { Form, Field } from "react-final-form";

export const PaymentForm = () => {
    const onSubmit = (values) => {
        window.alert(JSON.stringify(values, 0, 2));
    };
    const formData = {};
    const required = (value) => (value ? undefined : "Required");
    const mustBeString = (value) => {
        const matchPattern = value.match(/[a-zA-Z]/s);
        if (matchPattern === null) {
            return ("Must not contain numbers");
        }
    }

    const composeValidators = (...validators) => (value) => {
        return validators.reduce((error, validator) => error || validator(value), undefined);
    }

    const getInputClass = (meta, classOfInput = "form-control") => {
        let classes = classOfInput;

        if (meta.error && meta.touched) {
            classes += ' is-invalid';
        }

        return classes;
    }

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="payment-form container col-md-6">
                <h2 className="payment-form__title">Payment form</h2>
                <Form
                    onSubmit={onSubmit}
                    initialValues={formData}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form
                            onSubmit={handleSubmit}
                            className="row g-3 needs-validation"
                            novalidate
                        >
                            <Field
                                name="firstName"
                                validate={composeValidators(required, mustBeString)}
                            >
                                {({ input, meta }) => (
                                    <div className="col-md-6">
                                        <label form="validationFirstName" className="form-label">First Name</label>
                                        <input
                                            {...input} type="text"
                                            placeholder="First Name"
                                            className={getInputClass(meta)}
                                            id="validationFirstName"
                                        />
                                        <div className="invalid-feedback">{meta.error}</div>
                                    </div>
                                )}
                            </Field>

                            <Field
                                name="lastName"
                                validate={required}
                            >
                                {({ input, meta }) => (
                                    <div className="col-md-6">
                                        <label form="validationLastName" className="form-label">Last Name</label>
                                        <input
                                            {...input} type="text"
                                            placeholder="Last Name"
                                            className={getInputClass(meta)}
                                            id="validationLastName"
                                        />
                                        <div className="invalid-feedback">{meta.error}</div>
                                    </div>
                                )}
                            </Field>

                            <Field
                                name="country"
                                validate={required}
                            >
                                {({ input, meta }) => (
                                    <div className="col-md-6">
                                        <label form="validationCountry" className="form-label">Country</label>
                                        <input
                                            {...input} type="text"
                                            placeholder="Country"
                                            className={getInputClass(meta)}
                                            id="validationCountry"
                                        />
                                        <div className="invalid-feedback">{meta.error}</div>
                                    </div>
                                )}
                            </Field>

                            <Field
                                name="address"
                                validate={required}
                            >
                                {({ input, meta }) => (
                                    <div className="col-md-6">
                                        <label form="validationAddress" className="form-label">Address</label>
                                        <input
                                            {...input} type="text"
                                            placeholder="Address"
                                            className={getInputClass(meta)}
                                            id="validationAddress"
                                        />
                                        <div className="invalid-feedback">{meta.error}</div>
                                    </div>
                                )}
                            </Field>

                            <Field
                                name="creditCard"
                                validate={required}
                            >
                                {({ input, meta }) => (
                                    <div className="col-md-10">
                                        <label form="validationCreditCard" className="form-label">Credit Card</label>
                                        <input
                                            {...input} type="text"
                                            maxLength="16"
                                            placeholder="XXXX XXXX XXXX XXXX"
                                            className={getInputClass(meta)}
                                            id="validationCreditCard"
                                        />
                                        <div className="invalid-feedback">{meta.error}</div>
                                    </div>
                                )}
                            </Field>

                            <Field
                                name="cvv2Code"
                                validate={required}
                            >
                                {({ input, meta }) => (
                                    <div className="col-md-2">
                                        <label form="validationCvv2Code" className="form-label">CVV2</label>
                                        <input
                                            {...input} type="text"
                                            maxLength="3"
                                            placeholder="CVV2"
                                            className={getInputClass(meta)}
                                            id="validationCvv2Code"
                                        />
                                        <div className="invalid-feedback">{meta.error}</div>
                                    </div>
                                )}
                            </Field>

                            <Field
                                name="email"
                            >
                                {({ input, meta }) => (
                                    <div className="col-md-12">
                                        <label form="validationEmail" className="form-label">Email for a receipt</label>
                                        <input
                                            {...input} type="email"
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
                                {({ input, meta }) => (
                                    <div className="col-md-12">
                                        <div className="form-check">
                                            <input
                                                {...input}
                                                type="checkbox"
                                                value=""
                                                className={getInputClass(meta, "form-check-input")}
                                                id="validationAgreement"
                                            />
                                            <label form="validationAgreement" className="form-check-label">Agree with terms of use</label>
                                            <div className="invalid-feedback">You must agree before submitting.</div>
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
        </div>
    );
}
