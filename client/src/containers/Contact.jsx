import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
        <header>
          <span class="num">03</span>
          <h2>Contact</h2>
        </header>
        <div id="contactGrid">
          <div id="contactInfo">
            <a href="mailto:roccomaniscalco2001@gmail.com">
              <i class="fas fa-envelope-square fa-2x"></i>
              roccomaniscalco2001@gmail.com
            </a>
            <a href="tel:404-910-2897">
              <i class="fas fa-phone-square fa-2x"></i>
              1 404 910 2897
            </a>
            <a
              href="https://github.com/roccomaniscalco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github-square fa-2x"></i>
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/rocco-maniscalco-983637197"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin fa-2x"></i>
              Linkedin
            </a>
            <a
              href="./assets/roccomaniscalco.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="far fa-file-pdf fa-2x"></i>
              Resume
            </a>
          </div>
          <form action="">
            <div id="messenger">
              <input type="email" id="email" placeholder="email" />
              <input type="name" id="name" placeholder="name" />
              <textarea
                name="message"
                id="message"
                placeholder="message"
              ></textarea>
            </div>
            <input type="submit" value="Submit  ➜" id="submit" />
          </form>
        </div>
      </section>
    );
};

export default Contact;