using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodingChallenge.Data.Repository
{
	public class CodingChallengeRepository<TEntity> : ICodingChallengeRepository<TEntity>
	where TEntity : class
	{
		private readonly DbContext _context;
		private DbSet<TEntity> _entities;

		public CodingChallengeRepository(CodingChallengeContext context)
		{
			_context = context;
		}

		private DbSet<TEntity> Entities
		{
			get { return _entities ?? (_entities = _context.Set<TEntity>()); }
		}

		public TEntity GetById(int id)
		{
			return Entities.Find(id);
		}
		
		public int Insert(TEntity entity)
		{
			Entities.Add(entity);
			return _context.SaveChanges();
		}

		public int Update(TEntity entity)
		{
			_context.Entry(entity).State = EntityState.Modified;
			return _context.SaveChanges();
		}
		
		public int Delete(TEntity entity)
		{
			Entities.Remove(entity);
			return _context.SaveChanges();
		}

		public IList<TEntity> Table()
		{
			return Entities.ToList();
		}
	}
}
