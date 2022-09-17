using rh.DTOs;
using rh.Enums;
using rh.Models;

namespace rh.Repositories
{
    public static class FuncionarioRepository
    {
        public static List<FuncionarioModel> Funcionarios {get; set;} = new List<FuncionarioModel> {
            new FuncionarioModel(1,"Fabiano", "admin", EPermissoes.Administrador, 0M)
        };

        public static List<FuncionarioModel> Obter()
        {
            return Funcionarios;
        }

        public static FuncionarioModel ObterPorUsuarioESenha(string nome, string senha)
        {
           return Funcionarios.FirstOrDefault(f => f.Nome == nome && f.Senha == senha);
        }
        
        public static void FuncionarioModel Adicionar(FuncionarioDTO funcionario)
        {
            Funcionarios.Add(new funcionario())
        }
    }
    
}