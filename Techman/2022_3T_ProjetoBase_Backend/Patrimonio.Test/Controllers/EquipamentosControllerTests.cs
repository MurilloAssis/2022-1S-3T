using Microsoft.AspNetCore.Mvc;
using Moq;
using Patrimonio.Controllers;
using Patrimonio.Domains;
using Patrimonio.Interfaces;
using Patrimonio.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Patrimonio.Test.Controllers
{
    public class EquipamentosControllerTests
    {
        [Fact]
        public void Deve_Retornar_Equipamentos()
        {
            List<Equipamento> listaEquipamentos = new List<Equipamento>();
            var fakeRepo = new Mock<IEquipamentoRepository>();

            fakeRepo.Setup(x => x.Listar())
                .Returns(listaEquipamentos);

            var controller = new EquipamentosController(fakeRepo.Object);

            var resultado = controller.GetEquipamentos();

            Assert.IsType<OkObjectResult>(resultado);
        }

        [Fact]
        public void Deve_Retornar_Equipamento_Por_Id()
        {
            Equipamento equip = new Equipamento();
            var fakeRepo = new Mock<IEquipamentoRepository>();

            fakeRepo.Setup(x => x.BuscarPorID(It.IsAny<int>()))
                .Returns(equip);

            var controller = new EquipamentosController(fakeRepo.Object);

            var resultado = controller.GetEquipamento(1);

            Assert.IsType<OkObjectResult>(resultado);
        }

        
    }
}
