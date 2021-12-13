import { Form, Field } from "react-final-form";
import './App.scss';

function App() {
  const onSubmit = (values) => {
      window.alert(JSON.stringify(values, 0, 2));
  };
  const formData = {};
  const required = (value) => (value ? undefined : "Required");

  return (
    <div className="payment-form">
        <div className="container">
            <div className="">
                <div className="">Payment form</div>
            </div>
            <Form
                onSubmit={onSubmit}
                initialValues={formData}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form
                        onSubmit={handleSubmit}
                        className="row g-3"
                    >
                        <Field
                            name="firstName"
                            validate={required}
                        >
                            {({ input, meta }) => (
                                <div className="col-md-6">
                                    <label>First Name</label>
                                    <input {...input} type="text" placeholder="First Name" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field
                            name="lastName"
                            validate={required}
                        >
                            {({ input, meta }) => (
                                <div className="col-md-6">
                                    <label>Last Name</label>
                                    <input {...input} type="text" placeholder="Last Name" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field
                            name="country"
                            validate={required}
                        >
                            {({ input, meta }) => (
                                <div className="col-md-6">
                                    <label>Country</label>
                                    <input {...input} type="text" placeholder="Country" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field
                            name="address"
                            validate={required}
                        >
                            {({ input, meta }) => (
                                <div className="col-md-6">
                                    <label>Address</label>
                                    <input {...input} type="text" placeholder="Address" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field
                            name="creditCard"
                            validate={required}
                        >
                            {({ input, meta }) => (
                                <div className="col-md-10">
                                    <label>Credit card</label>
                                    <input {...input} type="text" placeholder="Credit card" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field
                            name="cvv2Code"
                            validate={required}
                        >
                            {({ input, meta }) => (
                                <div className="col-md-2">
                                    <label>CVV2 code</label>
                                    <input {...input} type="text" placeholder="CVV2" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field
                            name="email"
                        >
                            {({ input, meta }) => (
                                <div className="col-md-12">
                                    <label>Email for a receipt</label>
                                    <input {...input} type="text" placeholder="Email" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field
                            name="agreement"
                            validate={required}
                        >
                            {({ input, meta }) => (
                                <div className="col-md-12">
                                    <label>Agreement with terms of use</label>
                                    <input {...input} type="checkbox" value="" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <div>
                            <button
                                type="submit"
                                className="col-md-3"
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

export default App;
