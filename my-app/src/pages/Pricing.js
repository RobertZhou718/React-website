import { Trans } from "@lingui/macro";
const Pricing = () => {
  return (
    <div>
      <section className="p-5 bg-white mt-5">
        <div className="container">
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">Pricing</h1>
            <p class="fs-5 text-muted">
              <b>At Sum Accounting you are important!</b>
              <hr /> We are committed to creating value and peace of mind for
              our customers. One of the ways we achieve this is to offer upfront
              fixed pricing as much as possible. We all hate to get surprise
              bills that are over our budget so at Sum Accounting we strive to
              eliminate this.
            </p>
          </div>
        </div>
      </section>
      <section className="p-5 bg-light">
        <div className="container">
          <div className="row mb-3 text-center">
            <div className="col-4">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">SILVER SERVICE</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$69</h1>

                  <ul className="mt-3 mb-4 text-start">
                    <li>BASIC return – max 5 info slips (T3, T4, T5), OR</li>
                    <li>
                      SENIORS with income splitting & investment slips, OR
                    </li>
                    <li>
                      STUDENTS must be full time student in high school or
                      post-secondary school during tax year (includes T2202A
                      forms), under 21 yrs of age, includes...
                      <a href="#silver">Learn more</a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                  >
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">GOLD SERVICE</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$97</h1>
                  <ul className=" mt-3 mb-4 text-start">
                    <li>
                      return – up to 10 information slips (T3, T4, T5, etc)
                    </li>
                    <li>
                      INCLUDES: Charitable Donations | Medical Receipts | Union
                      Dues | Transit Passes (prior to 2017 tax year) | RRSP
                      Income/contributions | UCCB (Child Benefit) (prior to 2017
                      tax year) | Student Loan Interest...
                      <a href="#gold">Learn more</a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card mb-4 rounded-3 shadow-sm ">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">DIAMOND SERVICE</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$150</h1>

                  <ul className="mt-3 mb-4 text-start">
                    <li>UNLIMITED information slips & receipts</li>
                    <li>Employment Expenses (with totals provided)</li>
                    <li>Foreign pension</li>
                    <li>
                      Simple investment reporting (buy/sell of shares, etc)
                      which include T3’s, T5’s or T5008 accompanied with
                      realized gain/loss report.) All other investing is
                      considered complex and is priced separately –
                      <a href="#addServe">see additional services</a> .
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 white">
        <div className="container">
          <div id="silver">
            <h2>
              <Trans>SILVER SERVICE $69</Trans>
            </h2>
            <p className="lead">
              Income only, no deductions included other than exceptions for
              Seniors / Students as listed (Excludes situations where additional
              services are required. See additional services.)
            </p>
            <ul
              className="mt-3 mb-4 text-start"
              style={{ "font-size": "20px" }}
            >
              <li>BASIC return – max 5 info slips (T3, T4, T5), OR</li>
              <li>SENIORS with income splitting & investment slips, OR</li>
              <li>
                STUDENTS must be full time student in high school or
                post-secondary school during tax year (includes T2202A forms),
                under 21 yrs of age, includes T4’s from part-time/summer jobs,
                should file returns to create future RRSP contribution room &
                collect GST credits (if applicable)
              </li>
            </ul>
          </div>
          <hr />
          <br />
          <div id="gold" className="my-5">
            <h2>
              <Trans>GOLD SERVICE $97</Trans>
            </h2>

            <ul
              className="mt-3 mb-4 text-start"
              style={{ "font-size": "20px" }}
            >
              <li>return – up to 10 information slips (T3, T4, T5, etc)</li>
              <li>
                INCLUDES: <br />
                Charitable Donations | Medical Receipts | Union Dues | Transit
                Passes (prior to 2017 tax year) | RRSP Income/contributions |
                UCCB (Child Benefit) (prior to 2017 tax year) | Student Loan
                Interest | Tuition & Education Amounts | Child Care Expenses |
                Support Payments | Pension Income Splitting | Amount for
                Eligible Dependent
              </li>
            </ul>
          </div>
          <hr />
          <br />
          <div className="my-5">
            <h2>
              <Trans>DIAMOND SERVICE $150</Trans>
            </h2>
            <p className="lead">
              <b> INCLUDES everything above in GOLD Service, plus:</b>
            </p>
            <ul
              className="mt-3 mb-4 text-start"
              style={{ "font-size": "20px" }}
            >
              <li>UNLIMITED information slips & receipts</li>
              <li>Employment Expenses (with totals provided)</li>
              <li>Foreign pension</li>
              <li>
                Simple investment reporting (buy/sell of shares, etc) which
                include T3’s, T5’s or T5008 accompanied with realized gain/loss
                report.) All other investing is considered complex and is priced
                separately – see additional services.
              </li>
            </ul>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                odit atque laudantium asperiores sit deserunt totam quis eius
                quas accusamus, ex voluptatibus ea? Atque veniam ratione, sequi
                doloribus itaque in. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Unde odit atque laudantium asperiores sit
                deserunt totam quis eius quas accusamus, ex voluptatibus ea?
                Atque veniam ratione, sequi doloribus itaque in.
              </p>
              <a href="/TaxOnline" className="btn btn-danger btn-lg">
                <Trans> Tax Online</Trans>
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
