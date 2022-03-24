import { Trans } from "@lingui/macro";
const Pricing = () => {
  return (
    <div>
      <section className="p-5 bg-white mt-5">
        <div className="container">
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">Pricing</h1>
            <p className="fs-5 text-muted">
              <Trans>
                <b>At Sum Accounting you are important!</b>
                <hr /> We are committed to creating value and peace of mind for
                our customers. One of the ways we achieve this is to offer
                upfront fixed pricing as much as possible. We all hate to get
                surprise bills that are over our budget so at Sum Accounting we
                strive to eliminate this.
              </Trans>
            </p>
          </div>
        </div>
      </section>
      <section className="p-5 bg-light">
        <div className="container">
          <div className="row mb-3 row-cols-1 row-cols-md-3 text-center">
            <div className="col-md-4">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">
                    <Trans>SILVER SERVICE</Trans>
                  </h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$69</h1>

                  <ul className="mt-3 mb-4 text-start">
                    <li>
                      <Trans>
                        BASIC return – max 5 info slips (T3, T4, T5), OR
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        SENIORS with income splitting & investment slips, OR
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        {" "}
                        STUDENTS must be full time student in high school or
                        post-secondary school during tax year (includes T2202A
                        forms), under 21 yrs of age, includes...
                      </Trans>
                      <a href="#silver">
                        <Trans>Learn more</Trans>
                      </a>
                    </li>
                  </ul>
                  <a
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                    href="/reservation"
                  >
                    <Trans> Make an appointment</Trans>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">
                    <Trans>GOLD SERVICE</Trans>
                  </h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$97</h1>
                  <ul className=" mt-3 mb-4 text-start">
                    <li>
                      <Trans>
                        return – up to 10 information slips (T3, T4, T5, etc)
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        INCLUDES: Charitable Donations | Medical Receipts |
                        Union Dues | Transit Passes (prior to 2017 tax year) |
                        RRSP Income/contributions | UCCB (Child Benefit) (prior
                        to 2017 tax year) | Student Loan Interest...
                      </Trans>
                      <a href="#gold">
                        <Trans>Learn more</Trans>
                      </a>
                    </li>
                  </ul>
                  <a
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                    href="/reservation"
                  >
                    <Trans>Make an appointment</Trans>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 rounded-3 shadow-sm ">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">
                    <Trans>DIAMOND SERVICE</Trans>
                  </h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$150</h1>

                  <ul className="mt-3 mb-4 text-start">
                    <li>
                      <Trans>UNLIMITED information slips & receipts</Trans>
                    </li>
                    <li>
                      <Trans>Employment Expenses (with totals provided)</Trans>
                    </li>
                    <li>
                      <Trans>Foreign pension</Trans>
                    </li>
                    <li>
                      <Trans>
                        Simple investment reporting (buy/sell of shares, etc)
                        which include T3’s, T5’s or T5008 accompanied with
                        realized gain/loss report.) All other investing is
                        considered complex and is priced separately –
                      </Trans>
                      <a href="#addServe">
                        <Trans>see additional services</Trans>
                      </a>{" "}
                      .
                    </li>
                  </ul>
                  <a
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                    href="/reservation"
                  >
                    <Trans> Make an appointment</Trans>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 white">
        <div className="container">
          <div id="silver">
            <h3>
              <Trans>SILVER SERVICE $69</Trans>
            </h3>
            <p className="lead">
              <Trans>
                Income only, no deductions included other than exceptions for
                Seniors / Students as listed (Excludes situations where
                additional services are required. See additional services.)
              </Trans>
            </p>
            <ul
              className="mt-3 mb-4 text-start"
              style={{ "font-size": "20px" }}
            >
              <li>
                <Trans>BASIC return – max 5 info slips (T3, T4, T5), OR</Trans>
              </li>
              <li>
                <Trans>
                  SENIORS with income splitting & investment slips, OR
                </Trans>
              </li>
              <li>
                <Trans>
                  STUDENTS must be full time student in high school or
                  post-secondary school during tax year (includes T2202A forms),
                  under 21 yrs of age, includes T4’s from part-time/summer jobs,
                  should file returns to create future RRSP contribution room &
                  collect GST credits (if applicable)
                </Trans>
              </li>
            </ul>
          </div>
          <hr />

          <div id="gold" className="my-5">
            <h3>
              <Trans>GOLD SERVICE $97</Trans>
            </h3>

            <ul
              className="mt-3 mb-4 text-start"
              style={{ "font-size": "20px" }}
            >
              <li>
                <Trans>
                  return – up to 10 information slips (T3, T4, T5, etc)
                </Trans>
              </li>
              <li>
                <Trans>
                  INCLUDES: <br />
                  Charitable Donations | Medical Receipts | Union Dues | Transit
                  Passes (prior to 2017 tax year) | RRSP Income/contributions |
                  UCCB (Child Benefit) (prior to 2017 tax year) | Student Loan
                  Interest | Tuition & Education Amounts | Child Care Expenses |
                  Support Payments | Pension Income Splitting | Amount for
                  Eligible Dependent
                </Trans>
              </li>
            </ul>
          </div>
          <hr />

          <div className="mt-5">
            <h3>
              <Trans>DIAMOND SERVICE $150</Trans>
            </h3>
            <p className="lead">
              <b>
                <Trans> INCLUDES everything above in GOLD Service, plus:</Trans>
              </b>
            </p>
            <ul
              className="mt-3 mb-4 text-start"
              style={{ "font-size": "20px" }}
            >
              <li>
                <Trans>UNLIMITED information slips & receipts</Trans>
              </li>
              <li>
                <Trans>Employment Expenses (with totals provided)</Trans>
              </li>
              <li>
                <Trans>Foreign pension</Trans>
              </li>
              <li>
                <Trans>
                  {" "}
                  Simple investment reporting (buy/sell of shares, etc) which
                  include T3’s, T5’s or T5008 accompanied with realized
                  gain/loss report.) All other investing is considered complex
                  and is priced separately – see additional services.
                </Trans>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="p-5 bg-secondary">
        <div className="container text-white">
          <div id="addServe" className="mb-5">
            <h3>
              <Trans>ADDITIONAL SERVICES</Trans>
            </h3>
            <p className="lead">
              <Trans>
                {" "}
                All services below may be added onto GOLD level or higher
              </Trans>
            </p>
            <div className="my-5">
              <h4>
                <Trans>Priority Service $45</Trans>
              </h4>
              <ul style={{ "font-size": "20px" }}>
                <li>
                  <Trans>
                    {" "}
                    Skip the wait, prioritize your file with a 3 day turnaround.
                    If you have multiple linked tax returns (Spouses, children)
                    this will apply to each return separately. Note this may not
                    be available during the last few days of April but we will
                    inform you in that case.
                  </Trans>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <h4>
                <Trans>
                  {" "}
                  Rental Property Income (for each property to be reported) $75
                </Trans>
              </h4>
              <ul style={{ "font-size": "20px" }}>
                <li>
                  <Trans>
                    {" "}
                    Price is for preparation of T776 form and review of expenses
                  </Trans>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <h4>
                <Trans>Long Haul Trucker $75</Trans>
              </h4>
              <ul style={{ "font-size": "20px" }}>
                <li>
                  <Trans>
                    Price is for preparation of TL2 form and review of expenses
                  </Trans>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <h4>
                <Trans>
                  {" "}
                  Self-Employed / Business / Farm Income (T1
                  return-Non-Incorporated) $200
                </Trans>
              </h4>
              <ul style={{ "font-size": "20px" }}>
                <li>
                  <Trans>
                    Price is for preparation of T2125 or T2042 form and review
                    of expenses (Agri Stability or Agri Invest not included)
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Totals must be provided for each expense category. If
                    receipts or other forms are provided, or additional help is
                    required to complete the form additional costs will apply.
                    No additional cost for a verbal review of the form if you
                    are new to using the form.
                  </Trans>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <h4>
                <Trans>GST Return $65</Trans>
              </h4>
              <ul style={{ "font-size": "20px" }}>
                <li>
                  <Trans>
                    Calculation of GST Remittance or Refund, based upon
                    completion of Business Income Return (above)
                  </Trans>
                </li>
                <li>
                  <Trans>Includes online filing with CRA</Trans>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <h4>
                <Trans>
                  Standard RRSP Planning $75 ($25 rebate at time of tax filing)
                </Trans>
              </h4>
              <ul style={{ "font-size": "20px" }}>
                <li>
                  <Trans>
                    Pre-return preparation the purpose of RRSP planning before
                    RRSP deadline
                  </Trans>
                </li>
                <li>
                  <Trans>
                    {" "}
                    Estimated based on the information you can provide at the
                    time
                  </Trans>
                </li>
                <li>
                  <Trans>In person meeting</Trans>
                </li>
                <li>
                  <Trans>Price is per return/person</Trans>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <h4>
                <Trans>Complex Medical $59</Trans>
              </h4>
              <ul style={{ "font-size": "20px" }}>
                <li>
                  <Trans>
                    Applies if medical is partially paid by third party
                    insurance and there is a substantial number of receipts.
                    Third party statements are required. Maximum time of 1 hour
                    which covers most situations, after which the rate is
                    $70/hr.
                  </Trans>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <h4>
                <Trans>Complex Investments $95</Trans>
              </h4>
              <ul style={{ "font-size": "20px" }}>
                <li>
                  <Trans>
                    {" "}
                    Applies if annual realized gain / loss statements are not
                    provided and separate sale statements are required to
                    calculate the income. Maximum time of 1 hour after which the
                    rate is $70/hr
                  </Trans>
                </li>
                <li>
                  <Trans>Excludes options trading.</Trans>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <h4>
                <Trans>T1 Adjustment $50 per year</Trans>
              </h4>
              <ul style={{ "font-size": "20px" }}>
                <li>
                  <Trans>
                    {" "}
                    for current or prior years, to include missed slips, or
                    basic changes to tax situation
                  </Trans>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <h4>
                <Trans>T1 Adjustment (more complex) $100 per year</Trans>
              </h4>
              <ul style={{ "font-size": "20px" }}>
                <li>
                  <Trans>
                    {" "}
                    for current or prior years, to include complex changes to
                    tax situation. We can confirm in advance if simple or
                    complex depending on individual situation
                  </Trans>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <h4>
                <Trans>
                  CRA contact or Notice of Assessment Copy $35 per access
                </Trans>
              </h4>
              <ul style={{ "font-size": "20px" }}>
                <li>
                  <Trans>
                    {" "}
                    reprint of Notice of Assessment or Option C from CRA website
                    for current or prior years
                  </Trans>
                </li>
                <li>
                  <Trans>
                    contact CRA via phone for information on your behalf
                  </Trans>
                </li>
                <li>
                  <Trans>
                    contact CRA website for information on your behalf
                  </Trans>
                </li>
                <li>
                  <Trans>this is covered under CRA Review Insurance</Trans>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <h4>
                <Trans>
                  {" "}
                  Pre or Post Assessment Review $50-250 per review (at time of
                  review)
                </Trans>
              </h4>
              <ul style={{ "font-size": "20px" }}>
                <li>
                  <Trans>
                    {" "}
                    You receive a letter from CRA requesting further information
                    to substantiate your tax credit request (happens most often
                    when there is a large credit being claimed such as medical
                    or donations or something isn’t clear to CRA)
                  </Trans>
                </li>
                <li>
                  <Trans>
                    We will prepare a written reply and provide information
                    requested from your tax return, on your behalf
                  </Trans>
                </li>
                <li>
                  <Trans>
                    contact CRA website for information on your behalf
                  </Trans>
                </li>
                <li>
                  <Trans>Follow up, as required, to close review</Trans>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 white">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <h2>
                <Trans>Tax Online</Trans>
              </h2>
              <p className="my-4 lead">
                <Trans>
                  {" "}
                  After completing the appointment, please SignUp/Login to our
                  website to use the Tax online function, please fill in the
                  form according to your own needs, and upload the required
                  documents.
                </Trans>
              </p>
              <a href="/TaxOnline" className="btn btn-danger btn-lg">
                <Trans>Tax Online</Trans>
              </a>
            </div>
            <div className="col-md">
              <img
                src="img/img1.png"
                alt="showcase"
                className="img-fluid d-none d-md-block"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="container">
          <h2 className="text-center">
            <Trans>Frequently Asked Questions</Trans>
          </h2>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the first item's accordion body.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
