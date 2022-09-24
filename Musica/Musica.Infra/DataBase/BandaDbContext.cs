using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Musica.Domain.Models;

namespace Musica.Infra.DataBase
{
    public class BandaDbContext : DbContext
    {
        public DbSet<BandaModel> Bandas{ get; set;}
        private readonly IConfiguration _configuration;
        public BandaDbContext (IConfiguration configuration)
        {
            _configuration = configuration;
        }
    }
}

    
