import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(request, response) {

    const Token = '04d9d268e4436422234dd82a3b7319'
    const client = new SiteClient(Token);

    const registroCriado = await client.items.create({
        itemType: "972754", // CommunID
        title: "DevInPatro",
        imageUrl: "https://github.com/patroooo.png",
        creatorSlug: "patrocinadorInc"
    })

    response.json({

        dados: 'apitest',
        registroCriado: registroCriado,

    })
}