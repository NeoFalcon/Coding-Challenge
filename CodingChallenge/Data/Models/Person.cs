using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CodingChallenge.Data.Models
{
	public class Person
    {
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int Id { get; set; }

		[Required]
		[MaxLength(100)]
		public string FirstName { get; set; }

		[MaxLength(100)]
		public string LastName { get; set; }

		[Required]
		[MaxLength(20)]
		public string PhoneNumber { get; set; }
    }
}
