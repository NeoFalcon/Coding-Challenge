using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using CodingChallenge.Data.Models;
using CodingChallenge.Services.Person;
using CodingChallenge.VIewModels;
using AutoMapper;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Text;

namespace CodingChallenge.Controllers
{
	[Produces("application/json")]
    [Route("api/[controller]")]
    public class PersonController : Controller
    {
		private readonly IMapper _mapper;
        private readonly IPersonService _personService;

		public PersonController(IMapper mapper,
			IPersonService personService)
        {
			_mapper = mapper;
            _personService = personService;
        }

        [HttpGet("[action]")]
        public IEnumerable<PersonViewModel> Index()
        {
			var people = _personService.GetAllPeople();
			var viewModelList = _mapper.Map<IEnumerable<Person>, IEnumerable<PersonViewModel>>(people);
			return viewModelList;
        }

        [HttpGet("[action]")]
        public PersonViewModel Details(int personId)
        {
            var person = _personService.GetPerson(personId);
			var viewModel = _mapper.Map<Person, PersonViewModel>(person);
            return viewModel;
        }

        [HttpPut("[action]")]
        public string Update([FromBody] PersonViewModel viewModel)
        {
			if (ModelState.IsValid)
			{
				var person = _mapper.Map<PersonViewModel, Person>(viewModel);
				_personService.UpdatePerson(person);

				return string.Empty;
			}

			return FormatValidationErrors(ModelState.Values);
        }

        [HttpPost("[action]")]
        public string Add([FromBody] PersonViewModel viewModel)
        {
			if (ModelState.IsValid)
			{
				var person = _mapper.Map<PersonViewModel, Person>(viewModel);
				_personService.AddPerson(person);

				return string.Empty;
			}

			return FormatValidationErrors(ModelState.Values);
        }

        [HttpDelete("[action]")]
        public void Delete(int personId)
        {
            var person = _personService.GetPerson(personId);
			_personService.DeletePerson(person);
        }

		private string FormatValidationErrors(ModelStateDictionary.ValueEnumerable modelStateValues)
		{
			var result = new StringBuilder();
			foreach (var value in modelStateValues)
			{
				foreach (var error in value.Errors)
				{
					result.Append(error.ErrorMessage);
					result.Append(". ");
				}
			}

			return result.ToString();
		}
    }
}