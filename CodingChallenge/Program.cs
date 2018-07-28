using System;
using CodingChallenge.Data;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace CodingChallenge
{
	public class Program
    {
        public static void Main(string[] args)
        {
			var host = BuildWebHost(args);

			using (var scope = host.Services.CreateScope())
			{
				var services = scope.ServiceProvider;
				try
				{
					var context = services.GetRequiredService<CodingChallengeContext>();
					DbInitializer.Seed(context);
				}
				catch (Exception exc)
				{
					var logger = services.GetRequiredService<ILogger<Program>>();
					logger.LogError(exc, "An error occurred while seeding the database");
				}
			}

			host.Run();
		}

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
