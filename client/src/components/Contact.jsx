import React from "react";

export default function Contact() {
  return (
    <div>
      <div
        className="modal"
        id="contact"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button type="button" id="btnCloseContact" data-bs-dismiss="modal">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <div className="modal-body">
              <h3>Contacter-nous :</h3>
              <form action="/contact" method="post">
                <label for="pseudo"></label>
                <input
                  type="text"
                  name="pseudo"
                  placeholder="Pseudo"
                  required
                />

                <label for="email"></label>
                <input
                  type="text"
                  name="email"
                  placeholder="Adresse email"
                  required
                />

                <textarea
                  cols={52}
                  rows={5}
                  placeholder="Message"
                  required
                ></textarea>
              </form>
              <button type="submit" id="btnSend">
                ENVOYER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
