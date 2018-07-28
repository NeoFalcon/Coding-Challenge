using CodingChallenge.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace CodingChallenge.Data
{
	public class DbInitializer
    {
		private static readonly string[] FirstNames = 
		{
			"Tyler", "John", "Indiana", "Rocky", "Anakin", "Walter", "Tony", "Cercei", "Frodo", "Beatrix",
			"Daniel", "Barney", "Sheldon", "Michael", "Oliver", "Edward", "Peter", "Clark", "Bruce", "Joffrey"
		};

		private static readonly string[] LastNames =
		{
			"Durden", "Connor", "Jones", "Balboa", "Skywalker", "White", "Stark", "Lannister", "Bolson", "Kiddo",
			"Larusso", "Stinson", "Cooper", "Scofield", "Atom", "Wood", "Parker", "Kent", "Wayne", "Baratheon"
		};

		private static readonly string[] PhoneNumbers =
		{
			"+34 609 786 502", "606654123", "956789654", "+61879067543", "07658789306", "888987 6589", "00336568907677", "345678902", "065679992", "865789998",
			"2387462 889", "87678558934", "0878 989 1334", "887463785", "7645626567", "778 99787 78", "763674237", "075768917", "0065 87879", "0875552789"
		};

		public static void Seed(CodingChallengeContext context)
		{
			context.Database.Migrate();

			if (context.tblPersons.Any())
			{
				return;   // already seeded
			}

			var random = new Random();
			var noOfPeople = random.Next(1, 20);
			for (var i = 0; i < noOfPeople; i++)
			{
				var person = new Person
				{
					FirstName = FirstNames[random.Next(0, FirstNames.Length - 1)],
					LastName = LastNames[random.Next(0, LastNames.Length - 1)],
					PhoneNumber = PhoneNumbers[random.Next(0, PhoneNumbers.Length - 1)]
				};

				context.tblPersons.Add(person);
			}
			
			context.SaveChanges();
		}
	}
}
