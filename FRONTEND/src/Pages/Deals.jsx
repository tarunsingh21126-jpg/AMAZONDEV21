export default function DealsAccordion({ pid = "one" }) {
    return (
        <div className="product-card p-2 deals-normal">
            <h3>DEALS</h3>

            <div className="accordion" id={`faqAccordion-${pid}`}>
                <div className="accordion2-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq1-${pid}`}
                        >
                            With Exchange <br /> Up to 51,800.00 off
                        </button>
                    </h2>

                    <div
                        id={`faq1-${pid}`}
                        className="accordion-collapse collapse "
                        data-bs-parent={`#faqAccordion-${pid}`}
                    >
                        <div className="accordion-body">
                            <a href="https://www.amazon.in/">› HOW TO Exchange</a>
                        </div>
                    </div>
                </div>

                <div className="accordion2-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq2-${pid}`}
                        >
                            Buy new: ₹75,999.00
                        </button>
                    </h2>

                    <div
                        id={`faq2-${pid}`}
                        className="accordion2-collapse collapse"
                        data-bs-parent={`#faqAccordion-${pid}`}
                    >
                        <div className="accordion-body">
                            FREE delivery Wednesday, 7 January.<a href="">Details</a><br></br>
                            Or fastest delivery Today. Order within 13 hrs 58 mins.<a
                                href="">Details</a><br></br>
                            Delivering to Lucknow 226016 - <a href="">Update Location</a><br></br>Add a
                            Protection Plan:
                            <label>
                                <input type="checkbox" />1 Year Screen protection by Acko for
                                ₹3,799.00<br></br>
                                <input type="checkbox" />1 Year Total Damage Protection by Acko for
                                ₹4,999.00<br></br>
                                <input type="checkbox" />1 Year Extended warranty by OneAssist for
                                ₹3,199.00
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
