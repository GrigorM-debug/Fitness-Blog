import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";
import Map from "./Map/Map";

export default function Contact() {
    return (
        <section className="contact-section spad">
            <div className="container">
                <div className="row">
                    <ContactInfo />
                    <div className="col-lg-6">
                        <ContactForm />
                    </div>
                </div>
                <Map />
            </div>
            </section>
    );
};