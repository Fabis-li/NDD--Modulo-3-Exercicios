using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Musica.Domain.Models;
using Musica.Infra.DataBase.Mappings;

namespace Musica.Infra.DataBase
{
    public class BandaDbContext : DbContext
    {

        
        private readonly IConfiguration _configuration;
        public BandaDbContext (IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public DbSet<BandaModel> Bandas{ get; set;}

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            base.OnConfiguring(options);

            options.UseSqlServer(_configuration.GetConnectionString("ConexaoBanco"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new BandaMap());
        }
    }
}

    
