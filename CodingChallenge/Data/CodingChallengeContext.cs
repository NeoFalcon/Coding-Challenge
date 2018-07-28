using CodingChallenge.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace CodingChallenge.Data
{
	public class CodingChallengeContext : DbContext
	{
		public CodingChallengeContext(DbContextOptions<CodingChallengeContext> options)
			: base(options)
		{
			Database.Migrate();
		}

		public DbSet<Person> tblPersons { get; set; }
	}
}
