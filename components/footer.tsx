function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      Copyright{" "}
      <span style={{ fontFamily: "Helvetica, sans-serif", fontSize: 20 }}>
        &copy;
      </span>{" "}
      {year} - All rights reserved - Alexander Rothschild
    </footer>
  );
}

export default Footer;
