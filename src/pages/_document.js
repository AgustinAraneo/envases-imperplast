import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800;900&display=swap" />
          <title>Envases Imperplast - Venta de Envases al Vacío, Bolsas para el Agro y Bolsas de Poliestireno</title>
          <meta name="description" content="Envases Imperplast es una empresa líder en Argentina que ofrece una amplia gama de envases al vacío, bolsas para el agro y bolsas de poliestireno. Contáctanos para conocer nuestras soluciones de envasado de calidad." />
          <meta name="keywords" content="envases, envases al vacío, bolsas para el agro, bolsas de poliestireno, Argentina" />
          <meta name="author" content="Envases Imperplast" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
