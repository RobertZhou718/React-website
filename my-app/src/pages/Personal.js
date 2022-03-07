import { Trans } from "@lingui/macro";
const Personal = () => {
  return (
    <div>
      <section className="p-5 bg-white mt-5">
        <div className="container">
          <div className="col-md mt-5">
            <h2>
              <Trans>Personal Tax</Trans>
            </h2>
            <p className="my-4 lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              aperiam cumque eligendi, quae iusto esse? Fugiat veniam commodi
              dolor saepe nam in rerum debitis, labore nobis reprehenderit iure
              optio laudantium, odio sint totam beatae. Ipsum quod est atque
              impedit praesentium quos perspiciatis laudantium. Suscipit ipsam
              rem voluptatum assumenda corporis perferendis.
            </p>
          </div>
          <div className="mt-5 col-md">
            <table className="table">
              <h3>
                <u>
                  <Trans>Materials required for personal tax</Trans>
                </u>
              </h3>
              <thead>
                <tr>
                  <th scope="col">
                    <Trans>Income and expenses</Trans>
                  </th>
                  <th scope="col">
                    <Trans>Prepared materials</Trans>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="p-5 bg-light">
        <div className="container mt-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img
                src="img/student.jpg"
                alt="showcase"
                className="img-fluid d-none d-md-block"
              />
            </div>
            <div className="col-md">
              <h2>
                <Trans>Students Tax</Trans>
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
              <a href="/#" className="btn btn-primary btn-lg">
                <Trans> Learn more</Trans>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 bg-secondary">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md text-light">
              <h2>
                <Trans>Rental Income</Trans>
              </h2>
              <p className="my-4 lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                odit atque laudantium asperiores sit deserunt totam quis eius
                quas accusamus, ex voluptatibus ea? Atque veniam ratione, sequi
                doloribus itaque in. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <a href="/#" className="btn btn-primary btn-lg">
                <Trans> Learn more</Trans>
              </a>
            </div>
            <div className="col-md">
              <img
                src="img/img3.jpg"
                alt="showcase"
                className="img-fluid d-none d-md-block"
              />
            </div>
            <div className="col-md text-light ">
              <h2>
                <Trans>Self employed</Trans>
              </h2>
              <p className="my-4 lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                odit atque laudantium asperiores sit deserunt totam quis eius
                quas accusamus, ex voluptatibus ea? Atque veniam ratione, sequi
                doloribus itaque in. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. quis eius quas accusamus, ex voluptatibus ea?
                Atque veniam ratione, sequi doloribus itaque in.
              </p>
              <a href="/#" className="btn btn-primary btn-lg">
                <Trans> Learn more</Trans>
              </a>
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

export default Personal;
