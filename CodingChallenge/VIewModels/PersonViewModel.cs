using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CodingChallenge.VIewModels
{
    public class PersonViewModel
    {
		public int? Id { get; set; }

		[MaxLength(100)]
		[Display(Name = "First Name")]
		[Required(ErrorMessage = "Please enter a first name")]
		public string FirstName { get; set; }

		[MaxLength(100)]
		[Display(Name = "Last Name")]
		public string LastName { get; set; }

		[MaxLength(20)]
		[Display(Name = "Phone Number")]
		[Required(ErrorMessage = "Please enter a phone number")]
		[Phone(ErrorMessage = "Please enter a valid phone number")]
		public string PhoneNumber { get; set; }
	}
}
