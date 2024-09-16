const ContactPage = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            {/* <p>Get in contact with us!</p> */}
            <form>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="name" required />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ContactPage;