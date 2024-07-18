import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";
import Map from "./Map/Map";
import styles from './Contact.module.css';
import Breadcrumb from "../Breadcrumb/Breadcrumb";

export default function Contact() {
    return (
        <>
            <Breadcrumb title="Contact" page="Contact" breadcrumbImage="img/breadcrumb-bg.jpg"/>
            <section className={`${styles.contactSection} spad`}>
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
        </>
    );
};