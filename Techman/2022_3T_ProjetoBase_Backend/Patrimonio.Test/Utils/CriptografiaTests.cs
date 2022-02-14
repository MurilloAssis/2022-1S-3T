using Patrimonio.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Xunit;

namespace Patrimonio.Test.Utils
{
    public class CriptografiaTests
    {
        [Fact]
        public void Deve_Retornar_Hash_Em_BCrypt()
        {
            //Arrange
            var senha = Criptografia.gerarHash("12345678");
            var REGEX = new Regex(@"^\$2[ayb]\$.{56}$");

            //Act
            var retorno = REGEX.IsMatch(senha);

            //Assert
            Assert.True(retorno);
        }

        [Fact]
        public void Deve_Retornar_Comparacao_Valida()
        {
            //Arrange
            var senha = "123456789";
            var hashBanco = "$2a$11$ZXsSWG0D0cidOssokWSbee9lsd2Zwh/sKMLnGOcmcXu2exnBkUa3W";

            //Act
            var comparacao = Criptografia.compararSenha(senha, hashBanco);

            //Assert
            Assert.True(comparacao);

        }
    }
}
