using Patrimonio.Contexts;
using Patrimonio.Domains;
using Patrimonio.Interfaces;
using Patrimonio.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Patrimonio.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {

        private readonly PatrimonioContext ctx;

        public UsuarioRepository(PatrimonioContext appContext)
        {
            ctx = appContext;
        }

        public Usuario Login(string email, string senha)
        {
            var usuario = ctx.Usuarios.FirstOrDefault(u => u.Email == email);

            if (usuario != null)
            {
                if (usuario.Senha.Length != 60 && usuario.Senha[0].ToString() != "$")
                {
                    string senhaHash = Criptografia.gerarHash(senha);
                    usuario.Senha = senhaHash;
                    ctx.Usuarios.Update(usuario);
                    ctx.SaveChanges();
                    return usuario;
                }
                bool confere = Criptografia.compararSenha(senha, usuario.Senha);
                if (confere)
                {
                    return usuario;
                }
                
                
            }
            return null;
        }
    }
}
