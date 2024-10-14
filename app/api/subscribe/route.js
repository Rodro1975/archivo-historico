import nodemailer from "nodemailer"; // Solo esta línea debe permanecer

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    // Solicitud a la API de Mailgun usando fetch
    const response = await fetch(
      `https://api.mailgun.net/v3/sandboxd401e549c2874f159d42fa8ddce27b54.mailgun.org/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(
            `api:c9a2a07eeabf5684fe48881f16f09dcc-d010bdaf-323a2ac7`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          from: "noreply@tu-dominio.com",
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
