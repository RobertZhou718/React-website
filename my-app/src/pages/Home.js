import React from 'react'

const Home = () => {
  return (
    <div>
      <section className="text-light">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <img src="img/Index1.png" className="d-block w-100" alt="Tax1"/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src="img/Index2.png" className="d-block w-100" alt="Tax2"/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="img/Index3.png" className="d-block w-100" alt="Tax3"/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </section>
        <section className="p-5 bg-light">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md">
                        <div className="card border-light bg-dark text-light">
                            <img src="img/personal.jpg" className="card-img-top" alt="Personal"/>
                            <div className="card-body text-center">
                                <div className="card-title ">
                                    <h4>Personal Tax</h4>
                                </div>
                                <div className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Fugit veritatis velit necessitatibus,
                                    sequi, in est tempora nulla quaerat archite
                                </div>
                                <a href="/Personal.html" className="btn btn-primary mt-3">Learn more</a>
                            </div>
                        </div>
                    </div>
                       
                    <div className="col-md">
                        <div className="card border-light bg-light text-dark">
                            <img src="img/business.jpg" className="card-img-top" alt="Business"/>
                            <div className="card-body text-center">
                                <div className="card-title">
                                    <h4>Business Tax</h4>
                                </div>
                                <div className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Fugit veritatis velit necessitatibus,
                                    sequi, in est tempora nulla quaerat archite
                                </div>
                                <a href="/Business.html" className="btn btn-dark mt-3">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="card border-light bg-dark text-light" >
                            <img src="img/house.jpg" className="card-img-top" alt="House"/>
                            <div className="card-body text-center">
                                <div className="card-title">
                                   <h4>Housing Related Tax</h4> 
                                </div>
                                <div className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Fugit veritatis velit necessitatibus,
                                    sequi, in est tempora nulla quaerat archite
                                </div>
                                <a href="/Housing.html" className="btn btn-primary mt-3">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="p-5 bg-white text-dark text-center text-md-start">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md">
                        <h2>Personal Tax</h2>
                        <p className="my-4 lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Unde odit atque laudantium asperiores sit deserunt totam 
                            quis eius quas accusamus, 
                            ex voluptatibus ea? Atque veniam ratione,
                            sequi doloribus itaque in.  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Unde odit atque laudantium asperiores sit deserunt totam 
                            quis eius quas accusamus, 
                            ex voluptatibus ea? Atque veniam ratione,
                            sequi doloribus itaque in.
                        </p>
                        <a href="/Personal.html" className="btn btn-primary btn-lg">Learn more</a>
                    </div>
                    <div className="col-md">
                    <img src="img/money1.png" alt="showcase"  className="img-fluid d-none d-md-block"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="p-5 bg-dark text-light text-center text-md-start">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col">
                        <img src="img/money2.png" alt="showcase"  className="img-fluid d-none d-md-block"/>  
                    </div>
                    <div className="col-md">
                        <h2>Business Tax</h2>
                        <p className="my-4 lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Unde odit atque laudantium asperiores sit deserunt totam 
                            quis eius quas accusamus, 
                            ex voluptatibus ea? Atque veniam ratione,
                            sequi doloribus itaque in.  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Unde odit atque laudantium asperiores sit deserunt totam 
                            quis eius quas accusamus, 
                            ex voluptatibus ea? Atque veniam ratione,
                            sequi doloribus itaque in.
                        </p>
                        <a href="/Business.html" className="btn btn-primary btn-lg">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="p-5 bg-light text-dark text-center text-md-start">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md">
                        <h2>Housing Related Tax</h2>
                        <p className="my-4 lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Unde odit atque laudantium asperiores sit deserunt totam 
                            quis eius quas accusamus, 
                            ex voluptatibus ea? Atque veniam ratione,
                            sequi doloribus itaque in.  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Unde odit atque laudantium asperiores sit deserunt totam 
                            quis eius quas accusamus, 
                            ex voluptatibus ea? Atque veniam ratione,
                            sequi doloribus itaque in.
                        </p>
                        <a href="/Housing.html" className="btn btn-primary btn-lg">Learn more</a>
                    </div>
                    <div className="col-md">
                    <img src="img/hands.jpg" alt="showcase"  className="img-fluid d-none d-md-block"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="p-5">
            <div className="container">
                <h2 className="text-center">Frequently Asked Questions</h2>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          Accordion Item #1
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Accordion Item #2
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Accordion Item #3
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                      </div>
                    </div>
                  </div>
            </div>
        </section>
        <section className="p-5 bg-primary">
            <div className="container">
                <h2 className="text-center text-light">Lorem, <span className="text-warning">ipsum.</span></h2>
                <p className="lead text-center text-white mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laudantium corporis ex est, similique nihil omnis libe
                </p>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <h3 className="card-title">Lorem</h3>
                                <p className="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, corrupti!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <h3 className="card-title">Lorem</h3>
                                <p className="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, corrupti!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <h3 className="card-title">Lorem</h3>
                                <p className="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, corrupti!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <h3 className="card-title">Lorem</h3>
                                <p className="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, corrupti!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="p-5">
            <div className="container">
                <h2 className="text-center mb-4">Contact Us</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Phone: (647)-830-8595</li>
                    <li className="list-group-item">E-mail: jessishan@sumaccounting.ca</li>
                    <li className="list-group-item">Address: Unit 119,445 apple creek blvd, Markham, ON L3R 9X7</li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default Home
