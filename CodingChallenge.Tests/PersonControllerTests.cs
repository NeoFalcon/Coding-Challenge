using AutoMapper;
using CodingChallenge.Controllers;
using CodingChallenge.Data.Models;
using CodingChallenge.Services.Person;
using CodingChallenge.VIewModels;
using Moq;
using System.Collections.Generic;
using Xunit;

namespace CodingChallenge.Tests
{
	public class PersonControllerTests
    {
		private readonly PersonController _personController;

		public PersonControllerTests()
		{
			var mockPersonService = new Mock<IPersonService>();
			mockPersonService.Setup(x => x.GetAllPeople())
				.Returns(new List<Person>
				{
					new Person { Id = 1, FirstName = "Cristiano", LastName = "Ronaldo", PhoneNumber = "987498328" },
					new Person { Id = 1, FirstName = "Leonel", LastName = "Messi", PhoneNumber = "478923748" },
					new Person { Id = 1, FirstName = "Armando", LastName = "Maradona", PhoneNumber = "562435161" }
				});
			mockPersonService.Setup(x => x.GetPerson(30))
				.Returns(new Person { Id = 30, FirstName = "Iker", LastName = "Casillas", PhoneNumber = "+3454545353" });

			var autoMapper = new Mapper(new MapperConfiguration(cfg => cfg.AddProfile<ProjectMapperProfile>()));

			_personController = new PersonController(autoMapper, mockPersonService.Object);
		}

        [Fact]
        public void Index_ReturnsAllPeople()
        {
			var result = _personController.Index();
			Assert.IsAssignableFrom<IEnumerable<PersonViewModel>>(result);
			Assert.Collection(result, item => Assert.Equal("Cristiano", item.FirstName),
									  item => Assert.Equal("Messi", item.LastName),
									  item => Assert.Equal("562435161", item.PhoneNumber));
        }

		[Theory]
		[InlineData("+3454545353")]
		public void Details_ReturnsPerson(string expectedPhoneNumber)
		{
			var actual = _personController.Details(30);
			Assert.IsAssignableFrom<PersonViewModel>(actual);
			Assert.Equal(expectedPhoneNumber, actual.PhoneNumber);
		}
	}
}
