import React from 'react'

const ContactUs = () => {
  return (
    <div>    
        <section class="bg-light p-5 mt-5">
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md mt-5">
          <div class="row mt-5">
              <div class="row mt-4">
                <div class="col-md-1">
                  <div class="icon d-flex align-items-center justify-content-left">
                    <span class="fa fa-map-marker"></span>
                  </div>
                </div>
                <div class="col-md">
                  <div class="text">
                    <p><span>Address:</span>Unit 119, 445 apple creek blvd, Markham, ON L3R 9X7</p>
                  </div>
                </div>
              </div>
              <hr/>
  
              <div class="row">
                <div class="col-md-1">
                  <div class="icon d-flex align-items-center justify-content-left">
                    <span class="fa fa-phone"></span>
                  </div>
                </div>
                <div class="col-md">
                  <div class="text">
                    <p><span>Phone:</span> <span>+1 647-830-8595</span></p>
                  </div>
                </div>
              </div>
              <hr/>
  
              <div class="row">
                <div class="col-md-1">
                  <div class="icon d-flex align-items-center justify-content-left">
                    <span class="fa fa-paper-plane"></span>
                  </div>
                </div>
                <div class="col-md">
                  <div class="text">
                    <p><span>Email:</span> <a href="jessieshan@sumaccounting.ca">jessieshan@sumaccounting.ca</a></p>
                  </div>
                </div>
              </div>
              <hr/>

              <div class="row">
                <div class="col-md-1">
                  <div class="icon d-flex align-items-center justify-content-left">
                    <span class="fa fa-globe"></span>
                  </div>
                </div>
                <div class="col-md">
                  <div class="text">
                    <p><span>Website</span> <a href="sumaccounting.ca">sumaccounting.ca</a></p>
                  </div>
                </div>
              </div>            
              <hr/>

          </div>
        </div>

        <div class="col-md">     
          <div class=" align-items-center justify-content-center">
            <div class="bg-light">
                <div class="p-4 rounded shadow-md">
                    <div>
                        <label for="name" class="form-label">Your Name</label>
                        <input id = "UserName" type="text" name="name" class="form-control" placeholder="Your Name" required/>
                    </div>
                    <div class="mt-3">
                        <label for="email" class="form-label">Your Email</label>
                        <input  id = "UserEmail" type="text" name="email" class="form-control" placeholder="Your Email" required/>
                    </div>
                    <div class="mt-3">
                        <label for="subject" class="form-label">Subject</label>
                        <input id = "UserSub" type="text" name="subject" class="form-control" placeholder="Subject" required/>
                    </div>
                    <div class="mt-3 mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea id = "UserMess" name="message" cols="20" rows="6" class="form-control"
                            placeholder="message"></textarea>
                    </div>
                    <button class="btn btn-primary" id="ContactForm" >
                        Submit Form
                    </button>
                </div>
            </div>
        </div>
      </div>
      </div>
      </div>
    </section>


<section class="p-5">
  <div class="container">
    <h2 class="text-center">Frequently Asked Questions</h2>
    <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div>
      </div>
  </div>
</section></div>
  )
}

export default ContactUs

