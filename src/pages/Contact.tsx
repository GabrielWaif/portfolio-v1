const Contact = () => {
  return (
    <div id="contato">
      <form
        action="https://formsubmit.co/gabrielrosarcg@hotmail.com"
        method="POST"
      >
        <h1>ENVIE UM EMAIL</h1>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        <textarea
          name="name"
          placeholder="Escreva o email aqui"
          required
        ></textarea>
        <input type="hidden" name="_captcha" value="false" />
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
};

export default Contact;
