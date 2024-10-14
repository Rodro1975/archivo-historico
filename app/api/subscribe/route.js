import nodemailer from "nodemailer"; // Solo esta línea debe permanecer

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    console.log("MAILGUN_API_KEY:", process.env.MAILGUN_API_KEY);
    console.log("MAILGUN_DOMAIN:", process.env.MAILGUN_DOMAIN);

    // Solicitud a la API de Mailgun usando fetch
    const response = await fetch(
      `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(
            `api:${process.env.MAILGUN_API_KEY}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          from: `noreply@${process.env.MAILGUN_DOMAIN}`, // Usa el dominio verificado
          to: "rodrigoordonez@nube.unadmexico.mx",
          subject: "Nueva suscripción",
          text: `Nuevo suscriptor: ${email}`,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text(); // Obtener detalles de error
      throw new Error(`Error enviando el correo: ${errorText}`);
    }

    // Devolver respuesta exitosa
    return new Response(
      JSON.stringify({ message: "Correo enviado con éxito" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error enviando el correo:", error.message);

    // Devolver respuesta de error
    return new Response(
      JSON.stringify({ message: `Error enviando el correo: ${error.message}` }),
      { status: 500 }
    );
  }
}
