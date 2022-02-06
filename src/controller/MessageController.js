require('dotenv').config()
const Mail =  require('../lib/Mail')

module.exports ={
    async sorteio(name,email,token){
        
       const a = await Mail.sendMail({
            from: 'Sis Autho <pw2@ifpb.edu.br>',
            to: `${name} <${email}>`,
            subject: 'Confirmação do cadastro',
            html: `<p>Para efetuar sua validação clique aqui -->
            <a href="${process.env.MAIL_URL}users/active/${token}">aqui</a></p>`
          });
          
        return

    }
}