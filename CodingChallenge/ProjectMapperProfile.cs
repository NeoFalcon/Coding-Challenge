using AutoMapper;
using CodingChallenge.Data.Models;
using CodingChallenge.VIewModels;

namespace CodingChallenge
{
	public class ProjectMapperProfile : Profile
	{
		public ProjectMapperProfile()
		{
			CreateMap<PersonViewModel, Person>();
			CreateMap<Person, PersonViewModel>();
		}
	}
}
