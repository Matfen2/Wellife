import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="socialMedia">
          <a href="https://www.facebook.com">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/?lang=fr">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <p className="copyrigth">© Wellife 2023</p>
        <button
          type="button"
          id="btnContact"
          data-bs-toggle="modal"
          data-bs-target="#contact"
        >
          CONTACT
        </button>
      </div>
    </div>
  );
}
