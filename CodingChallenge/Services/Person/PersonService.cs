using CodingChallenge.Data.Repository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CodingChallenge.Services.Person
{
	public class PersonService : IPersonService
    {
		private readonly ICodingChallengeRepository<Data.Models.Person> _personRepository;

		public PersonService(ICodingChallengeRepository<Data.Models.Person> personRepository)
		{
			_personRepository = personRepository;
		}

		public int AddPerson(Data.Models.Person person)
		{
			return _personRepository.Insert(person);
		}

		public int UpdatePerson(Data.Models.Person person)
		{
			return _personRepository.Update(person);
		}

		public int DeletePerson(Data.Models.Person person)
		{
			return _personRepository.Delete(person);
		}

		public Data.Models.Person GetPerson(int personId)
		{
			return _personRepository.GetById(personId);
		}

		public IList<Data.Models.Person> GetAllPeople()
		{
			return _personRepository.Table();
		}
	}
}
