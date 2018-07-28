using System.Collections.Generic;
using System.Threading.Tasks;

namespace CodingChallenge.Services.Person
{
	public interface IPersonService
    {
		int AddPerson(Data.Models.Person person);
		int UpdatePerson(Data.Models.Person person);
		int DeletePerson(Data.Models.Person person);
		Data.Models.Person GetPerson(int personId);
		IList<Data.Models.Person> GetAllPeople();
    }
}
