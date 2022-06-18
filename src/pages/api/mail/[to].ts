import type { NextApiRequest, NextApiResponse } from 'next'
import mailer from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {

}

type Data = {
    ok: boolean;
    msg: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        mailer.setApiKey(process.env.SENDGRID_API_KEY as string)
        const { to } = req.query
        const msg = {
            to,
            from: 'berriosm.sg@gmail.com',
            subject: 'Correo de Prueba',
            html: '<h1>Que sucede realmente</h1>',
        }
        const data = await mailer.send(msg);
        res.status(200).json({ ok: true, msg: 'Correo enviado exitosamente' })
    } catch (e) {
        console.error(e)

    }
    res.status(200).json({ ok: true, msg: 'Enviar Mensaje' })
}