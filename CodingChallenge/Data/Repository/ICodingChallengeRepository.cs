using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CodingChallenge.Data.Repository
{
	public interface ICodingChallengeRepository<TEntity> where TEntity : class
	{
		TEntity GetById(int id);
		int Insert(TEntity model);
		int Update(TEntity model);
		int Delete(TEntity model);
		IList<TEntity> Table();
	}
}
