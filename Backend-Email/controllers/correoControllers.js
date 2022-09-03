const { request, response } = require('express');
const nodeMailer = require("nodemailer");

var asuto = "Nuevo Contacto via Takuara.com.ar";

const envioCorreo = (req = request, resp = response) => {
    let body = req.body;

    let config = nodeMailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        source: true,
        auth: {
            //user: 'lucaema1@gmail.com',
            //pass: 'qqdiywgabqvcovos'
            user: 'sistemas@takuara.com.ar',
            pass: 'Servidortaku022_'
        },
        tls: { rejectUnauthorized: false },

    });

    var cuerpo = "Te contacto " + body.nombre + " de la empresa/marca " + body.empresa + ". \n\nE-Mail: " + body.contacto + "\nTelefono: " + body.telefono + "\n\n" + body.mensaje
    var email = "octaviosardi@hotmail.com"; //"jcecato@takuara.com.ar";
    const opciones = {
        from: 'Programacion',
        subject: 'Nuevo Contacto via Takuara.com.ar',
        to: email,
        text: cuerpo
    };

    config.sendMail(opciones, function(error, result) {

        if (error) return resp.json({ ok: false, msg: error });

        return resp.json({
            ok: true,
            msg: result,
        });
    })

}

module.exports = { envioCorreo }